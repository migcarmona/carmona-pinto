import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type Anexo = {
  url: string;
  filename: string;
};

type OrcamentoPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  tipoObra?: string;
  localidade?: string;
  mensagem?: string;
  anexos?: Anexo[];
  // Honeypot field: real visitors never fill this in.
  website?: string;
};

const MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request): Promise<NextResponse> {
  let payload: OrcamentoPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  // Bots fill every field, including ones hidden from real users.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const nome = payload.nome?.trim();
  const email = payload.email?.trim();
  const tipoObra = payload.tipoObra?.trim();
  const localidade = payload.localidade?.trim();
  const telefone = payload.telefone?.trim();
  const mensagem = payload.mensagem?.trim();
  const anexos = Array.isArray(payload.anexos) ? payload.anexos : [];

  if (!nome || !email || !tipoObra || !localidade) {
    return NextResponse.json(
      { error: "Preenche o nome, email, tipo de obra e localidade." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não está configurada.");
    return NextResponse.json(
      { error: "O envio de orçamentos está temporariamente indisponível." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const attachments: { filename: string; content: Buffer }[] = [];
  let totalBytes = 0;

  for (const anexo of anexos) {
    if (!anexo?.url || !anexo?.filename) continue;

    const response = await fetch(anexo.url);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Não foi possível obter o ficheiro "${anexo.filename}".` },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    totalBytes += buffer.byteLength;
    if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: "Os anexos excedem o limite de 20MB no total." },
        { status: 400 }
      );
    }

    attachments.push({ filename: anexo.filename, content: buffer });
  }

  const subject = `Novo Orçamento - ${nome} - ${tipoObra} - ${localidade}`;

  const rows: [string, string][] = [
    ["Nome", nome],
    ["Email", email],
    ["Telefone", telefone || "—"],
    ["Tipo de obra", tipoObra],
    ["Localidade", localidade],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #232927; line-height: 1.6;">
      <h2 style="color: #167577;">Novo pedido de orçamento</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 4px 12px 4px 0; font-weight: bold; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 4px 0;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      ${
        mensagem
          ? `<p style="margin-top: 16px;"><strong>Descrição da obra:</strong><br/>${escapeHtml(mensagem).replace(/\n/g, "<br/>")}</p>`
          : ""
      }
      ${
        attachments.length > 0
          ? `<p style="margin-top: 16px;"><strong>Anexos:</strong> ${attachments.map((a) => escapeHtml(a.filename)).join(", ")}</p>`
          : ""
      }
    </div>
  `;

  const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `Orçamentos C&P <${fromAddress}>`,
    to: siteConfig.contacts.email,
    replyTo: email,
    subject,
    html,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    console.error("Erro ao enviar email via Resend:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar o pedido. Tenta novamente." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

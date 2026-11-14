"use client";

import { useRef, useState } from "react";
import { upload } from "@vercel/blob/client";

const tiposDeObra = [
  "Construção em LSF",
  "Remodelação",
  "Reabilitação de edifício",
  "Obras gerais",
  "Compra ou venda de imóvel",
  "Outro",
];

const MAX_TOTAL_BYTES = 20 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = ".pdf,.jpg,.jpeg,.png,.webp,.zip,.dwg";

type Status = "idle" | "submitting" | "success" | "error";

export function OrcamentoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  function handleFilesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const total = selected.reduce((sum, file) => sum + file.size, 0);

    if (total > MAX_TOTAL_BYTES) {
      setErrorMessage("Os ficheiros selecionados ultrapassam o limite de 20MB no total.");
      event.target.value = "";
      setFiles([]);
      return;
    }

    setErrorMessage(null);
    setFiles(selected);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const anexos = [];
      for (const file of files) {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/orcamento/upload",
        });
        anexos.push({ url: blob.url, filename: file.name });
      }

      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.get("nome"),
          email: formData.get("email"),
          telefone: formData.get("telefone"),
          tipoObra: formData.get("tipoObra"),
          localidade: formData.get("localidade"),
          mensagem: formData.get("mensagem"),
          website: formData.get("website"),
          anexos,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Não foi possível enviar o pedido.");
      }

      setStatus("success");
      setFiles([]);
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ocorreu um erro inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-brand/30 bg-brand/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-charcoal">Pedido enviado com sucesso!</h3>
        <p className="mt-2 text-slate-600">
          Obrigado pelo contacto. A nossa equipa vai analisar o seu pedido e entraremos em
          contacto brevemente.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-brand text-brand-dark px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-brand-dark hover:text-white"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field - hidden from real visitors, bots tend to fill every field. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-charcoal">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            disabled={isSubmitting}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-charcoal">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          />
        </div>

        <div>
          <label htmlFor="tipoObra" className="block text-sm font-medium text-charcoal">
            Tipo de obra *
          </label>
          <select
            id="tipoObra"
            name="tipoObra"
            required
            disabled={isSubmitting}
            defaultValue=""
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          >
            <option value="" disabled>
              Seleciona uma opção
            </option>
            {tiposDeObra.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="localidade" className="block text-sm font-medium text-charcoal">
            Localidade da obra *
          </label>
          <input
            id="localidade"
            name="localidade"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Ex: Évora"
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-charcoal">
          Descrição da obra
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          disabled={isSubmitting}
          placeholder="Conta-nos um pouco mais sobre o projeto: área, estado atual, prazo desejado..."
          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
        />
      </div>

      <div>
        <label htmlFor="anexos" className="block text-sm font-medium text-charcoal">
          Anexar projeto(s)
        </label>
        <input
          id="anexos"
          name="anexos"
          type="file"
          multiple
          accept={ACCEPTED_EXTENSIONS}
          onChange={handleFilesChange}
          disabled={isSubmitting}
          className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-brand-dark file:px-4 file:py-2.5 file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-white hover:file:bg-brand"
        />
        <p className="mt-2 text-xs text-slate-500">
          PDF, imagens, DWG ou ZIP — até 20MB no total.
          {files.length > 0 && ` (${files.length} ficheiro${files.length > 1 ? "s" : ""} selecionado${files.length > 1 ? "s" : ""})`}
        </p>
      </div>

      {errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "A enviar..." : "Pedir Orçamento"}
      </button>
    </form>
  );
}

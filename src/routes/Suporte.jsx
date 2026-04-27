import { useState } from "react";

const Suporte = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "",
    assunto: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Formulário enviado com sucesso! ");
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      plano: "",
      assunto: "",
    });
    setMensagem("Formulário limpo com sucesso!");
  };

  return (
    <section className="min-h-[70vh] bg-[#EBEBDF]/15 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-2">
        
        <div className="rounded-3xl border border-[#A8C2E0] bg-white p-8 shadow-xl">
          <h1 className="mb-2 text-3xl font-bold text-[#EA631B]">
            Central de Suporte
          </h1>
          <p className="mb-6 text-gray-600">
            Envie sua dúvida, sugestão ou problema e nossa equipe da Health Plus
            vai analisar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-[#EA631B]">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="w-full rounded-2xl border border-[#A8C2E0] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#EA631B]">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className="w-full rounded-2xl border border-[#A8C2E0] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#EA631B]">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className="w-full rounded-2xl border border-[#A8C2E0] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#EA631B]">
                Você já possui uma conta?
              </label>
              <select
                name="plano"
                value={formData.plano}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#A8C2E0] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              >
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#EA631B]">
                Assunto
              </label>
              <textarea
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                rows="5"
                placeholder="Escreva qual é o assunto do seu atendimento"
                className="w-full resize-none rounded-2xl border border-[#A8C2E0] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-full bg-[#EA631B] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#A8C2E0] hover:text-[#EBEBDF]"
              >
                Enviar
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-[#EA631B] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#A8C2E0] hover:text-[#EBEBDF]"
              >
                Limpar
              </button>
            </div>

            {mensagem && (
              <p className="pt-2 font-medium text-[#EA631B]">{mensagem}</p>
            )}
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-[#A8C2E0] bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-[#EA631B]">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Como acompanho meu desempenho nas partidas online?
                </h3>
                <p className="mt-1 text-gray-600">
                  Você pode ver suas estatísticas no perfil, incluindo vitórias, derrotas e ranking.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Como subir de nível mais rápido no jogo?
                </h3>
                <p className="mt-1 text-gray-600">
                  Complete missões diárias, participe de eventos e jogue com frequência.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Como adicionar e jogar com amigos?
                </h3>
                <p className="mt-1 text-gray-600">
                  Use o sistema de amigos pelo nome ou ID e convide para partidas.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Onde posso alterar minhas configurações de conta?
                </h3>
                <p className="mt-1 text-gray-600">
                  Acesse o menu de configurações dentro do perfil do jogador.
                </p>
              </div>
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Como recuperar minha senha ou trocar meu e-mail?
                </h3>
                <p className="mt-1 text-gray-600">
                  Utilize a opção “esqueci minha senha” ou edite seus dados na conta.
                </p>
              </div>
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#EA631B]">
                  Utilize a opção “esqueci minha senha” ou edite seus dados na conta.
                </h3>
                <p className="mt-1 text-gray-600">
                  Verifique sua internet, feche apps em segundo plano ou troque de servidor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suporte;

const Error = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#EBEBDF]/20 px-6 py-12">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-xl border border-[#A8C2E0] p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#A8C2E0] text-white text-3xl font-bold shadow-md">
          404
        </div>

        <h1 className="text-4xl font-extrabold text-[#83afe1] mb-3">
          Erro 404
        </h1>

        <h2 className="text-2xl font-semibold text-[#A8C2E0]mb-4">
          Página não encontrada
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          Sentimos muito, mas a página que você está procurando não foi encontrada.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block rounded-full bg-[#EA631B] px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-[#A8C2E0] hover:text-[#EA631B]"
          >
            Voltar para a Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;

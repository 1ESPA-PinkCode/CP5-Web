import { Link } from "react-router-dom";

export default function Home() {
  return (

    
    <main className="flex-grow">

      <section
        className="relative text-alabaster text-center bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('./src/assets/foto.hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 py-24 px-6">
          <span className="inline-block mb-4 px-4 py-1 border border-carrotorange text-carrotorange text-xs font-bold uppercase tracking-widest rounded-full">
            Bem-vindo à StartZone
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-alabaster">
            Sua próxima aventura{" "}
            <span className="text-carrotorange">começa aqui.</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-alabaster/80 max-w-xl mx-auto">
            Os melhores jogos, os melhores preços. Entre no jogo e monte sua
            coleção agora.
          </p>

          <Link
            to="/produtos"
            className="inline-block mt-8 px-8 py-4 bg-carrotorange text-alabaster font-bold text-lg rounded-full hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Ver Jogos 
          </Link>
        </div>
      </section>

      <section className="bg-alabaster text-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Por que escolher a StartZone?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Tudo que um gamer precisa em um só lugar!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-carrotorange rounded-full mx-auto mb-4">
              <i className="fa-solid fa-gamepad text-alabaster text-2xl"></i>
            </div>
            <h3 className="font-black text-lg text-gray-900">Catálogo Enorme</h3>
            <p className="mt-2 text-sm text-gray-500">
              Centenas de títulos dos maiores lançamentos e clássicos.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-carrotorange rounded-full mx-auto mb-4">
              <i className="fa-solid fa-tag text-alabaster text-2xl"></i>
            </div>
            <h3 className="font-black text-lg text-gray-900">Melhores Preços</h3>
            <p className="mt-2 text-sm text-gray-500">
              Ofertas exclusivas e promoções toda semana para você economizar.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-carrotorange rounded-full mx-auto mb-4">
              <i className="fa-solid fa-bolt text-alabaster text-2xl"></i>
            </div>
            <h3 className="font-black text-lg text-gray-900">Entrega Rápida</h3>
            <p className="mt-2 text-sm text-gray-500">
              Receba sua chave digital ou físico no menor tempo possível.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-carrotorange rounded-full mx-auto mb-4">
              <i className="fa-solid fa-shield-halved text-alabaster text-2xl"></i>
            </div>
            <h3 className="font-black text-lg text-gray-900">Compra Segura</h3>
            <p className="mt-2 text-sm text-gray-500">
              Pagamento protegido e suporte dedicado para gamers como você.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-carrotorange py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            O que nossa comunidade diz?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            Gamers que já entraram na StartZone não saem mais!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/70 rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow">
            <p className="text-gray-700 text-sm leading-relaxed">
              "Comprei meu primeiro jogo na StartZone e foi incrível! Preço justo
              e recebi o código na hora. Virei cliente fiel!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full bg-lightblue flex items-center justify-center">
                <i className="fa-solid fa-user text-alabaster text-sm"></i>
              </div>
              <div>
                <p className="font-black text-sm text-gray-900">Luiza Franco</p>
                <p className="text-xs text-gray-500">Cliente desde 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow">
            <p className="text-gray-700 text-sm leading-relaxed">
              "O catálogo é absurdo! Encontrei jogos que nem sabia que existiam e
              ainda aproveitei uma promoção incrível. Recomendo demais!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full bg-lightblue  flex items-center justify-center">
                <i className="fa-solid fa-user text-alabaster text-sm"></i>
              </div>
              <div>
                <p className="font-black text-sm text-gray-900">Lara Mofid</p>
                <p className="text-xs text-gray-500">Cliente desde 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow">
            <p className="text-gray-700 text-sm leading-relaxed">
              "Suporte top, entrega rápida e preços que não encontro em nenhum
              outro lugar. A StartZone é minha loja oficial de games!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full bg-lightblue flex items-center justify-center">
                <i className="fa-solid fa-user text-alabaster text-sm"></i>
              </div>
              <div>
                <p className="font-black text-sm text-gray-900">Roberta Moreira</p>
                <p className="text-xs text-gray-500">Cliente desde 2024</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-alabaster py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Pronto para começar? 
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Explore nosso catálogo e encontre o jogo perfeito para você agora
            mesmo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="flex items-center justify-center gap-4 text-carrotorange text-5xl">
          </div>

          <Link
            to="/produtos"
            className="inline-block px-10 py-4 bg-carrotorange text-alabaster font-bold text-lg rounded-full hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Ver Todos os Jogos
          </Link>

          <p className="text-sm text-gray-400">
            Mais de 100 títulos disponíveis. Novidades toda semana!
          </p>
        </div>
      </section>

    </main>
  );
}
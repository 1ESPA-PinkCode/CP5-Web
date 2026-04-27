import { useState } from "react";
import Card from "../components/Card";

import marioImg from "../assets/mario.jpeg";
import gtaImg from "../assets/gta.jpeg";
import zeldaImg from "../assets/zelda.jpeg";
import reddead from "../assets/reddead.jpeg";
import minecraftImg from "../assets/minecraft.jpeg";
import cyberpunkImg from "../assets/cyberpunk.jpeg";
import fifaImg from "../assets/fifa.jpeg";
import godofwarImg from "../assets/godofwar.jpeg";

const products = [
  {
    id: 1,
    title: "Super Mario Odyssey",
    platform: "Nintendo Switch",
    category: "Aventura",
    price: 199.90,
    originalPrice: 249.90,
    rating: 4.9,
    reviews: 3421,
    image: marioImg,
    badge: "Mais Vendido",
    description: "Embarque numa jornada épica com Mario para resgatar a Princesa Peach de Bowser.",
    inStock: true,
  },
  {
    id: 2,
    title: "GTA V",
    platform: "PlayStation / Xbox / PC",
    category: "Ação",
    price: 89.90,
    originalPrice: 149.90,
    rating: 4.8,
    reviews: 12540,
    image: gtaImg,
    badge: "Oferta",
    description: "Explore o vasto mundo aberto de Los Santos em uma das maiores aventuras do crime.",
    inStock: true,
  },
  {
    id: 3,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    category: "RPG",
    price: 249.90,
    originalPrice: null,
    rating: 4.9,
    reviews: 8900,
    image: zeldaImg,
    badge: "Premiado",
    description: "Um mundo aberto de tirar o fôlego, cheio de segredos, puzzles e batalhas épicas.",
    inStock: true,
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    platform: "PlayStation / Xbox / PC",
    category: "Ação",
    price: 129.90,
    originalPrice: 199.90,
    rating: 4.9,
    reviews: 9780,
    image: reddead,
    badge: "Oferta",
    description: "Uma história épica de honra e lealdade no amanhecer da América moderna.",
    inStock: true,
  },
  {
    id: 5,
    title: "Minecraft",
    platform: "Multiplataforma",
    category: "Sandbox",
    price: 99.90,
    originalPrice: null,
    rating: 4.7,
    reviews: 25600,
    image: minecraftImg,
    badge: null,
    description: "Construa, explore e sobreviva em um mundo gerado proceduralmente sem limites.",
    inStock: true,
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    platform: "PlayStation / Xbox / PC",
    category: "RPG",
    price: 149.90,
    originalPrice: 199.90,
    rating: 4.6,
    reviews: 7340,
    image: cyberpunkImg,
    badge: "Oferta",
    description: "Uma aventura de RPG de ação ambientada em Night City, metrópole do futuro.",
    inStock: true,
  },
  {
    id: 7,
    title: "FIFA 24",
    platform: "PlayStation / Xbox / PC",
    category: "Esporte",
    price: 179.90,
    originalPrice: 299.90,
    rating: 4.2,
    reviews: 4120,
    image: fifaImg,
    badge: null,
    description: "O futebol mais realista com todos os seus clubes e ligas favoritos.",
    inStock: false,
  },
  {
    id: 8,
    title: "God of War Ragnarök",
    platform: "PlayStation",
    category: "Ação",
    price: 229.90,
    originalPrice: null,
    rating: 4.9,
    reviews: 6800,
    image: godofwarImg,
    badge: "Premiado",
    description: "Kratos e Atreus enfrentam o Ragnarök e os Nove Reinos nórdicos.",
    inStock: true,
  },
];

const ALL_CATEGORIES = ["Todos", ...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory =
      selectedCategory === "Todos" || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#EBEBDF" }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">Nossos Jogos</h1>
          <p className="mt-1 text-sm text-neutral-500">
            {sorted.length} {sorted.length === 1 ? "produto encontrado" : "produto encontrados"}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center mb-8">
          <input
            type="text"
            placeholder="Buscar jogo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full px-4 py-2 text-sm outline-none min-w-[200px] border border-[#A8C2E0] bg-white text-neutral-900 placeholder:text-neutral-400"
          />

          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-150 rounded-full"
                style={
                  selectedCategory === cat
                    ? { backgroundColor: "#EA631B", color: "#fff", border: "1.5px solid #EA631B" }
                    : { backgroundColor: "#fff", color: "#555", border: "1.5px solid #A8C2E0" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ml-auto rounded-full px-4 py-2 text-sm outline-none border border-[#A8C2E0] bg-white text-neutral-900"
          >
            <option value="default">Ordenar: Padrão</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="rating">Melhor avaliação</option>
          </select>
        </div>

        {sorted.length === 0 ? (
          <p className="text-center mt-20 text-lg text-neutral-400">
            Nenhum jogo encontrado. 😕
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {sorted.map((product) => (
              <Card
                key={product.id}
                imagem={product.image}
                titulo={product.title}
                preco={`R$ ${product.price.toFixed(2)}`}
                precoOriginal={product.originalPrice ? `R$ ${product.originalPrice.toFixed(2)}` : null}
                desconto={
                  product.originalPrice
                    ? `-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%`
                    : null
                }
                tag={!product.originalPrice ? product.badge : null}
                rating={`⭐ ${product.rating}`}
                review={`(${product.reviews.toLocaleString("pt-BR")} avaliações)`}
                adicionarCarrinho={() => {}}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
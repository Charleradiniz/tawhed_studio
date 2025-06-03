import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar_R = () => {
  const projetos = [
    {
      nome: "Banheiro IA",
      src: "/Galeria/Banheiro_IA.jpg",
      url: "/projetos/banheiro-ia",
      desc: "Um projeto elegante e funcional para seu banheiro.",
    },
    {
      nome: "Banheiro",
      src: "/Galeria/Banheiro.jpg",
      url: "/projetos/banheiro",
      desc: "Espaço sofisticado com detalhes em mármore e vidro.",
    },
    {
      nome: "Bebidas",
      src: "/Galeria/Bebidas.jpg",
      url: "/projetos/bebidas",
      desc: "Ambiente ideal para degustar e armazenar vinhos.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projetos.length);
        setFade(true);
      }, 1000); // tempo do fade-out
    }, 8000); // troca a cada 8s

    return () => clearInterval(interval);
  }, [projetos.length]);

  const truncate = (text, maxLength = 50) =>
    text.length > maxLength ? text.slice(0, maxLength) + " [...]" : text;

  const projetoAtual = projetos[current];

  return (
    <div className="fixed top-[120px] right-0 w-[400px] h-screen z-50 border-s bg-white/70 p-6 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h2
          className="text-lg font-semibold mb-4 text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Projetos recentes:
        </h2>
        <Link
          to={projetoAtual.url}
          className={`transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-[300px] h-[300px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col">
            <div className="bg-black text-white text-center py-2 font-semibold text-sm">
              {projetoAtual.nome}
            </div>
            <img
              src={projetoAtual.src}
              alt={projetoAtual.nome}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-3 text-sm text-gray-700 flex-1 flex items-center">
              {truncate(projetoAtual.desc)}
            </div>
          </div>
        </Link>
      </div>

      {/* Imagem fixa na parte inferior da sidebar */}
      <div className="opacity-50 mt-8 mb-[100px]">
        <img
          src="/Tawhed_BW.png"
          alt="Imagem Tawhed BW"
          className="h-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Sidebar_R;

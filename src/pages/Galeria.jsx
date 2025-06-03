import React from "react";
import { Link } from "react-router-dom";

const Galeria = () => {
  const projetos = [
    { nome: "Banheiro IA", src: "/Galeria/Banheiro_IA.jpg", url: "/projetos/banheiro-ia" },
    { nome: "Banheiro", src: "/Galeria/Banheiro.jpg", url: "/projetos/banheiro" },
    { nome: "Bebidas", src: "/Galeria/Bebidas.jpg", url: "/projetos/bebidas" },
    { nome: "Jardim", src: "/Galeria/Jardim.jpg", url: "/projetos/jardim" },
    { nome: "Sala", src: "/Galeria/Sala.jpg", url: "/projetos/sala" },
  ];

  return (
    <div className="min-h-screen bg-white/50 px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map(({ nome, src, url }, index) => (
          <Link
            key={index}
            to={url}
            aria-label={`Ir para o projeto ${nome}`}
            tabIndex={0}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out group"
            title={nome}
          >
            <img
              src={src}
              alt={nome}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold text-center px-4">
                {nome}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galeria;

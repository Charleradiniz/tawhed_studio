import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Sidebar_L from "./components/Sidebar_L.jsx";
import Sidebar_R from "./components/Sidebar_R.jsx";

import HomePage from "./pages/HomePage";
import Galeria from "./pages/Galeria";
import Time from "./pages/Time.jsx";
import Sobre from "./pages/Sobre.jsx";

// Importar as páginas dos projetos
import BanheiroIA from "./pages/projetos/banheiro-ia.jsx";
import Banheiro from "./pages/projetos/banheiro.jsx";
import Bebidas from "./pages/projetos/bebidas.jsx";
import Jardim from "./pages/projetos/jardim.jsx";
import Sala from "./pages/projetos/sala.jsx";
import Entramos_contato from "./pages/Entramos_Contato.jsx";

const imagensFundo = [
  "/Galeria/Banheiro_IA.jpg",
  "/Galeria/Banheiro.jpg",
  "/Galeria/Bebidas.jpg",
  "/Galeria/Jardim.jpg",
  "/Galeria/Sala.jpg",
];

const App = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagensFundo.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>

      <Router>
        <div className="relative min-h-screen overflow-hidden">
          {imagensFundo.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[8000ms] ease-in-out ${
                i === indice ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                zIndex: -10,
                animation: i === indice ? "zoomInOut 8s ease-in-out infinite" : "none",
              }}
            />
          ))}

          <Header />
          <Sidebar_L />
          <Sidebar_R />
          <div className="pt-[120px] pl-[400px] pr-[400px] bg-white/20 min-h-screen relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/time" element={<Time />} />
              <Route path="/entramos_contato" element={<Entramos_contato />} />

              {/* Rotas dos projetos */}
              <Route path="/projetos/banheiro-ia" element={<BanheiroIA />} />
              <Route path="/projetos/banheiro" element={<Banheiro />} />
              <Route path="/projetos/bebidas" element={<Bebidas />} />
              <Route path="/projetos/jardim" element={<Jardim />} />
              <Route path="/projetos/sala" element={<Sala />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;

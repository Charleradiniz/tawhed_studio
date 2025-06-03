import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[118px] z-50 bg-white/70">
      <nav className="h-full w-auto mx-[400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-10 py-10">
        
        {/* Primeira coluna: logo centralizado */}
        <div className="flex justify-center items-center">
          <Link
            to="/sobre"
            className="text-4xl sm:text-5xl text-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tawhed Studio
          </Link>
        </div>

        {/* Segunda coluna: espaço vazio para manter o gap */}
        <div className="hidden sm:flex justify-center items-center"></div>

        {/* Terceira coluna: menu alinhado e centralizado */}
        <div className="flex justify-center items-center">
          <ul
            className="flex space-x-6 text-base font-medium text-black"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              <Link
                to="/sobre"
                className="px-3 py-2 rounded-md transition duration-200 hover:underline hover:text-neutral-700"
              >
                Página inicial
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className="px-3 py-2 rounded-md transition duration-200 hover:underline hover:text-neutral-700"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/admin/login"
                className="px-3 py-2 rounded-md transition duration-200 hover:underline hover:text-neutral-700"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

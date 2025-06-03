import React from "react";
import { Link } from "react-router-dom";

const Sidebar_L = () => {
  return (
    <div className="fixed top-[120px] left-0 w-[400px] h-screen z-50 flex flex-col justify-between border-e bg-white/70">
      <div className="px-4 py-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        <ul className="mt-6 space-y-1">
          <li>
            <Link
              to="/sobre"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              to="/time"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Time
            </Link>
          </li>

          <li>
            <Link
              to="/entramos_contato"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Gostaria de que entrássemos em contato?
            </Link>
          </li>
        </ul>
      </div>

      {/* Rodapé com perfil e ícones sociais */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-4 bg-white/70">

        <div className="flex justify-center gap-20">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/tawhed.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 11-7.9 1.26 4 4 0 017.9-1.26z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.5v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.8V24h-5v-7.4c0-1.8-.03-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24h-5V8z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:tawhedstudio@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0l-4 4m4-4l-4-4m12 4l4-4m-4 4l4 4"
              />
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_L;

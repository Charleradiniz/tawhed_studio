import React from "react";

const textoLorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse varius enim in eros elementum tristique. 
Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
`;

const BanheiroIA = () => {
  const textos = Array(5).fill(textoLorem);

  return (
    <div
      className="min-h-screen bg-white/50 px-4 md:px-10 py-10"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="flex flex-col gap-12 w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-6 h-[420px]`}
          >
            {/* IMAGEM */}
            <div className="w-full md:w-1/2 h-full bg-gray-300 rounded-2xl flex items-center justify-center text-2xl font-semibold">
              IMAGEM
            </div>

            {/* TEXTO */}
            <div className="w-full md:w-1/2 h-full rounded-2xl p-8 flex items-center">
              <p className="text-[2.3rem] text-justify">{textos[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BanheiroIA;

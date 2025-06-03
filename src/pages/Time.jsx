import React from "react";

const textoLorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse varius enim in eros elementum tristique. 
Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
`;

const Time = () => {
  const textos = Array(5).fill(textoLorem);

  return (
    <div
      className="min-h-screen bg-white/50 px-4 md:px-10 py-10"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <h1 className="text-4xl font-semibold mb-8 text-gray-800 text-center h-[100px]">Time</h1>

      <div className="flex flex-col md:flex-row items-start gap-8 max-w-[90rem] mx-auto justify-center">
        {/* Texto ocupa cerca de metade, mas com um pouco menos pra criar espaçamento */}
        <div className="w-full md:w-5/12">
          {textos.map((texto, index) => (
            <p key={index} className="mb-6 leading-relaxed text-gray-700 max-w-full">
              {texto}
            </p>
          ))}
        </div>

        {/* Imagem ocupa cerca de metade */}
        <div className="w-full md:w-5/12 opacity-100 flex">
          <img
            src="charles_avatar.jpg"
            alt="Imagem Tawhed BW"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Time;

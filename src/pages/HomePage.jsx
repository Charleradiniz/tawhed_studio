import React from "react";

const textoLorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse varius enim in eros elementum tristique. 
Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
`;

const Sobre = () => {
  const textos = Array(5).fill(textoLorem);

  return (
    <div
      className="min-h-screen bg-white/50 px-4 md:px-10 py-10"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      
  
    </div>
  );
};

export default Sobre;

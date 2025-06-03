import React from "react";

const textoPrincipal = `
No Tawhed Studio, damos vida a projetos que ainda não saíram do papel.  

Somos especializados em visualização arquitetônica de alto padrão — interiores, fachadas, áreas externas e grandes empreendimentos. Nosso trabalho vai além da estética: entregamos imagens que criam conexão emocional, valorizam o conceito e ajudam arquitetos e incorporadoras a vender com mais impacto.  

Cada cena é cuidadosamente composta para transmitir atmosfera, estilo e autenticidade — como se o espaço já existisse. Buscamos não apenas representar, mas provocar sensação. Fazemos o público sentir o projeto como algo real, próximo, desejável.  

Acreditamos que um bom render é aquele que traduz o pensamento por trás da arquitetura, respeita a luz do ambiente, valoriza os materiais e convida o olhar a permanecer.  

Por isso, atuamos como parceiros estratégicos para profissionais que exigem sofisticação visual, realismo técnico e resultados comerciais.  
`;

const fraseFinal = "Tawhed Studio — visualização que encanta, valoriza e vende.";

const Sobre = () => {
  return (
    <div
      className="min-h-screen bg-white/70 px-4 md:px-10 py-10"
      style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
    >
      <h1 className="text-4xl font-semibold mb-8 text-gray-800 text-center h-[100px]">
        Tawhed Studio
      </h1>

      <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        {/* Texto principal */}
        <div className="text-xl leading-9 text-gray-800 whitespace-pre-line">
          <p className="mb-6">{textoPrincipal}</p>
          <p className="font-bold">{fraseFinal}</p>
        </div>

        {/* Imagem abaixo do texto */}
        <div className="opacity-50">
          <img
            src="/Tawhed_BW.png"
            alt="Imagem Tawhed BW"
            className="h-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sobre;

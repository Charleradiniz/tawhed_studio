import React, { useState } from "react";

const Entramos_contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validar = () => {
    const novosErros = {};

    if (!formData.nome.trim()) novosErros.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      novosErros.email = "Email é obrigatório.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      novosErros.email = "Email inválido.";
    }
    if (!formData.telefone.trim()) novosErros.telefone = "Telefone é obrigatório.";
    if (!formData.mensagem.trim()) novosErros.mensagem = "Mensagem é obrigatória.";

    setErrors(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validar()) return;

    console.log("Dados enviados:", formData);
    setEnviado(true);
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    setErrors({});
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-white/40 backdrop-blur-sm"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
    
      {enviado && (
        <div className="mb-8 px-6 py-4 bg-green-100 text-green-900 rounded-lg shadow-md font-medium">
          Entraremos em contato!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white/80 rounded-2xl shadow-2xl p-12"
        style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 0.1)" }}
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-lg font-semibold text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className={`w-full rounded-xl border border-gray-300 px-5 py-4 text-lg placeholder-gray-400 transition-shadow focus:outline-none focus:ring-4 ${
                errors.nome
                  ? "border-red-500 focus:ring-red-300"
                  : "focus:ring-indigo-300"
              } shadow-sm`}
            />
            {errors.nome && (
              <p className="text-red-600 text-sm mt-2 italic">{errors.nome}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@dominio.com"
              className={`w-full rounded-xl border border-gray-300 px-5 py-4 text-lg placeholder-gray-400 transition-shadow focus:outline-none focus:ring-4 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "focus:ring-indigo-300"
              } shadow-sm`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-2 italic">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="telefone"
              className="block mb-2 text-lg font-semibold text-gray-700"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(xx) xxxx-xxxx ou (xx) xxxxx-xxxx"
              className={`w-full rounded-xl border border-gray-300 px-5 py-4 text-lg placeholder-gray-400 transition-shadow focus:outline-none focus:ring-4 ${
                errors.telefone
                  ? "border-red-500 focus:ring-red-300"
                  : "focus:ring-indigo-300"
              } shadow-sm`}
            />
            {errors.telefone && (
              <p className="text-red-600 text-sm mt-2 italic">{errors.telefone}</p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <label
            htmlFor="mensagem"
            className="block mb-2 text-lg font-semibold text-gray-700"
          >
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva sua mensagem aqui..."
            rows={6}
            className={`w-full rounded-2xl border border-gray-300 px-5 py-5 text-lg placeholder-gray-400 resize-none transition-shadow focus:outline-none focus:ring-4 ${
              errors.mensagem
                ? "border-red-500 focus:ring-red-300"
                : "focus:ring-indigo-300"
            } shadow-sm`}
          />
          {errors.mensagem && (
            <p className="text-red-600 text-sm mt-2 italic">{errors.mensagem}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-200 text-black text-xl font-semibold py-4 rounded-3xl hover:bg-gray-300 transition-shadow shadow-lg"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Entramos_contato;

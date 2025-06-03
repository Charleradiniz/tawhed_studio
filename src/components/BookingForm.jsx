// src/components/BookingForm.jsx
import { useState } from 'react';
import axios from 'axios';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Agendamento criado com sucesso!');
    } catch (err) {
      alert('Erro ao criar agendamento.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md mx-auto p-4"
                                  style={{ fontFamily: "'Pacifico', cursive" }}>
      <input name="name" placeholder="Nome" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <input name="service" placeholder="Serviço" onChange={handleChange} required />
      <button type="submit">Agendar</button>
    </form>
  );
}

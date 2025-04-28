'use client';

import { useState } from 'react';

export default function OrderForm({ product }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Commande envoyée:', formData, product);
    alert('Votre commande a été enregistrée avec succès !');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 bg-gray-100 p-6 rounded-2xl w-full lg:w-1/2"
    >
      <h2 className="text-xl font-bold mb-4">Order This Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 rounded-xl border border-gray-300"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="p-3 rounded-xl border border-gray-300"
      />

      <textarea
        name="address"
        placeholder="Shipping Address"
        value={formData.address}
        onChange={handleChange}
        required
        rows="4"
        className="p-3 rounded-xl border border-gray-300 resize-none"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white p-4 rounded-full mt-4 hover:bg-orange-600 transition-all"
      >
        Buy Now
      </button>
    </form>
  );
}

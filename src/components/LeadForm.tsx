"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In actual implementation, we'll connect this to a webhook or direct to WhatsApp
    window.location.href = "https://wa.me/5511999999999?text=Quero%20entrar%20no%20grupo%20VIP%20de%20acelera%C3%A7%C3%A3o%20Beauty";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="bg-onyx p-8 sm:p-10 brutalist-border relative z-20 w-full max-w-md brutalist-shadow"
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold" />
      
      <h3 className="font-serif text-3xl font-bold mb-2 text-ice">
        Acesso Exclusivo
      </h3>
      <p className="font-sans text-ice/70 mb-8 text-sm uppercase tracking-widest">
        Grupo VIP no WhatsApp
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-ice/50 font-bold block">
            Nome Completo
          </label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20"
            placeholder="Seu nome"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="whatsapp" className="text-xs uppercase tracking-wider text-ice/50 font-bold block">
            WhatsApp
          </label>
          <input 
            type="tel" 
            id="whatsapp" 
            required
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="instagram" className="text-xs uppercase tracking-wider text-ice/50 font-bold block">
            Instagram
          </label>
          <input 
            type="text" 
            id="instagram" 
            required
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20"
            placeholder="@seunome"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-gold text-onyx font-bold uppercase tracking-widest py-5 mt-4 flex items-center justify-center gap-3 brutalist-button"
        >
          Entrar no Grupo
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
}

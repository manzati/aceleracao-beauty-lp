"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitLead } from "@/actions/lead";

export default function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Trigger Meta Pixel Conversion Event
      if (typeof window !== "undefined" && "fbq" in window) {
        (window as unknown as { fbq: (action: string, event: string) => void }).fbq('track', 'Lead');
      }
      window.location.href = "https://chat.whatsapp.com/IHNQeiXvbBg4WaSf4j9Xa3";
    }
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
            name="name"
            required
            disabled={isLoading}
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20 disabled:opacity-50"
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
            name="whatsapp"
            required
            disabled={isLoading}
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20 disabled:opacity-50"
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
            name="instagram"
            required
            disabled={isLoading}
            className="w-full bg-transparent border-b border-ice/20 py-3 text-ice font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ice/20 disabled:opacity-50"
            placeholder="@seunome"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm font-sans">{error}</p>
        )}

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold text-onyx font-bold uppercase tracking-widest py-5 mt-4 flex items-center justify-center gap-3 brutalist-button disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              Processando...
              <Loader2 className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              Entrar no Grupo
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Estratégias de Marketing para atrair clientes qualificados",
  "Treinamento comercial para chegar aos 100k de faturamento",
  "Como contratar, treinar e demitir funcionários",
  "Como criar audiência nas redes sociais"
];

export default function ContentSection() {
  return (
    <section className="bg-ice text-onyx py-24 md:py-32 relative overflow-hidden">
      
      {/* Decorative typographic backdrop */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden hidden md:block select-none">
        <h2 className="text-[20vw] font-serif font-black uppercase leading-none tracking-tighter">O OURO DO MERCADO</h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start border-l-4 border-bordeaux pl-6 md:pl-10"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
              Terça-Feira <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bordeaux to-bordeaux-dark">às 13h</span>
            </h2>
            <p className="font-sans text-xl uppercase font-light tracking-widest text-onyx/70 mb-8 max-w-md">
              O que você aprenderá neste super encontro:
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 font-sans text-lg font-medium"
                >
                  <span className="shrink-0 flex items-center justify-center bg-onyx text-gold p-1 brutalist-shadow-ice">
                    <Check className="w-5 h-5" />
                  </span>
                  <span className="pt-1">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center md:justify-end"
          >
            {/* Videographic Brutalist Container */}
            <div className="relative w-full aspect-square max-w-md bg-onyx brutalist-shadow-ice flex items-center justify-center overflow-hidden border border-ice/10">
               {/* Video looping underneath */}
               <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen grayscale">
                 <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover object-center"
                 >
                    <source src="/assets/video_hero.mp4" type="video/mp4" />
                 </video>
               </div>
               
               {/* Typographic focus overlay */}
               <div className="w-64 h-64 border border-gold rotate-45 flex items-center justify-center p-8 relative z-10 backdrop-blur-[2px]">
                  <div className="w-full h-full border border-ice/50 -rotate-12 flex items-center justify-center bg-onyx/40">
                     <span className="font-serif text-5xl text-gold italic drop-shadow-lg">+100K</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

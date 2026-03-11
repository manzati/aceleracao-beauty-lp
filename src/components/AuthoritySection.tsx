"use client";

import { motion } from "framer-motion";

const authorityItems = [
  "5 milhões gerenciados em anúncios.",
  "Estudou marketing com os maiores nomes do Brasil.",
  "Sócio fundador do Grupo B4.",
  "Reuniu mais de 3.000 donos de salão pelo Brasil.",
  "14 anos no mercado da beleza.",
  "6 anos empreendendo em alta performance.",
  "Faturou mais de 1 milhão apenas com educação nos últimos 12 meses."
];

export default function AuthoritySection() {
  return (
    <section className="bg-onyx text-ice py-24 lg:py-40 relative">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch">
        
        {/* Editorial Text Block (Right side on desktop, but reversed visually by order) */}
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center order-2 lg:order-2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Quem será seu mentor?
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter leading-none">
              Jhon <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-ice/50">Guttyerre</span>
            </h2>

            <ul className="space-y-6 lg:space-y-8 font-sans text-lg lg:text-xl font-light uppercase tracking-wide border-t border-ice/10 pt-8">
               {authorityItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                     <span className="font-serif text-sm font-black text-bordeaux md:text-gold transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                     </span>
                     <span className="group-hover:text-gold transition-colors duration-300">
                        {item}
                     </span>
                  </motion.li>
               ))}
            </ul>
          </motion.div>
        </div>

        {/* Brutalist Image Block (Left side) */}
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 order-1 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-[600px] lg:h-full min-h-[600px] relative bg-bordeaux-dark brutalist-border overflow-hidden group"
          >
             {/* Dramatic black & white / duotone filter overlay via CSS */}
             <div className="absolute inset-0 z-10 bg-onyx mix-blend-color opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
             <div className="absolute inset-0 z-10 bg-gradient-to-t from-onyx via-transparent to-transparent pointer-events-none" />
             
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="/assets/jhon.png" 
               alt="Jhon Guttyerre"
               className="w-full h-full object-cover object-top filter contrast-125 grayscale"
             />
             
             {/* Decorative element */}
             <div className="absolute bottom-6 left-6 z-20 brutalist-border p-4 bg-onyx/90 backdrop-blur-sm">
                <p className="font-serif text-3xl font-bold text-gold italic">14 Anos</p>
                <p className="font-sans text-xs uppercase tracking-widest text-ice/70">De Alta Performance</p>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

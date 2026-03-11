"use client";

import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-onyx py-20 lg:py-0">
      {/* Background Video element overlapping the entire right side or running async */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale pointer-events-none">
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

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full mt-24 lg:mt-0">
        
        {/* Typographic Block */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="inline-block border border-gold px-4 py-1 mb-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-gold">
                Alta Performance
              </span>
            </div>
            
            <h1 className="font-serif leading-[0.9] text-5xl md:text-7xl lg:text-[7.5vw] font-bold text-ice mb-6 tracking-tight uppercase">
              Os bastidores dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark italic pr-2">R$100 mil</span> por mês.
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-ice/80 max-w-xl font-light uppercase tracking-wide">
              Descubra o método exato de aceleração usado por salões e clínicas que dominam o mercado da beleza.
            </p>
          </motion.div>
        </div>

        {/* Lead Form Block */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <LeadForm />
        </div>
      </div>

      {/* Aesthetic brutalist lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ice/20 z-10" />
      <div className="hidden lg:block absolute top-0 left-24 w-[1px] h-full bg-ice/10 z-0" />
    </section>
  );
}

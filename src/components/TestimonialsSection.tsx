"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-ice py-24 md:py-32 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
           <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase text-onyx tracking-tighter">
              Resultados <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bordeaux to-bordeaux-dark italic">
                 Incontestáveis
              </span>
           </h2>
        </motion.div>

        {/* Main Video Testimonial */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl bg-onyx brutalist-shadow border border-ice/10 mb-12 relative group overflow-hidden aspect-video md:aspect-[21/9] flex items-center justify-center"
        >
           <video 
              ref={videoRef}
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onEnded={() => setIsPlaying(false)}
              onClick={toggleVideo}
           >
              <source src="/assets/video_hero.mp4" type="video/mp4" />
           </video>

           {/* Custom BRUTALIST Play Button Overlay */}
           <div 
             className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${isPlaying ? 'opacity-0 group-hover:opacity-100 bg-onyx/40' : 'bg-onyx/60'}`}
           >
              <button 
                className="w-20 h-20 md:w-24 md:h-24 border-2 border-gold flex items-center justify-center brutalist-shadow-ice transition-transform bg-onyx text-gold pointer-events-auto"
                onClick={toggleVideo}
              >
                 {isPlaying ? <Pause className="w-8 h-8 md:w-10 md:h-10" /> : <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-2" />}
              </button>
           </div>
        </motion.div>

        {/* Aggressive Grid / Tension layout for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl mb-24">
           {/* Depoimento 1 */}
           <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-onyx brutalist-shadow aspect-auto overflow-hidden border border-onyx/20"
           >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                 src="/assets/depoimento1.png" 
                 alt="Depoimento 1"
                 className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
           </motion.div>

           {/* Depoimento 2 */}
           <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full bg-onyx brutalist-shadow aspect-auto overflow-hidden border border-onyx/20 md:mt-16"
           >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                 src="/assets/depoimento2.png" 
                 alt="Depoimento 2"
                 className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
           </motion.div>
        </div>

        {/* Giant CTA Button */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full flex justify-center px-4"
        >
           <button 
              onClick={scrollToTop}
              className="w-full max-w-3xl bg-gold text-onyx font-sans font-black text-2xl md:text-4xl uppercase tracking-[0.1em] py-8 md:py-10 flex items-center justify-center gap-6 brutalist-button hover:bg-onyx hover:text-gold transition-colors duration-300 border border-gold"
           >
              Quero Entrar No Grupo
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
           </button>
        </motion.div>

      </div>
    </section>
  );
}

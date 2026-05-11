import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smile, 
  Heart,
  Music,
  Wind,
  Flower2,
  Calendar,
  Sparkles,
  Users,
  Camera
} from "lucide-react";

export default function Edition02() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [revealedJokes, setRevealedJokes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const birthday = new Date("2026-06-08T00:00:00");
    const now = new Date();
    const diff = birthday.getTime() - now.getTime();
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  const toggleJoke = (id: number) => {
    setRevealedJokes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Orange & Green Theme */}
      <div className="flex justify-between items-end border-b-4 border-green-600 pb-4 mb-8">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-green-800">
          <span className="bg-orange-500 text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black]">VOLUMEN 02</span>
          DIARIO EL DORREGO • PIBAS Y PIBES EN EL ALERO • SANTA FE • 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-orange-600">
          AÑO I • Nº 002<br />
          10 DE MAYO DE 2026
        </div>
      </div>

      {/* Masthead */}
      <header id="inicio" className="border-b-[12px] border-orange-500 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 12 }}
          className="absolute -top-10 -right-4 bg-green-500 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-white shadow-[6px_6px_0px_black] z-20"
        >
          ¡JUNIO\nSE VIENE\nCON TODO!
        </motion.div>
        
        <a href="#inicio" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-600 transform rotate-1 skew-x-[-2deg] translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-2xl md:text-5xl font-black tracking-[0.2em] bg-orange-400 text-black translate-y-[-4px] shadow-[4px_4px_0px_black]">
             VOLUMEN 02 
          </div>
        </div>

        {/* Countdown Ribbon */}
        <div className="mt-12 flex justify-center">
          <div className="bg-black text-white px-6 py-3 border-4 border-orange-500 flex items-center gap-4 shadow-[8px_8px_0px_#22c55e]">
            <Calendar className="w-8 h-8 text-orange-400 animate-bounce" />
            <div className="text-left font-black uppercase tracking-tight">
              <span className="text-xs block opacity-60">FALTAN SOLO</span>
              <span className="text-3xl md:text-4xl leading-none text-green-400">{daysLeft ?? "?"} DÍAS</span>
              <span className="text-xs block opacity-60 mt-1">PARA EL CUMPLE DEL ALERO (8 DE JUNIO)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="space-y-16">
        
        {/* Row 1: Chistes y Respuestas (PRIMERO) */}
        <section id="respuestas" className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-4 border-black p-6 md:p-10 shadow-[12px_12px_0px_black] relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500 rotate-45 flex items-end justify-center pb-4">
              <span className="text-white font-black text-xs uppercase -rotate-45">¡NUEVO!</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-none uppercase italic border-b-4 border-black pb-4 flex items-center gap-4">
              <Smile className="w-12 h-12 text-orange-600" /> ¡POR FIN LAS RESPUESTAS!
            </h2>
            <p className="text-xl font-bold mb-8 italic opacity-70">En la edición 01 quedaron muchas dudas... ¡Tocá cada recuadro para descubrir la verdad!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                onClick={() => toggleJoke(1)}
                className="cursor-pointer border-4 border-black p-6 bg-white hover:bg-green-50 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#22c55e] group"
              >
                <p className="font-black text-xl mb-4 leading-tight">1. ¿Cómo sale un perro de una pileta?</p>
                <div className={`overflow-hidden transition-all duration-500 ${revealedJokes[1] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-green-600 font-black uppercase text-3xl border-t-2 border-dashed border-black pt-4">¡MOJADO!</p>
                </div>
                {!revealedJokes[1] && <p className="text-xs uppercase font-black opacity-30 group-hover:opacity-100 animate-pulse text-right"> [ TOCÁ PARA REVELAR ]</p>}
              </div>

              <div 
                onClick={() => toggleJoke(2)}
                className="cursor-pointer border-4 border-black p-6 bg-white hover:bg-green-50 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#22c55e] group"
              >
                <p className="font-black text-xl mb-4 leading-tight">2. ¿Qué le dice un pez a su amigo?</p>
                <div className={`overflow-hidden transition-all duration-500 ${revealedJokes[2] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-green-600 font-black uppercase text-3xl border-t-2 border-dashed border-black pt-4 text-right">NADA... (¡GLU GLU!)</p>
                </div>
                {!revealedJokes[2] && <p className="text-xs uppercase font-black opacity-30 group-hover:opacity-100 animate-pulse"> [ TOCÁ PARA REVELAR ]</p>}
              </div>
            </div>
          </div>
        </section>

        {/* Row 2: Hacer Nacer (SEGUNDO) */}
        <section id="hacer-nacer" className="space-y-10">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -left-4 top-1 w-8 h-full bg-red-800 skew-y-12 z-0"></div>
              <div className="absolute -right-4 top-1 w-8 h-full bg-red-800 -skew-y-12 z-0"></div>
              <div className="relative z-10 bg-red-600 text-white border-4 border-black px-12 py-6 shadow-[10px_10px_0px_black] transform -rotate-1">
                <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-yellow-400 fill-current animate-pulse" />
                <p className="text-3xl md:text-5xl font-serif font-black italic text-center uppercase leading-none drop-shadow-[2px_2px_0px_black]">
                  "Hacer nacer hasta los cien años"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-4 border-black p-8 shadow-[12px_12px_0px_black] max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-8 uppercase italic border-b-2 border-black pb-2 text-green-800">
              EL PRESENTE EN "HACER NACER"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500 p-4 rounded-full border-2 border-black shadow-[4px_4px_0px_black]">
                  <Flower2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl underline decoration-orange-500 decoration-4 underline-offset-4">YOGA PARA TODOS</h3>
                  <p className="text-2xl font-bold leading-tight mt-2 italic">Respiramos hondo, nos estiramos y bajamos un poco la velocidad. El cuerpo también necesita descansar.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-600 p-4 rounded-full border-2 border-black shadow-[4px_4px_0px_black]">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl underline decoration-green-500 decoration-4 underline-offset-4">MÚSICA RELAJANTE</h3>
                  <p className="text-2xl font-bold leading-tight mt-2 italic opacity-80">Notas suaves que nos ayudan a crear y soñar sin ruidos fuertes. Es el sonido de la paz.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 3: Tramas (TERCERO / ÚLTIMO) */}
        <section id="preparativos" className="bg-orange-50 border-[10px] border-black p-4 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white font-black px-8 py-3 uppercase italic text-lg z-10 border-b-4 border-l-4 border-black shadow-lg">
            CENTRAL
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
            {/* Image Container - Big 3:4 */}
            <div className="md:col-span-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500 translate-x-6 translate-y-6"></div>
                <div className="relative border-[10px] border-black bg-white overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/nczpCsvQ/IMG-20260510-WA0014.jpg" 
                    alt="Tramas verdes preparativos cumpleaños Alero" 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                </div>
              </div>
            </div>

            {/* Text and Info */}
            <div className="md:col-span-4 space-y-10">
              <header>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.8] text-black tracking-tighter mb-4">
                  PREPARATIVOS:<br/>EL ALERO CUMPLE
                </h2>
                <div className="h-4 bg-orange-500 w-1/2 rounded-full"></div>
              </header>

              <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_black] transform rotate-1">
                <p className="text-2xl md:text-3xl font-black uppercase italic leading-tight text-green-800">
                  "Estamos preparando todo para el cumpleaños del Alero en Junio. ¡Haciendo tramas en equipo!"
                </p>
              </div>
              
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_black] transform -rotate-1">
                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                  <Wind className="w-8 h-8 text-green-600" /> ¿CÓMO HACEMOS LAS TRAMAS?
                </h3>
                <div className="text-lg font-bold leading-tight space-y-4">
                  <p>¡Es un trabajo en equipo sobre hojas gigantes! Primero mojamos los cuadraditos de madera o los pinceles en la pintura.</p>
                  <p>Para el <span className="text-orange-600 uppercase">Zig-Zag</span> deslizamos la madera pintada sobre el papel. Para los <span className="text-green-600 uppercase">Círculos</span>, presionamos fuerte las maderitas redondas después de pasarlas por la pintura.</p>
                  <p className="border-t-2 border-black/10 pt-2 text-sm italic opacity-70">¡Así llenamos toda la hoja de color y formas!</p>
                </div>
              </div>

              <div className="bg-green-600 text-white border-4 border-black p-8 shadow-[12px_12px_0px_black] transform rotate-2">
                <p className="text-3xl font-black uppercase leading-none mb-4">¡NUESTROS DÍAS!</p>
                <div className="font-bold border-t-2 border-white/40 pt-4 text-base space-y-4">
                  <p className="text-lg">Sábados, Domingos, Miércoles y Jueves.</p>
                  <div className="bg-black/40 p-4 border-l-8 border-yellow-400">
                    <p className="mb-4 uppercase font-black tracking-widest text-yellow-300 text-sm">¿Cómo funcionamos?</p>
                    <ul className="space-y-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-orange-400">●</span>
                        <span><span className="font-black">Miércoles y Jueves:</span> Viene poca gente, por eso el Bazar y las Fábricas no abren.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400">●</span>
                        <span><span className="font-black">Sábados y Domingos:</span> Si hay poca gente, a veces abre el Bazar o alguna Fábrica.</span>
                      </li>
                      <li className="bg-orange-500/30 p-2 border border-orange-400">
                        <span className="text-yellow-400 font-black block mb-1 underline">☀ ¡DÍAS DE SOL!</span>
                        <span>Fines de semana soleados abrimos normal: ¡Bazar, muchas fábricas y Hacer Nacer!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Area */}
      <footer className="mt-20 border-t-[12px] border-black pt-12 text-black flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center gap-8 text-[10px] md:text-base font-black uppercase tracking-widest">
           <span className="bg-green-600 text-white px-3 py-1 shadow-[2px_2px_0px_black] hover:rotate-2 transition-transform">#ELALERO100AÑOS</span>
           <span className="bg-orange-500 text-white px-3 py-1 shadow-[2px_2px_0px_black] hover:-rotate-2 transition-transform">#PIBASYPIBES</span>
           <span className="bg-black text-white px-3 py-1 shadow-[2px_2px_0px_black] hover:rotate-3 transition-transform">#SANTATEFEARTE</span>
        </div>
        
        <div className="text-center w-full max-w-2xl border-t border-black/10 pt-8">
           <Heart className="w-12 h-12 mx-auto text-red-500 mb-4 animate-pulse fill-current" />
           <p className="font-serif italic font-black text-2xl md:text-4xl text-inherit">"Lo que nace del corazón, vive para siempre."</p>
           <p className="mt-4 text-xs font-black uppercase opacity-40">Diario El Dorrego • Edición 10 de Mayo 2026</p>
        </div>
      </footer>
    </div>
  );
}

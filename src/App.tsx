import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Edition07 from "./components/Edition07";
import Edition08 from "./components/Edition08";
import Edition09 from "./components/Edition09";
import { 
  Menu,
  X,
  BookOpen,
  Smile, 
  Heart,
  Star as StarIcon,
  Map as MapIcon,
  Scissors,
  Hand,
  Music,
  Wind,
  Flower2,
  Calendar,
  Sparkles,
  Users,
  Camera,
  PartyPopper,
  Cake,
  Paintbrush,
  Newspaper,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  AudioLines,
  Download,
  Printer
} from "lucide-react";

// --- STYLES ---
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
    
    .paper-texture {
      background-image: url("https://www.transparenttextures.com/patterns/paper.png");
    }

    .ink-bleed {
      text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
    }

    .rough-border {
      border-style: solid;
      border-width: 4px;
      border-image: linear-gradient(to right, black 50%, transparent 50%) 100% 1;
    }

    h1, h2, h3, p, span, div {
      cursor: default;
    }

    /* Zoom Fix for Firefox */
    @-moz-document url-prefix() {
      .zoom-container {
        transform: scale(0.67);
        transform-origin: top center;
        width: 149.25% !important; /* compensate for scale 0.67 (1/0.67) */
        margin-left: -24.625%;
      }
    }

    @media print {
      body, html {
        background: #fff !important;
        margin: 0 !important;
        padding: 0 !important;
        zoom: 100% !important;
      }
      .zoom-container {
        zoom: 100% !important;
        transform: none !important;
        padding: 0 !important;
        display: block !important;
        width: 100% !important;
        margin: 0 !important;
      }
      #btn-menu, [data-html2canvas-ignore="true"], .pdf-download-center {
        display: none !important;
      }
      #printable-area {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      /* Prevent bad breaks */
      p, h1, h2, h3, img, li, section {
        page-break-inside: avoid;
        break-inside: avoid;
      }
    }
  `}} />
);

// --- EDICIÓN 01 ---
function Edition01() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="flex justify-between items-end border-b-4 border-black pb-4 mb-8 text-black">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter">
          <span className="bg-black text-white px-2 py-1 mr-2 inline-block">EDICIÓN ESPECIAL</span>
          HECHO POR PIBAS Y PIBES EN EL ALERO • BARRIO CORONEL DORREGO • SANTA FE • 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase">
          AÑO I • Nº 001<br />
          DISTRIBUCIÓN GRATUITA
        </div>
      </div>

      {/* Masthead */}
      <header id="inicio-ed1" className="border-b-[12px] border-black pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-6 -left-6 bg-yellow-400 border-4 border-black p-4 rounded-full font-black text-xs transform -rotate-12 hidden md:block text-white shadow-[4px_4px_0px_black]"
        >
          ¡EL MEJOR\nLUGAR DEL\nMUNDO!
        </motion.div>
        
        <a href="#inicio-ed1" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-black transform -rotate-1 skew-x-2 translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-2xl md:text-5xl font-black tracking-[0.2em] bg-white text-black translate-y-[-4px]">
            - PRENSA INFANTIL -
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-2xl font-black uppercase tracking-tight">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 shadow-[4px_4px_0px_black]">
            <StarIcon className="w-5 h-5 fill-current" />
            VOZ PROPIA
          </div>
          <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 shadow-[4px_4px_0px_black]">
            <Heart className="w-5 h-5 fill-current" />
            CORAZÓN DE BARRIO
          </div>
          <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 shadow-[4px_4px_0px_black]">
            <Smile className="w-5 h-5 fill-current" />
            SUEÑOS LIBRES
          </div>
        </div>
      </header>

      {/* Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        
        {/* Left Column */}
        <aside className="md:col-span-4 border-r-0 md:border-r-[6px] border-black pr-0 md:pr-10 space-y-14">
          
          <section id="que-es-alero-ed1" className="relative text-black">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-black"></div>
            <h2 className="text-4xl font-black mb-6 leading-none uppercase bg-black text-white p-2 inline-block">
              ¿QUÉ ES UN ALERO?
            </h2>
            <div className="space-y-6 text-xl md:text-2xl leading-tight font-bold">
              <p>
                La palabra "Alero" es relativa de "la ala", por lo que se la relaciona con las alas de una mamá pájaro con las que protege a sus polluelos. También son las extremidades que le permiten volar.
              </p>
              <p>
                El alero de un edificio es esa parte que sobresale de la pared que sirve las veces de refugio del sol abrazador del verano o de la tormenta que anuncia al invierno. Un alero también se usa en países latinoamericanos para hablar de un compañero de aventuras, un amigo.
              </p>
              <p className="bg-yellow-200 text-black shadow-[4px_4px_0px_black] border-2 border-black p-4 transform -rotate-1 italic">
                "El Alero Coronel Dorrego es un espacio donde la contención viene con las personas, el cobijo lo brinda la manta infinita de la poesía y el juego y los amigos... bueno, ahí están esperándonos."
              </p>
            </div>
          </section>

          <section id="historias-risa-ed1" className="border-t-[6px] border-black pt-10 text-black">
            <div className="flex items-center gap-3 mb-6">
              <Smile className="w-10 h-10 text-red-600" />
              <h2 className="text-3xl font-black leading-none uppercase">
                HISTORIAS QUE DAN RISA
              </h2>
            </div>
            <div className="space-y-8 italic text-xl border-4 border-black p-6 bg-blue-50 text-black">
              <div className="border-b-2 border-dashed border-black pb-4">
                <p>— Una vez estaba presentando un truco de magia frente a muchos amigos y de repente la varita salió volando muy alto! Hizo CATAPUMPAMPLUN!</p>
                <p className="text-sm font-black uppercase mt-2 text-right text-red-600">Autor: Ema, 8 años.</p>
              </div>
              <div>
                <p>Un día mi hermanita chiquita, Delfina, apoyó la ropa en la estufa y se prendió fuego. Ese día se derritió su carrito. A pesar de que fue un poco peligroso todos nos reímos mucho! No pongan ropa en la estufa!</p>
                <p className="text-sm font-black uppercase mt-2 text-right text-red-600">Pía y Benja, 6 años ambos.</p>
              </div>
            </div>
          </section>

          <section id="terror-ed1" className="border-t-[6px] border-black pt-10 text-black">
            <div className="bg-black text-white p-2 mb-6 inline-block">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                UNA HISTORIA DE TERROR EN EL BARRIO
              </h2>
            </div>
            <div className="text-lg font-bold leading-tight space-y-4 border-l-8 border-black pl-4 italic">
              <p>
                Érase una vez un chico y una chica que fueron al bosque y no tenían dónde dormir. Por suerte, encontraron una cabaña abandonada. Adentro, no había luz así que estaban muy asustados y allí tuvieron que quedarse hasta la mañana.
              </p>
              <p>
                El chico cocinaba carne con papas y la chica cuidaba de su bebé cuando se escuchaban ruidos y gritos, llantos y disparos que asustaban a la chica.
              </p>
            </div>
          </section>

          <section id="cristina-solis-ed1" className="border-t-[6px] border-black pt-10 text-black">
            <h2 className="text-3xl font-black mb-6 leading-none uppercase bg-white text-black border-4 border-black p-2 inline-block italic">
              ¿SABES QUIÉN ES CRISTINA SOLIS?
            </h2>
            <div className="space-y-4 text-lg font-bold leading-tight text-justify">
              <p>
                Cristina Solís es una artista nacida en Misiones, estudió Bellas artes en Buenos Aires, y en 1985 se mudó a Rosario, donde se recibió de actriz nacional en 1989. Escribe y monta sus propias obras, es titiritera, actriz, directora, música y creadora de múltiples personajes fantásticos.
              </p>
              <p>
                En muchos casos, sus marionetas son hechas con materiales de desecho: tuercas encontradas por la calle, pilas, cremalleras y elementos varios. Es creadora de una metodología a la que llama "inspiración fantástica".
              </p>
              <p>
                Así es como entre sus creaciones da a la luz un libro, con un mazo de cartas incluido que es la puesta sobre papel de dibujos y textos con los que viene trabajando hace años. Un viaje imaginario hacia ese tiempo arcano en el que nació todo lo creado.
              </p>
            </div>
          </section>

          <section className="border-t-[6px] border-black pt-10 text-black">
            <div className="bg-yellow-400 text-black border-4 border-black p-2 mb-6 inline-block font-black uppercase text-xl italic leading-none">
              ADIVINANZAS - RIMAS - ACERTIJOS PARA COMPLETAR (*)
            </div>
            <div className="space-y-6 text-lg font-bold leading-tight">
              <div className="border-l-4 border-black pl-3 py-1">
                <p>1. ¿Cómo sale un perro de una pileta?</p>
                <p className="text-xs uppercase opacity-70 mt-1 italic">— Yahir, 11 años</p>
              </div>
              <div className="border-l-4 border-black pl-3 py-1">
                <p>2. ¿Qué le dice un pez a su amigo?</p>
                <p className="text-xs uppercase opacity-70 mt-1 italic">— Yahir, 11 años</p>
              </div>
              <div className="bg-slate-100 p-4 border-2 border-black italic leading-snug">
                <p>"Una rosa maravillosa</p>
                <p className="pl-4">que comía arroz en una mariposa,</p>
                <p className="pl-2">rosarios maravillosos,</p>
                <p>tan bella y maravillosa</p>
                <p className="pl-4">como aquella rosa"</p>
                <p className="text-right text-sm font-black not-italic mt-2 uppercase tracking-tighter">— Rap de Jeni.</p>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-dashed border-black">
                <p className="text-[10px] uppercase font-black opacity-60">(*) Las respuestas correctas se publicarán en la próxima edición</p>
                <div className="mt-2 text-[10px] grid grid-cols-2 gap-2 opacity-30 font-bold italic">
                  <span>1. mojado</span>
                  <span>2. tu papá qué hace? nada</span>
                </div>
              </div>
            </div>
          </section>

          <section id="literatura-ed1" className="border-t-[6px] border-black pt-10 text-black">
            <div className="bg-black text-white p-2 mb-6 inline-block">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                LITERATURA DEL BARRIO
              </h2>
            </div>
            <div className="space-y-10">
              <article className="space-y-4">
                <h3 className="text-xl font-black uppercase underline decoration-4 underline-offset-4">UTOPÍA</h3>
                <p className="text-lg font-bold leading-tight text-justify italic">
                  Había una vez... No había nada mejor... un cuento muy loco, con pájaros rosados y nubes rojas, no había sol, sólo una enorme galleta que comían las personas y a la vez alumbraba. Había pandas bañados en oro que jugaban con peces de plumas verdes. También había mucha comida para todos, nadie vivía en la calle, todos tenían un hogar, no faltaba nada ni juegos, ni juguetes, no había trabajo, todos ayudaban con las tareas pero no existían los empleos, ni el dinero, ni los robos, ni la cárcel, ni la maldad, ni nada de eso.
                </p>
                <p className="text-sm font-black text-right uppercase opacity-60">— Anónimo.</p>
              </article>

              <article className="space-y-4 border-t-2 border-dashed border-black pt-6">
                <h3 className="text-xl font-black uppercase underline decoration-4 underline-offset-4">TENSIÓN BAJO EL MAR</h3>
                <p className="text-lg font-bold leading-tight text-justify italic">
                  Había una vez un pulpo bien abajo del agua que vio algo muy oscuro. El pulpo con mucha intriga persiguió esa sombra. El pulpo los sigue hasta que una sombra sale a la superficie y allí se da cuenta que es un tiburón. El escualo se da vuelta y lo ataca pero el pulpo nada más rápido y logra distraerlo y así llegar a su casa seguro.
                </p>
                <p className="text-sm font-black text-right uppercase opacity-60">— Juli.</p>
              </article>
            </div>
          </section>

          <section id="pedidos-ed1" className="border-t-[6px] border-black pt-10 text-black">
            <div className="bg-[#fcf5e5] border-4 border-black p-4 relative overflow-hidden shadow-[6px_6px_0px_black]">
              <h2 className="text-xl font-black mb-4 leading-none uppercase italic border-b-2 border-black pb-1">
                PEDIDOS DEL BARRIO
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-black p-2 bg-white/50">
                  <p className="font-mono text-[8px] uppercase leading-none mb-1 border-b border-black/10 pb-1 opacity-50">URGENTE</p>
                  <p className="font-mono text-[10px] font-bold leading-tight uppercase italic">"Que se limpie el barrio y no se ensucie"</p>
                </div>
                <div className="border border-black p-2 bg-white/50">
                  <p className="font-mono text-[8px] uppercase leading-none mb-1 border-b border-black/10 pb-1 opacity-50">PRIORIDAD</p>
                  <p className="font-mono text-[10px] font-bold leading-tight uppercase italic">"Una infancia libre, sana y cuidada"</p>
                </div>
                <div className="border border-black p-2 bg-white/50 col-span-2">
                  <p className="font-mono text-[8px] uppercase leading-none mb-1 border-b border-black/10 pb-1 opacity-50">COMUNITARIO</p>
                  <p className="font-mono text-[10px] font-bold leading-tight uppercase italic">"Que no haya más robos"</p>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center border-t border-dotted border-black pt-2">
                <span className="text-[8px] font-black uppercase opacity-40 italic">Aviso Clasificado</span>
                <span className="text-[8px] font-black uppercase opacity-40 italic">Edición 001</span>
              </div>
            </div>
          </section>

          <div className="border-[6px] border-black p-6 bg-black text-white flex flex-col items-center justify-center space-y-4">
            <Scissors className="w-10 h-10 animate-bounce" />
            <span className="text-sm font-black uppercase text-center leading-tight">
              RECORTÁ Y GUARDÁ TU PEDACITO DE BARRIO
            </span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-8 space-y-16">
          
          {/* Featured Image Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black translate-x-3 translate-y-3"></div>
            <div className="relative border-[8px] border-black p-3 bg-white">
              <div className="aspect-[16/9] bg-slate-200 border-4 border-black relative overflow-hidden transition-all duration-700 contrast-110 group-hover:contrast-125">
                <img 
                  src="https://i.postimg.cc/d0NRFkZ3/FB-IMG-1778294036977.jpg" 
                  alt="Imagen destacada del barrio" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 border-[5px] border-black contrast-110 brightness-105 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white font-black text-xl md:text-3xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  NUESTRA PLAZA, NUESTRO MUNDO
                </div>
              </div>
              <figcaption className="text-center font-black text-sm md:text-xl mt-4 uppercase leading-none italic text-black">
                EL JUEGO ES NUESTRO DERECHO: TARDE DE ENCUENTRO EN EL CORONEL DORREGO.
                <div className="text-[10px] md:text-sm normal-case mt-2 font-bold not-italic opacity-60">
                  Fotos: El Camarógrafo • Galería completa: <a href="https://www.facebook.com/share/1FuJMEdMgE/" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">facebook.com</a>
                </div>
              </figcaption>
            </div>
          </div>

          <section id="quienes-somos-ed1" className="relative">
            <h2 className="text-5xl font-black mb-8 border-b-8 border-black pb-2 inline-block uppercase italic">
              QUIÉNES SOMOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl leading-snug font-bold text-justify">
                  Este periódico es un espacio para amplificar y hacer oír la voz de las infancias de Coronel Dorrego (o de otros barrios) a través de piezas escritas íntegramente por ellos y ellas. Buscará llegar a cada rincón de este barrio.
                </p>
                <p className="text-xl md:text-2xl leading-snug font-bold text-justify italic opacity-90">
                  En estas páginas, señor, señora, encontrarán las ideas, anhelos, reclamos y ocurrencias de esas pequeñas mentes que pululan por los rincones de El Alero.
                </p>
              </div>
              <div className="bg-yellow-400 border-[6px] border-black p-6 font-black text-xl transform rotate-1 shadow-[8px_8px_0px_black] group overflow-hidden min-h-[200px] flex flex-col justify-between">
                <p className="relative z-10 text-white">
                  Buscamos llegar a cada rincón de este barrio con alegría, verdad y muchos colores.
                </p>
                <div className="mt-4 border-[5px] border-black h-64 overflow-hidden relative">
                  <img 
                    src="https://i.postimg.cc/CxzLtR09/FB-IMG-1778294033412.jpg" 
                    alt="Taller de arte"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover contrast-110 brightness-105 border-[5px] border-black"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              id="mantitas-ed1"
              whileHover={{ scale: 1.02 }}
              className="border-[6px] border-black p-8 bg-blue-100 relative group"
            >
              <div className="absolute -top-6 -right-6 bg-white border-4 border-black p-2 rounded-full hidden md:block group-hover:rotate-12 transition-transform">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
              <h3 className="text-3xl font-black mb-4 flex items-center gap-3 uppercase leading-none">
                MANTITAS DE BIENVENIDA
              </h3>
              <div className="space-y-4 text-lg font-bold leading-tight">
                <p>Creamos mantitas para recibir a los bebés recién nacidos del barrio. Un regalo lleno de hilos y amor.</p>
                <div className="grid grid-cols-1 gap-2 text-xs md:text-sm uppercase font-black italic">
                  <div className="flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 not-italic">1</span> DIBUJAMOS EN PAPEL LO QUE LE GUSTARÍA AL NIÑO</div>
                  <div className="flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 not-italic">2</span> LO PASAMOS CON CUIDADO A LA TELA</div>
                  <div className="flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 not-italic">3</span> PREPARAMOS EL BASTIDOR</div>
                  <div className="flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 not-italic">4</span> ¡BORDAMOS CON MUCHOS COLORES!</div>
                </div>
                <div className="mt-8 border-[8px] border-black shadow-[12px_12px_0px_black] overflow-hidden aspect-[9/16] bg-black w-full max-w-[500px] mx-auto relative group">
                  <div className="absolute top-4 right-4 z-30 bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest animate-pulse shadow-[2px_2px_0px_black]">
                    TALLER EN VIVO
                  </div>
                  
                  <iframe 
                    src="https://www.youtube.com/embed/GcC5NiTG2Rc?rel=0&modestbranding=1&controls=1" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none' }} 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-full transition-all duration-700 relative z-10"
                    title="Taller de Mantitas de Bienvenida"
                  ></iframe>
                </div>
                <div className="text-center mt-4 flex flex-col items-center gap-3">
                  <a 
                    href="https://youtube.com/shorts/GcC5NiTG2Rc" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] font-black uppercase underline hover:text-red-600 opacity-60 flex items-center justify-center gap-1"
                  >
                    ¿No se ve? Abrir en YouTube
                  </a>
                  <div className="bg-white text-black font-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_black] uppercase text-[10px] tracking-tight animate-bounce">
                    Ponle PLAY al video de arriba para iniciar el taller
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="border-[6px] border-black p-8 bg-red-600 text-white shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-yellow-300 uppercase">
                <Hand className="w-8 h-8" /> AVISOS IMPORTANTES
              </h3>
              <ul className="text-sm md:text-lg font-black space-y-4 uppercase italic leading-tight">
                <li className="flex gap-2"><span>★</span> NO OLVIDES DE REGAR LA HUERTA</li>
                <li className="flex gap-2"><span>★</span> NO TE OLVIDES DE PASAR A HACER TU MANTITA</li>
                <li className="flex gap-2"><span>★</span> NO TE OLVIDES DE PASAR POR EL BAZAR</li>
              </ul>
              <div className="mt-6 pt-4 border-t-4 border-black/20">
                <p className="text-xs md:text-sm font-black uppercase leading-tight">
                  LO MÁS IMPORTANTE DE ESTE AÑO SON LOS JUEGOS DEL PATIO Y HACER MANTITAS PARA BIENVENIDA AL MUNDO A LOS RECIÉN NACIDOS.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-[10px] border-black pt-12 text-black">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-serif font-black italic bg-green-400 inline-block px-6 mb-6 border-4 border-black transform -rotate-2">
                  "Un libro ilustrado"
                </h3>
                <p className="text-xl md:text-2xl font-bold leading-tight text-justify italic">
                  Estamos armando el gran libro del barrio. Traé tu historia, tu chiste o tu dibujo. Entre todos somos los autores de nuestro propio destino.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square bg-slate-100 border-[5px] border-black relative flex items-center justify-center group overflow-hidden transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://i.postimg.cc/cLpgBR3V/Screenshot-20260509-135305-(1).jpg"
                  className="w-full h-full object-cover absolute contrast-110 border-[5px] border-black" 
                  alt="Mapa de tesoros" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-10 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                <MapIcon className="w-32 h-32 relative z-10 text-white opacity-40 group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-20 text-center font-black uppercase text-xl leading-none text-white drop-shadow-[2px_2px_0px_black]">
                  MAPA DE<br />TESOROS DEL<br />BARRIO
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// --- EDICIÓN 02 ---
function Edition02() {
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
      <header id="inicio-ed2" className="border-b-[12px] border-orange-500 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 12 }}
          className="absolute -top-10 -right-4 bg-green-500 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-white shadow-[6px_6px_0px_black] z-20"
        >
          ¡JUNIO\nSE VIENE\nCON TODO!
        </motion.div>
        
        <a href="#inicio-ed2" className="block hover:opacity-80 transition-opacity">
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
        <section id="respuestas-ed2" className="max-w-4xl mx-auto">
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
        <section id="hacer-nacer-ed2" className="space-y-10">
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
        <section id="preparativos-ed2" className="bg-orange-50 border-[10px] border-black p-4 md:p-12 relative overflow-hidden">
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

// --- EDICIÓN 03 ---
function Edition03() {
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
      {/* Top Info Bar - Night/Nature Theme */}
      <div className="flex justify-between items-end border-b-4 border-indigo-900 pb-4 mb-8">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-indigo-900">
          <span className="bg-indigo-600 text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black]">VOLUMEN 03</span>
          DIARIO EL DORREGO • INVESTIGACIÓN EN EL PATIO • SANTA FE • 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-indigo-600">
          AÑO I • Nº 003<br />
          EDICIÓN ESPECIAL: NATURALEZA
        </div>
      </div>

      {/* Masthead Vol 03 */}
      <header id="inicio-ed3" className="border-b-[12px] border-indigo-900 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: 1, rotate: -12 }}
          className="absolute -top-10 -left-4 bg-yellow-400 border-4 border-black p-4 rounded-full font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20 animate-pulse"
        >
          ¡MIRÁ\nARRIBA!
        </motion.div>
        
        <a href="#inicio-ed3" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-yellow-400 transform rotate-1 skew-x-2 translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-2xl md:text-5xl font-black tracking-[0.2em] bg-indigo-900 text-white translate-y-[-4px] shadow-[4px_4px_0px_black]">
             HALLAZGO NOCTURNO 
          </div>
        </div>

        {/* Countdown Vol 03 Style */}
        <div className="mt-12 flex justify-center">
          <div className="bg-indigo-600 text-white px-6 py-3 border-4 border-black flex items-center gap-4 shadow-[8px_8px_0px_#fbbf24]">
            <Calendar className="w-8 h-8 text-yellow-300 animate-spin-slow" />
            <div className="text-left font-black uppercase tracking-tight">
              <span className="text-xs block opacity-60">CUENTA REGRESIVA</span>
              <span className="text-3xl md:text-4xl leading-none text-yellow-400">{daysLeft ?? "?"} DÍAS</span>
              <span className="text-xs block opacity-60 mt-1">PARA EL GRAN CUMPLE DEL ALERO</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Feature: EL BÚHO */}
      <section id="buho-ed3" className="relative">
        <div className="bg-indigo-950 text-white border-[10px] border-black p-8 md:p-16 shadow-[15px_15px_0px_#fbbf24] relative overflow-hidden">
          {/* Decorative Stars */}
          <div className="absolute top-10 right-10 flex gap-4 opacity-30">
            <StarIcon className="w-8 h-8 fill-current text-yellow-400" />
            <StarIcon className="w-4 h-4 fill-current text-yellow-400 translate-y-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter text-yellow-400">
                UN VECINO CON PLUMAS
              </h2>
              <div className="bg-white/10 p-6 border-l-8 border-yellow-400 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-bold leading-tight italic">
                  "¡Hay un búho en el patio!" El grito recorrió todo El Alero. En uno de los árboles internos, bien arriba, apareció nuestro nuevo amigo.
                </p>
              </div>
              <p className="text-xl font-bold leading-relaxed opacity-90">
                Todo el mundo se detiene. Grandes y chicos hacemos silencio para verlo. Dicen que nos cuida desde las alturas con sus ojos gigantes que brillan como linternas. 
              </p>
              <div className="flex gap-4">
                <span className="bg-yellow-400 text-black font-black px-4 py-2 uppercase text-xs transform -rotate-2">#Observación</span>
                <span className="bg-indigo-600 text-white font-black px-4 py-2 uppercase text-xs transform rotate-2">#SilencioTotal</span>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 rounded-full"></div>
                <div className="relative aspect-square rounded-full border-8 border-black bg-indigo-900 overflow-hidden shadow-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-2 animate-bounce">🦉</div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Ojos de Guardián</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Stories: Historias de Búhos para Niños */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-black uppercase italic text-indigo-900 border-l-8 border-yellow-400 pl-4">
          CUENTOS CORTOS PARA SOÑAR 🦉
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_indigo] relative group">
            <h3 className="text-xl font-black uppercase mb-3 text-indigo-700 underline decoration-indigo-200 underline-offset-4">1. EL BÚHO "DOBLE-GUIÑO"</h3>
            <p className="text-lg font-bold leading-tight italic">
              Había una vez un búho llamado Pipo que quería guiñar un ojo para ser "cool". Pero cada vez que lo intentaba, cerraba los dos y se quedaba a oscuras en pleno vuelo. ¡PIM! ¡PUM! Chocaba contra las nubes de algodón. Al final descubrió que con sus dos ojos abiertos veía el doble de amigos.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_yellow] relative group transform md:translate-y-4">
            <h3 className="text-xl font-black uppercase mb-3 text-orange-600 underline decoration-orange-200 underline-offset-4">2. MISIÓN: LUNA DE QUESO</h3>
            <p className="text-lg font-bold leading-tight italic">
              Tito el búho estaba convencido de que la luna era un queso Gruyere gigante. Una noche, agarró un pancito con sus garras y voló lo más alto que pudo. No llegó a la luna, pero dice que el aire de arriba tiene gusto a vainilla y que las estrellas son chispitas de chocolate.
            </p>
          </div>
        </div>

        <div className="bg-indigo-900 text-white border-4 border-black p-6 shadow-[10px_10px_0px_black] italic font-bold text-center text-xl">
          "Si miras fijo a un búho, y él te devuelve la mirada... ¡es porque está leyendo el cuento que tenés guardado en la cabeza!"
        </div>
      </section>

      {/* Grid: Tareas y Chistes */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-8">
          <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_black] transform rotate-1">
            <div className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center font-black text-2xl mb-4">1</div>
            <h3 className="font-black text-xl mb-4 uppercase">EL ARBOL DEL BÚHO</h3>
            <p className="font-bold leading-tight italic">
              No es cualquier árbol. Es su casa. Por eso cuidamos que nadie tire nada cerca y hablamos bajito para no asustarlo.
            </p>
          </section>

          <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_black] transform -rotate-1">
            <div className="bg-yellow-400 text-black w-12 h-12 flex items-center justify-center font-black text-2xl mb-4">2</div>
            <h3 className="font-black text-xl mb-4 uppercase">MINI-INVESTIGADORES</h3>
            <p className="font-bold leading-tight italic">
              ¿Qué come? ¿A qué hora duerme? Algunos chicos ya trajeron sus lupas para ver qué hace cuando sale el sol.
            </p>
          </section>
        </div>

        {/* Chistes Section */}
        <div className="md:col-span-8">
          <div className="bg-yellow-400 border-4 border-black p-8 shadow-[12px_12px_0px_black] h-full">
            <h2 className="text-4xl font-black mb-8 uppercase italic border-b-4 border-black pb-2 flex items-center gap-4">
              <Smile className="w-10 h-10" /> CHISTES "PARA BÚH-LEARSE DE RISA"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => toggleJoke(3)}
                className="bg-white border-4 border-black p-6 cursor-pointer hover:shadow-[6px_6px_0px_indigo] transition-all group"
              >
                <p className="font-black italic mb-4">¿Qué le dice un búho a su novia?</p>
                <div className={`overflow-hidden transition-all duration-500 ${revealedJokes[3] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-indigo-600 font-black text-2xl border-t-2 border-black pt-2">"¡Qué BUHA estás!"</p>
                </div>
                {!revealedJokes[3] && <p className="text-[10px] font-black opacity-30 group-hover:opacity-100 text-right uppercase mt-2">[ TOCAR ]</p>}
              </div>

              <div 
                onClick={() => toggleJoke(4)}
                className="bg-white border-4 border-black p-6 cursor-pointer hover:shadow-[6px_6px_0px_indigo] transition-all group"
              >
                <p className="font-black italic mb-4">¿Por qué el búho sacó 10 en el examen?</p>
                <div className={`overflow-hidden transition-all duration-500 ${revealedJokes[4] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-indigo-600 font-black text-2xl border-t-2 border-black pt-2">¡Porque es un SABIO!</p>
                </div>
                {!revealedJokes[4] && <p className="text-[10px] font-black opacity-30 group-hover:opacity-100 text-right uppercase mt-2">[ TOCAR ]</p>}
              </div>

              <div 
                onClick={() => toggleJoke(5)}
                className="bg-white border-4 border-black p-6 cursor-pointer hover:shadow-[6px_6px_0px_indigo] transition-all group col-span-1 md:col-span-2"
              >
                <p className="font-black italic mb-4">¿Qué hace un búho cuando le gusta un chiste?</p>
                <div className={`overflow-hidden transition-all duration-500 ${revealedJokes[5] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-indigo-600 font-black text-2xl border-t-2 border-black pt-2 text-center uppercase">¡Se muere de la BÚH-RISA!</p>
                </div>
                {!revealedJokes[5] && <p className="text-[10px] font-black opacity-30 group-hover:opacity-100 text-center uppercase mt-2">[ TOCAR AQUÍ PARA REÍR ]</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Area Vol 03 */}
      <footer className="mt-20 border-t-[12px] border-indigo-900 pt-12 text-black flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center gap-8 text-[10px] md:text-base font-black uppercase tracking-widest">
           <span className="bg-indigo-600 text-white px-3 py-1 shadow-[2px_2px_0px_black]">#NATURALEZAENELALERO</span>
           <span className="bg-yellow-400 text-black px-3 py-1 shadow-[2px_2px_0px_black]">#ELBUHODELPATIO</span>
           <span className="bg-indigo-900 text-white px-3 py-1 shadow-[2px_2px_0px_black]">#100AÑOSDEAMOR</span>
        </div>
        
        <div className="text-center w-full max-w-2xl">
           <Heart className="w-12 h-12 mx-auto text-yellow-400 mb-4 animate-pulse fill-current" />
           <p className="font-serif italic font-black text-2xl md:text-4xl text-indigo-900">"Los animales saben dónde hay amor."</p>
           <p className="mt-4 text-xs font-black uppercase opacity-40">Diario El Dorrego • Edición Mayo-Junio 2026</p>
        </div>
      </footer>
    </div>
  );
}

// --- EDICIÓN 04 ---
function Edition04() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const birthday = new Date("2026-06-08T00:00:00");
    const now = new Date();
    const diff = birthday.getTime() - now.getTime();
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Party Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderBottomColor: '#d946ef' }}>
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter" style={{ color: '#701a75' }}>
          <span className="bg-magenta-600 text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black]" style={{ backgroundColor: '#d946ef' }}>VOLUMEN 04</span>
          DIARIO EL DORREGO • ¡RITMO DE CUMPLEAÑOS! • SANTA FE • 17 DE MAYO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-pink-600">
          AÑO I • Nº 004<br />
          EDICIÓN DEL DÍA: ¡FIESTA TOTAL!
        </div>
      </div>

      {/* Masthead Vol 04 */}
      <header id="inicio-ed4" className="border-b-[12px] border-pink-500 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 15 }}
          className="absolute -top-12 -right-4 bg-yellow-400 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20"
        >
          ¡TIRAMOS LA\nCASA POR LA\nVENTANA!
        </motion.div>
        
        <a href="#inicio-ed4" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block px-4">
          <div className="absolute inset-0 bg-pink-600 transform -rotate-1 skew-x-2 translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-2xl md:text-5xl font-black tracking-[0.2em] bg-yellow-300 text-black translate-y-[-4px] shadow-[4px_4px_0px_black] uppercase">
             ¡Cumple Alero 10 Años! 
          </div>
        </div>

        {/* Party Countdown */}
        <div className="mt-12 flex justify-center">
          <div className="bg-black text-white px-8 py-4 border-4 border-pink-500 flex items-center gap-6 shadow-[10px_10px_0px_#fbbf24]">
            <PartyPopper className="w-10 h-10 text-pink-400 animate-pulse" />
            <div className="text-left font-black uppercase tracking-tight">
              <span className="text-xs block opacity-60">FALTAN SOLO</span>
              <span className="text-4xl md:text-5xl leading-none text-yellow-400">{daysLeft ?? "?"} DÍAS</span>
              <span className="text-xs block opacity-60 mt-1">PARA EL GRAN FESTEJO (8 DE JUNIO)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Story: BONETES Y FIESTA */}
      <section id="festejo-ed4" className="relative group">
        <div className="absolute inset-0 bg-pink-100 translate-x-4 translate-y-4 -z-10"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-3/5 space-y-8">
              <div className="inline-block bg-pink-600 text-white px-4 py-2 font-black uppercase text-xl transform -rotate-1 shadow-[4px_4px_0px_black] mb-2">
                CRÓNICA DEL DÍA
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter text-black">
                ¡EL ALERO A PLENO Y CON RITMO DE CUMPLEAÑOS!
              </h2>
              <div className="h-2 bg-yellow-400 w-1/3"></div>
              
              <div className="prose prose-xl font-bold leading-tight space-y-6 text-2xl md:text-3xl text-justify italic">
                <p>
                  ¡Hoy el Alero Coronel Dorrego tiró la casa por la ventana! Desde muy temprano el Bazar abrió sus puertas y el patio se llenó de risas con los juegos. 
                </p>
                <p>
                  Pero lo más importante: las fábricas estuvieron a mil. En <span className="bg-yellow-200 px-2 not-italic">Bienvenida al Mundo Textil</span> seguimos bordando las mantitas, y en la <span className="bg-pink-100 px-2 not-italic">Fábrica de la Palabra</span> no paramos de crear.
                </p>
                <div className="border-l-8 border-pink-500 pl-6 py-4 bg-pink-50 space-y-3">
                  <p className="text-pink-600 uppercase font-black not-italic text-sm tracking-wider">
                    Preparación de los bonetes
                  </p>
                  <p className="not-italic text-lg md:text-xl font-bold leading-normal text-black">
                    Se preparan los bonetes de fiesta: hechos a mano, de colores.
                  </p>
                  <p className="text-pink-600 uppercase font-black not-italic text-xs tracking-wider">
                    ¿Cómo se arman?
                  </p>
                  <p className="not-italic text-base md:text-lg font-bold leading-relaxed text-black/80">
                    Sobre una cartulina redonda se dibuja y recorta una espiral en forma de zigzag. Luego se pega la punta en la parte superior del bonete, para que quede suelta y se mueva al girar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 bg-black text-white px-4 py-2 font-black uppercase text-sm">
                  <Cake className="w-5 h-5 text-yellow-400" />
                  10 Años de amor
                </div>
                <div className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_black]">
                  #AlAleroConTodo
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 space-y-6">
              <div className="relative transform rotate-2">
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3"></div>
                <div className="relative border-4 border-black bg-white p-2">
                  <div className="aspect-[3/4] bg-slate-200 border-2 border-black overflow-hidden relative">
                    {/* Featured Image - Birthday Hats / Bonetes */}
                    <img 
                      src="/images/alero_bonetes_artesanales_1778986050595.png" 
                      alt="Festejos y bonetes en el alero" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback if local image missing (though it shouldn't be)
                        e.currentTarget.src = "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=600"; // Changed fallback to something less like "just balloons" if it fails, or keep it
                      }}
                    />
                    <div className="absolute inset-0 bg-pink-500/10 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-black p-3 text-center">
                      <p className="font-black uppercase text-xs leading-none">¡ARMANDO LOS BONETES!</p>
                      <p className="text-[10px] font-bold mt-1 opacity-60">Producción a pleno en la fábrica</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-400 border-4 border-black p-6 shadow-[8px_8px_0px_black] transform -rotate-1">
                <h3 className="font-black uppercase text-lg mb-2">DATO DEL DÍA:</h3>
                <p className="font-black text-sm italic">"Los bonetes fueron hechos aparte con espirales en zigzag cortadas a mano que giran al compás del festejo. ¡Pura magia y movimiento en El Alero!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Section: Fábrica de la Palabra */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="bg-indigo-900 text-white border-4 border-black p-8 shadow-[10px_10px_0px_pink]">
          <h2 className="text-3xl font-black mb-6 uppercase flex items-center gap-3">
             FÁBRICA DE LA PALABRA
          </h2>
          <div className="space-y-4 text-xl font-bold italic leading-tight">
            <p>"Escribir para acordarse, escribir para soñar. Hoy las letras se disfrazan de confeti."</p>
            <div className="border-t-2 border-white/20 pt-4 font-black uppercase text-xs tracking-widest text-pink-300">
               Últimas creaciones infantiles 
            </div>
          </div>
        </section>

        <section className="bg-yellow-200 text-black border-4 border-black p-8 shadow-[10px_10px_0px_black] transform rotate-1">
          <h2 className="text-3xl font-black mb-4 uppercase">EL BAZAR ABIERTO</h2>
          <p className="text-xl font-bold leading-none mb-4 italic">"Risas, intercambios y tesoros encontrados desde temprano."</p>
          <div className="h-1 bg-black w-full mb-4"></div>
          <p className="font-black uppercase text-sm">El patio está que arde de alegría.</p>
        </section>
      </div>

      {/* Stickers / Footer area */}
      <div className="flex flex-wrap justify-center gap-6 py-8">
        <div className="bg-pink-500 text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          ¡10 AÑOS!
        </div>
        <div className="bg-yellow-400 text-black font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer">
          FELICIDAD
        </div>
        <div className="bg-black text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
          SUEÑOS
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);
  
  const [edition, setEdition] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('el_dorrego_edition');
      return saved ? parseInt(saved) : 9;
    }
    return 9;
  });

  useEffect(() => {
    localStorage.setItem('el_dorrego_edition', edition.toString());
  }, [edition]);

  const toggleEdition = (num: number) => {
    setEdition(num);
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePDF = async () => {
    setIsGeneratingPdf(true);
    // Give a small timeout to let the state register and layout scale up
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Simple OKLAB and OKLCH to RGB converter for html2canvas compatibility
    const oklabToRgb = (L: number, a: number, b: number, alpha?: number): string => {
      if (isNaN(L) || isNaN(a) || isNaN(b)) {
        return 'rgb(128, 128, 128)';
      }
      const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
      const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
      const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
      
      const l3 = l_ * l_ * l_;
      const m3 = m_ * m_ * m_;
      const s3 = s_ * s_ * s_;
      
      const r = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
      const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
      const b_ = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
      
      const clamp = (val: number) => Math.max(0, Math.min(1, val));
      const r8 = Math.round(clamp(r <= 0.0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055) * 255);
      const g8 = Math.round(clamp(g <= 0.0031308 ? 12.92 * g : 1.055 * Math.pow(g, 1 / 2.4) - 0.055) * 255);
      const b8 = Math.round(clamp(b_ <= 0.0031308 ? 12.92 * b_ : 1.055 * Math.pow(b_, 1 / 2.4) - 0.055) * 255);
      
      if (isNaN(r8) || isNaN(g8) || isNaN(b8)) {
        return 'rgb(128, 128, 128)';
      }

      if (alpha !== undefined && !isNaN(alpha) && alpha !== 1) {
        return `rgba(${r8}, ${g8}, ${b8}, ${alpha})`;
      }
      return `rgb(${r8}, ${g8}, ${b8})`;
    };

    const oklchToRgb = (l: number, c: number, h: number, a?: number): string => {
      if (isNaN(l) || isNaN(c) || isNaN(h)) {
        return 'rgb(128, 128, 128)';
      }
      const hRad = (h * Math.PI) / 180;
      const a_ = c * Math.cos(hRad);
      const b_ = c * Math.sin(hRad);
      return oklabToRgb(l, a_, b_, a);
    };

    const replaceOklchString = (str: any): any => {
      if (typeof str !== 'string') return str;
      const lower = str.toLowerCase();
      if (!lower.includes('oklch') && !lower.includes('oklab')) return str;
      
      let res = str;

      if (lower.includes('oklch')) {
        res = res.replace(/oklch\(([^)]+)\)/gi, (match, content) => {
          const parts = content.trim().split(/[\s,/]+/);
          if (parts.length >= 3) {
            const lVal = parts[0];
            const cVal = parts[1];
            const hVal = parts[2];
            const aVal = parts[3];
            
            let l = parseFloat(lVal);
            if (lVal.includes('%')) l = parseFloat(lVal) / 100;
            let c = parseFloat(cVal);
            if (cVal.includes('%')) c = parseFloat(cVal) / 100;
            let h = parseFloat(hVal);
            
            let a = 1;
            if (aVal !== undefined) {
              a = parseFloat(aVal);
              if (aVal.includes('%')) a = parseFloat(aVal) / 100;
            }
            
            try {
              return oklchToRgb(l, c, h, a);
            } catch (e) {
              return 'rgb(0,0,0)';
            }
          }
          return match;
        });
      }

      if (lower.includes('oklab')) {
        res = res.replace(/oklab\(([^)]+)\)/gi, (match, content) => {
          const parts = content.trim().split(/[\s,/]+/);
          if (parts.length >= 3) {
            const lVal = parts[0];
            const aVal = parts[1];
            const bVal = parts[2];
            const alphaVal = parts[3];
            
            let L = parseFloat(lVal);
            if (lVal.includes('%')) L = parseFloat(lVal) / 100;
            let a = parseFloat(aVal);
            if (aVal.includes('%')) a = parseFloat(aVal) / 100;
            let b = parseFloat(bVal);
            if (bVal.includes('%')) b = parseFloat(bVal) / 100;
            
            let alpha = 1;
            if (alphaVal !== undefined) {
              alpha = parseFloat(alphaVal);
              if (alphaVal.includes('%')) alpha = parseFloat(alphaVal) / 100;
            }
            
            try {
              return oklabToRgb(L, a, b, alpha);
            } catch (e) {
              return 'rgb(0,0,0)';
            }
          }
          return match;
        });
      }

      return res;
    };

    const styleElements = Array.from(document.querySelectorAll('style'));
    const originalStyleContentsByElement = new Map<HTMLStyleElement, string>();
    const restoredInlineStyles: { element: HTMLElement; prop: string; value: string; priority: string }[] = [];
    const restoredCSSRules: { rule: CSSStyleRule; prop: string; value: string; priority: string }[] = [];
    const temporaryStylesheets: HTMLStyleElement[] = [];
    const restoredLinkStates: { element: HTMLLinkElement; disabled: boolean; rel: string }[] = [];

    // Temporarily replace OKLCH/OKLAB in all <style> tags on the page
    // This removes oklch/oklab from stylesheets parsed by html2canvas
    styleElements.forEach((styleEl) => {
      const originalText = styleEl.textContent;
      if (originalText && (originalText.toLowerCase().includes('oklch') || originalText.toLowerCase().includes('oklab'))) {
        originalStyleContentsByElement.set(styleEl, originalText);
        styleEl.textContent = replaceOklchString(originalText);
      }
    });

    // Directly traverse and convert all rules in document.styleSheets CSSOM to avoid html2canvas crashes on CSS variable declarations
    const traverseAndConvertSheetRules = () => {
      try {
        const sheets = Array.from(document.styleSheets);
        sheets.forEach((sheet) => {
          try {
            if (!sheet.cssRules) return;
            const traverse = (rulesList: CSSRuleList) => {
              Array.from(rulesList).forEach((rule) => {
                if (rule instanceof CSSStyleRule) {
                  const style = rule.style;
                  if (style && style.length) {
                    const props = Array.from(style);
                    props.forEach((prop) => {
                      const val = style.getPropertyValue(prop);
                      if (val && (val.toLowerCase().includes('oklch') || val.toLowerCase().includes('oklab'))) {
                        const priority = style.getPropertyPriority(prop);
                        restoredCSSRules.push({
                          rule,
                          prop,
                          value: val,
                          priority
                        });
                        const converted = replaceOklchString(val);
                        style.setProperty(prop, converted, priority);
                      }
                    });
                  }
                } else if ('cssRules' in rule) {
                  traverse((rule as any).cssRules);
                }
              });
            };
            traverse(sheet.cssRules);
          } catch (e) {
            // Ignore access errors on cross-origin stylesheets
          }
        });
      } catch (globalErr) {
        console.error('Error traversing stylesheets:', globalErr);
      }
    };

    traverseAndConvertSheetRules();

    // Fetch and convert any external stylesheets (e.g., <link rel="stylesheet">) that might be on the same origin
    const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]')) as HTMLLinkElement[];
    for (const link of linkElements) {
      if (link.href && link.href.startsWith(window.location.origin)) {
        try {
          const res = await fetch(link.href);
          if (res.ok) {
            const cssText = await res.text();
            if (cssText.toLowerCase().includes('oklch') || cssText.toLowerCase().includes('oklab')) {
              // Convert stylesheet content to standard rgb/rgba
              const convertedCss = replaceOklchString(cssText);
              
              // Create temporary styling tag
              const tempStyle = document.createElement('style');
              tempStyle.setAttribute('data-temp-pdf-style', 'true');
              tempStyle.textContent = convertedCss;
              document.head.appendChild(tempStyle);
              temporaryStylesheets.push(tempStyle);

              // Disable original link tag and change rel to prevent html2canvas from fetching it
              restoredLinkStates.push({ element: link, disabled: link.disabled, rel: link.rel });
              link.disabled = true;
              link.rel = 'disabled-stylesheet';
            }
          }
        } catch (fetchErr) {
          console.warn('Failed to pre-fetch and convert stylesheet rules for PDF generation:', link.href, fetchErr);
        }
      }
    }

    const element = document.getElementById('printable-area');
    if (element) {
      const allElements = [element, ...Array.from(element.querySelectorAll('*'))] as HTMLElement[];
      
      allElements.forEach((el) => {
        if (!el.style || !el.style.length) return;
        const styleProps = Array.from(el.style);
        styleProps.forEach((prop) => {
          const inlineVal = el.style.getPropertyValue(prop);
          if (inlineVal && (inlineVal.toLowerCase().includes('oklch') || inlineVal.toLowerCase().includes('oklab'))) {
            const originalPriority = el.style.getPropertyPriority(prop);
            restoredInlineStyles.push({
              element: el,
              prop,
              value: inlineVal,
              priority: originalPriority
            });
            el.style.setProperty(prop, replaceOklchString(inlineVal), originalPriority);
          }
        });
      });
    }

    try {
      const loadHtml2Pdf = () => {
        return new Promise((resolve, reject) => {
          if ((window as any).html2pdf) {
            resolve((window as any).html2pdf);
            return;
          }
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
          script.crossOrigin = 'anonymous';
          script.onload = () => resolve((window as any).html2pdf);
          script.onerror = () => reject(new Error('Failed to load html2pdf'));
          document.body.appendChild(script);
        });
      };

      const html2pdfLib: any = await loadHtml2Pdf();
      
      if (!element) {
        throw new Error('Element containing the journal edition not found');
      }

      const opt = {
        margin:       [10, 10, 10, 10],
        filename:     `El_Dorrego_Volt_0${edition}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true, 
          letterRendering: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 1024
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdfLib().from(element).set(opt).save();

      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 4000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un inconveniente generando el PDF automático. Se abrirá la ventana de impresión para guardarlo como PDF.');
      window.print();
    } finally {
      // Restore all original <style> text contents
      originalStyleContentsByElement.forEach((originalText, styleEl) => {
        styleEl.textContent = originalText;
      });
      
      // Remove all temporary styles created for links
      temporaryStylesheets.forEach((tempStyle) => {
        if (tempStyle && tempStyle.parentNode) {
          tempStyle.parentNode.removeChild(tempStyle);
        }
      });

      // Restore original <link> tag disabled statuses and rel attributes
      restoredLinkStates.forEach(({ element, disabled, rel }) => {
        if (element) {
          element.disabled = disabled;
          element.rel = rel;
        }
      });

      // Restore all original CSSOM style rules
      restoredCSSRules.forEach(({ rule, prop, value, priority }) => {
        try {
          if (value) {
            rule.style.setProperty(prop, value, priority);
          } else {
            rule.style.removeProperty(prop);
          }
        } catch (e) {
          // Ignore
        }
      });

      // Restore all original inline styles
      restoredInlineStyles.forEach(({ element, prop, value, priority }) => {
        if (value) {
          element.style.setProperty(prop, value, priority);
        } else {
          element.style.removeProperty(prop);
        }
      });
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#dcdcdc] flex justify-center p-4 md:p-10 font-mono paper-texture overflow-x-hidden zoom-container"
      style={{ 
        zoom: isGeneratingPdf ? "100%" : "67%",
        WebkitZoom: isGeneratingPdf ? "100%" : "67%",
      } as any}
    >
      <GlobalStyles />
      
      {/* Botón de Menú (Cuadradito) */}
      <button 
        id="btn-menu"
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 border-4 border-black flex items-center justify-center transition-all shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white"
      >
        {showMenu ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
      </button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {showMenu && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-72 bg-black text-white z-40 p-6 border-4 border-white shadow-[10px_10px_0px_rgba(255,255,255,0.2)] max-h-[70vh] overflow-y-auto"
          >
            <h3 className="text-xl font-black italic mb-6 border-b-2 border-white/20 pb-2 uppercase tracking-tighter flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> EL DORREGO
            </h3>
            
            <div className="mb-8 space-y-2">
              <p className="text-[10px] font-black uppercase opacity-50 mb-2">Seleccionar Edición</p>
              <div className="grid grid-cols-5 gap-1">
                <button 
                  onClick={() => toggleEdition(1)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 1 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 1
                </button>
                <button 
                  onClick={() => toggleEdition(2)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 2 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 2
                </button>
                <button 
                  onClick={() => toggleEdition(3)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 3 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 3
                </button>
                <button 
                  onClick={() => toggleEdition(4)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 4 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 4
                </button>
                <button 
                  onClick={() => toggleEdition(5)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 5 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 5
                </button>
                <button 
                  onClick={() => toggleEdition(6)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 6 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 6
                </button>
                <button 
                  onClick={() => toggleEdition(7)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 7 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 7
                </button>
                <button 
                  onClick={() => toggleEdition(8)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 8 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 8
                </button>
                <button 
                  onClick={() => toggleEdition(9)}
                  className={`border p-1 text-[9px] font-black uppercase transition-colors ${edition === 9 ? 'bg-[#fef08a] text-black border-[#fef08a]' : 'border-white/20 hover:border-white'}`}
                >
                  💥 Vol. 9
                </button>
              </div>
            </div>

            <nav className="space-y-4">
              <p className="text-[10px] font-black uppercase opacity-50 mb-2">Navegación</p>
              <a href={`#inicio-ed${edition}`} onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Inicio</a>
              {edition === 1 && (
                <>
                  <a href="#que-es-alero-ed1" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">¿Qué es un Alero?</a>
                  <a href="#historias-risa-ed1" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Historias que dan risa</a>
                  <a href="#literatura-ed1" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Literatura del Barrio</a>
                </>
              )}
              {edition === 2 && (
                <>
                  <a href="#inicio-ed2" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-green-400 transition-colors border-b border-white/10 pb-1">Inicio Vol. 02</a>
                  <a href="#preparativos-ed2" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-orange-400 transition-colors border-b border-white/10 pb-1">Preparativos</a>
                </>
              )}
              {edition === 3 && (
                <>
                  <a href="#buho-ed3" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-indigo-400 transition-colors border-b border-white/10 pb-1 text-yellow-400 animate-pulse">¡El Búho del Patio!</a>
                </>
              )}
              {edition === 4 && (
                <>
                  <a href="#festejo-ed4" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-pink-400 transition-colors border-b border-white/10 pb-1">Cumpleaños 10 Años</a>
                </>
              )}
              {edition === 5 && (
                <>
                  <a href="#festejo-ed5" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-teal-400 transition-colors border-b border-white/10 pb-1 text-teal-300 animate-pulse">¡Fecha Confirmada!</a>
                </>
              )}
              {edition === 6 && (
                <>
                  <a href="#inicio-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-sky-400 transition-colors border-b border-white/10 pb-1 text-sky-300 animate-pulse">⚽ Edición Mundial</a>
                  <a href="#mundial-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">¿Y las Fábricas?</a>
                  <a href="#seleccion-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-emerald-400 transition-colors border-b border-white/10 pb-1">Mi Selección</a>
                  <a href="#penal-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-red-400 transition-colors border-b border-white/10 pb-1">¡Penal Alero!</a>
                  <a href="#aliento-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-cyan-400 transition-colors border-b border-white/10 pb-1">Buzón de Aliento</a>
                </>
              )}
              {edition === 7 && (
                <>
                  <a href="#inicio-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-emerald-400 transition-colors border-b border-white/10 pb-1 text-emerald-300 animate-pulse">📰 Portada</a>
                  <a href="#cabral-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-amber-400 transition-colors border-b border-white/10 pb-1">🐈⬛ Se Busca Cabral</a>
                  <a href="#lost-tips-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-rose-400 transition-colors border-b border-white/10 pb-1">🐾 Guía de Cuidados</a>
                  <a href="#notificaciones-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-rose-500 transition-colors border-b border-white/10 pb-1 font-extrabold text-rose-300">🚨 Red de Alertas</a>
                  <a href="#aniv-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-indigo-400 transition-colors border-b border-white/10 pb-1">🎉 Cuenta Regresiva</a>
                  <a href="#buzon-ed7" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-cyan-400 transition-colors border-b border-white/10 pb-1">✍️ Buzón Solidario</a>
                </>
              )}
              {edition === 8 && (
                <>
                  <a href="#inicio-ed8" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-amber-400 transition-colors border-b border-white/10 pb-1 text-amber-300 animate-pulse">🎂 Portada Especial</a>
                  <a href="#buzon-ed8" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-rose-400 transition-colors border-b border-white/10 pb-1">✍️ Mural de Deseos</a>
                </>
              )}
              {edition === 9 && (
                <>
                  <a href="#inicio-ed9" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1 text-yellow-300 animate-pulse">📰 Portada Aleroticias</a>
                  <a href="#nombre-votacion" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-rose-400 transition-colors border-b border-white/10 pb-1">🗳️ Votación Identidad</a>
                  <a href="#rayuela-caja" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-sky-400 transition-colors border-b border-white/10 pb-1">📦 Regalo Rayuela</a>
                  <a href="#buzon-ed9" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-teal-400 transition-colors border-b border-white/10 pb-1">✍️ Mural de Deseos</a>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        key={edition}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-[#fdfdfd] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border-x-[12px] border-black p-6 md:p-14 relative overflow-hidden"
      >
        <div id="printable-area" className="w-full">
          {edition === 1 && <Edition01 />}
          {edition === 2 && <Edition02 />}
          {edition === 3 && <Edition03 />}
          {edition === 4 && <Edition04 />}
          {edition === 5 && <Edition05 />}
          {edition === 6 && <Edition06 />}
          {edition === 7 && <Edition07 />}
          {edition === 8 && <Edition08 />}
          {edition === 9 && <Edition09 />}
        </div>

        {/* Centro de Descarga de PDF / Guardado */}
        <div 
          className="mt-6 pt-4 border-t border-dashed border-black/10 pdf-download-center flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-gray-500 text-[10px] font-bold"
          data-html2canvas-ignore="true"
        >
          <div className="flex items-center gap-1">
            <span className="font-sans">
              📰 Para conservar o imprimir esta edición (Vol. 0{edition}) en papel:
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={generatePDF}
              disabled={isGeneratingPdf}
              className="bg-black text-white hover:bg-gray-800 disabled:bg-gray-200 font-bold uppercase text-[9px] px-2.5 py-1.5 border border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1 cursor-pointer"
            >
              {isGeneratingPdf ? (
                <>
                  <span className="animate-spin inline-block w-2.5 h-2.5 border border-white border-t-transparent rounded-full"></span>
                  CONVIRTIENDO...
                </>
              ) : pdfSuccess ? (
                <span>✓ ¡GUARDADO!</span>
              ) : (
                <>
                  <Download className="w-3 h-3 text-white" />
                  DESCARGAR PDF
                </>
              )}
            </button>

            <button
              onClick={() => window.print()}
              className="bg-white text-black hover:bg-gray-50 font-bold uppercase text-[9px] px-2.5 py-1.5 border border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3 h-3 text-black" />
              IMPRIMIR
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 rotate-90 text-8xl font-black opacity-[0.03] pointer-events-none select-none uppercase tracking-[1em]">
          EL ALERO EL ALERO EL ALERO
        </div>
      </motion.div>
    </div>
  );
}

// --- EDICIÓN 05 ---
function Edition05() {
  const [daysLeftOriginal, setDaysLeftOriginal] = useState<number | null>(null);
  const [daysLeftCeleb, setDaysLeftCeleb] = useState<number | null>(null);
  const [selectedHeadline, setSelectedHeadline] = useState<string>(
    "¡LLUEVEN PIÑATAS GIGANTES DE COLORES DESDE EL CIELO DEL DORREGO!"
  );
  const [customHeadline, setCustomHeadline] = useState<string>("");
  const [selectedDoodle, setSelectedDoodle] = useState<string>("🎈");

  // State for permanent wishes
  const [wishes, setWishes] = useState<Array<{ id: number; author: string; text: string; date: string }>>([]);
  const [newWishAuthor, setNewWishAuthor] = useState<string>("");
  const [newWishText, setNewWishText] = useState<string>("");
  const [isSubmittingWish, setIsSubmittingWish] = useState<boolean>(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // --- AUDIO / TEXT TO SPEECH (VOZ CÁLIDA DE VECINA DE EL ALERO) ---
  const [audioState, setAudioState] = useState<{
    isSpeaking: boolean;
    isPaused: boolean;
    currentIndex: number;
  }>({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1
  });

  const textToRead = [
    "¡Hola, vecinas y vecinos! Les habla una residente de El Alero Coronel Dorrego. Les voy a leer el volumen cinco de nuestro querido periódico El Dorrego.",
    "El cumpleaños de diez de nuestro amado Alero Coronel Dorrego oficialmente cae este lunes ocho de junio, es decir, ¡mañana! Diez años haciendo nacer comunidad desde aquel primer día en el barrio.",
    "Pero como un hito de esta magnitud no cabe solo en pantallas móviles, ¡El Diario El Dorrego saldrá en formato físico! Las rotativas analógicas del barrio están listas para imprimir este periódico escolar-comunitario en papel real y rugoso. Lo repartiremos de mano en mano el próximo sábado veintisiete de junio.",
    "¡Anoten bien! El sábado veintisiete de junio nos volveremos a abrazar, a bailar y a disfrutar de todo lo que venimos armando en cada una de las fábricas. ¡Habrá música, juegos, mantitas y por supuesto, sorpresas!",
    "Fábrica de objetos al final del recorrido. Aquí ya no hacemos más bonetes, sino pura fiesta colgante y sorpresas. En la mesa uno estamos armando las piñatas coloridas y gigantes para colgar en todos lados de El Alero. ¡Estallarán de alegría y movimiento para celebrar los diez años! En la mesa dos tenemos los moldes de cartulina listos para recortar y armar las cajitas de sorpresas. Adentro de cada una vas a ver una sorpresa preciosa, ¡una hermosa sorpresita de cumpleaños creada junto a la Fábrica de la Palabra!",
    "Y en nuestra Fábrica de la Palabra huele a pintura fresca. Estuvimos remodelando por completo nuestro espacio con paredes coloridas y repisas llenas de brillo. ¡La Fábrica de la Palabra estrena look para imprimir los periódicos físicos y llenarse de titulares y cuentos fantásticos! Además, esta fábrica es el lugar central donde va a estar y nacer el queridísimo periódico de El Alero."
  ];

  const speakChunk = (index: number) => {
    if (index >= textToRead.length) {
      setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      return;
    }
    
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn("speechSynthesis cancel error", e);
    }
    
    const utterance = new SpeechSynthesisUtterance(textToRead[index]);
    
    // Attempt to locate a warm, expressive Spanish/regional voice
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith("es-AR")) ||
                         voices.find(v => v.lang.startsWith("es-UY")) ||
                         voices.find(v => v.lang.startsWith("es-ES") && v.name.toLowerCase().includes("female")) ||
                         voices.find(v => v.lang.startsWith("es-MX")) ||
                         voices.find(v => v.lang.startsWith("es-ES")) ||
                         voices.find(v => v.lang.startsWith("es"));
    
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    utterance.lang = spanishVoice ? spanishVoice.lang : "es-AR";
    utterance.pitch = 1.05; // Slightly warmer/sweeter tone
    utterance.rate = 0.88;  // Calm, maternal, slow neighborhood resident reading speed

    utterance.onend = () => {
      setAudioState(prev => {
        const nextIndex = prev.currentIndex + 1;
        if (nextIndex < textToRead.length) {
          setTimeout(() => speakChunk(nextIndex), 250);
          return { ...prev, currentIndex: nextIndex };
        } else {
          return { isSpeaking: false, isPaused: false, currentIndex: -1 };
        }
      });
    };

    utterance.onerror = (e) => {
      if (e.error !== "interrupted") {
        setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      }
    };

    setAudioState({ isSpeaking: true, isPaused: false, currentIndex: index });
    try {
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("speechSynthesis speak error", err);
    }
  };

  const handlePlaySpeech = () => {
    if (audioState.isSpeaking && audioState.isPaused) {
      window.speechSynthesis.resume();
      setAudioState(prev => ({ ...prev, isPaused: false }));
    } else if (audioState.isSpeaking) {
      window.speechSynthesis.pause();
      setAudioState(prev => ({ ...prev, isPaused: true }));
    } else {
      speakChunk(0);
    }
  };

  const handleStopSpeech = () => {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
  };

  // Helper to dynamically get API URLs
  const getApiUrl = (endpoint: string) => {
    const currentHost = window.location.hostname;
    // If we're working on local development or the official Google Cloud Run, relative endpoint is perfect.
    if (
      currentHost.includes("localhost") || 
      currentHost.includes("127.0.0.1") || 
      currentHost.includes("run.app")
    ) {
      return endpoint;
    }
    // If running on a static site like Vercel (dorego.vercel.app), route requests to our public Cloud Run backup server!
    return `https://ais-pre-rawgpkbifbfojkwv7g7d5m-112551938117.us-east5.run.app${endpoint}`;
  };

  const fetchWishes = async () => {
    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url);
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          // Sync with local storage
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          return;
        }
      }
      loadLocalWishes();
    } catch (err) {
      console.warn("Could not fetch wishes from server API, using local storage fallback", err);
      loadLocalWishes();
    }
  };

  const loadLocalWishes = () => {
    try {
      const stored = localStorage.getItem("el_dorrego_wishes");
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        const seed = [
          {
            id: 1,
            author: "Vale",
            text: "¡Que El Alero siga cobijando las risas de todos los niños por 100 años más! 🎈",
            date: "2026-06-07T22:34:50.000Z"
          },
          {
            id: 2,
            author: "Héctor del Barrio",
            text: "Felices 10 años al lugar donde aprendimos a tejer la trama comunitaria y a reír sin miedos. ✨",
            date: "2026-06-06T18:20:00.000Z"
          }
        ];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(seed));
        setWishes(seed);
      }
    } catch (e) {
      console.error("LocalStorage error:", e);
    }
  };

  const handleWishSubmit = async (e: any) => {
    e.preventDefault();
    if (!newWishText.trim()) {
      setWishError("¡Por favor, escribí un deseo para El Alero!");
      return;
    }
    setWishError(null);
    setIsSubmittingWish(true);

    const authorVal = newWishAuthor.trim() ? newWishAuthor.trim() : "Vecino/a anónimo";
    const textVal = newWishText.trim();
    const dateVal = new Date().toISOString();
    const newWishObj = {
      id: Date.now(),
      author: authorVal,
      text: textVal,
      date: dateVal
    };

    let savedOnServer = false;

    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: authorVal,
          text: textVal,
        }),
      });
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          setNewWishText("");
          setNewWishAuthor("");
          savedOnServer = true;
        }
      }
    } catch (err) {
      console.warn("Could not save wish to API server, will save to local storage only", err);
    }

    if (!savedOnServer) {
      // Fallback: Save local-only
      try {
        const stored = localStorage.getItem("el_dorrego_wishes");
        let wishesList = [];
        if (stored) {
          wishesList = JSON.parse(stored);
        } else {
          wishesList = [
            {
              id: 1,
              author: "Vale",
              text: "¡Que El Alero siga cobijando las risas de todos los niños por 100 años más! 🎈",
              date: "2026-06-07T22:34:50.000Z"
            },
            {
              id: 2,
              author: "Héctor del Barrio",
              text: "Felices 10 años al lugar donde aprendimos a tejer la trama comunitaria y a reír sin miedos. ✨",
              date: "2026-06-06T18:20:00.000Z"
            }
          ];
        }
        const updatedList = [newWishObj, ...wishesList];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(updatedList));
        setWishes(updatedList);
        setNewWishText("");
        setNewWishAuthor("");
      } catch (localErr) {
        console.error(localErr);
        setWishError("No se pudo guardar localmente.");
      }
    }
    setIsSubmittingWish(false);
  };

  useEffect(() => {
    const originalBirthday = new Date("2026-06-08T00:00:00");
    const celebrationBirthday = new Date("2026-06-27T00:00:00");
    const now = new Date();
    
    // original diff
    const diffOrig = originalBirthday.getTime() - now.getTime();
    setDaysLeftOriginal(Math.ceil(diffOrig / (1000 * 60 * 60 * 24)));
    
    // celebration diff
    const diffCeleb = celebrationBirthday.getTime() - now.getTime();
    setDaysLeftCeleb(Math.ceil(diffCeleb / (1000 * 60 * 60 * 24)));

    // Fetch the stored wishes
    fetchWishes();

    // Cleanup Speech synthesis on unmount so voices don't overlap or leak
    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, []);

  const fantasticPresets = [
    "¡LLUEVEN PIÑATAS GIGANTES DE COLORES DESDE EL CIELO DEL DORREGO!",
    "¡UN BÚHO CON ANTEOJOS ARMA CAJITAS EN LA FÁBRICA DE OBJETOS!",
    "¡EL DIARIO EL DORREGO ES DECLARADO EMBAJADA DE LA RISA INTERGALÁCTICA!",
    "¡EL SÁBADO 27 DE JUNIO EL DÍA TENDRÁ 48 HORAS PARA PODER FESTEJAR MÁS!",
    "¡LAS CAJITAS SORPRESA DE LA SEGUNDA MESA COBRAN VIDA Y BAILAN CUMBIA SANTAFESINA!"
  ];

  const doodles = [
    { char: "🎈", label: "Globo alegre" },
    { char: "🦉", label: "Búho del patio" },
    { char: "🌸", label: "Flor silvestre" },
    { char: "🎂", label: "Torta de diez" },
    { char: "✨", label: "Chispas de magia" },
    { char: "🎨", label: "Pintura fresca" },
    { char: "🎁", label: "Cajita sorpresa" },
    { char: "⚽", label: "Picadito callejero" }
  ];

  const handleCustomSubmit = (e: any) => {
    e.preventDefault();
    if (customHeadline.trim()) {
      setSelectedHeadline(customHeadline.trim().toUpperCase());
      setCustomHeadline("");
    }
  };

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Party Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderBottomColor: '#0d9488' }}>
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter" style={{ color: '#115e59' }}>
          <span className="text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black]" style={{ backgroundColor: '#0d9488' }}>VOLUMEN 05</span>
          DIARIO EL DORREGO • ¡FECHA CONFIRMADA Y FORMATO FÍSICO! • SANTA FE • 7 DE JUNIO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-teal-700">
          AÑO I • Nº 005<br />
          EDICIÓN ESPECIAL: ¡LA GRAN REPROGRAMACIÓN!
        </div>
      </div>

      {/* Masthead Vol 05 */}
      <header id="inicio-ed5" className="border-b-[12px] border-teal-600 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 8 }}
          className="absolute -top-12 -right-4 bg-yellow-400 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20 animate-pulse"
        >
          ¡MARCÁ EL ALMANAQUE!
        </motion.div>
        
        <a href="#inicio-ed5" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block px-4">
          <div className="absolute inset-0 bg-teal-700 transform -rotate-1 skew-x-2 translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-2xl md:text-5xl font-black tracking-[0.1em] bg-yellow-300 text-black translate-y-[-4px] shadow-[4px_4px_0px_black] uppercase">
             ¡Se Festeja el 27 de Junio! 
          </div>
        </div>

        {/* Dynamic Countdown & Explainer Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* El cumple real es mañana */}
          <div className="bg-white border-4 border-black p-6 relative shadow-[8px_8px_0px_#93c5fd]">
            <div className="absolute top-0 right-0 bg-blue-500 text-white font-black text-[10px] px-3 py-1 uppercase border-b-4 border-l-4 border-black">
              CUMPLE OFICIAL (MAÑANA)
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="w-10 h-10 text-blue-600" />
              <div className="text-left font-black uppercase">
                <span className="text-xs block opacity-60">MAÑANA ES EL DÍA REAL</span>
                <span className="text-2xl leading-none text-blue-600">8 DE JUNIO</span>
                <span className="text-[10px] block opacity-80 mt-1">
                  {daysLeftOriginal === 1 
                    ? "¡CUMPLEAÑOS MAÑANA!" 
                    : daysLeftOriginal === 0 
                      ? "¡HOY CUMPLE 10 AÑOS EL ALERO!" 
                      : daysLeftOriginal !== null && daysLeftOriginal < 0
                        ? `¡CUMPLE FUE HACE ${Math.abs(daysLeftOriginal)} DÍAS!`
                        : `FALTAN ${daysLeftOriginal} DÍAS`
                  }
                </span>
              </div>
            </div>
          </div>

          {/* El festejo es el 27 */}
          <div className="bg-white border-4 border-black p-6 relative shadow-[8px_8px_0px_#fde047]">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-black text-[10px] px-3 py-1 uppercase border-b-4 border-l-4 border-black">
              EL FESTÓN DEL SIGLO
            </div>
            <div className="flex items-center gap-4">
              <PartyPopper className="w-10 h-10 text-amber-500 animate-bounce" />
              <div className="text-left font-black uppercase">
                <span className="text-xs block opacity-60">FESTEJAMOS EL SÁBADO</span>
                <span className="text-2xl leading-none text-teal-700">27 DE JUNIO</span>
                <span className="text-[10px] block opacity-80 mt-1">
                  {daysLeftCeleb !== null && daysLeftCeleb > 0 
                    ? `¡FALTAN ${daysLeftCeleb} DÍAS PARA LA FIESTA!` 
                    : "¡LLEGÓ EL DÍA DE FESTEJAR!"
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Story: REPROGRAMACIÓN CON ALMA */}
      <section id="festejo-ed5" className="relative group">
        <div className="absolute inset-0 bg-teal-50 translate-x-4 translate-y-4 -z-10"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-3/5 space-y-8">
              <div className="inline-block bg-teal-600 text-white px-4 py-2 font-black uppercase text-xl transform -rotate-1 shadow-[4px_4px_0px_black] mb-2 font-mono">
                🎨 CRÓNICA EXCLUSIVA
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter text-black">
                EL DORREGO IMPRESO EN FÍSICO PARA LEER EN LA CALLE
              </h2>

              {/* AUDIOLIBRO / LECTURA COMPARTIDA */}
              <div className="bg-amber-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className={`bg-amber-200 border-2 border-black p-2 rounded-full ${audioState.isSpeaking && !audioState.isPaused ? 'animate-bounce' : ''}`}>
                    <AudioLines className="w-5 h-5 text-amber-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-black uppercase text-amber-900 flex items-center gap-2">
                      <span>📻 AUDIO-LECTURA EXCLUSIVA</span>
                      {audioState.isSpeaking && !audioState.isPaused && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                    </p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">
                      {audioState.isSpeaking 
                        ? `Leyendo sección ${audioState.currentIndex + 1} de ${textToRead.length}...`
                        : "¡Dejá que Marta, vecina de El Alero, te lea la Edición 5 con voz cálida!"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePlaySpeech}
                    className={`px-3 py-1.5 text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_black] flex items-center gap-1.5 transition-all ${
                      audioState.isSpeaking && !audioState.isPaused
                        ? "bg-yellow-300 hover:bg-yellow-400 active:translate-y-0.5"
                        : "bg-teal-600 hover:bg-teal-700 text-white active:translate-y-0.5"
                    }`}
                  >
                    {audioState.isSpeaking && !audioState.isPaused ? (
                      <>
                        <Pause className="w-3 h-3" />
                        <span>pausar</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-white fill-current" />
                        <span>{audioState.isSpeaking ? "continuar" : "escuchar"}</span>
                      </>
                    )}
                  </button>

                  {audioState.isSpeaking && (
                    <button
                      onClick={handleStopSpeech}
                      className="bg-red-500 hover:bg-red-600 text-white p-1.5 border-2 border-black shadow-[2px_2px_0px_black] active:translate-y-0.5 transition-all"
                      title="Detener lectura"
                    >
                      <Square className="w-3 h-3 fill-current" />
                    </button>
                  )}
                </div>
              </div>

              <div className="h-2 bg-yellow-400 w-1/3"></div>
              
              <div className="prose prose-xl font-bold leading-tight space-y-6 text-2xl md:text-3xl text-justify italic">
                <p>
                  El cumpleaños de diez de nuestro amado Alero Coronel Dorrego oficialmente cae este <span className="bg-yellow-200 px-2 not-italic text-black">lunes 8 de Junio (¡mañana!)</span>. ¡Diez años haciendo nacer comunidad desde aquel primer día en el barrio!
                </p>
                <p>
                  Pero como un hito de esta magnitud no cabe solo en pantallas móviles, <span className="text-teal-700 font-black not-italic underline">¡El Diario El Dorrego saldrá en formato físico!</span> Las rotativas analógicas del barrio están listas para imprimir este periódico escolar-comunitario en papel real y rugoso. Lo repartiremos de mano en mano el próximo <span className="bg-teal-100 px-2 not-italic">Sábado 27 de Junio</span>.
                </p>
                <p className="border-l-8 border-teal-500 pl-6 py-2 bg-teal-50/50">
                  ¡Anoten bien! El <span className="text-teal-700 uppercase font-black not-italic border-b-4 border-teal-500">Sábado 27 de Junio</span> nos volveremos a abrazar, a bailar y a disfrutar de todo lo que venimos armando en cada una de las fábricas. ¡Habrá música, juegos, mantitas y por supuesto, sorpresas!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-black text-white px-4 py-2 font-black uppercase text-sm">
                  <Newspaper className="w-5 h-5 text-yellow-400" />
                  También en papel físico
                </div>
                <div className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_black]">
                  #27DeJunioSeFesteja
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 space-y-6">
              {/* Fábrica de Objetos - Al final del recorrido con 2 mesas */}
              <div className="relative transform rotate-1">
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3"></div>
                <div className="relative border-4 border-black bg-white p-2">
                  <div className="aspect-[3/4] bg-slate-200 border-2 border-black overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=600" 
                      alt="Fábrica de objetos al final del recorrido en el Alero" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-teal-500/10 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-black p-3 text-center">
                      <p className="font-black uppercase text-xs leading-none">FÁBRICA DE OBJETOS</p>
                      <p className="text-[10px] font-bold mt-1 opacity-90 uppercase text-rose-600 animate-pulse">¡AL FINAL DEL RECORRIDO!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_black] transform -rotate-1 space-y-4">
                <div className="border-b-4 border-black pb-3">
                  <h3 className="font-black uppercase text-lg leading-tight flex items-center gap-2">
                    🛠️ FÁBRICA DE OBJETOS
                  </h3>
                  <p className="text-xs font-bold uppercase opacity-85 mt-1">
                    Ubicada al final del recorrido. ¡Aquí ya no hacemos más bonetes, sino pura fiesta colgante y sorpresas!
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Mesa 1 */}
                  <div className="bg-white border-2 border-black p-3 shadow-[3px_3px_0px_black] transform rotate-1">
                    <h4 className="font-black text-xs uppercase text-teal-800 flex items-center gap-1.5">
                      📌 MESA 1: TIERRAS DE PIÑATAS COLGANTES
                    </h4>
                    <p className="text-xs font-semibold text-gray-850 mt-1 leading-snug">
                      En esta mesa estamos armando las <strong>piñatas coloridas y gigantes para colgar en todos lados</strong> de El Alero. ¡Estallarán de alegría y movimiento para celebrar los diez años!
                    </p>
                  </div>

                  {/* Mesa 2 */}
                  <div className="bg-white border-2 border-black p-3 shadow-[3px_3px_0px_black] transform -rotate-1">
                    <h4 className="font-black text-xs uppercase text-rose-700 flex items-center gap-1.5">
                      ✂️ MESA 2: MOLDES PARA RECORTE Y CAJITAS
                    </h4>
                    <p className="text-xs font-semibold text-gray-850 mt-1 leading-snug">
                      Aquí tenemos los <strong>moldes de cartulina listos para recortar y armar las cajitas de sorpresas</strong>. Adentro de cada una vas a ver una sorpresa preciosa, ¡una hermosa sorpresita de cumpleaños creada junto a la Fábrica de la Palabra!
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-black uppercase text-center border-t border-black/10 text-gray-700">
                  ⚠️ ¡ATENCIÓN: CHAU BONETES, BIENVENIDAS LAS PIÑATAS COLGADAS!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Module: TALLER DE TITULARES FANTÁSTICOS & DIBUJOS AL COSTADO */}
      <section className="bg-amber-50 border-8 border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-pink-500 text-white font-black px-6 py-2 uppercase text-sm border-b-4 border-l-4 border-black">
          SÚPER DIVERTIDO
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Newspaper className="w-12 h-12 text-teal-600" />
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                  TALLER DE TITULARES FANTÁSTICOS
                </h2>
                <p className="text-sm font-bold text-gray-750 uppercase">
                  "Es muy aburrido poner una historia real... ¡Creamos el futuro con titulares mágicos!"
                </p>
              </div>
            </div>
          </div>

          <div className="h-1 bg-black w-full"></div>

          {/* Real-time interactive Preview - Showcasing selected drawing next to headline */}
          <div className="relative bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#0d9488] text-center transform rotate-1 my-6 min-h-[260px] flex flex-col justify-center items-center">
            <div className="absolute top-2 left-4 text-[10px] font-black uppercase tracking-widest text-teal-600">
               --- PRIMERA PLANA DE LA EDICIÓN IMPRESA ---
            </div>
            
            <div className="flex flex-row items-center justify-center gap-6 max-w-3xl">
              {/* Left Sticker/Drawing */}
              <motion.div 
                key={`left-${selectedDoodle}`}
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: -15, scale: 1.4 }}
                className="text-5xl md:text-7xl select-none hidden sm:block filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
              >
                {selectedDoodle}
              </motion.div>

              <div className="flex flex-col items-center">
                <motion.h3 
                  key={selectedHeadline}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl md:text-4xl font-serif font-black tracking-tight leading-none uppercase italic text-teal-950 mb-4 px-2"
                  style={{ fontFamily: 'Special Elite, serif' }}
                >
                  "{selectedHeadline}"
                </motion.h3>
                
                <p className="text-xs font-black uppercase text-teal-700 border-t-2 border-dashed border-teal-600 pt-2 px-8">
                  ¡Este titular saldrá impreso con dibujos al lado! Porque a la gente que quiere dibujar la dejamos plasmar toda su imaginación.
                </p>
              </div>

              {/* Right Sticker/Drawing */}
              <motion.div 
                key={`right-${selectedDoodle}`}
                initial={{ rotate: 45, scale: 0 }}
                animate={{ rotate: 15, scale: 1.4 }}
                className="text-5xl md:text-7xl select-none filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
              >
                {selectedDoodle}
              </motion.div>
            </div>
          </div>

          {/* Selector & Inputs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            
            {/* Presets Column */}
            <div className="space-y-3 lg:col-span-1">
              <p className="text-xs font-black uppercase text-gray-600">1. ELEGÍ TU TITULAR FANTÁSTICO:</p>
              <div className="flex flex-col gap-2">
                {fantasticPresets.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedHeadline(preset)}
                    className={`text-left text-xs font-black p-3 border-2 border-black transition-all uppercase ${selectedHeadline === preset ? 'bg-teal-600 text-white translate-x-1 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🚀 {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Column with Doodle selection */}
            <div className="space-y-4 lg:col-span-1 bg-white border-4 border-black p-6 shadow-[5px_5px_0px_black]">
              <p className="text-xs font-black uppercase text-gray-600 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-pink-500" /> 2. O INVENTÁ TU PROPIO TEXTO ALOCADO:
              </p>
              
              <form onSubmit={handleCustomSubmit} className="space-y-3">
                <textarea
                  value={customHeadline}
                  onChange={(e) => setCustomHeadline(e.target.value)}
                  placeholder="Ej: ¡UNA CHANCHA GIGANTE VUELA SOBRE COMPLEJO EL DORREGO!"
                  maxLength={120}
                  className="w-full border-4 border-black p-3 text-xs font-bold uppercase placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 h-24"
                />
                
                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-teal-600 transition-colors py-2 text-xs font-black uppercase border-2 border-black shadow-[3px_3px_0px_#0d9488]"
                >
                  ¡CREAR TITULAR!
                </button>
              </form>

              <div className="border-t-2 border-black/10 pt-4">
                <p className="text-xs font-black uppercase text-gray-600 mb-2">🎨 3. ¿DIBUJAR AL LADO? ¡SÍ, SE PUEDE!</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight mb-2">
                  "Como hay gente que quiere dibujar junto al titular, ¡los dejamos expresarse libremente! Elegí un dibujo para plasmar al lado de tus letras:"
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {doodles.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDoodle(d.char)}
                      title={d.label}
                      className={`text-2xl p-2 border-2 border-black rounded transition-all ${selectedDoodle === d.char ? 'bg-yellow-300 scale-110 shadow-[2px_2px_0px_black]' : 'bg-gray-50 hover:bg-white'}`}
                    >
                      {d.char}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Explainer: ¿Y QUÉ ES UN DIARIO? */}
            <div className="space-y-3 lg:col-span-1 bg-blue-50 border-4 border-black p-6 shadow-[8px_8px_0px_#3b82f6] flex flex-col justify-between">
              <div>
                <p className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded mb-2">
                  💡 PREGUNTA DEL PATIO
                </p>
                <h3 className="font-serif italic font-black text-xl text-blue-950 uppercase leading-none">
                  ¿Qué es un Diario?
                </h3>
                <p className="text-xs font-black uppercase text-blue-700 mb-2">
                  (Para quienes no sabían)
                </p>
                <div className="h-0.5 bg-blue-200 my-2"></div>
                <p className="text-xs font-bold text-blue-900 leading-snug uppercase">
                  "En los talleres del Alero nos dimos cuenta de que hay gente que no sabe qué es un diario físico impreso... ¡y tiene todo el sentido en estos tiempos! Hoy les contamos con mucho amor: un diario es un papel grande lleno de historias del barrio, verdades compartidas y fantasías. Es como una carta gigante escrita por muchos vecinos para guardar los sueños de El Alero, el brillo de las fábricas y recordar cuándo nos volvemos a abrazar."
                </p>
              </div>

              <div className="border-t border-blue-200 pt-3 text-[10px] font-black text-blue-600 flex items-center gap-1">
                <span>📖 ¡CULTURA E HISTORIAS DE NUESTRO BARRIO!</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mini Section: Las Fábricas Siguen Libres & Buzón de Deseos */}
      <div className="space-y-8">
        
        {/* EL ALMA TEXTIL */}
        <section className="bg-teal-900 text-white border-4 border-black p-8 shadow-[10px_10px_0px_yellow]">
          <h2 className="text-3xl font-black mb-6 uppercase flex items-center gap-3 justify-center md:justify-start">
             <Scissors className="w-8 h-8 text-yellow-300" /> EL ALMA TEXTIL
          </h2>
          <div className="space-y-4 text-xl font-bold italic leading-tight text-center md:text-left max-w-4xl">
            <p>"Las mantitas siguen bordándose puntada tras puntada para los recién nacidos de junio. El frío santafesino nos encuentra abrigados y unidos."</p>
            <div className="border-t-2 border-white/20 pt-4 font-black uppercase text-xs tracking-widest text-teal-300">
               Fábrica Bienvenida al Mundo Textil
            </div>
          </div>
        </section>

        {/* BUZÓN DE NUESTROS SUEÑOS Y DESEOS */}
        <section className="bg-yellow-100 text-black border-4 border-black p-6 md:p-8 shadow-[12px_12px_0px_black] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-teal-600 text-white font-black px-4 py-1.5 uppercase text-xs border-b-2 border-l-2 border-black">
            📬 COMUNIDAD ACTIVA
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight flex items-center gap-3">
                💌 EL BUZÓN DE DESEOS DEL ALERO
              </h2>
              <p className="text-xs font-black uppercase text-teal-850 mt-1">
                Escribí tu deseo para los 10 años de El Alero. ¡Quedará guardado para siempre en el corazón del diario!
              </p>
            </div>

            {/* Input & List Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Write wish column */}
              <div className="lg:col-span-1 bg-white border-4 border-black p-5 shadow-[4px_4px_0px_black] space-y-4 flex flex-col justify-between">
                <form onSubmit={handleWishSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase text-gray-700 block">
                      👤 ¿Cómo te llamás? (O vecino/a):
                    </label>
                    <input
                      type="text"
                      value={newWishAuthor}
                      onChange={(e) => setNewWishAuthor(e.target.value)}
                      placeholder="Ej: Valeria Carolina, Juan..."
                      maxLength={40}
                      className="w-full border-2 border-black px-3 py-2 text-xs font-bold uppercase placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-50/20"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase text-gray-700 block">
                      ✍️ Tu deseo mágico para El Alero:
                    </label>
                    <textarea
                      value={newWishText}
                      onChange={(e) => setNewWishText(e.target.value)}
                      placeholder="Ej: Que siempre haya risas, música, pintura y encuentros hermosos en el patio..."
                      maxLength={200}
                      required
                      className="w-full border-2 border-black p-3 text-xs font-semibold placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 h-28 bg-yellow-50/20"
                    />
                    <div className="flex justify-between items-center text-[9px] font-bold text-gray-500 mt-1 uppercase">
                      <span>{newWishText.length}/200 caracteres</span>
                    </div>
                  </div>

                  {wishError && (
                    <div className="text-[10px] bg-red-100 border border-red-400 text-red-700 p-2 font-black uppercase">
                      ⚠️ {wishError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmittingWish}
                    className="w-full bg-black text-white hover:bg-teal-600 active:translate-y-1 disabled:opacity-50 transition-all py-3 text-xs font-black uppercase border-2 border-black shadow-[4px_4px_0px_#115e59]"
                  >
                    {isSubmittingWish ? "Guardando..." : "✨ ¡MANDAR DESEO AL BUZÓN!"}
                  </button>
                </form>

                <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight border-t border-gray-100 pt-3">
                  💡 Este buzón guarda los deseos directamente en el servidor. Tu mensaje permanecerá visible para todas las personas que entren, sin borrarse al actualizar.
                </p>
              </div>

              {/* Show wishes board */}
              <div className="lg:col-span-2 space-y-3">
                <p className="text-xs font-black uppercase text-teal-900 border-b-2 border-dashed border-teal-800 pb-1 flex items-center gap-1.5">
                  ✨ DESEOS RECIBIDOS ({wishes.length})
                </p>
                
                {wishes.length === 0 ? (
                  <div className="bg-white border-2 border-black border-dashed p-10 text-center text-xs font-bold text-gray-500 uppercase">
                    Cargando deseos del baúl... ¡Sé el primero en dejar tu huella!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence initial={false}>
                      {wishes.map((wish, index) => {
                        // alternate sticky note colors
                        const colors = [
                          "bg-amber-100 border-amber-300 text-amber-950 shadow-[3px_3px_0px_#d97706]",
                          "bg-rose-100 border-rose-300 text-rose-950 shadow-[3px_3px_0px_#e11d48]",
                          "bg-emerald-100 border-emerald-300 text-emerald-950 shadow-[3px_3px_0px_#059669]",
                          "bg-sky-100 border-sky-300 text-sky-950 shadow-[3px_3px_0px_#0284c7]",
                        ];
                        const rotate = index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0";
                        const stickerColor = colors[index % colors.length];

                        return (
                          <motion.div
                            key={wish.id}
                            initial={{ scale: 0.8, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 border-2 border-black rounded ${stickerColor} ${rotate} flex flex-col justify-between min-h-[110px]`}
                          >
                            <p className="text-xs font-bold leading-relaxed italic">
                              "{wish.text}"
                            </p>
                            <div className="mt-2 pt-2 border-t border-black/10 flex justify-between items-center text-[10px] font-black uppercase">
                              <span className="truncate">👤 - {wish.author}</span>
                              <span className="opacity-60 text-[8px]">
                                {new Date(wish.date).toLocaleDateString("es-AR", {
                                  day: "numeric",
                                  month: "short"
                                })}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* LA FÁBRICA DE LA PALABRA */}
        <section className="bg-pink-100 text-black border-4 border-black p-8 shadow-[10px_10px_0px_black] transform rotate-1">
          <h2 className="text-3xl font-black mb-4 uppercase flex items-center gap-2 justify-center md:justify-start">
            <Paintbrush className="w-8 h-8 text-pink-600 animate-pulse" /> LA FÁBRICA DE LA PALABRA
          </h2>
          <div className="space-y-3">
            <p className="text-xs bg-yellow-300 border-2 border-black p-2 font-black uppercase leading-none inline-block transform -rotate-2">
               ¡HUELE A PINTURA FRESCA! 🎨
            </p>
            <p className="text-xl font-bold leading-tight italic mt-2 text-center md:text-left">
              "Estuvimos remodelando por completo nuestro espacio con paredes coloridas y repisas llenas de brillo. ¡La Fábrica de la Palabra estrena look para imprimir los periódicos físicos y llenarse de titulares y cuentos fantásticos! Además, esta fábrica es el lugar central donde va a estar y nacer el queridísimo periódico de El Alero."
            </p>
          </div>
          <div className="h-1 bg-black w-full my-4"></div>
          <p className="font-black uppercase text-xs text-center md:text-left">Fábrica de la Palabra: hilos, pintura y textos que cruzan el barrio. ¡Aquí vive el Diario de El Alero!</p>
        </section>
      </div>

      {/* Stickers / Footer area */}
      <div className="flex flex-wrap justify-center gap-6 py-8">
        <div className="bg-teal-500 text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          SÁBADO 27 DE JUNIO
        </div>
        <div className="bg-yellow-400 text-black font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer">
          8 DE JUNIO REAL
        </div>
        <div className="bg-black text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
          HACIENDO TRAMA
        </div>
      </div>
    </div>
  );
}

// --- EDICIÓN 06 ---
function Edition06() {
  const [selectedHeadline, setSelectedHeadline] = useState<string>(
    "¡FÁBRICAS DEL ALERO EN OTRA COSA, PERO EL DORREGO GRITA GOL MUNDIALISTA! 🏆"
  );
  const [customHeadline, setCustomHeadline] = useState<string>("");
  const [selectedDoodle, setSelectedDoodle] = useState<string>("⚽");

  // State for database wishes (rebranded as Gritos de Aliento)
  const [wishes, setWishes] = useState<Array<{ id: number; author: string; text: string; date: string }>>([]);
  const [newWishAuthor, setNewWishAuthor] = useState<string>("");
  const [newWishText, setNewWishText] = useState<string>("");
  const [isSubmittingWish, setIsSubmittingWish] = useState<boolean>(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // --- INTERACTIVE SELECT FIELD (MI SELECCIÓN DEL BARRIO) ---
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<Record<string, { name: string; icon: string; power: string }>>({
    arquero: { name: "El Búho del Patio", icon: "🦉", power: "Visión periférica de 180° y tapadas nocturnas" },
    defensor: { name: "La Tejedora del Barrio", icon: "🧶", power: "Defensa impenetrable tejiendo redes" },
    mediocampista: { name: "El Profe de Reciclado", icon: "♻️", power: "Pases precisos de cartón y tapitas" },
    delantero: { name: "La Vecina de las Tortas", icon: "🍰", power: "Gambetas dulces y potencia azucarada" },
    tecnico: { name: "Mi Amigo/a de Banco", icon: "🎒", power: "Compartir lápices y dar abrazos de gol" }
  });

  const neighborhoodPlayers = [
    { name: "El Búho del Patio", icon: "🦉", power: "Visión periférica de 180° y tapadas nocturnas" },
    { name: "La Vecina de las Tortas", icon: "🍰", power: "Gambetas dulces y potencia azucarada" },
    { name: "El Profe de Reciclado", icon: "♻️", power: "Pases precisos de cartón y tapitas" },
    { name: "La Tejedora del Barrio", icon: "🧶", power: "Defensa impenetrable tejiendo redes" },
    { name: "Mi Amigo/a de Banco", icon: "🎒", power: "Compartir lápices y dar abrazos de gol" },
    { name: "El Perro Callejero Manso", icon: "🐶", power: "Gambetas por la izquierda y mimos infinitos" },
    { name: "La Directora del Alero", icon: "🎨", power: "Estrategias de amor y piñatas colosales" }
  ];

  // --- ARCADE GAME: ¡PENAL ALERO ⚽🥅 ---
  const [ballPosition, setBallPosition] = useState<number>(50);
  const [direction, setDirection] = useState<number>(1); // 1 = right, -1 = left
  const [gameState, setGameState] = useState<'prep' | 'aiming' | 'result'>('prep');
  const [gameResult, setGameResult] = useState<'goal' | 'saved' | null>(null);
  const [gameScore, setGameScore] = useState({ goals: 0, saved: 0 });

  // Move target pointer during aiming phase
  useEffect(() => {
    if (gameState !== 'aiming') return;
    const interval = setInterval(() => {
      setBallPosition(pos => {
        let next = pos + direction * 5;
        if (next >= 100) {
          setDirection(-1);
          return 100;
        }
        if (next <= 0) {
          setDirection(1);
          return 0;
        }
        return next;
      });
    }, 24);
    return () => clearInterval(interval);
  }, [gameState, direction]);

  const handleKick = () => {
    if (gameState !== 'aiming') return;
    setGameState('result');

    // Middle area (Goalkeeper block zone) is 30% to 70%.
    // Landing < 30 or > 70 scores a phenomenal goal!
    const isGoal = ballPosition < 30 || ballPosition > 70;

    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      if (isGoal) {
        setGameResult('goal');
        setGameScore(prev => ({ ...prev, goals: prev.goals + 1 }));
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.35);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      } else {
        setGameResult('saved');
        setGameScore(prev => ({ ...prev, saved: prev.saved + 1 }));
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, audioCtx.currentTime + 0.25);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      }
    } catch (e) {
      if (isGoal) {
        setGameResult('goal');
        setGameScore(prev => ({ ...prev, goals: prev.goals + 1 }));
      } else {
        setGameResult('saved');
        setGameScore(prev => ({ ...prev, saved: prev.saved + 1 }));
      }
    }
  };

  const resetGame = () => {
    setBallPosition(50);
    setGameState('prep');
    setGameResult(null);
  };

  // --- AUDIO / TEXT TO SPEECH (VOZ MUNDIALISTA DE NUESTRO BARRIO) ---
  const [audioState, setAudioState] = useState<{
    isSpeaking: boolean;
    isPaused: boolean;
    currentIndex: number;
  }>({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1
  });

  const textToRead = [
    "¡Hola vecinas y vecinos! Bienvenidos a la gloriosa Edición Mundial de El Dorrego.",
    "Aunque en las fábricas textiles y de objetos no estén haciendo nada del mundial, porque se encuentran cosiendo a mil las mantitas abrigadas para el frío y diseñando las piñatas gigantes para el cumpleaños del Alero, ¡este diario de las infancias cree fervientemente que el potrero tiene que gritar gol!",
    "En esta edición especial celeste y blanco te traemos un súper pizarrón táctico interactivo: ¡hacé click para armar tu Selección Ideal del Barrio con El Búho del Patio, la Vecina de las Tortas y tus amigos!",
    "Además, desafía tus reflejos en el interactivo de Penales: ¡conviértete en goleador de Coronel Dorrego contra nuestro hábil guardameta el Búho!",
    "Y no dejes de escribir tu Grito de Aliento en el Buzón de Nube. Qué tus palabras viajen y se guarden por siempre en nuestro baúl digital. ¡Abrazo gigante y vamos Argentina siempre adelante!"
  ];

  const speakChunk = (index: number) => {
    if (index >= textToRead.length) {
      setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      return;
    }
    
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn("speechSynthesis cancel error", e);
    }
    
    const utterance = new SpeechSynthesisUtterance(textToRead[index]);
    
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith("es-AR")) ||
                         voices.find(v => v.lang.startsWith("es-UY")) ||
                         voices.find(v => v.lang.startsWith("es-ES") && v.name.toLowerCase().includes("female")) ||
                         voices.find(v => v.lang.startsWith("es-MX")) ||
                         voices.find(v => v.lang.startsWith("es-ES")) ||
                         voices.find(v => v.lang.startsWith("es"));
    
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    utterance.lang = spanishVoice ? spanishVoice.lang : "es-AR";
    utterance.pitch = 1.05;
    utterance.rate = 0.9;

    utterance.onend = () => {
      setAudioState(prev => {
        const nextIndex = prev.currentIndex + 1;
        if (nextIndex < textToRead.length) {
          setTimeout(() => speakChunk(nextIndex), 250);
          return { ...prev, currentIndex: nextIndex };
        } else {
          return { isSpeaking: false, isPaused: false, currentIndex: -1 };
        }
      });
    };

    utterance.onerror = (e) => {
      if (e.error !== "interrupted") {
        setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      }
    };

    setAudioState({ isSpeaking: true, isPaused: false, currentIndex: index });
    try {
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("speechSynthesis speak error", err);
    }
  };

  const handlePlaySpeech = () => {
    if (audioState.isSpeaking && audioState.isPaused) {
      window.speechSynthesis.resume();
      setAudioState(prev => ({ ...prev, isPaused: false }));
    } else if (audioState.isSpeaking) {
      window.speechSynthesis.pause();
      setAudioState(prev => ({ ...prev, isPaused: true }));
    } else {
      speakChunk(0);
    }
  };

  const handleStopSpeech = () => {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    setAudioState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
  };

  const getApiUrl = (endpoint: string) => {
    const currentHost = window.location.hostname;
    if (
      currentHost.includes("localhost") || 
      currentHost.includes("127.0.0.1") || 
      currentHost.includes("run.app")
    ) {
      return endpoint;
    }
    return `https://ais-pre-rawgpkbifbfojkwv7g7d5m-112551938117.us-east5.run.app${endpoint}`;
  };

  const fetchWishes = async () => {
    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url);
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          return;
        }
      }
      loadLocalWishes();
    } catch (err) {
      console.warn("Could not fetch wishes", err);
      loadLocalWishes();
    }
  };

  const loadLocalWishes = () => {
    try {
      const stored = localStorage.getItem("el_dorrego_wishes");
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        const seed = [
          {
            id: 1,
            author: "Mateo de la Esquina",
            text: "¡Aguante el Alero y aguante Argentina! Que la copa de la alegría la ganen las infancias del barrio jugando juntas siempre. 🏆⚽",
            date: "2026-06-10T12:00:00.000Z"
          },
          {
            id: 2,
            author: "La Vecina de las Tortas",
            text: "¡Qué golazo de semanario escolar-comunitario! Que siga rodando la pelota del amor y la alegría en Santa Fe. ⚡",
            date: "2026-06-09T18:30:00.000Z"
          }
        ];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(seed));
        setWishes(seed);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleWishSubmit = async (e: any) => {
    e.preventDefault();
    if (!newWishText.trim()) {
      setWishError("¡Por favor, escribí un grito de aliento mundialista!");
      return;
    }
    setWishError(null);
    setIsSubmittingWish(true);

    const authorVal = newWishAuthor.trim() ? newWishAuthor.trim() : "Hincha anónimo de Coronel Dorrego";
    const textVal = newWishText.trim();
    const dateVal = new Date().toISOString();
    const newWishObj = {
      id: Date.now(),
      author: authorVal,
      text: textVal,
      date: dateVal
    };

    let savedOnServer = false;

    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: authorVal,
          text: textVal,
        }),
      });
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          setNewWishText("");
          setNewWishAuthor("");
          savedOnServer = true;
        }
      }
    } catch (err) {
      console.warn("Could not save wish to server API", err);
    }

    if (!savedOnServer) {
      try {
        const stored = localStorage.getItem("el_dorrego_wishes");
        let wishesList = [];
        if (stored) {
          wishesList = JSON.parse(stored);
        } else {
          wishesList = [
            {
              id: 1,
              author: "Mateo de la Esquina",
              text: "¡Aguante el Alero y aguante Argentina! Que la copa de la alegría la ganen las infancias del barrio jugando juntas siempre. 🏆⚽",
              date: "2026-06-10T12:00:00.000Z"
            }
          ];
        }
        const updatedList = [newWishObj, ...wishesList];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(updatedList));
        setWishes(updatedList);
        setNewWishText("");
        setNewWishAuthor("");
      } catch (localErr) {
        console.error(localErr);
        setWishError("No se pudo guardar localmente.");
      }
    }
    setIsSubmittingWish(false);
  };

  useEffect(() => {
    fetchWishes();

    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, []);

  const fantasticPresets = [
    "¡FÁBRICAS DEL ALERO EN OTRA COSA, PERO EL DORREGO GRITA GOL MUNDIALISTA! 🏆",
    "¡EL ALERO DE CORONEL DORREGO SE VISTE DE CELESTE Y BLANCO! 🇦🇷",
    "¡LA ZURDA MÁGICA DE LOS PIBES Y PIBAS GANA LA GRAN COPA DE CORONEL DORREGO! ⚽",
    "¡VAMOS, VAMOS ARGENTINA: EL GRITO DE ALIENTO DE NUESTROS CORAZONES!",
    "¡EL AMOR POR LA CAMISETA Y LA PICARDÍA DEL POTRERO TIENE SU PROPIO DIARIO EN SANTA FE!"
  ];

  const doodles = [
    { char: "⚽", label: "Pelota de fútbol" },
    { char: "🏆", label: "Copa dorada" },
    { char: "🇦🇷", label: "Bandera de aliento" },
    { char: "📣", label: "Megáfono de grito" },
    { char: "✨", label: "Zapatilla mágica" },
    { char: "🧤", label: "Atajada del buho" },
    { char: "🥅", label: "Arco del Alero" },
    { char: "🧉", label: "Mate de vestuario" }
  ];

  const handleCustomSubmit = (e: any) => {
    e.preventDefault();
    if (customHeadline.trim()) {
      setSelectedHeadline(customHeadline.trim().toUpperCase());
      setCustomHeadline("");
    }
  };

  const changePlayer = (position: string, player: typeof neighborhoodPlayers[0]) => {
    setSelectedPlayers(prev => ({
      ...prev,
      [position]: player
    }));
    setSelectedPosition(null);
  };

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Sky Blue (Celeste) & Gold Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderBottomColor: '#38bdf8' }}>
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-400 via-yellow-500 to-sky-700">
          <span className="text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black] bg-gradient-to-r from-sky-500 to-blue-600">VOLUMEN 06</span>
          DIARIO EL DORREGO • EDICIÓN ESPECIAL MUNDIALISTA ⚽🏆 • SANTA FE • 10 DE JUNIO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-sky-600">
          AÑO I • Nº 006<br />
          LA PASIÓN CELESTE Y BLANCO EN EL BARRIO
        </div>
      </div>

      {/* Spectacular Masthead with Sky Blue Borders */}
      <header id="inicio-ed6" className="border-b-[12px] border-b-transparent bg-gradient-to-r from-sky-500 via-sky-300 via-yellow-400 via-sky-300 to-sky-500 pb-1.5 mb-12 text-center relative rounded-b-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
        <div className="bg-white py-10 px-4">
          <motion.div 
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -8 }}
            className="absolute -top-10 -right-2 bg-gradient-to-r from-sky-400 via-yellow-300 to-sky-300 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20 animate-bounce"
          >
            🏆 EL DORREGO MUNDIALISTÍSIMO ⚽
          </motion.div>
          
          <a href="#inicio-ed6" className="block hover:opacity-80 transition-opacity">
            <h1 className="text-[12vw] md:text-[8.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-500 via-yellow-500 via-sky-500 to-blue-700 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              EL DORREGO
            </h1>
          </a>
          
          <div className="relative inline-block px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-400 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-3 px-8 md:px-16 text-lg md:text-4xl font-black tracking-[0.1em] bg-yellow-300 text-black translate-y-[-4px] shadow-[6px_6px_0px_black] uppercase leading-tight">
              ⚽ ¡La pasión más linda del potrero! ⚽
            </div>
          </div>

          <div className="mt-8 text-sm md:text-lg font-black max-w-xl mx-auto uppercase tracking-wide bg-sky-100 border-2 border-black/20 p-2.5 rounded-lg">
            "Las fábricas del Alero están concentradas en otros hermosos proyectos... ¡Pero la celeste y blanca se siente en el diario!"
          </div>
        </div>
      </header>

      {/* EDITORIAL COLUMN BLOCK: "¿Y LAS FÁBRICAS? / EL CONTRASTE DEL MUNDIAL" */}
      <section id="mundial-ed6" className="relative group">
        <div className="absolute inset-0 bg-sky-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-sky-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl bg-gradient-to-tr from-sky-50/50 via-white to-sky-100/50">
          
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-sky-300/30 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-yellow-200/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* Left: Big Editorial Warning Box */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-sky-500 to-blue-600 text-white p-6 border-4 border-black shadow-[6px_6px_0px_black] flex flex-col justify-between rounded-xl transform -rotate-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-sky-600 rounded-full p-2 border-2 border-black animate-pulse w-8 h-8 flex items-center justify-center font-black text-xl">ℹ️</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">¿Y LAS FÁBRICAS?</h3>
                </div>
                <p className="text-2xl font-serif font-black uppercase italic leading-none mb-4 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)] text-yellow-300">
                  ¡EN LAS FÁBRICAS NO SE HACE NADA DEL MUNDIAL!
                </p>
                <div className="bg-black/25 p-3 rounded border border-white/20 mb-4 text-center">
                  <p className="text-base font-black text-white leading-normal uppercase">
                    ¡Ellos tejen y cosen abrigos, pero nosotros gritamos goles digitales!
                  </p>
                </div>
                <p className="text-xs font-bold leading-relaxed opacity-90">
                  Si entrás hoy a la Fábrica de Objetos o a la Fábrica Textil del Alero, no vas a ver botines ni camisetas. ¡Ellos están a mil terminando mantas de invierno para el barrio y preparando piñatas gigantes para el 10º aniversario del Alero! Por eso, nos encargamos nosotros: ¡El Dorrego refleja el Mundial de las infancias!
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest uppercase font-black">FÁBRICA FÍSICA INTACTA</span>
                <span className="bg-yellow-300 text-black text-xs font-black px-2.5 py-1 rounded shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">EL DORREGO MUNDIAL</span>
              </div>
            </div>

            {/* Right: The World Cup Decree */}
            <div className="w-full md:w-3/5 space-y-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-sky-500 text-white px-3 py-1 font-black uppercase text-xs transform rotate-1 shadow-[3px_3px_0px_black] mb-3">
                  📢 COMUNICADO MUNDIALISTA DE LAS INFANCIAS
                </span>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-black leading-none mb-4">
                  ¡El Dorrego sí o sí tiene que brillar en celeste y blanco!
                </h3>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  Las cosas como son: en los talleres del Alero físico están sumergidos en hermosísimas misiones de tejido invernal y carpintería decorativa. ¡Y está genial! Pero los periodistas de <strong className="text-sky-600">El Dorrego</strong> sabemos que la pasión del barrio corre a mil por hora. 
                </p>
                <p className="text-sm font-bold text-gray-700 leading-relaxed mt-2">
                  Por eso, lanzamos este volumen mundialista interactivo. Porque el fútbol en el barrio es encuentro, es correr libres en los potreros, es reírse con los amigos y es armar equipos indestructibles basados en el afecto de Coronel Dorrego. ¡Acá abajo arranca el festival interactivo!
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-black text-sky-950 uppercase">
                  <div className="flex items-center gap-2 bg-sky-100 p-2 border-2 border-black/10 rounded">
                    ⚽ Mi Selección del Barrio Interactiva
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-100 p-2 border-2 border-black/10 rounded">
                    🥅 Juego arcade interactivo "Penal Alero"
                  </div>
                  <div className="flex items-center gap-2 bg-cyan-100 p-2 border-2 border-black/10 rounded">
                    🎙️ Audio-vecino con aliento de potrero
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 p-2 border-2 border-black/10 rounded">
                    📢 Gritos de aliento guardados en nube
                  </div>
                </div>
              </div>

              {/* AUDIOLIBRO / LECTURA COMPARTIDA */}
              <div className="bg-sky-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-sky-200 border-2 border-black p-2 rounded-full ${audioState.isSpeaking && !audioState.isPaused ? 'animate-bounce' : ''}`}>
                    <AudioLines className="w-5 h-5 text-sky-900" />
                  </div>
                  <div className="text-left font-sans">
                    <p className="text-[11px] font-black uppercase text-sky-900 flex items-center gap-2">
                      <span>📻 AUDIO-LECTURA REBELDE (MUNDIALISTA)</span>
                      {audioState.isSpeaking && !audioState.isPaused && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                    </p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">
                      {audioState.isSpeaking 
                        ? (audioState.isPaused ? "Lectura mundialista en pausa..." : "Gritando goles del volumen 6 de El Dorrego...") 
                        : "¡Sintonizá y escuchá a nuestra vecina narradora!"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePlaySpeech}
                    className="flex-1 sm:flex-initial bg-sky-400 hover:bg-sky-300 border-2 border-black px-3 py-1.5 text-xs font-black uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    {audioState.isSpeaking && !audioState.isPaused ? (
                      <>
                        <Pause className="w-3.5 h-3.5" /> Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> Escuchar
                      </>
                    )}
                  </button>
                  {audioState.isSpeaking && (
                    <button
                      onClick={handleStopSpeech}
                      className="bg-red-500 hover:bg-red-400 text-white border-2 border-black px-2 py-1.5 text-xs font-black uppercase flex items-center justify-center gap-1 shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      title="Detener audio"
                    >
                      <Square className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SQUAD BUILDER WIDGET: "MI SELECCIÓN DEL BARRIO" */}
      <section id="seleccion-ed6" className="relative group">
        <div className="absolute inset-0 bg-yellow-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-yellow-400"></div>
        
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] rounded-2xl space-y-8">
          
          <div className="text-center md:text-left border-b-4 border-black pb-4">
            <span className="bg-yellow-400 border-2 border-black text-black text-xs font-black px-2.5 py-1 uppercase rounded tracking-wider shadow-[2px_2px_0px_black] inline-block mb-3">
              📋 PIZARRÓN TÁCTICO INTERACTIVO
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-none">
              ¡ARMÁ LA SELECCIÓN INFANTIL-COMUNITARIA!
            </h3>
            <p className="text-xs font-black text-gray-500 mt-2">
              Hacé click en cada posición de la cancha para designar quién cuidará de la felicidad y el juego en nuestro potrero.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Football Pitch representation (7 cols) */}
            <div className="lg:col-span-7 bg-[#2e7d32] border-4 border-black p-4 relative rounded-2xl shadow-[8px_8px_0px_black] overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Pitch lines */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-white pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-white rounded-full pointer-events-none"></div>
              <div className="absolute top-0 left-1/4 right-1/4 h-16 border-b-2 border-x-2 border-white pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-16 border-t-2 border-x-2 border-white pointer-events-none"></div>

              {/* Position Markers */}
              <div className="relative z-10 flex flex-col justify-between h-[450px] py-4">
                
                {/* Director Técnico card */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedPosition('tecnico')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedPosition === 'tecnico' ? 'bg-yellow-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-black text-white hover:bg-gray-800'}`}
                  >
                    👵 DT: {selectedPlayers.tecnico.name} {selectedPlayers.tecnico.icon}
                  </button>
                </div>

                {/* Delantero star */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedPosition('delantero')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedPosition === 'delantero' ? 'bg-yellow-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    ⚡ Delantero/a: {selectedPlayers.delantero.name} {selectedPlayers.delantero.icon}
                  </button>
                </div>

                {/* Mediocampista */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedPosition('mediocampista')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedPosition === 'mediocampista' ? 'bg-yellow-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🧠 Mediocentro: {selectedPlayers.mediocampista.name} {selectedPlayers.mediocampista.icon}
                  </button>
                </div>

                {/* Defensor */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedPosition('defensor')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedPosition === 'defensor' ? 'bg-yellow-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🛡️ Defensor/a: {selectedPlayers.defensor.name} {selectedPlayers.defensor.icon}
                  </button>
                </div>

                {/* Arquero/a */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedPosition('arquero')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedPosition === 'arquero' ? 'bg-yellow-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🧤 Arquero/a: {selectedPlayers.arquero.name} {selectedPlayers.arquero.icon}
                  </button>
                </div>

              </div>

            </div>

            {/* Selection & Detail controls (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {selectedPosition ? (
                <div className="bg-yellow-50 border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_black] space-y-3">
                  <h4 className="text-sm font-black uppercase text-pink-600 flex items-center gap-1">
                    <span>🔄 Seleccioná quién juega en la posición:</span> <span className="underline">{selectedPosition}</span>
                  </h4>
                  <div className="space-y-1 max-h-[260px] overflow-y-auto">
                    {neighborhoodPlayers.map((player, idx) => (
                      <button
                        key={idx}
                        onClick={() => changePlayer(selectedPosition, player)}
                        className="w-full text-left font-black text-xs p-2 border-2 border-black/10 hover:border-black rounded-lg bg-white hover:bg-yellow-100 flex items-center justify-between transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{player.icon}</span>
                          <span>{player.name}</span>
                        </span>
                        <span className="text-[10px] text-gray-500 font-bold max-w-[150px] truncate">
                          {player.power}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedPosition(null)}
                    className="w-full bg-black text-white hover:bg-gray-800 text-xs font-black py-2 uppercase border-2 border-black shadow-[2px_2px_0px_black]"
                  >
                    Cancelar Selección
                  </button>
                </div>
              ) : (
                <div className="bg-sky-50 border-4 border-black p-5 rounded-xl shadow-[4px_4px_0px_black] space-y-4">
                  <h4 className="text-lg font-black uppercase text-sky-950 flex items-center gap-2">
                    🎖️ PLANTEO TÁCTICO SELECCIONADO
                  </h4>
                  <p className="text-xs font-bold text-gray-600 leading-normal">
                    Este equipo representa la esencia viva de Coronel Dorrego. Pasá el cursor o clickeá una posición en el pizarrón verde para cambiar quien juega allí. ¡Unidos somos invencibles!
                  </p>
                  
                  <div className="border-t border-black/15 pt-3 space-y-2 text-xs">
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-sky-800">🧤 ARQUERO/A:</span>
                      <div className="text-right">
                        <p className="font-black text-gray-900">{selectedPlayers.arquero.name} {selectedPlayers.arquero.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedPlayers.arquero.power}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-sky-800">🛡️ DEFENSA:</span>
                      <div className="text-right">
                        <p className="font-black text-gray-900">{selectedPlayers.defensor.name} {selectedPlayers.defensor.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedPlayers.defensor.power}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-sky-800">🧠 MEDIOCENTRO:</span>
                      <div className="text-right">
                        <p className="font-black text-gray-900">{selectedPlayers.mediocampista.name} {selectedPlayers.mediocampista.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedPlayers.mediocampista.power}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-sky-800">⚡ DELANTERO/A:</span>
                      <div className="text-right">
                        <p className="font-black text-gray-900">{selectedPlayers.delantero.name} {selectedPlayers.delantero.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedPlayers.delantero.power}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-black text-yellow-700">📋 DIRECTOR/A TÉCNICO/A:</span>
                      <div className="text-right">
                        <p className="font-black text-gray-900">{selectedPlayers.tecnico.name} {selectedPlayers.tecnico.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedPlayers.tecnico.power}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Quote Sticker */}
              <div className="bg-gradient-to-tr from-sky-400 to-indigo-500 text-white p-4 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl transform rotate-1">
                <span className="text-[9px] font-mono font-black uppercase tracking-widest block text-yellow-300">POTRERO SENTIMIENTO</span>
                <p className="font-black text-xs leading-normal mt-1 italic">
                  "El potrero del Alero tiene una mística de hierro: no se rinde, teje mantas, arma de cartón los trofeos secundarios, y festeja los domingos bajo el sol santafesino de Dorrego."
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MINI ARCADE PENAL GAME: "¡PENAL ALERO!" */}
      <section id="penal-ed6" className="relative group">
        <div className="absolute inset-0 bg-red-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-red-400"></div>
        
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] rounded-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
            <div>
              <span className="bg-red-500 border-2 border-black text-white text-xs font-black px-2.5 py-1 uppercase rounded tracking-wider shadow-[2px_2px_0px_black] inline-block mb-1">
                🎮 MINI-JUEGO INTERACTIVO
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight text-red-950">
                🥅 ¡PENAL ALERO MUNDIALISTA! 🥅
              </h3>
            </div>
            <div className="bg-gray-100 border-2 border-black p-2 font-mono text-xs font-black rounded-lg shadow-[2px_2px_0px_black]">
              ⚽ MI TABLERO: <span className="text-emerald-600">GOLES: {gameScore.goals}</span> | <span className="text-rose-600">ATAJADAS: {gameScore.saved}</span>
            </div>
          </div>

          <p className="text-xs font-black text-gray-600">
            Hacé click en <strong className="text-red-500">EMPEZAR A APUNTAR</strong> para ver el indicador oscilar. Luego calculá tu potencia y pateá hacia los bordes alejados: ¡El Búho del Patio defenderá el arco quedándose en el centro!
          </p>

          <div className="border-4 border-black bg-gradient-to-b from-[#1b5e20] to-[#2e7d32] p-6 relative rounded-xl h-72 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Soccer Goalpost */}
            <div className="w-4/5 mx-auto h-40 border-t-8 border-x-8 border-white bg-white/5 relative flex justify-center items-end rounded-t-lg shadow-inner">
              {/* Goal Net details */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

              {/* Goalkeeper (The Owl) */}
              <motion.div 
                animate={gameState === 'aiming' ? { x: [-30, 30, -30] } : { x: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 font-black text-5xl z-10 select-none cursor-help"
                title="El Búho Custodio"
              >
                🦉
              </motion.div>

              {/* Goal keeper glove helpers */}
              <div className="absolute bottom-2 left-[20%] text-2xl animate-pulse opacity-50 select-none">🥅</div>
              <div className="absolute bottom-2 right-[20%] text-2xl animate-pulse opacity-50 select-none">🥅</div>

              {/* Visual Results Overlay */}
              {gameResult === 'goal' && (
                <div className="absolute inset-0 bg-emerald-600/90 z-20 flex flex-col items-center justify-center text-white border-2 border-black rounded-t-lg font-black uppercase text-3xl animate-bounce tracking-widest text-shadow-md">
                  <span>⚽ ¡GOOOOOL! ⚽</span>
                  <span className="text-xs mt-2 text-yellow-300">¡BÚHO DESTRONADO POR UN GOLAZO!</span>
                </div>
              )}
              {gameResult === 'saved' && (
                <div className="absolute inset-0 bg-red-600/90 z-20 flex flex-col items-center justify-center text-white border-2 border-black rounded-t-lg font-black uppercase text-3xl animate-pulse tracking-wide">
                  <span>👐 ¡ATAJADA! 👐</span>
                  <span className="text-xs mt-2 text-white/90">¡EL BÚHO ATUVO TU TIRO AL MEDIO!</span>
                </div>
              )}
            </div>

            {/* Control Dashboard / Aiming Bar */}
            <div className="relative z-10 w-full bg-black/40 border border-white/10 p-3 rounded-lg space-y-2.5">
              
              {/* Slider gauge */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-white/80 uppercase font-black tracking-wider">
                  <span>IZQUIERDA (GOL) 🎯</span>
                  <span className="text-yellow-300">AL CENTRO (ATAJA EL BÚHO) 🦉</span>
                  <span>DERECHA (GOL) 🎯</span>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full border border-black overflow-hidden relative">
                  {/* Highlighted Aim Pointer */}
                  <div 
                    className="absolute top-0 bottom-0 w-4 bg-yellow-400 border-x border-black transition-all duration-[24ms]" 
                    style={{ left: `${ballPosition}%` }}
                  ></div>
                </div>
              </div>

              {/* Control Buttons list */}
              <div className="flex justify-center gap-4">
                {gameState === 'prep' && (
                  <button
                    onClick={() => setGameState('aiming')}
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs px-6 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5"
                  >
                    🚀 EMPEZAR A APUNTAR
                  </button>
                )}

                {gameState === 'aiming' && (
                  <button
                    onClick={handleKick}
                    className="bg-red-500 hover:bg-red-400 text-white font-black text-xs px-8 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5 animate-pulse"
                  >
                    ⚽ ¡PATEAR BALÓN!
                  </button>
                )}

                {gameState === 'result' && (
                  <button
                    onClick={resetGame}
                    className="bg-sky-400 hover:bg-sky-300 text-black font-black text-xs px-6 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5"
                  >
                    ⚽ OTRO TIRO (RESET)
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FUN HEADLINE GENERATOR WITH CELESTE COLOR BLOCKS */}
      <section className="bg-gradient-to-r from-sky-400 via-sky-300 to-yellow-300 border-4 border-black p-1 rounded-2xl shadow-[10px_10px_0px_black]">
        <div className="bg-white p-6 md:p-8 rounded-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-sky-600 animate-pulse" /> PLANILLA DE TITULARES MUNDIALISTAS
            </h3>
            <p className="text-[10px] font-mono font-black text-gray-500 bg-gray-100 px-3 py-1 border-2 border-black rounded uppercase">
              ¡Armá tu titular en celeste y blanco!
            </p>
          </div>

          {/* Selected Headline Box */}
          <div className="bg-sky-50 border-4 border-black p-6 relative shadow-[4px_4px_0px_black] text-center overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 bg-black text-white font-black text-[9px] px-2.5 py-0.5 uppercase">
              PORTADA DE PORTAVOZ INFANTIL
            </div>
            
            <motion.p 
              key={selectedHeadline}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl md:text-4xl font-serif font-black uppercase italic text-black leading-tight tracking-tight my-4"
            >
              {selectedDoodle} "{selectedHeadline}" {selectedDoodle}
            </motion.p>
          </div>

          {/* Headline Selectors & Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <p className="text-xs font-black uppercase mb-3 flex items-center gap-1.5 text-sky-600">
                <span>✨ Elegí una frase fantástica mundialista:</span>
              </p>
              <div className="space-y-1.5 max-h-[180px] overflow-y-auto border-2 border-black/10 p-2.5 bg-gray-50/50 rounded-lg">
                {fantasticPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHeadline(preset)}
                    className="w-full text-left text-xs font-bold p-2 hover:bg-sky-50 border border-transparent hover:border-black/10 rounded transition-all leading-tight uppercase flex items-start gap-2 text-gray-800"
                  >
                    <span className="text-sky-500">•</span>
                    <span>{preset}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <form onSubmit={handleCustomSubmit} className="space-y-2">
                <label className="block text-xs font-black uppercase text-sky-600">
                  ✍️ O redactá tu propio titular mundialista:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customHeadline}
                    onChange={(e) => setCustomHeadline(e.target.value)}
                    placeholder="Ej. ¡Vamos Argentina de Coronel Dorrego!..."
                    className="flex-1 border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-yellow-50 uppercase rounded shadow-[2px_2px_0px_black]"
                    maxLength={100}
                  />
                  <button
                    type="submit"
                    className="bg-sky-400 hover:bg-sky-300 border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded"
                  >
                    Publicar
                  </button>
                </div>
              </form>

              <div>
                <p className="text-xs font-black uppercase text-emerald-600 mb-2">
                  🎨 Adornar con un símbolo deportivo:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {doodles.map((d, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDoodle(d.char)}
                      className={`w-10 h-10 border-2 border-black flex items-center justify-center text-lg rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_0px_black] transition-all hover:-translate-y-0.5 ${selectedDoodle === d.char ? 'bg-gradient-to-br from-sky-200 to-sky-400 border-4 scale-105' : 'bg-white hover:bg-gray-50'}`}
                      title={d.label}
                    >
                      {d.char}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REAL-TIME WISHES BOX IN SPECTACULAR COLORS */}
      <section id="aliento-ed6" className="relative group">
        <div className="absolute inset-0 bg-cyan-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-cyan-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Input Form Column (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <span className="inline-block bg-sky-500 text-white px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[3px_3px_0px_black] mb-2 font-mono">
                💝 COMPARTÍ TU GRITO DE ALIENTO
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                EL ALMACÉN DE ALIENTO
              </h2>
              
              <p className="text-xs font-bold text-gray-700 leading-relaxed bg-cyan-50 border-2 border-black/10 p-3 rounded-lg">
                ¿Qué mensaje de aliento le enviás a la Selección de las Infancias de nuestro Alero? ¡Escribí felicitaciones, gritos de gol comunitario o abrazos para tus vecinos! Se guardará para siempre en nuestro baúl conectado a base de datos.
              </p>

              <form onSubmit={handleWishSubmit} className="space-y-4 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                <div className="space-y-1.5">
                  <label htmlFor="wish-author-input" className="block text-xs font-black uppercase text-sky-700 flex items-center gap-1">
                    👤 ¿Cómo te llamás? (o vecino/a):
                  </label>
                  <input
                    id="wish-author-input"
                    type="text"
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    placeholder="Ej. Mateo, Vecino de Dorrego, Vale..."
                    className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-yellow-50 uppercase rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="wish-text-input" className="block text-xs font-black uppercase text-sky-700">
                    ✍️ Tu grito de aliento para el diario:
                  </label>
                  <textarea
                    id="wish-text-input"
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    placeholder="¡Mete un golazo escribiendo tu mensaje de pasión aquí!..."
                    className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-yellow-50 h-28 resize-none rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    maxLength={200}
                  />
                  <div className="text-right text-[10px] font-black text-gray-500">
                    {newWishText.length}/200 CARACTERES
                  </div>
                </div>

                {wishError && (
                  <div className="bg-red-100 border-2 border-red-500 p-2 text-xs font-black text-red-700 text-center uppercase rounded">
                    ⚠️ {wishError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingWish}
                  className="w-full bg-black hover:bg-gray-800 text-white border-4 border-black py-3 text-xs font-black uppercase transition-all shadow-[4px_4px_0px_#38bdf8] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 rounded-md animate-pulse"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                  <span>{isSubmittingWish ? "Guardando..." : "¡Mandar Aliento al Almacén!"}</span>
                </button>

                <p className="text-[10px] font-bold text-gray-500 leading-tight border-t border-black/10 pt-3">
                  💡 Este baúl de deseos almacena los datos de forma durable. Tu grito de gol vivirá en la nube para siempre, visible para todos.
                </p>
              </form>
            </div>

            {/* List Output Column (3/5) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex border-b-4 border-black pb-2 items-center justify-between text-yellow-500">
                <span className="text-sm font-black uppercase tracking-tight text-sky-600 flex items-center gap-1.5">
                  ✨ GRITOS RECIBIDOS EN LA NUBE ({wishes.length})
                </span>
                <span className="text-xs font-bold text-gray-400 font-mono">
                  HISTORIAL EN NUBE
                </span>
              </div>

              <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
                {wishes.length === 0 ? (
                  <div className="border-4 border-dashed border-black/20 p-8 text-center uppercase font-black text-gray-400 bg-gray-50/50 rounded-xl animate-pulse">
                    Conectando con el almacén celestial... ¡Escribí el primer grito de aliento!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AnimatePresence>
                      {wishes.map((wish, idx) => {
                        // Celeste / White / Gold sticker colour schemes (Mundial colors!)
                        const stickerColors = [
                          "bg-sky-100 border-sky-300 shadow-sky-200",
                          "bg-neutral-50 border-gray-300 shadow-gray-200",
                          "bg-yellow-100 border-yellow-300 shadow-yellow-200",
                          "bg-blue-100 border-blue-200 shadow-blue-200",
                          "bg-cyan-100 border-cyan-300 shadow-cyan-200"
                        ];
                        const stickerColor = stickerColors[idx % stickerColors.length];
                        const rotations = ["rotate-0", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
                        const rotate = rotations[idx % rotations.length];

                        return (
                          <motion.div
                            key={wish.id}
                            initial={{ scale: 0.8, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 border-2 border-black rounded-lg ${stickerColor} ${rotate} flex flex-col justify-between min-h-[120px] shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 transition-all`}
                          >
                            <p className="text-xs font-bold leading-relaxed italic text-gray-950">
                              "{wish.text}"
                            </p>
                            <div className="mt-2 pt-2 border-t border-black/10 flex justify-between items-center text-[10px] font-black uppercase">
                              <span className="truncate text-sky-800">👤 {wish.author}</span>
                              <span className="opacity-60 text-[8px] text-gray-500 font-mono">
                                {new Date(wish.date).toLocaleDateString("es-AR", {
                                  day: "numeric",
                                  month: "short"
                                })}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LATEST ACTION REPORTS FROM THE CREATIVE WORKSHOPS (Contrasted with the World Cup!) */}
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_black] rotate-[-0.5deg] rounded-2xl">
        <h2 className="text-3xl font-black mb-4 uppercase flex items-center gap-2 justify-center md:justify-start drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)] text-yellow-300">
          🎁 MIENTRAS TANTO, NUESTRAS 3 FÁBRICAS SIGUEN AL 100%
        </h2>
        
        <p className="text-xs font-bold text-sky-100 max-w-2xl mb-6">
          Ellos no están fabricando camisetas de Lionel Messi, ¡pero están preparando cosas gloriosas del Alero físico para todos nosotros!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-sky-500 text-white px-2 py-0.5 rounded uppercase font-black">Fábrica de Objetos</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">¡Las piñatas gigantes!</h4>
              <p className="text-xs font-bold text-gray-600 mt-2 leading-relaxed">
                El equipo de artesanos del Alero colocó las estructuras de alambre y cartón para 5 piñatas monumentales. Esperan que soporten más de 10 kilos de sorpresas. ¡Listas para colgar el sábado 27 de junio!
              </p>
            </div>
            <div className="text-[10px] font-black text-indigo-500 border-t border-black/5 pt-3 mt-4">ESTADO: SECADO TERMINADO</div>
          </div>

          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-pink-500 text-white px-2 py-0.5 rounded uppercase font-black">Fábrica textil</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">Mantitas de Invierno</h4>
              <p className="text-xs font-bold text-gray-600 mt-2 leading-relaxed">
                El frío santafesino nos encuentra cosiendo a toda máquina. Se completó el lote de 20 mantitas tejidas por abuelos y familias del barrio, hechas con lana recuperada y retazos coloridos. Se entregarán como abrigo del encuentro.
              </p>
            </div>
            <div className="text-[10px] font-black text-pink-500 border-t border-black/5 pt-3 mt-4">ESTADO: 100% COSTURADO</div>
          </div>

          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-yellow-400 text-black px-2 py-0.5 rounded uppercase font-black">Fábrica de la Palabra</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">Las Rotativas Listas</h4>
              <p className="text-xs font-bold text-gray-600 mt-2 leading-relaxed">
                Nuestras imprentas analógicas preparan un papel de diario rugoso y perfumado para que cada vecino se lleve el semanario escolar-comunitario en la mano. Las notas de los 10 años, cuentos y portadas hechas por ustedes vivirán para siempre.
              </p>
            </div>
            <div className="text-[10px] font-black text-amber-500 border-t border-black/5 pt-3 mt-4">ESTADO: AJUSTETÉCNICO ROTATIVAS</div>
          </div>
        </div>
      </section>

      {/* Stickers / Footer area */}
      <div className="flex flex-wrap justify-center gap-6 py-8">
        <div className="bg-sky-500 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          ¡DORREGO MUNDIALISTA! 🇦🇷
        </div>
        <div className="bg-yellow-400 text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          EL ALERO PASIÓN ⚽
        </div>
        <div className="bg-white text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-2 hover:rotate-0 transition-transform cursor-pointer font-mono">
          FÁBRICAS EN OTRA COSA 🧶
        </div>
        <div className="bg-indigo-600 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          VAMOS INFANCIAS ✨
        </div>
      </div>
    </div>
  );
}

// ==========================================
// --- EDICIÓN 07: NUEVA EDICIÓN ESPECIAL ANIMALES DE NUESTRO BARRIO 🐾 ---
// ==========================================
function OldEdition07() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [checkedTips, setCheckedTips] = useState<Record<number, boolean>>({});
  
  // --- STATE FOR DATABASE WISHES (Mensajes Solidarios de Mascotas) ---
  const [wishes, setWishes] = useState<Array<{ id: number; author: string; text: string; date: string }>>([]);
  const [newWishAuthor, setNewWishAuthor] = useState<string>("");
  const [newWishText, setNewWishText] = useState<string>("");
  const [isSubmittingWish, setIsSubmittingWish] = useState<boolean>(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // --- INTERACTIVE ANIMAL MAP ENGINE (NUESTROS AMIGOS PELUDOS) ---
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
  const [selectedAnimals, setSelectedAnimals] = useState<Record<string, { name: string; icon: string; skill: string }>>({
    arbol: { name: "El Búho del Patio", icon: "🦉", skill: "Vigila el patio de noche con ojos gigantes" },
    jardin: { name: "El Perro Callejero Manso", icon: "🐶", skill: "Corre de vereda a vereda dando mimos" },
    banco: { name: "Cabral, el Gatito Negro", icon: "🐈⬛", skill: "Duerme siestas al sol con su collar naranja" },
    umbral: { name: "La Tortuga del Alero", icon: "🐢", skill: "Lenta pero segura, pasea por la entrada" },
    tejado: { name: "El Gato de la Vereda", icon: "🐈", skill: "Maúlla canciones dulces desde la altura" }
  });

  const neighborhoodAnimals = [
    { name: "Cabral, el Gatito Negro", icon: "🐈⬛", skill: "Duerme siestas al sol con su collar naranja" },
    { name: "El Búho del Patio", icon: "🦉", skill: "Vigila el patio de noche con ojos gigantes" },
    { name: "El Perro Callejero Manso", icon: "🐶", skill: "Corre de vereda a vereda dando mimos" },
    { name: "La Tortuga del Alero", icon: "🐢", skill: "Lenta pero segura, pasea por la entrada" },
    { name: "El Gato de la Vereda", icon: "🐈", skill: "Maúlla canciones dulces desde la altura" },
    { name: "Pajaritos del Alero", icon: "🐦", skill: "Cantan temprano despertando el barrio" },
    { name: "La Cotorrita Verde", icon: "🦜", skill: "Repite sonidos teatrales en Guadalupe Oeste" }
  ];

  // --- GAME: RESCATE SILENCIOSO EN EL BARRIO 🐾🧣 ---
  const [ballPosition, setBallPosition] = useState<number>(50); // reused ballPosition for identical canvas gauge ref
  const [direction, setDirection] = useState<number>(1);
  const [gameState, setGameState] = useState<'prep' | 'aiming' | 'result'>('prep');
  const [gameResult, setGameResult] = useState<'spotted' | 'scared' | null>(null);
  const [gameScore, setGameScore] = useState({ spotted: 0, scared: 0 });

  // Move pointer during search phase
  useEffect(() => {
    if (gameState !== 'aiming') return;
    const interval = setInterval(() => {
      setBallPosition(pos => {
        let next = pos + direction * 5;
        if (next >= 100) {
          setDirection(-1);
          return 100;
        }
        if (next <= 0) {
          setDirection(1);
          return 0;
        }
        return next;
      });
    }, 24);
    return () => clearInterval(interval);
  }, [gameState, direction]);

  const handleSearch = () => {
    if (gameState !== 'aiming') return;
    setGameState('result');

    // Quiet zone resides < 30 or > 70.
    const isSuccess = ballPosition < 30 || ballPosition > 70;

    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      if (isSuccess) {
        setGameResult('spotted');
        setGameScore(prev => ({ ...prev, spotted: prev.spotted + 1 }));
        
        // Gentle meow sound sweep (high, affectionate rise)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } else {
        setGameResult('scared');
        setGameScore(prev => ({ ...prev, scared: prev.scared + 1 }));
        
        // Scared run sound rattle (descending sawtooth)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(90, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      }
    } catch (e) {
      if (isSuccess) {
        setGameResult('spotted');
        setGameScore(prev => ({ ...prev, spotted: prev.spotted + 1 }));
      } else {
        setGameResult('scared');
        setGameScore(prev => ({ ...prev, scared: prev.scared + 1 }));
      }
    }
  };

  const resetGame = () => {
    setBallPosition(50);
    setGameState('prep');
    setGameResult(null);
  };

  // --- AUDIO / TEXT TO SPEECH (VOZ PROTECTORA DE NUESTRO BARRIO) ---
  const [speechState, setSpeechState] = useState<{
    isSpeaking: boolean;
    isPaused: boolean;
    currentIndex: number;
  }>({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1
  });

  const textToRead = [
    "¡Hola vecinas y vecinos! Bienvenidos a la Edición Especial de El Dorrego dedicada a los animales de nuestro barrio.",
    "En Guadalupe Oeste y Coronel Dorrego también viven muchos amigos de cuatro patas que son parte de nuestra vida cotidiana. Por eso, este volumen les da un lugar muy especial para ayudarlos y cuidarlos.",
    "Principalmente, difundimos el caso urgente de Cabral, un gatito negro de dos años que se perdió por las calles Azcuénaga y Güemes. Solía llevar collar naranja flúo y tiene una manchita blanca en la ingle. ¡Ayudemos todos a que vuelva a casa!",
    "Además, te traemos un Pizarrón de Amigos del Barrio Interactiva: hacé click para armar tu mapa de animales preferidos en las veredas y tejados.",
    "Y desafía tu delicadeza en el interactivo de rescate: ¡Trata de acercarte sigilosamente por los bordes para ofrecerle una mantita a Cabral sin que se asuste!",
    "No te olvides de registrar tu mensaje solidario en el buzón conectado. Tus palabras de aliento animal se guardarán para siempre en la nube digital. ¡Muchas gracias por cuidar a nuestros amigos peludos!"
  ];

  const speakChunk = (index: number) => {
    if (index >= textToRead.length) {
      setSpeechState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      return;
    }
    
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn("speechSynthesis cancel error", e);
    }
    
    const utterance = new SpeechSynthesisUtterance(textToRead[index]);
    
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith("es-AR")) ||
                         voices.find(v => v.lang.startsWith("es-UY")) ||
                         voices.find(v => v.lang.startsWith("es-ES") && v.name.toLowerCase().includes("female")) ||
                         voices.find(v => v.lang.startsWith("es-MX")) ||
                         voices.find(v => v.lang.startsWith("es-ES")) ||
                         voices.find(v => v.lang.startsWith("es"));
    
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    utterance.lang = spanishVoice ? spanishVoice.lang : "es-AR";
    utterance.pitch = 1.05;
    utterance.rate = 0.94;

    utterance.onend = () => {
      setSpeechState(prev => {
        const nextIndex = prev.currentIndex + 1;
        if (nextIndex < textToRead.length) {
          setTimeout(() => speakChunk(nextIndex), 250);
          return { ...prev, currentIndex: nextIndex };
        } else {
          return { isSpeaking: false, isPaused: false, currentIndex: -1 };
        }
      });
    };

    utterance.onerror = (e) => {
      if (e.error !== "interrupted") {
        setSpeechState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
      }
    };

    setSpeechState({ isSpeaking: true, isPaused: false, currentIndex: index });
    try {
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("speechSynthesis speak error", err);
    }
  };

  const handlePlaySpeech = () => {
    if (speechState.isSpeaking && speechState.isPaused) {
      window.speechSynthesis.resume();
      setSpeechState(prev => ({ ...prev, isPaused: false }));
    } else if (speechState.isSpeaking) {
      window.speechSynthesis.pause();
      setSpeechState(prev => ({ ...prev, isPaused: true }));
    } else {
      speakChunk(0);
    }
  };

  const handleStopSpeech = () => {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    setSpeechState({ isSpeaking: false, isPaused: false, currentIndex: -1 });
  };

  // --- DATABASE HELPER METHODS ---
  const getApiUrl = (endpoint: string) => {
    const currentHost = window.location.hostname;
    if (
      currentHost.includes("localhost") || 
      currentHost.includes("127.0.0.1") || 
      currentHost.includes("run.app")
    ) {
      return endpoint;
    }
    return `https://ais-pre-rawgpkbifbfojkwv7g7d5m-112551938117.us-east5.run.app${endpoint}`;
  };

  const fetchWishes = async () => {
    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url);
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          return;
        }
      }
      loadLocalWishes();
    } catch (err) {
      console.warn("Could not fetch wishes", err);
      loadLocalWishes();
    }
  };

  const loadLocalWishes = () => {
    try {
      const stored = localStorage.getItem("el_dorrego_wishes");
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        const seed = [
          {
            id: 1,
            author: "Mateo de la Esquina",
            text: "¡Cabral va a aparecer pronto! Salgamos con galletitas ricas y hablemos con cariño para que no se asuste.",
            date: "2026-06-12T12:00:00.000Z"
          },
          {
            id: 2,
            author: "La Vecina de las Tortas",
            text: "Tengo un platito con comida húmeda en la ventana por si pasa Cabral o algún amigo de cuatro patas con hambre, ¡unidos nos cuidamos!",
            date: "2026-06-11T18:30:00.000Z"
          }
        ];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(seed));
        setWishes(seed);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleWishSubmit = async (e: any) => {
    e.preventDefault();
    if (!newWishText.trim()) {
      setWishError("¡Por favor, escribí un mensaje solidario de bienestar animal!");
      return;
    }
    setWishError(null);
    setIsSubmittingWish(true);

    const authorVal = newWishAuthor.trim() ? newWishAuthor.trim() : "Vecino protector anónimo";
    const textVal = newWishText.trim();
    const dateVal = new Date().toISOString();
    const newWishObj = {
      id: Date.now(),
      author: authorVal,
      text: textVal,
      date: dateVal
    };

    let savedOnServer = false;

    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: authorVal,
          text: textVal,
        }),
      });
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWishes(data);
          localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
          setNewWishText("");
          setNewWishAuthor("");
          savedOnServer = true;
        }
      }
    } catch (err) {
      console.warn("Could not save wish to server API", err);
    }

    if (!savedOnServer) {
      try {
        const stored = localStorage.getItem("el_dorrego_wishes");
        let wishesList = [];
        if (stored) {
          wishesList = JSON.parse(stored);
        } else {
          wishesList = [
            {
              id: 1,
              author: "Mateo de la Esquina",
              text: "¡Cabral va a aparecer pronto! Salgamos con galletitas ricas y hablemos con cariño para que no se asuste.",
              date: "2026-06-12T12:00:00.000Z"
            }
          ];
        }
        const updatedList = [newWishObj, ...wishesList];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(updatedList));
        setWishes(updatedList);
        setNewWishText("");
        setNewWishAuthor("");
      } catch (localErr) {
        console.error(localErr);
        setWishError("No se pudo guardar localmente.");
      }
    }
    setIsSubmittingWish(false);
  };

  useEffect(() => {
    fetchWishes();

    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, []);

  // --- PLAY OWL SOUND ---
  const playHootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const playFreq = (freq: number, start: number, duration: number) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.frequency.setValueAtTime(freq, start);
        osc.frequency.quadraticRampToValueAtTime(freq - 25, start + duration);
        
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(0.12, start + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, start + duration);
        
        osc.start(start);
        osc.stop(start + duration);
      };
      
      const now = audioCtx.currentTime;
      playFreq(340, now, 0.28);
      playFreq(335, now + 0.38, 0.42);
    } catch (e) {
      console.warn("Audio Context is not supported or blocked", e);
    }
  };

  // --- HEADLINE GENERATOR DATA ---
  const [selectedHeadline, setSelectedHeadline] = useState<string>("¡ENTRE TODOS CUIDAMOS A NUESTROS AMIGOS DE CUATRO PATAS! 🐾");
  const [selectedDoodle, setSelectedDoodle] = useState<string>("🐈⬛");
  const [customHeadline, setCustomHeadline] = useState<string>("¡AYUDEMOS A CABRAL A VOLVER CON SU FAMILIA DE GUADALUPE OESTE!");

  const fantasticPresets = [
    "¡CABRAL ES PARTE DE NUESTRAS INFANCIAS Y VOLVERÁ A CASA PRONTO! 🐈⬛",
    "¡EL BÚHO DEL PATIO NOS ENSEÑA A HABLAR BAJITO PARA NO ASUSTARLO! 🦉",
    "¡GUADALUPE OESTE SE UNE EN UNA RED DE AMOR Y CUIDADO ANIMAL! 💚",
    "¡NUESTRAS MASCOTAS DEL BARRIO CORONEL DORREGO SON SAGRADAS! 🐾",
    "¡EL ALERO DE LAS INFANCIAS CELEBRA 10 AÑOS COSIENDO MANTITAS PARA TODOS! 🧣"
  ];

  const doodles = [
    { char: "🐈⬛", label: "Cabral, el gatito" },
    { char: "🦉", label: "El Búho Guardián" },
    { char: "🐶", label: "Perro de vecinos" },
    { char: "🐾", label: "Huellas de amor" },
    { char: "🌳", label: "Árbol del Patio" },
    { char: "🧣", label: "Manta suave" },
    { char: "🦴", label: "Alimento rico" },
    { char: "🥛", label: "Leche calentita" }
  ];

  const handleCustomSubmit = (e: any) => {
    e.preventDefault();
    if (customHeadline.trim()) {
      setSelectedHeadline(customHeadline.trim().toUpperCase());
      setCustomHeadline("");
    }
  };

  const changeAnimal = (spot: string, animal: typeof neighborhoodAnimals[0]) => {
    setSelectedAnimals(prev => ({
      ...prev,
      [spot]: animal
    }));
    setSelectedSpot(null);
  };

  const toggleTip = (index: number) => {
    setCheckedTips(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const allTipsChecked = 
    checkedTips[0] && checkedTips[1] && checkedTips[2] && checkedTips[3];

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Forest Green & Amber Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderBottomColor: '#10b981' }}>
         <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 via-amber-500 to-emerald-700">
          <span className="text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black] bg-gradient-to-r from-emerald-500 to-teal-600">VOLUMEN 07</span>
          DIARIO EL DORREGO • EDICIÓN ESPECIAL: ANIMALES DE NUESTRO BARRIO 🐾🐕🐈⬛ • SANTA FE • 12 DE JUNIO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-emerald-600">
          AÑO I • Nº 007<br />
          TODO EL BARRIO BUSCA A CABRAL Y CELEBRA LA VIDA
        </div>
      </div>

      {/* Spectacular Masthead with Emerald & Pink / Orange Border Gradients */}
      <header id="inicio-ed7" className="border-b-[12px] border-b-transparent bg-gradient-to-r from-emerald-500 via-teal-300 via-amber-400 via-emerald-300 to-pink-500 pb-1.5 mb-12 text-center relative rounded-b-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
        <div className="bg-white py-10 px-4">
          <motion.div 
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -8 }}
            className="absolute -top-10 -right-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-pink-300 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20 animate-bounce"
          >
            🐈⬛ ¡MÁXIMA PRIORIDAD SOLIDARIA! 🐾
          </motion.div>
          
          <a href="#inicio-ed7" className="block hover:opacity-80 transition-opacity">
            <h1 className="text-[12vw] md:text-[8.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 via-amber-500 via-pink-400 to-emerald-700 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              EL DORREGO
            </h1>
          </a>
          
          <div className="relative inline-block px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-300 to-pink-400 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-3 px-8 md:px-16 text-lg md:text-3xl font-black tracking-[0.1em] bg-amber-300 text-black translate-y-[-4px] shadow-[6px_6px_0px_black] uppercase leading-tight">
              🐾 EDICIÓN ESPECIAL: ANIMALES DE NUESTRO BARRIO 🐾
            </div>
          </div>

          <div className="mt-8 text-sm md:text-lg font-black max-w-xl mx-auto uppercase tracking-wide bg-emerald-50 border-2 border-black/20 p-2.5 rounded-lg text-emerald-950">
            "En Coronel Dorrego y Guadalupe Oeste nos unimos para difundir casos, dar cariño y cuidar al búho del patio de El Alero."
          </div>
        </div>
      </header>

      {/* EDITORIAL COLUMN BLOCK: "¿QUIÉN BUSCA A CABRAL? / REFUGIO DE AMOR" */}
      <section id="urgente-ed7" className="relative group">
        <div className="absolute inset-0 bg-emerald-50 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-emerald-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-50/50 via-white to-amber-50/30">
          
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-emerald-300/30 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* Left: Polaroid-styled flyer representing the Lost Cat case (Takes 2/5 width) */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-stone-900 to-stone-850 text-white p-6 border-4 border-black shadow-[6px_6px_0px_black] flex flex-col justify-between rounded-xl transform -rotate-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-amber-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-black text-lg border border-black animate-bounce">📢</span>
                  <h3 className="text-lg font-black uppercase tracking-tight text-amber-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">¡SE BUSCA A CABRAL!</h3>
                </div>
                
                <div className="aspect-square w-full rounded-lg border-2 border-white/40 overflow-hidden bg-black relative shadow-inner mb-4">
                  <img 
                    src="https://i.postimg.cc/0yS6FLwd/1781301706888.png" 
                    alt="Cabral Oficial" 
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={() => setIsFullscreen(true)}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  <div className="absolute bottom-1 right-2 bg-black/90 text-white font-mono text-[8px] px-1.5 py-0.5 rounded border border-white/10">
                    Click para agrandar 🔍
                  </div>
                </div>

                <p className="text-sm font-bold leading-normal text-yellow-300 uppercase mb-2">
                  ZONA: AZCUÉNAGA Y GÜEMES
                </p>
                <p className="text-xs font-medium leading-relaxed opacity-90 text-gray-200">
                  Macho castrado de dos años, de pelo lacio negro y tamaño mediano. Solía llevar collar naranja flúo por Guadalupe Oeste. Su marca única es una manchita blanca en la ingle.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/15">
                <a 
                  href="tel:3424637120"
                  className="bg-red-600 hover:bg-red-500 text-white text-center font-mono font-black text-sm block py-2.5 rounded shadow-[3px_3px_0px_#f59e0b] border-2 border-black active:translate-y-0.5 cursor-pointer"
                >
                  📞 LLAMAR: 342 463-7120
                </a>
              </div>
            </div>

            {/* Right: Narrative / Editorial body + Audio Shared reading */}
            <div className="w-full md:w-3/5 space-y-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-emerald-500 text-white px-3 py-1 font-black uppercase text-xs transform rotate-1 shadow-[3px_3px_0px_black] mb-3">
                  📰 EDICIÓN ESPECIAL COLECTIVA DE ANIMALES
                </span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black leading-none mb-4">
                  Nuestros vecinos de cuatro patas merecen volver a casa
                </h3>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  En el barrio Coronel Dorrego y Guadalupe Oeste también viven muchos de nuestros mejores amigos. A veces se asustan por los ruidos fuertes, se alejan y no encuentran el camino de vuelta a su hogar.
                </p>
                <p className="text-sm font-bold text-gray-700 leading-relaxed mt-2 animate-pulse text-[#b45309]">
                  En este volumen siete de nuestro diario comunitario, les damos un lugar prioritario: difundimos el aviso de búsqueda de nuestro vecino gatito Cabral para que vuelva con su familia, y recordamos cómo podemos ser guardianes solidarios con las mascotas de la zona.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-black text-emerald-950 uppercase">
                  <div className="flex items-center gap-2 bg-emerald-100 p-2 border-2 border-black/10 rounded">
                    🗺️ Mapa de Animales del Barrio Interactivo
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-100 p-2 border-2 border-black/10 rounded">
                    🧣 Juego arcade "Camino a Casa"
                  </div>
                  <div className="flex items-center gap-2 bg-rose-100 p-2 border-2 border-black/10 rounded">
                    🎙️ Audio-vecino con lectura dictada
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-100 p-2 border-2 border-black/10 rounded">
                    📢 Deseos duraderos en base de datos
                  </div>
                </div>
              </div>

              {/* AUDIOLIBRO / LECTURA COMPARTIDA */}
              <div className="bg-emerald-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-emerald-200 border-2 border-black p-2 rounded-full ${speechState.isSpeaking && !speechState.isPaused ? 'animate-bounce' : ''}`}>
                    <AudioLines className="w-5 h-5 text-emerald-900" />
                  </div>
                  <div className="text-left font-sans">
                    <p className="text-[11px] font-black uppercase text-emerald-900 flex items-center gap-2">
                      <span>📻 AUDIO-LECTURA ANIMAL COMPARTIDA</span>
                      {speechState.isSpeaking && !speechState.isPaused && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                    </p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">
                      {speechState.isSpeaking 
                        ? (speechState.isPaused ? "Nuestra narración está en pausa..." : "Nuestros amigos de cuatro patas leen para vos...") 
                        : "¡Sintonizá y escuchá al portavoz escolar!"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePlaySpeech}
                    className="flex-1 sm:flex-initial bg-emerald-400 hover:bg-emerald-300 border-2 border-black px-3 py-1.5 text-xs font-black uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
                  >
                    {speechState.isSpeaking && !speechState.isPaused ? (
                      <>
                        <Pause className="w-3.5 h-3.5" /> Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> Escuchar
                      </>
                    )}
                  </button>
                  {speechState.isSpeaking && (
                    <button
                      onClick={handleStopSpeech}
                      className="bg-red-500 hover:bg-red-400 text-white border-2 border-black px-2 py-1.5 text-xs font-black uppercase flex items-center justify-center gap-1 shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
                      title="Detener audio"
                    >
                      <Square className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SQUAD / ANIMAL BUILDER WIDGET: "MI PLANO DE ANIMALES DEL BARRIO" */}
      <section id="mapa-ed7" className="relative group">
        <div className="absolute inset-0 bg-amber-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-amber-400"></div>
        
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] rounded-2xl space-y-8">
          
          <div className="text-center md:text-left border-b-4 border-black pb-4">
            <span className="bg-amber-400 border-2 border-black text-black text-xs font-black px-2.5 py-1 uppercase rounded tracking-wider shadow-[2px_2px_0px_black] inline-block mb-3">
              🐾 PIZARRÓN DE HÁBITAT INTERACTIVO
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-none">
              ¡EL REGISTRO DE MASCOTAS DE GUADALUPE OESTE!
            </h3>
            <p className="text-xs font-black text-gray-500 mt-2">
              Hacé click en cada rincón del barrio para designar qué amigo peludo o con plumas duerme, pasea o cuida de nuestro hábitat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Football Pitch equivalent (A beautiful neighborhood plan map) (7 cols) */}
            <div className="lg:col-span-7 bg-[#4ade80] border-4 border-black p-4 relative rounded-2xl shadow-[8px_8px_0px_black] overflow-hidden">
              {/* Grass pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#15803d_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Map sketch elements (roads, bushes, fences) */}
              <div className="absolute inset-x-0 top-1/3 h-10 bg-amber-500/10 border-y-2 border-dashed border-black/10 pointer-events-none"></div>
              <div className="absolute left-1/4 top-0 bottom-0 w-8 bg-amber-500/10 border-x-2 border-dashed border-black/10 pointer-events-none"></div>
              
              {/* Cozy neighborhood drawing helpers */}
              <div className="absolute top-2 left-[5%] text-slate-800 font-mono text-[9px] font-black opacity-30">🏡 CALLE AZCUÉNAGA</div>
              <div className="absolute top-[40%] right-[3%] text-slate-800 font-mono text-[9px] font-black opacity-30 rotate-90">🏠 CALLE GÜEMES</div>

              {/* Position Spot Markers */}
              <div className="relative z-10 flex flex-col justify-between h-[450px] py-4">
                
                {/* Rooftop / Tejado spot */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedSpot('tejado')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedSpot === 'tejado' ? 'bg-amber-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-black text-white hover:bg-slate-800'}`}
                  >
                    🐱 El tejado: {selectedAnimals.tejado.name} {selectedAnimals.tejado.icon}
                  </button>
                </div>

                {/* Big tree / Arbol spot */}
                <div className="flex justify-start pl-8">
                  <button 
                    onClick={() => setSelectedSpot('arbol')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedSpot === 'arbol' ? 'bg-amber-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🌳 El árbol del patio: {selectedAnimals.arbol.name} {selectedAnimals.arbol.icon}
                  </button>
                </div>

                {/* Grass yard / Jardin spot */}
                <div className="flex justify-end pr-8">
                  <button 
                    onClick={() => setSelectedSpot('jardin')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedSpot === 'jardin' ? 'bg-amber-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🌱 El patio verde: {selectedAnimals.jardin.name} {selectedAnimals.jardin.icon}
                  </button>
                </div>

                {/* Entrance step / Umbral spot */}
                <div className="flex justify-start pl-16">
                  <button 
                    onClick={() => setSelectedSpot('umbral')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedSpot === 'umbral' ? 'bg-amber-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🚪 Umbral del Alero: {selectedAnimals.umbral.name} {selectedAnimals.umbral.icon}
                  </button>
                </div>

                {/* Sidewalk Bench / Banco spot */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedSpot('banco')}
                    className={`px-3 py-1.5 rounded-lg border-2 border-black flex items-center gap-1.5 transition-all text-xs font-black uppercase ${selectedSpot === 'banco' ? 'bg-amber-300 animate-pulse text-black scale-110 shadow-[3px_3px_0px_black]' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    🪑 Banco de vereda: {selectedAnimals.banco.name} {selectedAnimals.banco.icon}
                  </button>
                </div>

              </div>

            </div>

            {/* Selection & Detail controls (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {selectedSpot ? (
                <div className="bg-amber-50 border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_black] space-y-3">
                  <h4 className="text-sm font-black uppercase text-amber-700 flex items-center gap-1">
                    <span>🔄 Seleccioná quién habita en:</span> <span className="underline font-mono">{selectedSpot}</span>
                  </h4>
                  <div className="space-y-1 max-h-[260px] overflow-y-auto">
                    {neighborhoodAnimals.map((animal, idx) => (
                      <button
                        key={idx}
                        onClick={() => changeAnimal(selectedSpot, animal)}
                        className="w-full text-left font-black text-xs p-2.5 border-2 border-black/15 hover:border-black rounded-lg bg-white hover:bg-amber-100 flex items-center justify-between transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{animal.icon}</span>
                          <span>{animal.name}</span>
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold max-w-[150px] truncate italic">
                          {animal.skill}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedSpot(null)}
                    className="w-full bg-black text-white hover:bg-gray-800 text-xs font-black py-2 uppercase border-2 border-black shadow-[2px_2px_0px_black] cursor-pointer"
                  >
                    Cancelar Selección
                  </button>
                </div>
              ) : (
                <div className="bg-emerald-50 border-4 border-black p-5 rounded-xl shadow-[4px_4px_0px_black] space-y-4">
                  <h4 className="text-lg font-black uppercase text-emerald-950 flex items-center gap-2">
                    DRECCIONARIO COMUNITARIO DE HUELLAS
                  </h4>
                  <p className="text-xs font-bold text-gray-650 leading-normal">
                    Este representativo plano muestra cómo habitamos colectivamente con cada ser vivo en Guadalupe Oeste. Hacé click en cualquier posición verde del pizarrón para designar qué animal custodiará la alegría barrial allí.
                  </p>
                  
                  <div className="border-t border-black/15 pt-3 space-y-2 text-xs">
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-emerald-800 shrink-0">🐱 TEJADO:</span>
                      <div className="text-right pl-4">
                        <p className="font-black text-gray-900">{selectedAnimals.tejado.name} {selectedAnimals.tejado.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedAnimals.tejado.skill}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-emerald-800 shrink-0">🌳 ÁRBOL:</span>
                      <div className="text-right pl-4">
                        <p className="font-black text-gray-900">{selectedAnimals.arbol.name} {selectedAnimals.arbol.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedAnimals.arbol.skill}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-emerald-800 shrink-0">🌱 PATIO VERDE:</span>
                      <div className="text-right pl-4">
                        <p className="font-black text-gray-900">{selectedAnimals.jardin.name} {selectedAnimals.jardin.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedAnimals.jardin.skill}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start border-b border-black/5 pb-1">
                      <span className="font-black text-emerald-800 shrink-0">🚪 UMBRAL:</span>
                      <div className="text-right pl-4">
                        <p className="font-black text-gray-900">{selectedAnimals.umbral.name} {selectedAnimals.umbral.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedAnimals.umbral.skill}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-black text-emerald-800 shrink-0">🪑 BANCO VEREDA:</span>
                      <div className="text-right pl-4">
                        <p className="font-black text-gray-900">{selectedAnimals.banco.name} {selectedAnimals.banco.icon}</p>
                        <p className="text-[10px] text-gray-500 font-medium italic">{selectedAnimals.banco.skill}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Quote Sticker */}
              <div className="bg-gradient-to-tr from-emerald-500 to-teal-600 text-white p-4 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl transform rotate-1">
                <span className="text-[9px] font-mono font-black uppercase tracking-widest block text-amber-300">SOLIDARIOS CON MASCOTAS</span>
                <p className="font-black text-xs leading-normal mt-1 italic">
                  "El cuidado animal en Dorrego es un valor de encuentro: dejar comidita, hablarles bajito al búho solitario, buscar a Cabral y cobijar a las mascotas es parte fundamental de nuestra querida comunidad."
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MINI ARCADE TIMING GAME: "¡CAMINO A CASA GENTIL!" */}
      <section id="juego-ed7" className="relative group">
        <div className="absolute inset-0 bg-rose-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-rose-400"></div>
        
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] rounded-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
            <div>
              <span className="bg-rose-500 border-2 border-black text-white text-xs font-black px-2.5 py-1 uppercase rounded tracking-wider shadow-[2px_2px_0px_black] inline-block mb-1">
                🎮 MINI-JUEGO DE REACCIÓN GENTIL
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight text-rose-950">
                🧣 ¡COBIJA A CABRAL EN CASA! 🐈⬛
              </h3>
            </div>
            <div className="bg-gray-100 border-2 border-black p-2 font-mono text-xs font-black rounded-lg shadow-[2px_2px_0px_black]">
              🐾 MARCADOR: <span className="text-emerald-600">RESCATADOS: {gameScore.spotted}</span> | <span className="text-rose-600">ASUSTADOS: {gameScore.scared}</span>
            </div>
          </div>

          <p className="text-xs font-black text-gray-600">
            Hacé click en <strong className="text-rose-500">COMENZAR BÚSQUEDA</strong> para iniciar la oscilación del sensor de ruido. Luego calculá y detenelo en los bordes silenciosos y tranquilos (<strong className="text-emerald-600">zonas verdes</strong>). ¡Si te detienes en el centro ruidoso, Cabral se asustará del tráfico y huirá a un lugar seguro!
          </p>

          <div className="border-4 border-black bg-gradient-to-b from-[#1c1917] to-[#44403c] p-6 relative rounded-xl h-72 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Simulated Alley representation */}
            <div className="w-4/5 mx-auto h-40 border-t-8 border-x-8 border-stone-400 bg-stone-900/40 relative flex justify-center items-end rounded-t-lg shadow-inner">
              <div className="absolute top-2 left-6 text-stone-500 text-[10px] font-mono tracking-widest font-black uppercase">DIRECCIÓN: ESQUINA SILENCIOSA GÜEMES</div>
              
              {/* Lost Kitty Animated component */}
              <motion.div 
                animate={gameState === 'aiming' ? { x: [-40, 40, -40] } : { x: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 font-black text-5xl z-10 select-none"
              >
                🐈⬛
              </motion.div>

              {/* Sweet warm assets placement representation */}
              <div className="absolute bottom-2 left-[15%] text-2xl animate-pulse opacity-50 select-none">🧣</div>
              <div className="absolute bottom-2 right-[15%] text-2xl animate-pulse opacity-55 select-none">🥛</div>

              {/* Visual Results Overlay */}
              {gameResult === 'spotted' && (
                <div className="absolute inset-0 bg-emerald-600/90 z-20 flex flex-col items-center justify-center text-white border-2 border-black rounded-t-lg font-black uppercase text-3xl animate-bounce tracking-widest text-shadow-md">
                  <span>😻 ¡LO COBIJASTE! 🐾</span>
                  <span className="text-xs mt-2 text-yellow-300">¡LE ARRIMASTE LA MANTA CON MUCHO AMOR Y SE DURMIÓ!</span>
                </div>
              )}
              {gameResult === 'scared' && (
                <div className="absolute inset-0 bg-rose-600/90 z-20 flex flex-col items-center justify-center text-white border-2 border-black rounded-t-lg font-black uppercase text-2xl animate-pulse tracking-wide text-center px-4">
                  <span>🙀 ¡SE ASUSTÓ! 🏃⬛</span>
                  <span className="text-xs mt-2 text-white/90">LA CALLE AZCUÉNAGA ESTÁ DEMASIADO RUIDOSA EN EL MEDIO</span>
                </div>
              )}
            </div>

            {/* Control Dashboard / Aiming Bar */}
            <div className="relative z-10 w-full bg-black/40 border border-white/10 p-3 rounded-lg space-y-2.5">
              
              {/* Slider gauge */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-white/80 uppercase font-black tracking-wider">
                  <span>SILENCIO (CARIÑO) 🧣</span>
                  <span className="text-yellow-300">TRÁFICO ALTO (CUIDADO-RUIDO) 🔊</span>
                  <span>SILENCIO (COBIJAR) 🥛</span>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full border border-black overflow-hidden relative">
                  {/* Gauge marker indicators */}
                  <div className="absolute inset-y-0 left-0 w-[30%] bg-emerald-500/25 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-[30%] bg-emerald-500/25 pointer-events-none"></div>

                  {/* Highlighted Pointer */}
                  <div 
                    className="absolute top-0 bottom-0 w-4 bg-yellow-400 border-x border-black transition-all duration-[24ms]" 
                    style={{ left: `${ballPosition}%` }}
                  ></div>
                </div>
              </div>

              {/* Control Buttons list */}
              <div className="flex justify-center gap-4">
                {gameState === 'prep' && (
                  <button
                    onClick={() => setGameState('aiming')}
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs px-6 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5 cursor-pointer"
                  >
                    🚀 COMENZAR BÚSQUEDA
                  </button>
                )}

                {gameState === 'aiming' && (
                  <button
                    onClick={handleSearch}
                    className="bg-rose-500 hover:bg-rose-400 text-white font-black text-xs px-8 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5 animate-pulse cursor-pointer"
                  >
                    🐾 ¡RESCATAR CON CARIÑO!
                  </button>
                )}

                {gameState === 'result' && (
                  <button
                    onClick={resetGame}
                    className="bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs px-6 py-2 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-none active:translate-y-0.5 cursor-pointer"
                  >
                    🐾 SIGUIENTE RECORRIDO (RESET)
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FUN HEADLINE GENERATOR FOR PET PRESENTS */}
      <section id="portada-ed7" className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 border-4 border-black p-1 rounded-2xl shadow-[10px_10px_0px_black]">
        <div className="bg-white p-6 md:p-8 rounded-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-emerald-600 animate-pulse" /> PLANILLA DE CORRESPONSAL ANIMAL
            </h3>
            <p className="text-[10px] font-mono font-black text-gray-500 bg-gray-100 px-3 py-1 border-2 border-black rounded uppercase">
              ¡Armá la portada animal!
            </p>
          </div>

          {/* Selected Headline Box */}
          <div className="bg-emerald-50 border-4 border-black p-6 relative shadow-[4px_4px_0px_black] text-center overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 bg-black text-white font-black text-[9px] px-2.5 py-0.5 uppercase">
              TITULAR OFICIAL PUBLICADO
            </div>
            
            <motion.p 
              key={selectedHeadline}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl md:text-4xl font-serif font-black uppercase italic text-black leading-tight tracking-tight my-4"
            >
              {selectedDoodle} "{selectedHeadline}" {selectedDoodle}
            </motion.p>
          </div>

          {/* Headline Selectors & Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <p className="text-xs font-black uppercase mb-3 flex items-center gap-1.5 text-emerald-600">
                <span>✨ Elegí un titular representativo animal:</span>
              </p>
              <div className="space-y-1.5 max-h-[180px] overflow-y-auto border-2 border-black/10 p-2.5 bg-gray-50/50 rounded-lg">
                {fantasticPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHeadline(preset)}
                    className="w-full text-left text-xs font-bold p-2 hover:bg-emerald-50 border border-transparent hover:border-black/10 rounded transition-all leading-tight uppercase flex items-start gap-2 text-gray-800 cursor-pointer"
                  >
                    <span className="text-emerald-500">•</span>
                    <span>{preset}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <form onSubmit={handleCustomSubmit} className="space-y-2">
                <label className="block text-xs font-black uppercase text-emerald-600">
                  ✍️ O redactá tu portada personalizada:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customHeadline}
                    onChange={(e) => setCustomHeadline(e.target.value)}
                    placeholder="Ej. ¡Buscando a Cabral, el consentido del Alero!..."
                    className="flex-1 border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded shadow-[2px_2px_0px_black]"
                    maxLength={100}
                  />
                  <button
                    type="submit"
                    className="bg-emerald-400 hover:bg-emerald-300 border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded cursor-pointer"
                  >
                    Publicar
                  </button>
                </div>
              </form>

              <div>
                <p className="text-xs font-black uppercase text-amber-600 mb-2">
                  🎨 Adornar con un emoticón de huellas:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {doodles.map((d, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDoodle(d.char)}
                      className={`w-10 h-10 border-2 border-black flex items-center justify-center text-lg rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_0px_black] transition-all hover:-translate-y-0.5 cursor-pointer ${selectedDoodle === d.char ? 'bg-gradient-to-br from-emerald-100 to-emerald-300 border-4 scale-105' : 'bg-white hover:bg-gray-50'}`}
                      title={d.label}
                    >
                      {d.char}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DURABLE DATABASE WISHES BOX IN SPECTACULAR EMERALD COLORS */}
      <section id="aliento-ed7" className="relative group">
        <div className="absolute inset-0 bg-teal-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-teal-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Input Form Column (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <span className="inline-block bg-emerald-500 text-white px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[3px_3px_0px_black] mb-2 font-mono">
                💝 COMPARTÍ TU DESEO O ALIENACIÓN
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                EL ALMACÉN SOLIDARIO ANIMAL
              </h2>
              
              <p className="text-xs font-bold text-gray-700 leading-relaxed bg-teal-50 border-2 border-black/10 p-3 rounded-lg">
                ¿Qué mensaje protector le dejas a Cabral, al búho o a las mascotas del barrio? ¡Escribí felicitaciones, consejos de cuidado o abrazos solidarios! Se guardará para siempre en la base de datos conectada.
              </p>

              <form onSubmit={handleWishSubmit} className="space-y-4 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                <div className="space-y-1.5">
                  <label htmlFor="animal-author-input" className="block text-xs font-black uppercase text-emerald-700 flex items-center gap-1">
                    👤 Tu nombre o apodo vecinal:
                  </label>
                  <input
                    id="animal-author-input"
                    type="text"
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    placeholder="Ej. Mateo, Amigo de Cabral, Valentina..."
                    className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="animal-text-input" className="block text-xs font-black uppercase text-emerald-700">
                    ✍️ Tu mensaje protector para las mascotas:
                  </label>
                  <textarea
                    id="animal-text-input"
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    placeholder="¡Dejá tu granito de arena, pistas de avistaje de Cabral o buenos deseos!..."
                    className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-amber-50 h-28 resize-none rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    maxLength={200}
                  />
                  <div className="text-right text-[10px] font-black text-gray-500">
                    {newWishText.length}/200 CARACTERES
                  </div>
                </div>

                {wishError && (
                  <div className="bg-red-100 border-2 border-red-500 p-2 text-xs font-black text-red-700 text-center uppercase rounded">
                    ⚠️ {wishError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingWish}
                  className="w-full bg-black hover:bg-gray-800 text-white border-4 border-black py-3 text-xs font-black uppercase transition-all shadow-[4px_4px_0px_#10b981] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 rounded-md animate-pulse cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                  <span>{isSubmittingWish ? "Guardando..." : "¡Mandar Deseo al Almacén!"}</span>
                </button>

                <p className="text-[10px] font-bold text-gray-500 leading-tight border-t border-black/10 pt-3">
                  💡 Este buzón se conecta durablemente con la base de datos de El Dorrego. ¡Tus palabras vivirán en la nube para siempre!
                </p>
              </form>
            </div>

            {/* List Output Column (3/5) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex border-b-4 border-black pb-2 items-center justify-between text-[#15803d]">
                <span className="text-sm font-black uppercase tracking-tight text-emerald-600 flex items-center gap-1.5">
                  ✨ MENSAJES RECIBIDOS EN LA NUBE ({wishes.length})
                </span>
                <span className="text-xs font-bold text-gray-400 font-mono">
                  HISTORIAL EN NUBE
                </span>
              </div>

              <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
                {wishes.length === 0 ? (
                  <div className="border-4 border-dashed border-black/20 p-8 text-center uppercase font-black text-gray-400 bg-gray-50/50 rounded-xl animate-pulse">
                    Conectando con el almacén forestal... ¡Escribí el primer mensaje!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AnimatePresence>
                      {wishes.map((wish, idx) => {
                        const stickerColors = [
                          "bg-emerald-100 border-emerald-300 shadow-emerald-200",
                          "bg-stone-50 border-stone-200 shadow-stone-200",
                          "bg-amber-100 border-amber-300 shadow-amber-200",
                          "bg-teal-100 border-teal-200 shadow-teal-200",
                          "bg-rose-100 border-rose-300 shadow-rose-200"
                        ];
                        const stickerColor = stickerColors[idx % stickerColors.length];
                        const rotations = ["rotate-0", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
                        const rotate = rotations[idx % rotations.length];

                        return (
                          <motion.div
                            key={wish.id}
                            initial={{ scale: 0.8, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 border-2 border-black rounded-lg ${stickerColor} ${rotate} flex flex-col justify-between min-h-[120px] shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 transition-all`}
                          >
                            <p className="text-xs font-bold leading-relaxed italic text-gray-950">
                              "{wish.text}"
                            </p>
                            <div className="mt-2 pt-2 border-t border-black/10 flex justify-between items-center text-[10px] font-black uppercase">
                              <span className="truncate text-emerald-800">👤 {wish.author}</span>
                              <span className="opacity-60 text-[8px] text-gray-500 font-mono">
                                {new Date(wish.date).toLocaleDateString("es-AR", {
                                  day: "numeric",
                                  month: "short"
                                })}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LATEST ACTION REPORTS FROM THE CREATIVE WORKSHOPS - Custom to Animal care prep */}
      <section id="talleres-ed7" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_black] rotate-[-0.5deg] rounded-2xl">
        <h2 className="text-3xl font-black mb-4 uppercase flex items-center gap-2 justify-center md:justify-start drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)] text-amber-300">
          🎁 MIENTRAS TANTO, NUESTRAS 3 FÁBRICAS SIGUEN AL 100% POR LOS ANIMALES DEL BARRIO
        </h2>
        
        <p className="text-xs font-bold text-emerald-100 max-w-2xl mb-6">
          Nuestros talleres comunitarios en el Alero Coronel Dorrego preparan elementos hermosos de cuidado, cobijo y afecto para cada una de nuestras mascotas de la zona.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded uppercase font-black">Fábrica de Objetos</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">Comederos de Vereda</h4>
              <p className="text-xs font-bold text-gray-650 mt-2 leading-relaxed">
                El taller modela comederos y bebederos de cerámica e impermeabilizante ecológico. Serán distribuidos en las puertas de los vecinos de Guadalupe Oeste para que las mascotas callejeras tengan siempre agua y comida fresca.
              </p>
            </div>
            <div className="text-[10px] font-black text-emerald-500 border-t border-black/5 pt-3 mt-4">ESTADO: HORNEADOS Y LISTOS PARA SER DISTRIBUIDOS</div>
          </div>

          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-pink-500 text-white px-2 py-0.5 rounded uppercase font-black">Fábrica textil</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">Abriguitos y Almohadones</h4>
              <p className="text-xs font-bold text-gray-650 mt-2 leading-relaxed">
                Nuestras vecinas y abuelas tejedoras cosen capas calentitas y pequeños nidos suaves utilizando lanas donadas y ropa en desuso. ¡Diseñados para abrigar a los perritos desprotegidos de la zona del frío helado de junio!
              </p>
            </div>
            <div className="text-[10px] font-black text-pink-500 border-t border-black/5 pt-3 mt-4">ESTADO: 100% COSTURADO DE ABRIGOS COMPLETO</div>
          </div>

          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-amber-400 text-black px-2 py-0.5 rounded uppercase font-black">Fábrica de la Palabra</span>
              <h4 className="text-lg font-black uppercase mt-2 text-indigo-950">Volantes y Guías de Cuidado</h4>
              <p className="text-xs font-bold text-gray-650 mt-2 leading-relaxed">
                Las infancias imprimen afiches con el rostro de Cabral y consejos cariñosos para dialogar con los pájaros autóctonos del patio de El Alero. Serán repartidos puerta a puerta para concientizar al vecindario.
              </p>
            </div>
            <div className="text-[10px] font-black text-amber-500 border-t border-black/5 pt-3 mt-4">ESTADO: IMPRESIÓN COMPLETA DE CAMPAÑA</div>
          </div>
        </div>
      </section>

      {/* Stickers / Footer area */}
      <div className="flex flex-wrap justify-center gap-6 py-8">
        <div className="bg-emerald-500 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          ¡CUIDAR A CABRAL! 🐾
        </div>
        <div className="bg-amber-400 text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          EL ALERO 10 AÑOS 🎉
        </div>
        <div className="bg-white text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-2 hover:rotate-0 transition-transform cursor-pointer font-mono">
          HABLAR BAJITO AL BÚHO 🦉
        </div>
        <div className="bg-indigo-600 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          RED DE VECINOS PROTECTORES ✨
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Poster view of Cabral Flyer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4 overflow-y-auto"
            data-html2canvas-ignore="true"
          >
            {/* Topbar inside Fullscreen Modal */}
            <div className="w-full max-w-4xl flex justify-between items-center text-white mb-2 pb-2 border-b border-white/20 font-mono">
              <span className="font-black text-xs sm:text-sm tracking-widest text-amber-400 uppercase">
                📢 CARTEL DE BÚSQUEDA DE CABRAL EN GUADALUPE OESTE
              </span>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-3 py-1.5 rounded border border-black active:translate-y-0.5 shadow-[2px_2px_0px_black] transition-all cursor-pointer"
              >
                CERRAR [X]
              </button>
            </div>

            {/* Huge image fitting comfortably */}
            <div className="relative max-w-4xl max-h-[85vh] overflow-hidden flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/0yS6FLwd/1781301706888.png" 
                alt="Aviso oficial de Cabral" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border-4 border-white/90"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>

            <div className="text-center text-xs mt-3 text-gray-400 font-mono">
              Presioná CERRAR o haz click afuera para retornar al diario. Tel: <strong className="text-white">342 463-7120</strong>
            </div>

            {/* Click-outside helper */}
            <div className="absolute inset-0 -z-10" onClick={() => setIsFullscreen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

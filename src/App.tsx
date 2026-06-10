import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      return saved ? parseInt(saved) : 6;
    }
    return 6;
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
      
      if (alpha !== undefined && alpha !== 1) {
        return `rgba(${r8}, ${g8}, ${b8}, ${alpha})`;
      }
      return `rgb(${r8}, ${g8}, ${b8})`;
    };

    const oklchToRgb = (l: number, c: number, h: number, a?: number): string => {
      const hRad = (h * Math.PI) / 180;
      const a_ = c * Math.cos(hRad);
      const b_ = c * Math.sin(hRad);
      return oklabToRgb(l, a_, b_, a);
    };

    const replaceOklchString = (str: any): any => {
      if (typeof str !== 'string') return str;
      if (!str.includes('oklch') && !str.includes('oklab')) return str;
      
      let res = str;

      if (res.includes('oklch')) {
        res = res.replace(/oklch\(([^)]+)\)/g, (match, content) => {
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

      if (res.includes('oklab')) {
        res = res.replace(/oklab\(([^)]+)\)/g, (match, content) => {
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
    const restoredLinkStates: { element: HTMLLinkElement; disabled: boolean }[] = [];

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

              // Disable original link tag
              restoredLinkStates.push({ element: link, disabled: link.disabled });
              link.disabled = true;
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

      // Restore original <link> tag disabled statuses
      restoredLinkStates.forEach(({ element, disabled }) => {
        if (element) {
          element.disabled = disabled;
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
              <div className="grid grid-cols-6 gap-1">
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
                  <a href="#inicio-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-pink-400 transition-colors border-b border-white/10 pb-1 text-pink-300 animate-pulse">¡CUMPLE REAL HOY!</a>
                  <a href="#sin-festejo-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">¿Por qué hoy no?</a>
                  <a href="#deseos-ed6" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-cyan-400 transition-colors border-b border-white/10 pb-1">Buzón de Deseos</a>
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
  const [daysLeftCeleb, setDaysLeftCeleb] = useState<number | null>(null);
  const [selectedHeadline, setSelectedHeadline] = useState<string>(
    "¡HOY LUNES 8 DE JUNIO ES EL CUMPLEAÑOS REAL DE EL ALERO (10 AÑOS)! 🎂"
  );
  const [customHeadline, setCustomHeadline] = useState<string>("");
  const [selectedDoodle, setSelectedDoodle] = useState<string>("🎂");

  // State for wishes
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
    "¡Hola vecinas y vecinos! Hoy es un día de inmensa emoción. Nuestro adorado Alero Coronel Dorrego cumple oficialmente diez años de vida en el corazón de nuestra comunidad.",
    "¡Hoy es el cumpleaños real! Diez años tejiendo risas, encuentros y abrazos en el barrio.",
    "Pero presten mucha atención: como hoy no cae sábado, domingo, miércoles ni jueves, no se festeja hoy en el espacio. El cumpleaños se pasa directamente para el gran sábado veintisiete de junio.",
    "Para el sábado veintisiete de junio, tendremos listas las piñatas colosales, las canastas de sorpresas y el periódico impreso en formato físico para entregar de mano en mano.",
    "Aprovechá este cumpleaños real para dejar tu deseo en nuestro Buzón de Deseos digital. ¡Tus palabras quedarán guardadas para siempre en el baúl del diario! ¡Feliz cumpleaños Alero y nos encontramos el sábado veintisiete para festejar!"
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
    utterance.rate = 0.88;

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
      console.error(e);
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
              author: "Vale",
              text: "¡Que El Alero siga cobijando las risas de todos los niños por 100 años más! 🎈",
              date: "2026-06-07T22:34:50.000Z"
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
    const celebrationBirthday = new Date("2026-06-27T00:00:00");
    const now = new Date();
    const diffCeleb = celebrationBirthday.getTime() - now.getTime();
    setDaysLeftCeleb(Math.ceil(diffCeleb / (1000 * 60 * 60 * 24)));

    fetchWishes();

    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, []);

  const fantasticPresets = [
    "¡HOY EL ALERO CUMPLE 10 AÑOS Y SE SIENTE EL AMOR EN CADA RINCÓN DEL BARRIO! ❤️",
    "¡SÁBADO 27 DE JUNIO: DÍA DE PIÑATAS MÁGICAS Y ABRAZOS PRESENCIALES! 🎉",
    "¡EL ALERO RECIBE DESEOS DE TODO EL PAÍS PARA SUS PRÓXIMOS 100 AÑOS!",
    "¡NUESTRAS FÁBRICAS PREPARAN SORPRESITAS DE AZÚCAR Y PALABRAS FANTÁSTICAS!",
    "¡EL DORREGO SE VISTE DE ARCOÍRIS CON LOS MEJORES COLORES DEL MUNDO!"
  ];

  const doodles = [
    { char: "🎈", label: "Globo alegre" },
    { char: "🎂", label: "Torta de diez" },
    { char: "🌸", label: "Flor silvestre" },
    { char: "🦉", label: "Búho del patio" },
    { char: "✨", label: "Chispas de magia" },
    { char: "🎨", label: "Pintura fresca" },
    { char: "🎁", label: "Cajita sorpresa" },
    { char: "🍭", label: "Chupetín colorido" }
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
      {/* Top Info Bar - Spectrum / Rainbow Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderBottomColor: '#ec4899' }}>
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600">
          <span className="text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black] bg-gradient-to-r from-rose-500 to-pink-600">VOLUMEN 06</span>
          DIARIO EL DORREGO • ¡HOY ES EL CUMPLEAÑOS DE 10 AÑOS! • SANTA FE • 8 DE JUNIO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-pink-600">
          AÑO I • Nº 006<br />
          EDICIÓN ESPECIALÍSIMA: ¡CUMPLEAÑOS DE EL ALERO!
        </div>
      </div>

      {/* Spectacular Masthead with Rainbow Spectrum Borders */}
      <header id="inicio-ed6" className="border-b-[12px] border-b-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-emerald-400 via-cyan-400 via-indigo-500 to-pink-500 pb-1.5 mb-12 text-center relative rounded-b-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
        <div className="bg-white py-10 px-4">
          <motion.div 
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -8 }}
            className="absolute -top-10 -right-2 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20 animate-bounce"
          >
            🎂 ¡HOY 10 AÑOS! 🎂
          </motion.div>
          
          <a href="#inicio-ed6" className="block hover:opacity-80 transition-opacity">
            <h1 className="text-[12vw] md:text-[8.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-500 via-teal-500 via-indigo-600 to-pink-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              EL DORREGO
            </h1>
          </a>
          
          <div className="relative inline-block px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-3 px-8 md:px-16 text-lg md:text-4xl font-black tracking-[0.1em] bg-yellow-300 text-black translate-y-[-4px] shadow-[6px_6px_0px_black] uppercase leading-tight">
              🌈 ¡Los mejores colores del universo! 🌈
            </div>
          </div>

          <div className="mt-8 text-sm md:text-lg font-black max-w-xl mx-auto uppercase tracking-wide bg-amber-100 border-2 border-black/20 p-2.5 rounded-lg">
            "Hoy Lunes 8 de Junio soplamos las 10 velitas intangibles... ¡Pero lee abajo el anuncio especial!"
          </div>
        </div>
      </header>

      {/* CRUCIAL ANNOUNCEMENT SECTION: "HOY NO SE FESTEJA PRESENCIALMENTE" */}
      <section id="sin-festejo-ed6" className="relative group">
        <div className="absolute inset-0 bg-yellow-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-yellow-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl bg-gradient-to-tr from-amber-50/50 via-white to-pink-50/50">
          
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-yellow-300/30 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* Big Alert Notice Box */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-rose-500 to-amber-500 text-white p-6 border-4 border-black shadow-[6px_6px_0px_black] flex flex-col justify-between rounded-xl transform -rotate-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-rose-600 rounded-full p-2 border-2 border-black animate-ping w-8 h-8 flex items-center justify-center font-black text-xl">🚨</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">¡ATENCIÓN BARRIO!</h3>
                </div>
                <p className="text-2xl font-serif font-black uppercase italic leading-none mb-4 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">
                  HOY LUNES 8 DE JUNIO ES EL CUMPLE REAL...
                </p>
                <div className="bg-black/25 p-3 rounded border border-white/20 mb-4">
                  <p className="text-3xl font-black text-yellow-300 text-center leading-none uppercase tracking-tighter">
                    ¡PERO HOY NO SE FESTEJA!
                  </p>
                </div>
                <p className="text-xs font-medium leading-relaxed">
                  Hoy es el día del calendario real en que nuestro Alero cumple sus primeros 10 años. Pero como hoy lunes no es sábado, domingo, miércoles ni jueves (los días de apertura y encuentro), no se festeja hoy en el espacio ¡y se pasa todo directamente para el sábado 27 de junio!
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase font-black">EVENTO REPROGRAMADO</span>
                <span className="bg-white text-black text-xs font-black px-2.5 py-1 rounded shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">SÁB. 27 JUNIO</span>
              </div>
            </div>

            {/* Explanation and warm community messaging */}
            <div className="w-full md:w-3/5 space-y-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-teal-500 text-white px-3 py-1 font-black uppercase text-xs transform rotate-1 shadow-[3px_3px_0px_black] mb-3">
                  📢 COMUNICADO DIRECTO DE LA FÁBRICA
                </span>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-black leading-none mb-4">
                  ¿Por qué hoy no soplamos las velitas?
                </h3>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  Queridas vecinas y vecinos: como hoy lunes no es sábado, ni domingo, ni miércoles, ni tampoco jueves (los días clásicos de encuentro familiar y juego), no hacemos el cumpleaños de El Alero hoy real. ¡Por eso lo pasamos para el <strong className="text-pink-600 uppercase">Sábado 27 de Junio</strong>!
                </p>
                <p className="text-sm font-bold text-gray-700 leading-relaxed mt-3">
                  Ese sábado nos encontraremos todos con abrazos presenciales para celebrar los 10 años. Las fábricas están trabajando a toda máquina y ese día tendremos listo:
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-black text-gray-800 uppercase">
                  <li className="flex items-center gap-2 bg-pink-100/60 p-2 border-2 border-black/10 rounded">
                    🎈 Piñatas gigantes de colores
                  </li>
                  <li className="flex items-center gap-2 bg-yellow-100/60 p-2 border-2 border-black/10 rounded">
                    📦 Cajitas sorpresa artesanales
                  </li>
                  <li className="flex items-center gap-2 bg-cyan-100/60 p-2 border-2 border-black/10 rounded">
                    📰 Periódico escolar impreso real
                  </li>
                  <li className="flex items-center gap-2 bg-purple-100/60 p-2 border-2 border-black/10 rounded">
                    🎶 Cumbia y torta comunitaria
                  </li>
                </ul>
              </div>

              {/* AUDIOLIBRO / LECTURA COMPARTIDA */}
              <div className="bg-amber-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-amber-200 border-2 border-black p-2 rounded-full ${audioState.isSpeaking && !audioState.isPaused ? 'animate-bounce' : ''}`}>
                    <AudioLines className="w-5 h-5 text-amber-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-black uppercase text-amber-900 flex items-center gap-2">
                      <span>📻 AUDIO-LECTURA POR VECINA/O</span>
                      {audioState.isSpeaking && !audioState.isPaused && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                    </p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">
                      {audioState.isSpeaking 
                        ? (audioState.isPaused ? "Lectura pausada..." : "Reproduciendo audio del Volumen 6...") 
                        : "¡Escuchá este anuncio especial con voz de El Alero!"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePlaySpeech}
                    className="flex-1 sm:flex-initial bg-amber-400 hover:bg-amber-300 border-2 border-black px-3 py-1.5 text-xs font-black uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
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

      {/* FUN HEADLINE GENERATOR WITH SPECTRUM COLOR BLOCKS */}
      <section className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 border-4 border-black p-1 rounded-2xl shadow-[10px_10px_0px_black]">
        <div className="bg-white p-6 md:p-8 rounded-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-pink-600 animate-spin" /> TITULAR DE CUMPLEAÑOS COMUNITARIO
            </h3>
            <p className="text-[10px] font-mono font-black text-gray-500 bg-gray-100 px-3 py-1 border-2 border-black rounded uppercase">
              ¡Armá tu propia portada!
            </p>
          </div>

          {/* Selected Headline Box */}
          <div className="bg-yellow-50 border-4 border-black p-6 relative shadow-[4px_4px_0px_black] text-center overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 bg-black text-white font-black text-[9px] px-2.5 py-0.5 uppercase">
              PORTADA DEL BARRIO
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
              <p className="text-xs font-black uppercase mb-3 flex items-center gap-1.5 text-pink-600">
                <span>✨ Elegí una frase fantástica de cumpleaños:</span>
              </p>
              <div className="space-y-1.5 max-h-[180px] overflow-y-auto border-2 border-black/10 p-2.5 bg-gray-50/50 rounded-lg">
                {fantasticPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHeadline(preset)}
                    className="w-full text-left text-xs font-bold p-2 hover:bg-indigo-50 border border-transparent hover:border-black/10 rounded transition-all leading-tight uppercase flex items-start gap-2 text-gray-800"
                  >
                    <span className="text-pink-500">•</span>
                    <span>{preset}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <form onSubmit={handleCustomSubmit} className="space-y-2">
                <label className="block text-xs font-black uppercase text-cyan-600">
                  ✍️ O redactá tu propio titular para el diario político:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customHeadline}
                    onChange={(e) => setCustomHeadline(e.target.value)}
                    placeholder="Escríbí acá tu gran titular de cumpleaños..."
                    className="flex-1 border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-yellow-50 uppercase rounded shadow-[2px_2px_0px_black]"
                    maxLength={100}
                  />
                  <button
                    type="submit"
                    className="bg-cyan-400 hover:bg-cyan-300 border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded"
                  >
                    Publicar
                  </button>
                </div>
              </form>

              <div>
                <p className="text-xs font-black uppercase text-emerald-600 mb-2">
                  🎨 Adornar con un símbolo festivo:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {doodles.map((d, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDoodle(d.char)}
                      className={`w-10 h-10 border-2 border-black flex items-center justify-center text-lg rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_0px_black] transition-all hover:-translate-y-0.5 ${selectedDoodle === d.char ? 'bg-gradient-to-br from-yellow-300 to-amber-400 border-4 scale-105' : 'bg-white hover:bg-gray-50'}`}
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
      <section id="deseos-ed6" className="relative group">
        <div className="absolute inset-0 bg-cyan-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-cyan-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Input Form Column (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <span className="inline-block bg-pink-500 text-white px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[3px_3px_0px_black] mb-2 font-mono">
                💝 COMPARTÍ TU DESEO DE CUMPLE
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                EL ALMACÉN DE DESEOS DE EL ALERO
              </h2>
              
              <p className="text-xs font-bold text-gray-700 leading-relaxed bg-cyan-50 border-2 border-black/10 p-3 rounded-lg">
                ¿Qué le deseás a El Alero por sus 10 años? Escribí tus felicitaciones, anécdotas, risas o sueños para el futuro del espacio comunitario. ¡Se guardará para siempre en el baúl del diario!
              </p>

              <form onSubmit={handleWishSubmit} className="space-y-4 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                <div className="space-y-1.5">
                  <label htmlFor="wish-author-input" className="block text-xs font-black uppercase text-teal-700 flex items-center gap-1">
                    👤 ¿Cómo te llamás? (o vecino/a):
                  </label>
                  <input
                    id="wish-author-input"
                    type="text"
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    placeholder="Ej. Emanuel, Vecina de Coronel Dorrego, Vale..."
                    className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-yellow-50 uppercase rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="wish-text-input" className="block text-xs font-black uppercase text-teal-700">
                    ✍️ Tu deseo mágico para El Alero:
                  </label>
                  <textarea
                    id="wish-text-input"
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    placeholder="Escribí tu mensaje de felicitaciones aquí..."
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
                  className="w-full bg-black hover:bg-gray-800 text-white border-4 border-black py-3 text-xs font-black uppercase transition-all shadow-[4px_4px_0px_#ec4899] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 rounded-md"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                  <span>{isSubmittingWish ? "Guardando..." : "¡Mandar Deseo al Almacén!"}</span>
                </button>

                <p className="text-[10px] font-bold text-gray-500 leading-tight border-t border-black/10 pt-3">
                  💡 Este buzón guarda los deseos directamente en el servidor. Tu mensaje permanecerá visible para todas las personas que entren, sin borrarse al actualizar.
                </p>
              </form>
            </div>

            {/* List Output Column (3/5) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex border-b-4 border-black pb-2 items-center justify-between text-yellow-500">
                <span className="text-sm font-black uppercase tracking-tight text-cyan-600 flex items-center gap-1.5">
                  ✨ Deseos Recibidos ({wishes.length})
                </span>
                <span className="text-xs font-bold text-gray-400 font-mono">
                  HISTORIAL EN NUBE
                </span>
              </div>

              <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
                {wishes.length === 0 ? (
                  <div className="border-4 border-dashed border-black/20 p-8 text-center uppercase font-black text-gray-400 bg-gray-50/50 rounded-xl">
                    Cargando deseos del baúl... ¡Sé el primero en dejar tu huella en los 10 años hoy lunes!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AnimatePresence>
                      {wishes.map((wish, idx) => {
                        // Rainbow sticker color presets to reflect "the best colors in the world"
                        const stickerColors = [
                          "bg-yellow-100 border-yellow-300 shadow-yellow-200",
                          "bg-pink-100 border-pink-300 shadow-pink-200",
                          "bg-cyan-100 border-cyan-300 shadow-cyan-200",
                          "bg-green-100 border-green-300 shadow-green-200",
                          "bg-purple-100 border-purple-300 shadow-purple-200",
                          "bg-amber-100 border-amber-300 shadow-amber-200"
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
                            <p className="text-xs font-bold leading-relaxed italic text-gray-900">
                              "{wish.text}"
                            </p>
                            <div className="mt-2 pt-2 border-t border-black/10 flex justify-between items-center text-[10px] font-black uppercase">
                              <span className="truncate text-teal-800">👤 {wish.author}</span>
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

      {/* LATEST ACTION REPORTS FROM THE CREATIVE WORKSHOPS */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_black] rotate-[-0.5deg] rounded-2xl">
        <h2 className="text-3xl font-black mb-4 uppercase flex items-center gap-2 justify-center md:justify-start drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
          🎁 LAS FÁBRICAS TRABAJAN AL 100% PARA EL SÁBADO 27
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black mt-6">
          <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] bg-cyan-500 text-white px-2 py-0.5 rounded uppercase font-black">Fábrica de Objetos</span>
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
        <div className="bg-rose-500 text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          SÁBADO 27 DE JUNIO: LA FIESTA 🎉
        </div>
        <div className="bg-yellow-400 text-black font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          8 DE JUNIO REAL 🎂
        </div>
        <div className="bg-cyan-400 text-black font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-2 hover:rotate-0 transition-transform cursor-pointer font-mono">
          HOY NO SE FESTEJA PRESENCIAL ⚠️
        </div>
        <div className="bg-purple-600 text-white font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-6 hover:rotate-0 transition-transform cursor-pointer font-mono">
          TEJIENDO TRAMA COMUNITARIA ✨
        </div>
      </div>
    </div>
  );
}

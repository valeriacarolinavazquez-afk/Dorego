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
  Cake
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
                <p className="border-l-8 border-pink-500 pl-6 py-2 bg-pink-50">
                  Además, ¡ya se siente el festejo! Estamos armando los <span className="text-pink-600 uppercase font-black not-italic">bonetes y gorritos</span> (que son lo mismo, ¡pura fiesta!) para los 10 años del Alero; los hicimos aparte cortando un espiral de papel que pusimos alrededor de cada uno para que tengan movimiento y ritmo. ¡Estamos de fiesta!
                </p>
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
                      src="/src/assets/images/alero_bonetes_artesanales_1778986050595.png" 
                      alt="Festejos y bonetes en el alero" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback if local image missing (though it shouldn't be)
                        e.currentTarget.src = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600";
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
                <p className="font-black text-sm italic">"Los bonetes o gorritos fueron hechos aparte con espirales cortados a mano que giran al compás del festejo. ¡Pura magia y movimiento en El Alero!"</p>
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
  const [edition, setEdition] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('el_dorrego_edition');
      return saved ? parseInt(saved) : 4;
    }
    return 4;
  });

  useEffect(() => {
    localStorage.setItem('el_dorrego_edition', edition.toString());
  }, [edition]);

  const toggleEdition = (num: number) => {
    setEdition(num);
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-[#dcdcdc] flex justify-center p-4 md:p-10 font-mono paper-texture overflow-x-hidden zoom-container"
      style={{ 
        zoom: "67%",
        WebkitZoom: "67%",
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
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <button 
                  onClick={() => toggleEdition(1)}
                  className={`border-2 p-2 text-[10px] font-black uppercase transition-colors ${edition === 1 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 01
                </button>
                <button 
                  onClick={() => toggleEdition(2)}
                  className={`border-2 p-2 text-[10px] font-black uppercase transition-colors ${edition === 2 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 02
                </button>
                <button 
                  onClick={() => toggleEdition(3)}
                  className={`border-2 p-2 text-[10px] font-black uppercase transition-colors ${edition === 3 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 03
                </button>
                <button 
                  onClick={() => toggleEdition(4)}
                  className={`border-2 p-2 text-[10px] font-black uppercase transition-colors ${edition === 4 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 04
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
        {edition === 1 && <Edition01 />}
        {edition === 2 && <Edition02 />}
        {edition === 3 && <Edition03 />}
        {edition === 4 && <Edition04 />}

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 rotate-90 text-8xl font-black opacity-[0.03] pointer-events-none select-none uppercase tracking-[1em]">
          EL ALERO EL ALERO EL ALERO
        </div>
      </motion.div>
    </div>
  );
}

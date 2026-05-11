import { motion } from "motion/react";
import { 
  Smile, 
  Heart,
  Star as StarIcon,
  Map as MapIcon,
  Scissors,
  Hand
} from "lucide-react";

export default function Edition01() {
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
      <header id="inicio" className="border-b-[12px] border-black pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-6 -left-6 bg-yellow-400 border-4 border-black p-4 rounded-full font-black text-xs transform -rotate-12 hidden md:block text-white shadow-[4px_4px_0px_black]"
        >
          ¡EL MEJOR\nLUGAR DEL\nMUNDO!
        </motion.div>
        
        <a href="#inicio" className="block hover:opacity-80 transition-opacity">
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
          
          <section id="que-es-alero" className="relative text-black">
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

          <section id="historias-risa" className="border-t-[6px] border-black pt-10 text-black">
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

          <section id="terror" className="border-t-[6px] border-black pt-10 text-black">
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

          <section id="cristina-solis" className="border-t-[6px] border-black pt-10 text-black">
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

          <section id="literatura" className="border-t-[6px] border-black pt-10 text-black">
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

          <section id="pedidos" className="border-t-[6px] border-black pt-10 text-black">
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

          <section id="quienes-somos" className="relative">
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
              id="mantitas"
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
                  <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-black px-3 py-1 uppercase tracking-widest animate-pulse shadow-[2px_2px_0px_black]">
                    En Vivo
                  </div>
                  <iframe 
                    src="https://streamable.com/e/mflgt6" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen 
                    title="Mantitas de Bienvenida Video"
                    className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
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

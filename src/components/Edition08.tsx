import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cake, 
  PartyPopper, 
  Music, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Heart, 
  Smile, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Square, 
  AudioLines, 
  Users, 
  Scissors, 
  Gamepad2, 
  Check, 
  Paintbrush, 
  Disc, 
  Send,
  Sparkle
} from "lucide-react";

interface Wish {
  id: number;
  author: string;
  text: string;
  date: string;
}

export default function Edition08() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWishAuthor, setNewWishAuthor] = useState("");
  const [newWishText, setNewWishText] = useState("");
  const [isSubmittingWish, setIsSubmittingWish] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // Sound and TTS States
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [speechState, setSpeechState] = useState<{
    isSpeaking: boolean;
    isPaused: boolean;
    currentIndex: number;
  }>({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1
  });

  // Interactive Cookie Decorator State
  const [cookieIcing, setCookieIcing] = useState("bg-amber-100"); // base color
  const [cookieSprinkles, setCookieSprinkles] = useState<Array<{ id: number; x: number; y: number; color: string; shape: "circle" | "star" | "heart" }>>([]);
  const [selectedSprinkleColor, setSelectedSprinkleColor] = useState("#f43f5e"); // rose-500
  const [selectedSprinkleShape, setSelectedSprinkleShape] = useState<"circle" | "star" | "heart">("circle");
  const [customGreeting, setCustomGreeting] = useState("¡Felicidades!");

  // Interactive Soundboard State
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const textToRead = [
    "Diario El Dorrego. Prensa Infantil. Volumen ocho. Veinticuatro de junio de dos mil veintiséis. Edición Especial de Aniversario. ¡El Alero cumple diez años!",
    "Como en la rayuela, el diez es el cielo y ya lo tenemos al alcance de la mano. Con un pie en la tierra y los ojos en las nubes, te invitamos a celebrar y celebrarnos en esta fecha tan especial de nuestra historia.",
    "El gran festejo comunitario será este sábado veintisiete de junio, de quince a dieciocho horas. Nos encontraremos en Avenida French y Sarmiento, aquí en Santa Fe.",
    "La entrada es totalmente libre y gratuita para todo el público. Vení a disfrutar en el espacio público que construimos juntos día a día.",
    "¿Qué vamos a encontrar en la fiesta? Tendremos una pista de baile para mover el esqueleto, divertidos juegos de patio para todas las edades, talleres de elaboración de galletitas, bordado de manteles, producción de piñatas, bonetes ¡y muchísimos juegos y sorpresas más!",
    "La música en vivo estará a cargo de dos grandes grupos que nos harán bailar con toda el alma: Elegidos Chamamé para zapatear bien fuerte, y Gulubú Rock con las mejores canciones infantiles reversionadas.",
    "Gobierno de la Provincia de Santa Fe y Santa Fe Cultura invitan a toda la comunidad a sumarse a este abrazo barrial."
  ];

  // Helper to dynamically get API URLs
  const getApiUrl = (endpoint: string) => {
    const currentHost = typeof window !== "undefined" ? window.location.hostname : "";
    if (
      currentHost.includes("localhost") || 
      currentHost.includes("127.0.0.1") || 
      currentHost.includes("run.app")
    ) {
      return endpoint;
    }
    return `https://ais-pre-rawgpkbifbfojkwv7g7d5m-112551938117.us-east5.run.app${endpoint}`;
  };

  useEffect(() => {
    fetchWishes();
  }, []);

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
            author: "Familia Gómez",
            text: "¡Felices 10 años, querido Alero! Un espacio lleno de luz, juegos y risas donde crecieron nuestros chicos. ¡Por muchos años más de encuentro!",
            date: "2026-06-24T10:00:00.000Z"
          },
          {
            id: 2,
            author: "Luchi (9 años)",
            text: "¡Me encanta ir a pintar y jugar en el patio! ¡Feliz cumple al Alero que tiene la hamaca más divertida del mundo entero! 🎂✨",
            date: "2026-06-23T15:30:00.000Z"
          }
        ];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(seed));
        setWishes(seed);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleWishSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWishText.trim()) {
      setWishError("¡Por favor, escribí un saludo de cumpleaños para El Alero!");
      return;
    }
    setWishError(null);
    setIsSubmittingWish(true);

    const authorVal = newWishAuthor.trim() ? newWishAuthor.trim() : "Vecino/a alegre";
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
        let wishesList: Wish[] = [];
        if (stored) {
          wishesList = JSON.parse(stored);
        } else {
          wishesList = [
            {
              id: 1,
              author: "Familia Gómez",
              text: "¡Felices 10 años, querido Alero! Un espacio lleno de luz, juegos y risas donde crecieron nuestros chicos.",
              date: "2026-06-24T10:00:00.000Z"
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

  // Sound Synthesizer for Interactive Soundboard
  const playSoundEffect = (type: string) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      const now = audioCtx.currentTime;

      if (type === "accordion") {
        // Chamamé accordion style chord
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now); // A4
        osc.frequency.setValueAtTime(554.37, now + 0.1); // C#5
        osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      } else if (type === "guitar") {
        // Rock guitar style pluck
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(196.00, now); // G3
        osc.frequency.setValueAtTime(293.66, now + 0.05); // D4
        osc.frequency.setValueAtTime(392.00, now + 0.1); // G4
        gainNode.gain.setValueAtTime(0.12, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      } else if (type === "drum") {
        // Bass/Snare beat
        osc.type = "sine";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      } else if (type === "cheer") {
        // Sparkly high noise
        osc.type = "sine";
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
        osc.frequency.setValueAtTime(1567.98, now + 0.16); // G6
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      }

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.5);

      setActiveSound(type);
      setTimeout(() => setActiveSound(null), 300);
    } catch (e) {
      console.warn("Audio unsupported or blocked", e);
    }
  };

  // Speech Synthesis Narrator
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
    utterance.pitch = 1.08;
    utterance.rate = 0.95;

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

  // Adding sprinkles to virtual cookie
  const handleCookieClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Constraint inside round cookie
    const distanceToCenter = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
    if (distanceToCenter > 42) return; // Keep inside cookie border

    const newSprinkle = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: selectedSprinkleColor,
      shape: selectedSprinkleShape
    };

    setCookieSprinkles(prev => [...prev, newSprinkle]);
    
    // Play dry click/pop noise
    if (soundEnabled) {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
      } catch (e) {}
    }
  };

  return (
    <div className="text-black space-y-12">
      {/* Top Info Bar - Golden/Festive Birthday Theme */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-4 border-amber-500 pb-4 mb-8 gap-2">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-amber-900 text-left">
          <span className="bg-amber-500 text-black px-2 py-1 mr-2 inline-block font-sans shadow-[2px_2px_0px_black] rounded">
            VOLUMEN 08
          </span>
          DIARIO EL DORREGO • EDICIÓN ESPECIAL ANIVERSARIO • SANTA FE • 2026
        </div>
        <div className="text-left sm:text-right text-[10px] md:text-sm font-black uppercase text-amber-600">
          AÑO I • Nº 008<br />
          24 DE JUNIO DE 2026
        </div>
      </div>

      {/* Masthead */}
      <header id="inicio-ed8" className="border-b-[12px] border-amber-400 pb-8 mb-12 text-center relative">
        <motion.div 
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 6 }}
          className="absolute -top-10 -right-2 bg-rose-500 border-4 border-black p-3 rounded-xl font-black text-xs md:text-sm text-white shadow-[6px_6px_0px_black] z-20"
        >
          ¡10 AÑOS<br/>DE MAGIA! 🎉
        </motion.div>
        
        <a href="#inicio-ed8" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-[14vw] md:text-[10rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black">
            EL DORREGO
          </h1>
        </a>
        
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-amber-500 transform rotate-1 skew-x-[-2deg] translate-y-1"></div>
          <div className="relative border-4 border-black py-2 px-12 text-xl md:text-4xl font-black tracking-[0.2em] bg-white text-black translate-y-[-4px] shadow-[4px_4px_0px_black] uppercase">
            ¡El Alero Cumple 10! 🥰🎂
          </div>
        </div>

        {/* Audio Player Ribbon */}
        <div className="mt-8 flex justify-center" data-html2canvas-ignore="true">
          <div className="bg-[#fef3c7] border-4 border-black p-4 max-w-xl w-full rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[6px_6px_0px_black]">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-black p-2.5 rounded-xl border-2 border-black animate-bounce shrink-0">
                <AudioLines className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black uppercase text-amber-950 leading-tight">Voz Protectora del Diario</p>
                <p className="text-[10px] font-bold text-amber-800 leading-none mt-1 uppercase">Escuchá el diario leído en vivo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlaySpeech}
                className="bg-black hover:bg-stone-800 text-white font-black text-[10px] px-3.5 py-2 border-2 border-black rounded shadow-[2.5px_2.5px_0px_#f59e0b] active:translate-y-0.5 active:shadow-none cursor-pointer uppercase flex items-center gap-1"
              >
                {speechState.isSpeaking && !speechState.isPaused ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-400 fill-current" /> Pausa
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" /> Leer Diario
                  </>
                )}
              </button>
              {speechState.isSpeaking && (
                <button
                  type="button"
                  onClick={handleStopSpeech}
                  className="bg-red-500 hover:bg-red-400 text-white font-black text-[10px] p-2 border-2 border-black rounded shadow-[2.5px_2.5px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer uppercase"
                  title="Detener Narración"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid: Poster and Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-black">
        
        {/* Main Banner Poster Column (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Main Invitation Block */}
          <section className="relative group">
            <div className="absolute inset-0 bg-rose-100 translate-x-4 translate-y-4 rounded-3xl border-4 border-dashed border-rose-300"></div>
            <div className="relative border-4 border-black p-6 md:p-10 bg-white rounded-3xl shadow-[8px_8px_0px_black]">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-rose-500 text-white font-mono text-[9px] px-3 py-1 rounded font-black tracking-widest uppercase shadow-[2px_2px_0px_black]">
                  CRÓNICA DE UNA CELEBRACIÓN
                </span>
                <Cake className="w-8 h-8 text-rose-500 animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-tight leading-none mb-6 text-left text-rose-950 uppercase border-b-4 border-double border-stone-200 pb-4">
                El Alero Cumple 10 🥰💕
              </h2>
              
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-stone-800 text-left mb-8 italic">
                🎂🎉 Como en la rayuela, el 10 es el cielo y ya lo tenemos al alcance de la mano. Con un pie en la tierra y los ojos en las nubes, te invitamos a celebrar y celebrarnos.
              </p>

              {/* Event details cards layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                
                <div className="bg-amber-50 border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <div className="bg-amber-400 p-2 border-2 border-black w-fit rounded-lg shadow-[1px_1px_0px_black] mb-3">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="text-xs font-black uppercase text-amber-950 mb-1">¿Cuándo es?</h4>
                    <p className="text-sm font-extrabold text-stone-900 leading-snug">Sábado 27 de Junio</p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-amber-600 tracking-wide mt-4">15 a 18 Horas</span>
                </div>

                <div className="bg-indigo-50 border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <div className="bg-indigo-500 p-2 border-2 border-black w-fit rounded-lg shadow-[1px_1px_0px_black] mb-3 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-black uppercase text-indigo-950 mb-1">¿Dónde nos vemos?</h4>
                    <p className="text-sm font-extrabold text-stone-900 leading-snug">Av. French y Sarmiento</p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-indigo-600 tracking-wide mt-4">Santa Fe Capital</span>
                </div>

                <div className="bg-emerald-50 border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <div className="bg-emerald-400 p-2 border-2 border-black w-fit rounded-lg shadow-[1px_1px_0px_black] mb-3">
                      <Heart className="w-5 h-5 text-red-600 fill-current" />
                    </div>
                    <h4 className="text-xs font-black uppercase text-emerald-950 mb-1">¿Cuánto cuesta?</h4>
                    <p className="text-sm font-extrabold text-stone-900 leading-snug">¡Completamente Libre!</p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wide mt-4">Público y gratuito</span>
                </div>

              </div>
            </div>
          </section>

          {/* COMMUNITY PHOTO FROM VALERIA */}
          <section className="relative group">
            <div className="absolute inset-0 bg-[#e0f2fe] translate-x-3 translate-y-3 rounded-3xl border-4 border-dashed border-sky-300"></div>
            <div className="relative border-4 border-black p-4 md:p-6 bg-white rounded-3xl shadow-[6px_6px_0px_black] text-left">
              <span className="bg-sky-500 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block mb-4">
                📷 POSTALES DE NUESTROS ENCUENTROS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner aspect-[3/4] w-full">
                  <img
                    src="https://i.postimg.cc/zX9XSMP3/FB-IMG-1782574260696.jpg"
                    alt="Encuentro en El Alero - Postal 1"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner aspect-[3/4] w-full">
                  <img
                    src="https://i.postimg.cc/C5vyrZNV/FB-IMG-1782574265165.jpg"
                    alt="Encuentro en El Alero - Postal 2"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner aspect-[3/4] w-full">
                  <img
                    src="https://i.postimg.cc/ZRVD4GyX/FB-IMG-1782574272016.jpg"
                    alt="Encuentro en El Alero - Postal 3"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="text-xs font-bold text-stone-600 mt-4 text-center uppercase tracking-tight italic">
                El Alero, espacio de juego, encuentro y risas compartidas en el corazón de Guadalupe Oeste. ❤️
              </p>
            </div>
          </section>

          {/* Core Activities Breakdown */}
          <section className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <PartyPopper className="w-6 h-6 text-amber-500 animate-bounce" />
              Cronograma & Actividades de Fábrica
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-amber-50 border-4 border-black p-5 rounded-2xl text-left shadow-[5px_5px_0px_black] hover:-translate-y-0.5 transition-transform">
                <span className="bg-amber-500 text-black border border-black font-mono text-[8px] font-black px-2 py-0.5 rounded uppercase inline-block mb-3 shadow-[1px_1px_0px_black]">
                  TALLER INFANTIL / CREATIVO
                </span>
                <h4 className="text-lg font-black uppercase leading-tight mb-2 text-stone-900">
                  🍪 Elaboración de Galletitas & Bonetes
                </h4>
                <p className="text-xs font-bold text-stone-700 leading-relaxed">
                  ¡Poné las manos en la masa! Un taller para amasar galletitas de cumple, decorarlas con chispas de colores, bordar manteles comunitarios con hilos mágicos y producir piñatas llenas de dulces y bonetes de cartón para celebrar con todo.
                </p>
              </div>

              <div className="bg-rose-50 border-4 border-black p-5 rounded-2xl text-left shadow-[5px_5px_0px_black] hover:-translate-y-0.5 transition-transform">
                <span className="bg-rose-400 text-white border border-black font-mono text-[8px] font-black px-2 py-0.5 rounded uppercase inline-block mb-3 shadow-[1px_1px_0px_black]">
                  FESTEJO COMUNITARIO
                </span>
                <h4 className="text-lg font-black uppercase leading-tight mb-2 text-stone-900">
                  🪁 Juegos de Patio & Pista de Baile
                </h4>
                <p className="text-xs font-bold text-stone-700 leading-relaxed">
                  Volvemos a jugar en nuestro gran patio. Rayuela gigante, carreras de embolsados, juegos de puntería tradicionales, y una pista de baile abierta a todo ritmo para celebrar la alegría de encontrarnos cara a cara.
                </p>
              </div>

            </div>
          </section>

          {/* NEW COMMUNITY FEATURE CARD WITH 3:4 PHOTO IN HORIZONTAL LAYOUT */}
          <section className="relative group">
            <div className="absolute inset-0 bg-[#fef08a] translate-x-3 translate-y-3 rounded-3xl border-4 border-dashed border-yellow-300"></div>
            <div className="relative border-4 border-black p-5 md:p-6 bg-white rounded-3xl shadow-[6px_6px_0px_black] text-left">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                
                {/* 3:4 Aspect ratio Image */}
                <div className="w-full md:w-1/2">
                  <div className="border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner aspect-[3/4] w-full">
                    <img
                      src="https://i.postimg.cc/bNbW2BXp/FB-IMG-1782574276705.jpg"
                      alt="Momentos mágicos en El Alero"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Story/Text Column */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="bg-yellow-400 text-black font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                    ✨ MOMENTOS QUE DEJAN HUELLA
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-stone-900 leading-none">
                    La Magia del Encuentro
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-stone-700 leading-relaxed uppercase">
                    Cada rincón de El Alero guarda un eco de risas, juegos compartidos y manos creadoras que transforman lo cotidiano en algo extraordinario.
                  </p>
                  <p className="text-xs font-bold text-stone-600 leading-relaxed italic">
                    "Aquí el juego es cosa seria y la ternura es nuestra bandera. Gracias a cada vecina y vecino que forma parte de este gran sueño colectivo." ❤️
                  </p>
                  <div className="flex gap-2 pt-2">
                    <span className="text-[10px] font-black uppercase bg-stone-100 text-stone-800 border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_black]">
                      #Comunidad
                    </span>
                    <span className="text-[10px] font-black uppercase bg-stone-100 text-stone-800 border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_black]">
                      #10AñosJuntos
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* INTERACTIVE COMPONENT: COOKIE & BONNET DECORATOR */}
          <section className="bg-amber-50/50 border-4 border-black rounded-3xl p-6 text-left shadow-[6px_6px_0px_black] space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-black font-mono text-[8.5px] px-2 py-0.5 rounded font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_black]">
                  TALLER INTERACTIVO DIGITAL
                </span>
                <Sparkle className="w-4 h-4 text-amber-500 animate-spin" />
              </div>
              <h3 className="text-2xl font-black uppercase text-amber-950 mt-1">
                🍪 Diseñá tu Galleta de Cumpleaños
              </h3>
              <p className="text-xs font-bold text-stone-700 mt-1 leading-relaxed">
                ¡Hacé clic en la galleta para colocar granas y confites de colores! Elegí la forma y el color de tus confites en el panel y decorala a tu gusto para celebrar los 10 años de El Alero.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Controls */}
              <div className="md:col-span-5 space-y-4">
                {/* Sprinkles Type Selector */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-amber-900 mb-1.5">1. Forma del Confite</label>
                  <div className="flex gap-1.5">
                    {(["circle", "star", "heart"] as const).map(shape => (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => setSelectedSprinkleShape(shape)}
                        className={`flex-1 border border-black p-1.5 text-[9px] font-black rounded uppercase cursor-pointer shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none ${selectedSprinkleShape === shape ? "bg-black text-white" : "bg-white text-black hover:bg-stone-50"}`}
                      >
                        {shape === "circle" ? "● Círculo" : shape === "star" ? "★ Estrella" : "♥ Corazón"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-amber-900 mb-1.5">2. Color del Glasé</label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { hex: "#f43f5e", label: "Rosa" },
                      { hex: "#06b6d4", label: "Cian" },
                      { hex: "#eab308", label: "Oro" },
                      { hex: "#22c55e", label: "Verde" },
                      { hex: "#a855f7", label: "Violeta" },
                      { hex: "#f97316", label: "Naranja" }
                    ].map(col => (
                      <button
                        key={col.hex}
                        type="button"
                        onClick={() => setSelectedSprinkleColor(col.hex)}
                        className="w-8 h-8 rounded-full border-2 border-black shadow-[1.5px_1.5px_0px_black] relative transition-transform hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: col.hex }}
                        title={col.label}
                      >
                        {selectedSprinkleColor === col.hex && (
                          <Check className="w-4 h-4 text-white absolute inset-0 m-auto drop-shadow-[1px_1px_0px_black]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text writer */}
                <div className="text-left space-y-1">
                  <label className="block text-[10px] font-black uppercase text-amber-900">
                    3. Frase en el centro (Glasé):
                  </label>
                  <input
                    type="text"
                    value={customGreeting}
                    onChange={(e) => setCustomGreeting(e.target.value)}
                    placeholder="Ej. ¡Feliz Cumple!"
                    className="w-full border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded bg-white shadow-[1px_1px_0px_black]"
                    maxLength={16}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setCookieSprinkles([])}
                  className="w-full bg-white hover:bg-stone-50 text-black border-2 border-black font-black text-[10px] py-1.5 rounded uppercase shadow-[2.5px_2.5px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer"
                >
                  🧹 Limpiar Decoración
                </button>
              </div>

              {/* Cookie canvas */}
              <div className="md:col-span-7 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-stone-300 rounded-full translate-x-2 translate-y-2"></div>
                  
                  {/* Outer Cookie Base */}
                  <div 
                    onClick={handleCookieClick}
                    className="w-56 h-56 rounded-full bg-[#dfba88] border-[6px] border-amber-950 flex items-center justify-center relative cursor-crosshair overflow-hidden shadow-inner select-none transition-transform hover:scale-102 active:scale-98"
                  >
                    {/* Inner Icing Coat */}
                    <div className="absolute w-44 h-44 rounded-full bg-[#fdf2e9] border-4 border-dashed border-[#dfba88]/60 flex items-center justify-center">
                      
                      {/* Writing inside */}
                      <span className="font-serif font-black italic text-stone-700 tracking-tighter uppercase text-center select-none max-w-[120px] leading-tight text-sm drop-shadow-[1px_1px_0px_white]">
                        {customGreeting}
                      </span>
                    </div>

                    {/* Render Sprinkles */}
                    {cookieSprinkles.map(spr => (
                      <span
                        key={spr.id}
                        className="absolute select-none pointer-events-none drop-shadow-[1px_1.5px_0px_black] font-bold"
                        style={{
                          left: `${spr.x}%`,
                          top: `${spr.y}%`,
                          color: spr.color,
                          transform: "translate(-50%, -50%)",
                          fontSize: spr.shape === "circle" ? "14px" : spr.shape === "star" ? "18px" : "16px"
                        }}
                      >
                        {spr.shape === "circle" ? "●" : spr.shape === "star" ? "★" : "♥"}
                      </span>
                    ))}
                  </div>
                  
                  <span className="absolute bottom-2 right-2 bg-amber-500 text-black font-mono text-[8px] font-black py-0.5 px-1.5 rounded shadow-[1px_1px_0px_black] uppercase border border-black">
                    {cookieSprinkles.length} confites
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* MUSIC IN LIVE / SOUND EFFECTS BOARD */}
          <section className="bg-indigo-50 border-4 border-black rounded-3xl p-6 text-left shadow-[6px_6px_0px_black] space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-600 text-white font-mono text-[9px] px-2.5 py-0.5 rounded font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_black]">
                  ESCENARIO COMUNITARIO
                </span>
                <Music className="w-4 h-4 text-indigo-600 animate-pulse" />
              </div>
              <h3 className="text-2xl font-black uppercase text-indigo-950 mt-1">
                🎶 Música en Vivo en el Patio
              </h3>
              <p className="text-xs font-bold text-indigo-900 leading-relaxed mt-1">
                Para cantar, saltar y bailar bien agarrados de la mano, nos acompañan dos bandas increíbles de Santa Fe. ¡Hacé clic en los instrumentos para componer tu propia melodía barrial!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Band information */}
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-3">
                  <h4 className="font-black text-sm uppercase text-amber-950">Elegidos Chamamé 🎻</h4>
                  <p className="text-xs font-bold text-stone-700 leading-snug mt-1">
                    Zapateo fuerte de patio, acordeones relucientes y la música tradicional litoraleña que nos hermana y nos hace levantar los pañuelos al cielo.
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-600 pl-3">
                  <h4 className="font-black text-sm uppercase text-indigo-950">Gulubú Rock 🎸</h4>
                  <p className="text-xs font-bold text-stone-700 leading-snug mt-1">
                    Los clásicos inolvidables de María Elena Walsh con toda la potencia de la guitarra eléctrica, batería rockera y coros para gritar a viva voz.
                  </p>
                </div>
              </div>

              {/* Interactive Audio Mix Board */}
              <div className="bg-white border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_black] space-y-3">
                <p className="text-[10px] font-black uppercase text-indigo-950 text-center border-b border-dashed border-stone-200 pb-2">
                  🎛️ Mezcladora de Sonido Barrial
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => playSoundEffect("accordion")}
                    className={`border-2 border-black p-3 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-[2px_2px_0px_black] ${activeSound === "accordion" ? "bg-amber-400" : "bg-amber-50 hover:bg-amber-100"}`}
                  >
                    <Disc className={`w-6 h-6 text-amber-700 ${activeSound === "accordion" ? "animate-spin" : ""}`} />
                    <span className="text-[9px] font-black uppercase text-amber-950">Acordeón</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => playSoundEffect("guitar")}
                    className={`border-2 border-black p-3 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-[2px_2px_0px_black] ${activeSound === "guitar" ? "bg-indigo-400 text-white" : "bg-indigo-50 hover:bg-indigo-100"}`}
                  >
                    <Music className={`w-6 h-6 text-indigo-700 ${activeSound === "guitar" ? "animate-bounce" : ""}`} />
                    <span className="text-[9px] font-black uppercase text-indigo-950">Guitarra Rock</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => playSoundEffect("drum")}
                    className={`border-2 border-black p-3 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-[2px_2px_0px_black] ${activeSound === "drum" ? "bg-stone-300" : "bg-stone-100 hover:bg-stone-200"}`}
                  >
                    <Gamepad2 className="w-6 h-6 text-stone-700" />
                    <span className="text-[9px] font-black uppercase text-stone-900">Bombo Legüero</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => playSoundEffect("cheer")}
                    className={`border-2 border-black p-3 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-[2px_2px_0px_black] ${activeSound === "cheer" ? "bg-rose-400 text-white" : "bg-rose-50 hover:bg-rose-100"}`}
                  >
                    <Sparkles className="w-6 h-6 text-rose-500" />
                    <span className="text-[9px] font-black uppercase text-rose-950">Aplausos / Fiesta</span>
                  </button>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Community Board and Organizers Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-12">
          
          {/* Institutional / Organizers Block */}
          <section className="border-[6px] border-black p-6 bg-black text-white rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,0.15)] text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
            <Users className="w-10 h-10 text-yellow-300 mb-4 animate-pulse" />
            
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">
              Organizan con el Corazón
            </h3>
            
            <p className="text-xs font-bold leading-relaxed text-stone-300 uppercase mb-6">
              Esta fiesta es construida colectivamente por el Gobierno de la Provincia de Santa Fe y la Dirección de Santa Fe Cultura para celebrar una década de derechos, arte, contención y juego libre en nuestro barrio.
            </p>

            <div className="space-y-2 border-t border-white/20 pt-4">
              <a 
                href="https://instagram.com/gobsantafe" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-2.5 rounded-lg text-xs font-bold transition-all text-white"
              >
                <span>@gobsantafe</span>
                <span className="text-[9px] uppercase tracking-wider bg-white/15 px-2 py-0.5 rounded">Instagram</span>
              </a>
              <a 
                href="https://instagram.com/santa_fe_cultura" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-2.5 rounded-lg text-xs font-bold transition-all text-white"
              >
                <span>@santa_fe_cultura</span>
                <span className="text-[9px] uppercase tracking-wider bg-white/15 px-2 py-0.5 rounded">Instagram</span>
              </a>
            </div>
          </section>

          {/* REAL WISHLIST / MURAL DE SALUDOS */}
          <section id="buzon-ed8" className="relative">
            <div className="absolute inset-0 bg-yellow-50 translate-x-2 translate-y-2 rounded-2xl border-4 border-dashed border-yellow-300 -z-10"></div>
            <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_black] text-left">
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <h3 className="text-lg font-black uppercase text-amber-950 flex items-center gap-1.5 leading-none">
                  <Smile className="w-5 h-5 text-amber-500" />
                  Mural de Deseos
                </h3>
                <span className="text-[9px] font-mono font-black bg-amber-500 text-black px-2 py-0.5 rounded uppercase shadow-[1px_1px_0px_black]">
                  REAL ✍️
                </span>
              </div>
              
              <p className="text-xs font-bold text-stone-700 leading-relaxed mb-4 uppercase">
                ¡Dejale tu mensaje de felicitaciones o un deseo de cumpleaños a El Alero por sus 10 años! Tu firma y saludo quedarán grabados en la red comunitaria del barrio.
              </p>

              {/* Submit Form */}
              <form onSubmit={handleWishSubmit} className="space-y-3 mb-6 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="space-y-1">
                  <label className="block text-[9px] font-black uppercase text-stone-500">Tu Nombre / Familia / Firma</label>
                  <input
                    type="text"
                    placeholder="Ej. Los Vecinos de Av. French, Lucas (8 años)..."
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    className="w-full border border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded bg-white"
                    maxLength={25}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[9px] font-black uppercase text-stone-500">Tu Mensaje o Deseo de Cumpleaños</label>
                  <textarea
                    placeholder="¡Que sigan jugando y llenando el barrio de alegría por 100 años más!..."
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    className="w-full border border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 rounded bg-white h-16"
                    maxLength={140}
                  />
                </div>

                {wishError && (
                  <p className="text-[10px] font-black text-rose-600 uppercase">
                    ⚠️ {wishError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingWish}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-black font-black uppercase text-xs py-2.5 px-4 border-2 border-black shadow-[3px_3px_0px_black] rounded-lg active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmittingWish ? "COLGANDO EN EL MURAL..." : "¡COLGAR EN EL MURAL!"}
                </button>
              </form>

              {/* Render Wishes list */}
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                <AnimatePresence>
                  {wishes.map((wish) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-yellow-100/50 border border-yellow-300/80 rounded-xl relative overflow-hidden"
                    >
                      <div className="absolute top-1.5 right-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                      </div>
                      <p className="text-xs font-extrabold text-stone-800 leading-snug">
                        "{wish.text}"
                      </p>
                      <div className="flex justify-between items-center mt-2 pt-1 border-t border-yellow-300/30 text-[9px] uppercase font-black tracking-tight text-amber-800">
                        <span>✍️ {wish.author}</span>
                        <span className="opacity-60">
                          {new Date(wish.date).toLocaleDateString("es-AR", {
                            day: "numeric",
                            month: "short"
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </section>

        </aside>

      </div>

      {/* FINAL CLOSING IMAGE BANNER (3:4 Ratio in Horizontal Layout) */}
      <section className="mt-16 relative group max-w-5xl mx-auto px-4 md:px-0">
        <div className="absolute inset-0 bg-rose-100 translate-x-3 translate-y-3 rounded-3xl border-4 border-dashed border-rose-300"></div>
        <div className="relative border-4 border-black p-5 md:p-6 bg-white rounded-3xl shadow-[6px_6px_0px_black] text-left">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            
            {/* 3:4 Aspect ratio Image */}
            <div className="w-full md:w-1/2">
              <div className="border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner aspect-[3/4] w-full">
                <img
                  src="https://i.postimg.cc/prKCy392/FB-IMG-1782574281231.jpg"
                  alt="Gran Cierre del Encuentro"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Story/Text Column */}
            <div className="w-full md:w-1/2 space-y-4">
              <span className="bg-rose-500 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                🎈 EL GRAN CIERRE DE UNA DÉCADA MÁGICA
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-stone-900 leading-none">
                La Alegría Multiplicada
              </h3>
              <p className="text-xs md:text-sm font-bold text-stone-700 leading-relaxed uppercase">
                Para cerrar este aniversario redondo de 10 años, nos quedamos con los rostros iluminados, las risas contagiosas y el abrazo fraterno de todo el barrio de Guadalupe Oeste.
              </p>
              <p className="text-xs font-bold text-stone-600 leading-relaxed italic">
                "Nuestros pies cansados de tanto bailar, pero el corazón repleto de sueños compartidos. El Alero sigue siendo refugio, juego y comunidad." ❤️
              </p>
              <div className="flex gap-2 pt-2">
                <span className="text-[10px] font-black uppercase bg-stone-100 text-stone-800 border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_black]">
                  #AbrazoComunitario
                </span>
                <span className="text-[10px] font-black uppercase bg-stone-100 text-stone-800 border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_black]">
                  #InfanciaLibre
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Back Logo */}
      <footer className="mt-20 border-t-[12px] border-amber-400 pt-12 text-black flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center gap-8 text-[10px] md:text-sm font-black uppercase tracking-widest">
           <span className="bg-amber-400 text-black px-3 py-1 shadow-[2.5px_2.5px_0px_black] hover:rotate-2 transition-transform rounded">
             #ELALERO10AÑOS
           </span>
           <span className="bg-rose-500 text-white px-3 py-1 shadow-[2.5px_2.5px_0px_black] hover:-rotate-2 transition-transform rounded">
             #GUADALUPEOESTE
           </span>
           <span className="bg-indigo-600 text-white px-3 py-1 shadow-[2.5px_2.5px_0px_black] hover:rotate-3 transition-transform rounded">
             #PRESNAINFANTIL
           </span>
        </div>
        
        <div className="text-center w-full max-w-2xl border-t border-black/10 pt-8">
           <Heart className="w-12 h-12 mx-auto text-rose-500 mb-4 animate-pulse fill-current" />
           <p className="font-serif italic font-black text-xl md:text-3xl text-stone-900 leading-snug">
             "En el alero de la infancia, diez años es solo el comienzo de un vuelo eterno."
           </p>
           <p className="mt-4 text-xs font-black uppercase opacity-40">Diario El Dorrego • Edición Especial 2026</p>
        </div>
      </footer>
    </div>
  );
}

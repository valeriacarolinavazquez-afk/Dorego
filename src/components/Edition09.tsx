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
  Sparkle,
  Vote,
  Flower2,
  Gift,
  Flame,
  UserCheck,
  CheckSquare,
  Video,
  Camera,
  Film
} from "lucide-react";

interface Wish {
  id: number;
  author: string;
  text: string;
  date: string;
}

interface ImageUploadSlotProps {
  id: string;
  placeholderIcon: React.ReactNode;
  placeholderBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  uploadedImages: Record<string, string>;
  onUpload: (id: string, file: File) => void;
  onRemove: (id: string) => void;
  aspectClass?: string;
  defaultImageUrl?: string;
}

function ImageUploadSlot({
  id,
  placeholderIcon,
  placeholderBg,
  iconColor,
  title,
  subtitle,
  uploadedImages,
  onUpload,
  onRemove,
  aspectClass = "aspect-[3/4]",
  defaultImageUrl
}: ImageUploadSlotProps) {
  const imageUrl = uploadedImages[id];
  const displayUrl = imageUrl || defaultImageUrl;
  const fileInputId = `file-input-${id}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(id, file);
    }
  };

  return (
    <div 
      className={`border-2 border-black rounded-2xl overflow-hidden bg-stone-50 shadow-inner ${aspectClass} w-full relative group cursor-pointer transition-transform duration-300 hover:scale-[1.01]`}
      onClick={() => {
        if (!imageUrl) {
          document.getElementById(fileInputId)?.click();
        }
      }}
    >
      <input 
        type="file" 
        id={fileInputId} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      {displayUrl ? (
        <>
          <img 
            src={displayUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Action overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
            <span className="text-white text-[10px] font-black uppercase tracking-wider bg-black border-2 border-white px-2.5 py-1 rounded shadow-[2px_2px_0px_black] text-center">
              {imageUrl ? "🖼️ FOTO PERSONALIZADA" : "🌟 FOTO DEL ESCENARIO"}
            </span>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById(fileInputId)?.click();
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-black px-2.5 py-1 text-[10px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none"
              >
                🔄 {imageUrl ? "Cambiar" : "Subir Propia"}
              </button>
              {imageUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                  }}
                  className="bg-red-500 hover:bg-red-400 text-white border-2 border-black px-2.5 py-1 text-[10px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none"
                >
                  🗑️ Eliminar
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-3 hover:bg-stone-100/50 transition-colors">
          <div className={`w-14 h-14 rounded-full border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_black] ${placeholderBg}`}>
            {placeholderIcon}
          </div>
          <div className="space-y-1">
            <p className="font-black text-[11px] uppercase tracking-wider text-stone-800 leading-tight">{title}</p>
            <p className="font-mono text-[8px] text-stone-500 uppercase leading-none">{subtitle}</p>
            <span className="inline-block mt-2 bg-stone-900 text-white border border-black font-mono text-[7px] font-bold px-1.5 py-0.5 rounded shadow-[1px_1px_0px_black] hover:bg-stone-800">
              SUBIR FOTO 📁
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Edition09() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWishAuthor, setNewWishAuthor] = useState("");
  const [newWishText, setNewWishText] = useState("");
  const [isSubmittingWish, setIsSubmittingWish] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // Dynamic Image Upload state
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("alero_uploaded_images");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const handleImageUpload = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      
      // Keep base64 in state for immediate preview
      setUploadedImages(prev => ({ ...prev, [id]: base64String }));
      
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filename: id,
            base64Data: base64String
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          const serverUrl = data.url;
          
          setUploadedImages(prev => {
            const next = { ...prev, [id]: serverUrl };
            try {
              localStorage.setItem("alero_uploaded_images", JSON.stringify(next));
            } catch (e) {
              // Silently ignore
            }
            return next;
          });
        }
      } catch (error) {
        console.error("Error uploading file to server:", error);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (id: string) => {
    setUploadedImages(prev => {
      const next = { ...prev };
      delete next[id];
      try {
        localStorage.setItem("alero_uploaded_images", JSON.stringify(next));
      } catch (e) {
        // Silently ignore
      }
      return next;
    });
  };

  // Sound and TTS States
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isReadingAll, setIsReadingAll] = useState(false);
  const [speechState, setSpeechState] = useState<{
    isSpeaking: boolean;
    isPaused: boolean;
    currentIndex: number;
  }>({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1
  });

  // Interactive Voting State
  const [votes, setVotes] = useState({
    aleroticias: 84,
    elDorrego: 56
  });
  const [hasVoted, setHasVoted] = useState(false);

  // Interactive "Cajita de la Rayuela" state
  const [isCajitaOpen, setIsCajitaOpen] = useState(false);
  const [cajitaContent, setCajitaContent] = useState<{
    tizaColor: string;
    tizaName: string;
    maderaNum: number;
    instruccion: string;
  } | null>(null);

  // Interactive Countdown state
  const [countdownValue, setCountdownValue] = useState<number | null>(null);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [velitasSopladas, setVelitasSopladas] = useState(false);

  // Interactive "Huerta de Juguetes" state
  const [harvestedVegs, setHarvestedVegs] = useState<string[]>([]);

  const textToRead = [
    "Diario Aleroticias. Edición Especial de los Diez Años. Veintiocho de junio de dos mil veintiséis. ¡Tenemos nuevo nombre oficial elegido por votación popular!",
    "En una jornada histórica adentro de la Fábrica de la Palabra, se vivió una votación muy reñida para elegir la identidad de nuestro diario. Aunque muchos pensábamos que se iba a llamar El Dorrego, la comunidad habló en las urnas y el ganador definitivo fue Aleroticias.",
    "El Alero se transformó por completo en una verdadera fábrica de felicidad con cuatro estaciones espectaculares: la fábrica de objetos armando guirnaldas y bonetes, la fábrica de entrevistas preguntando por un alero para, la fábrica de textil bordando mantitas con amor, y la cocina horneando deliciosas galletitas y muffins.",
    "El Bazar de todos los Mundos abrió su huerta de juguetes llenos de vegetales de lana, mientras enfrente se hacía yoga en el espacio Hacer Nacer.",
    "Los vecinos dejaron grabado en maderas un deseo inmenso y compartido: que el Alero siga existiendo siempre.",
    "Las explanadas bailaron al compás de Elegidos Chamamé y el rock infantil de Gulubú Rock.",
    "Recibimos el regalo de la Rayuela con una tiza, una maderita y sabias instrucciones para saltar en la vida, y cerramos cantando el feliz cumpleaños soplándolo todo en una cuenta regresiva del uno al diez."
  ];

  const tizasPresets = [
    { name: "Verde Esperanza", color: "bg-emerald-400 text-emerald-950" },
    { name: "Rosa Caramelo", color: "bg-pink-400 text-pink-950" },
    { name: "Amarillo Sol", color: "bg-yellow-400 text-yellow-950" },
    { name: "Cielo de Coronel Dorrego", color: "bg-sky-400 text-sky-950" },
    { name: "Naranja Atardecer", color: "bg-orange-400 text-orange-950" }
  ];

  const instruccionesPresets = [
    "Da dos saltos gigantes para pasar por alto los días de lluvia y comparte tu tiza con un amigo.",
    "Tira el cuadradito con los ojos cerrados, donde caiga dibuja una flor y regálasela a quien pase.",
    "Salta con un solo pie cantando tu chamamé favorito. Si te caes, ¡vuelve a empezar con una risa!",
    "Avanza tres casilleros de un solo salto y grita bien fuerte: ¡Que viva el juego libre!",
    "Dibuja un casillero número 10 que llegue directo hasta las nubes y descansa allí imaginando un deseo."
  ];

  // Web Audio Synth Helper
  const playSynthTone = (type: "beep" | "celebrate" | "coin" | "countdown") => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      if (type === "beep") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === "countdown") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === "coin") {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc1.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        osc2.frequency.setValueAtTime(783.99, ctx.currentTime + 0.08); // G5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.35);
        osc2.stop(ctx.currentTime + 0.35);
      } else if (type === "celebrate") {
        // Play a neat chord
        [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
          gain.gain.setValueAtTime(0.05, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.5);
        });
      }
    } catch (e) {
      console.warn("AudioContext block", e);
    }
  };

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
    // Load local storage votes if exist
    const savedVoted = localStorage.getItem("aleroticias_voted");
    if (savedVoted) {
      setHasVoted(true);
      const savedVotes = localStorage.getItem("aleroticias_votes_count");
      if (savedVotes) {
        setVotes(JSON.parse(savedVotes));
      }
    }
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

    const localNewWish = {
      id: Date.now(),
      author: authorVal,
      text: textVal,
      date: dateVal
    };

    // Optimistic UI update
    setWishes(prev => [localNewWish, ...prev]);
    setNewWishAuthor("");
    setNewWishText("");

    try {
      const url = getApiUrl("/api/wishes");
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: authorVal, text: textVal })
      });

      if (response.ok) {
        const data = await response.json();
        setWishes(data);
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(data));
        playSynthTone("celebrate");
      } else {
        // Fallback to local storage
        saveWishLocally(localNewWish);
      }
    } catch (err) {
      console.warn("Post wish failed, falling back to local storage", err);
      saveWishLocally(localNewWish);
    } finally {
      setIsSubmittingWish(false);
    }
  };

  const saveWishLocally = (newWish: Wish) => {
    try {
      const stored = localStorage.getItem("el_dorrego_wishes");
      const current = stored ? JSON.parse(stored) : [];
      const updated = [newWish, ...current];
      localStorage.setItem("el_dorrego_wishes", JSON.stringify(updated));
      setWishes(updated);
      playSynthTone("celebrate");
    } catch (e) {
      console.error(e);
    }
  };

  // TTS Voice Engine
  const speakText = (index: number, readAll: boolean = false) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speechState.isSpeaking && speechState.currentIndex === index) {
      if (speechState.isPaused) {
        window.speechSynthesis.resume();
        setSpeechState(prev => ({ ...prev, isPaused: false }));
      } else {
        window.speechSynthesis.pause();
        setSpeechState(prev => ({ ...prev, isPaused: true }));
      }
      return;
    }

    window.speechSynthesis.cancel();
    setIsReadingAll(readAll);

    const utterance = new SpeechSynthesisUtterance(textToRead[index]);
    utterance.lang = "es-AR";
    utterance.rate = 0.95;

    utterance.onstart = () => {
      setSpeechState({
        isSpeaking: true,
        isPaused: false,
        currentIndex: index
      });
    };

    utterance.onend = () => {
      if (readAll && index + 1 < textToRead.length) {
        speakText(index + 1, true);
      } else {
        setSpeechState({
          isSpeaking: false,
          isPaused: false,
          currentIndex: -1
        });
        setIsReadingAll(false);
      }
    };

    utterance.onerror = () => {
      setSpeechState({
        isSpeaking: false,
        isPaused: false,
        currentIndex: -1
      });
      setIsReadingAll(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeechState({
      isSpeaking: false,
      isPaused: false,
      currentIndex: -1
    });
    setIsReadingAll(false);
  };

  // Voting action
  const voteFor = (option: "aleroticias" | "elDorrego") => {
    if (hasVoted) return;
    const newVotes = {
      ...votes,
      [option]: votes[option] + 1
    };
    setVotes(newVotes);
    setHasVoted(true);
    localStorage.setItem("aleroticias_voted", "true");
    localStorage.setItem("aleroticias_votes_count", JSON.stringify(newVotes));
    playSynthTone("coin");
  };

  // Rayuela cajita unboxing
  const openRayuelaCajita = () => {
    playSynthTone("coin");
    const randomTiza = tizasPresets[Math.floor(Math.random() * tizasPresets.length)];
    const randomMadera = Math.floor(Math.random() * 10) + 1;
    const randomInstruccion = instruccionesPresets[Math.floor(Math.random() * instruccionesPresets.length)];
    
    setCajitaContent({
      tizaColor: randomTiza.color,
      tizaName: randomTiza.name,
      maderaNum: randomMadera,
      instruccion: randomInstruccion
    });
    setIsCajitaOpen(true);
  };

  // Interactive Countdown implementation
  const startCountdown = () => {
    if (isCountdownActive) return;
    setVelitasSopladas(false);
    setIsCountdownActive(true);
    setCountdownValue(1);
    playSynthTone("countdown");
  };

  useEffect(() => {
    if (!isCountdownActive || countdownValue === null) return;

    if (countdownValue < 10) {
      const timer = setTimeout(() => {
        setCountdownValue(prev => (prev !== null ? prev + 1 : 1));
        playSynthTone("countdown");
      }, 700);
      return () => clearTimeout(timer);
    } else {
      playSynthTone("celebrate");
    }
  }, [countdownValue, isCountdownActive]);

  const handleSoplar = () => {
    setVelitasSopladas(true);
    playSynthTone("celebrate");
  };

  const handleHarvest = (veg: string) => {
    if (harvestedVegs.includes(veg)) return;
    setHarvestedVegs(prev => [...prev, veg]);
    playSynthTone("beep");
  };

  return (
    <div className="text-black space-y-16">
      {/* Top Info Bar */}
      <div className="flex justify-between items-end border-b-4 border-black pb-4 mb-8 text-black">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter">
          <span className="bg-black text-white px-2 py-1 mr-2 inline-block">EDICIÓN HISTÓRICA</span>
          PRENSA COMUNITARIA • LA COMUNIDAD HABLA • CORONEL DORREGO • SANTA FE • 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase">
          NUEVA ERA • VOL. I • Nº 009<br />
          DOMINGO, 28 DE JUNIO DE 2026
        </div>
      </div>

      {/* Main Header with Huge Aleroticias Title */}
      <header id="inicio-ed9" className="border-b-[12px] border-black pb-8 mb-12 text-center relative">
        <div className="absolute top-2 right-2 md:right-8 flex gap-2" data-html2canvas-ignore="true">
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="border-2 border-black p-1.5 rounded bg-stone-100 hover:bg-stone-200 shadow-[2px_2px_0px_black] text-xs font-black uppercase tracking-tight flex items-center gap-1 cursor-pointer"
            title={soundEnabled ? "Silenciar sonidos de fondo" : "Activar sonidos de fondo"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline text-[9px]">{soundEnabled ? "Sonido ON" : "Sonido OFF"}</span>
          </button>
        </div>

        <motion.div 
          initial={{ scale: 0.9, rotate: -6 }}
          animate={{ scale: 1, rotate: -3 }}
          className="absolute -top-12 -left-4 bg-yellow-400 border-4 border-black px-4 py-2.5 rounded-2xl font-black text-xs transform hidden md:block text-black shadow-[4px_4px_0px_black] z-10"
        >
          ¡NUEVO NOMBRE<br/>ELEGIDO POR<br/>EL BARRIO! 🗳️
        </motion.div>
        
        <div className="text-center">
          <span className="bg-rose-500 text-white font-mono text-xs font-black px-3.5 py-1.5 rounded-full uppercase shadow-[2px_2px_0px_black] inline-block mb-4 animate-bounce">
            🎈 ¡EL ALERO CELEBRA SUS 10 AÑOS A LO GRANDE! 🎈
          </span>
          
          <a href="#inicio-ed9" className="block hover:opacity-90 transition-opacity">
            <h1 className="text-[14vw] md:text-[11.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black font-extrabold select-none">
              ALEROTICIAS
            </h1>
          </a>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-2.5 px-10 text-xl md:text-4xl font-black tracking-[0.15em] bg-white text-black translate-y-[-4px] uppercase shadow-[3px_3px_0px_black]">
              EDICIÓN ESPECIAL ANIVERSARIO
            </div>
          </div>
        </div>

        {/* Global TTS Player Bar */}
        <div className="mt-8 max-w-xl mx-auto bg-stone-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4" data-html2canvas-ignore="true">
          <div className="flex items-center gap-3">
            <AudioLines className={`w-8 h-8 text-rose-500 ${speechState.isSpeaking && !speechState.isPaused ? 'animate-pulse' : ''}`} />
            <div className="text-left">
              <span className="text-[9px] font-black uppercase text-stone-500 block">Audioguía de Aleroticias</span>
              {speechState.isSpeaking ? (
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase text-stone-950 block leading-none">
                    {isReadingAll ? `Escuchando Edición Completa` : `Escuchando Sección Individual`}
                  </span>
                  <span className="text-[10px] font-mono text-rose-600 block leading-none font-bold animate-pulse">
                    Parte {speechState.currentIndex + 1} de {textToRead.length}
                  </span>
                </div>
              ) : (
                <span className="text-xs font-bold uppercase text-stone-900 leading-none">Escucha las historias narradas de corrido</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {speechState.isSpeaking ? (
              <>
                <button
                  onClick={() => speakText(speechState.currentIndex, isReadingAll)}
                  className="bg-amber-400 hover:bg-amber-300 border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[1.5px_1.5px_0px_black] flex items-center gap-1 cursor-pointer"
                >
                  {speechState.isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  <span>{speechState.isPaused ? "Reanudar" : "Pausar"}</span>
                </button>
                <button
                  onClick={stopSpeaking}
                  className="bg-rose-500 hover:bg-rose-400 text-white border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[1.5px_1.5px_0px_black] flex items-center gap-1 cursor-pointer"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Detener</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => speakText(0, true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white border-2 border-black px-4 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_black] flex items-center gap-1.5 cursor-pointer"
                  title="Escucha todo el periódico entero sin interrupciones de principio a fin"
                >
                  <Play className="w-4 h-4 fill-current animate-pulse" />
                  <span>🔊 Escuchar Edición Completa</span>
                </button>
                <button
                  onClick={() => speakText(0, false)}
                  className="bg-stone-200 hover:bg-stone-300 text-stone-900 border-2 border-black px-3 py-1.5 text-[11px] font-black uppercase shadow-[1.5px_1.5px_0px_black] flex items-center gap-1 cursor-pointer"
                  title="Escucha solo la introducción"
                >
                  <span>Portada</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        
        {/* Left Column (Aside) */}
        <aside className="md:col-span-4 border-r-0 md:border-r-[6px] border-black pr-0 md:pr-10 space-y-12">
          
          {/* PRIMICIA: Votación del nombre */}
          <section id="nombre-votacion" className="relative text-black space-y-4">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-black"></div>
            <div className="flex items-center gap-2">
              <Vote className="w-8 h-8 text-rose-500" />
              <h2 className="text-3xl font-black leading-none uppercase bg-rose-500 text-white p-1.5 inline-block transform -rotate-1 shadow-[2px_2px_0px_black]">
                🚨 ¡PRIMICIA!
              </h2>
            </div>
            
            <h3 className="text-xl font-black uppercase tracking-tight text-stone-900 border-b-2 border-dashed border-black pb-1">
              Tenemos nuevo nombre oficial
            </h3>

            <div className="text-sm font-bold leading-relaxed space-y-4 text-justify">
              <p>
                En una jornada histórica adentro de la <strong className="text-rose-600">Fábrica de la Palabra</strong>, se vivió una votación muy reñida para elegir la identidad de nuestro diario. 
              </p>
              <p>
                Aunque muchos pensábamos que se iba a llamar "El Dorrego", la comunidad habló en las urnas y el ganador definitivo fue <span className="bg-yellow-200 px-1 py-0.5 border border-black/10 rounded">Aleroticias</span>. 
              </p>
              <p className="italic text-stone-600 border-l-4 border-black pl-3 bg-stone-50 py-1">
                "¡Una triste pero gran sorpresa que marca el inicio de una nueva era en papel!" 🗞️
              </p>
            </div>

            <button
              onClick={() => speakText(1)}
              className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 mt-2 cursor-pointer"
              data-html2canvas-ignore="true"
            >
              <AudioLines className="w-3.5 h-3.5" /> Escuchar noticia completa
            </button>

            {/* Interactive Urn */}
            <div className="border-4 border-black p-4 bg-yellow-50 rounded-2xl shadow-[4px_4px_0px_black] mt-4 text-center space-y-3">
              <span className="text-[9px] font-mono font-black uppercase text-amber-800 bg-amber-200 px-2 py-0.5 rounded shadow-[1px_1px_0px_black] inline-block">
                🗳️ URNA COMUNITARIA INTERACTIVA
              </span>
              <p className="text-xs font-black uppercase leading-tight text-stone-800">
                ¿Qué nombre hubieras votado vos?
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  disabled={hasVoted}
                  onClick={() => voteFor("aleroticias")}
                  className={`border-2 border-black p-2 rounded-xl font-black text-xs uppercase flex flex-col items-center justify-center transition-all shadow-[2px_2px_0px_black] cursor-pointer ${hasVoted ? 'bg-stone-100 opacity-80 cursor-default' : 'bg-rose-400 hover:bg-rose-300 active:translate-y-0.5 active:shadow-none'}`}
                >
                  <span className="text-lg">📰</span>
                  <span>Aleroticias</span>
                  <span className="text-[10px] mt-1 text-rose-950 font-mono">({votes.aleroticias} votos)</span>
                </button>

                <button
                  disabled={hasVoted}
                  onClick={() => voteFor("elDorrego")}
                  className={`border-2 border-black p-2 rounded-xl font-black text-xs uppercase flex flex-col items-center justify-center transition-all shadow-[2px_2px_0px_black] cursor-pointer ${hasVoted ? 'bg-stone-100 opacity-80 cursor-default' : 'bg-amber-400 hover:bg-amber-300 active:translate-y-0.5 active:shadow-none'}`}
                >
                  <span className="text-lg">🪵</span>
                  <span>El Dorrego</span>
                  <span className="text-[10px] mt-1 text-amber-950 font-mono">( {votes.elDorrego} votos)</span>
                </button>
              </div>

              {hasVoted ? (
                <p className="text-[9px] font-black text-emerald-600 uppercase flex items-center justify-center gap-1 animate-pulse pt-1">
                  <Check className="w-3 h-3" /> ¡Gracias por participar en Coronel Dorrego!
                </p>
              ) : (
                <p className="text-[8px] font-mono text-stone-500 uppercase tracking-tight italic pt-1">
                  Hace click en una urna para sumar tu voto al barrio
                </p>
              )}
            </div>
          </section>

          {/* El Regalo de la Rayuela */}
          <section id="rayuela-caja" className="border-t-[6px] border-black pt-10 text-black space-y-4">
            <div className="flex items-center gap-2">
              <Gift className="w-8 h-8 text-sky-500" />
              <h2 className="text-2xl font-black leading-none uppercase">
                EL REGALO DE LA RAYUELA
              </h2>
            </div>
            <p className="font-mono text-[9px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded inline-block shadow-[1px_1px_0px_black]">
              UN AÑO EN UNA CAJITA 📦
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-4">
                <div className="text-xs font-bold leading-relaxed space-y-4 text-justify">
                  <p>
                    Para abrir camino al juego, la entrada te recibía con una rayuela pintada para saltar. Además, se entregaron las cajitas especiales que se armaron durante todo el año.
                  </p>
                  <p>
                    Este mágico cofre barrial contenía elementos sencillos pero repletos de vida y juegos para divertirse en familia.
                  </p>
                </div>

                {/* Interactive Rayuela Caja */}
                <div className="border-4 border-black p-4 bg-sky-50 rounded-3xl shadow-[5px_5px_0px_black] text-center space-y-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-sky-400 border-b-2 border-l-2 border-black text-[7px] font-black uppercase px-2 py-0.5 rounded-bl">
                    Cofre del Año
                  </div>

                  {!isCajitaOpen ? (
                    <div className="py-4 space-y-3">
                      <div className="w-20 h-20 bg-amber-100 border-4 border-black rounded-2xl mx-auto flex items-center justify-center shadow-[3px_3px_0px_black] group-hover:scale-105 transition-transform">
                        <span className="text-4xl animate-bounce">📦</span>
                      </div>
                      <h4 className="font-black text-xs uppercase leading-none text-sky-950">¡Abrí tu cajita especial!</h4>
                      <p className="text-[9px] text-stone-600 max-w-[200px] mx-auto uppercase">
                        Descubrí qué tiza y qué instrucciones de juego te tocaron de regalo.
                      </p>
                      <button
                        onClick={openRayuelaCajita}
                        className="bg-sky-500 hover:bg-sky-400 text-white font-black text-[10px] px-4 py-2 border-2 border-black shadow-[2.5px_2.5px_0px_black] uppercase tracking-wider rounded active:translate-y-0.5 active:shadow-none cursor-pointer"
                      >
                        🔓 ¡Abrir Cajita!
                      </button>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4 text-left"
                    >
                      <div className="flex items-center justify-between border-b border-black/10 pb-2">
                        <span className="text-[10px] font-black uppercase text-emerald-600 flex items-center gap-1 animate-pulse">
                          ✨ ¡Cajita Abierta!
                        </span>
                        <button 
                          onClick={() => setIsCajitaOpen(false)}
                          className="text-[9px] font-mono hover:underline uppercase font-bold text-rose-500 cursor-pointer"
                        >
                          Cerrar
                        </button>
                      </div>

                      <div className="space-y-2 text-xs">
                        {/* Tiza color */}
                        <div className="flex items-center justify-between">
                          <span className="font-black text-stone-700">🖍️ TIZA ESPECIAL:</span>
                          <span className={`font-mono text-[9px] px-2 py-0.5 rounded border border-black/20 font-black uppercase ${cajitaContent?.tizaColor}`}>
                            {cajitaContent?.tizaName}
                          </span>
                        </div>

                        {/* Madera */}
                        <div className="flex items-center justify-between">
                          <span className="font-black text-stone-700">🪵 MADERITA PARA TIRAR:</span>
                          <span className="font-mono text-[10px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded border border-black/20 font-black">
                            Bloque Nº {cajitaContent?.maderaNum}
                          </span>
                        </div>

                        {/* Instructions */}
                        <div className="border-2 border-dashed border-black/30 p-2.5 rounded-xl bg-white space-y-1.5 mt-2">
                          <span className="text-[8px] font-mono font-black uppercase text-stone-400 block">
                            📜 Instrucción inspirada en la vida:
                          </span>
                          <p className="text-[11px] font-bold text-stone-800 leading-tight italic">
                            "{cajitaContent?.instruccion}"
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={openRayuelaCajita}
                        className="w-full bg-white hover:bg-stone-50 text-stone-800 font-black text-[9px] py-1.5 border-2 border-black shadow-[1.5px_1.5px_0px_black] uppercase text-center rounded active:translate-y-0.5 active:shadow-none cursor-pointer"
                      >
                        🎲 Obtener otra combinación
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="md:col-span-5 space-y-3">
                <ImageUploadSlot
                  id="cajitas"
                  placeholderIcon={<Gift className="w-8 h-8 text-sky-600 animate-pulse" />}
                  placeholderBg="bg-sky-100"
                  iconColor="text-sky-600"
                  title="Foto de las Cajitas Especiales"
                  subtitle="El cofre mágico del Alero"
                  uploadedImages={uploadedImages}
                  onUpload={handleImageUpload}
                  onRemove={handleRemoveImage}
                  defaultImageUrl="https://i.postimg.cc/02n7bwG0/1782674199462.png"
                  aspectClass="aspect-[3/4]"
                />
              </div>
            </div>
          </section>

        </aside>

        {/* Right Column (Main Content) */}
        <main className="md:col-span-8 space-y-16">
          
          {/* CRÓNICA: Recorrido por las fábricas */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🏭</span> CRÓNICA DESDE ADENTRO
            </h3>
            
            <div className="border-4 border-black p-5 md:p-8 bg-[#fef08a]/20 rounded-3xl shadow-[5px_5px_0px_black] space-y-4">
              <h4 className="text-2xl font-black uppercase leading-tight text-stone-900 italic">
                El recorrido por las "Fábricas"
              </h4>
              <p className="text-sm md:text-base font-bold leading-relaxed text-stone-700">
                El Alero se transformó por completo y cada rincón funcionó como una verdadera fábrica de alegría y comunidad:
              </p>

              {/* Fábrica de Textil Highlight Block */}
              <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-xs md:text-sm font-semibold text-stone-800 leading-relaxed text-justify shadow-sm">
                📌 <strong className="uppercase text-sky-700 font-black">La emotiva Fábrica de Textil:</strong> Una de las acciones que más conmovió los corazones del barrio Coronel Dorrego fue el taller de costura y bordado. Allí, vecinas, madres y abuelas se unieron hilo a hilo, puntada a puntada, con infinito cariño para tejer y bordar hermosas mantitas destinadas a los bebés recién nacidos de la comunidad, uniendo al barrio en un gran abrazo de bienvenida a las nuevas vidas. ¡Una hermosa acción de puro amor barrial! 🧸✨
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="border-2 border-black p-4 bg-white rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-mono font-black bg-yellow-400 text-black px-2 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                      🎉 FÁBRICA DE OBJETOS
                    </span>
                    <h5 className="font-black text-sm uppercase mt-2">Guirnaldas a contrarreloj</h5>
                    <p className="text-xs font-semibold text-stone-600 mt-1 leading-normal text-justify">
                      En la última de todas las fábricas se trabajó sin parar armando las guirnaldas coloridas y los bonetes para el cumple.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-black p-4 bg-white rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-mono font-black bg-rose-500 text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                      🎤 ENTREVISTAS
                    </span>
                    <h5 className="font-black text-sm uppercase mt-2">Voz de nuestra redacción</h5>
                    <p className="text-xs font-semibold text-stone-600 mt-1 leading-normal text-justify">
                      Te preguntaban: "Un Alero para...". Nuestra redacción respondió feliz: <strong className="text-rose-600">"¡Un Alero para divertirse!"</strong>
                    </p>
                  </div>
                </div>

                <div className="border-2 border-black p-4 bg-white rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-mono font-black bg-sky-500 text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                      🤝 FÁBRICA DE TEXTIL
                    </span>
                    <h5 className="font-black text-sm uppercase mt-2">Bordando con amor</h5>
                    <p className="text-xs font-semibold text-stone-600 mt-1 leading-normal text-justify">
                      Se bordaron mantitas hermosas con muchísimo amor para regalar de bienvenida a los recién nacidos del barrio.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-black p-4 bg-white rounded-2xl shadow-[3px_3px_0px_black] flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-mono font-black bg-emerald-500 text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                      🍪 LA COCINA
                    </span>
                    <h5 className="font-black text-sm uppercase mt-2">Olorcito dulce</h5>
                    <p className="text-xs font-semibold text-stone-600 mt-1 leading-normal text-justify">
                      ¡Se sentía desde afuera! Se hornearon montañas de galletitas dulces y un montón de muffins para convidar a todos.
                    </p>
                  </div>
                </div>

              </div>

              <button
                onClick={() => speakText(2)}
                className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 pt-2 cursor-pointer"
                data-html2canvas-ignore="true"
              >
                <AudioLines className="w-3.5 h-3.5" /> Escuchar reporte de las Fábricas
              </button>
            </div>
          </section>

          {/* BAZAR Y HACER NACER */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🎮</span> BAZAR DE TODOS LOS MUNDOS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-4 border-black p-6 bg-emerald-50 rounded-3xl shadow-[5px_5px_0px_black] space-y-4">
                <span className="bg-emerald-600 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                  JUEGOS SIN FIN
                </span>
                <h4 className="text-xl font-black uppercase text-emerald-950">
                  La Huerta de Juguetes
                </h4>
                <p className="text-xs md:text-sm font-bold leading-relaxed text-stone-700">
                  El bazar estuvo abierto para jugar con maderas y descubrir una increíble huerta de juguetes, llena de zanahorias y vegetales hechos de figuras de lana.
                </p>

                {/* Interactive Huerta Clicker */}
                <div className="border-2 border-black p-3 bg-white rounded-2xl space-y-2 text-center shadow-[2px_2px_0px_black]">
                  <span className="text-[8px] font-mono font-black uppercase text-emerald-700 block">
                    🥕 MINI-HUERTA DE LANA INTERACTIVA
                  </span>
                  <p className="text-[10px] font-bold text-stone-600 uppercase">
                    ¡Hacé click para cosechar vegetales tejidos!
                  </p>
                  
                  <div className="flex justify-center gap-3 py-2">
                    <button
                      disabled={harvestedVegs.includes("carrot")}
                      onClick={() => handleHarvest("carrot")}
                      className={`w-12 h-12 border-2 border-black rounded-xl text-2xl flex items-center justify-center transition-all cursor-pointer ${harvestedVegs.includes("carrot") ? 'bg-orange-100 border-orange-500 opacity-60 scale-95' : 'bg-orange-50 hover:bg-orange-100 hover:scale-105 active:scale-95 shadow-[2px_2px_0px_black]'}`}
                      title="Zanahoria de lana"
                    >
                      🥕
                    </button>
                    <button
                      disabled={harvestedVegs.includes("onion")}
                      onClick={() => handleHarvest("onion")}
                      className={`w-12 h-12 border-2 border-black rounded-xl text-2xl flex items-center justify-center transition-all cursor-pointer ${harvestedVegs.includes("onion") ? 'bg-purple-100 border-purple-500 opacity-60 scale-95' : 'bg-purple-50 hover:bg-purple-100 hover:scale-105 active:scale-95 shadow-[2px_2px_0px_black]'}`}
                      title="Cebolla de lana"
                    >
                      🧅
                    </button>
                    <button
                      disabled={harvestedVegs.includes("tomato")}
                      onClick={() => handleHarvest("tomato")}
                      className={`w-12 h-12 border-2 border-black rounded-xl text-2xl flex items-center justify-center transition-all cursor-pointer ${harvestedVegs.includes("tomato") ? 'bg-red-100 border-red-500 opacity-60 scale-95' : 'bg-red-50 hover:bg-red-100 hover:scale-105 active:scale-95 shadow-[2px_2px_0px_black]'}`}
                      title="Tomate de lana"
                    >
                      🍅
                    </button>
                  </div>

                  {harvestedVegs.length > 0 && (
                    <p className="text-[9px] font-black text-orange-600 uppercase animate-pulse">
                      ¡Cosechaste {harvestedVegs.length} vegetal{harvestedVegs.length > 1 ? "es" : ""} tejido{harvestedVegs.length > 1 ? "s" : ""}! 🧶
                    </p>
                  )}
                </div>
              </div>

              <div className="border-4 border-black p-6 bg-indigo-50 rounded-3xl shadow-[5px_5px_0px_black] space-y-4 flex flex-col justify-between">
                <div>
                  <span className="bg-indigo-600 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                    HACER NACER
                  </span>
                  <h4 className="text-xl font-black uppercase text-indigo-950">
                    Conexión y Relax
                  </h4>
                  <p className="text-xs md:text-sm font-bold leading-relaxed text-stone-700">
                    Justo enfrente, adentro de nuestro amado espacio Hacer Nacer, se armó la actividad de yoga y encuentro corporal para respirar, estirarse y conectar.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-3.5 rounded-2xl shadow-[2px_2px_0px_black] flex items-center gap-3 italic">
                  <Flower2 className="w-10 h-10 text-indigo-500 shrink-0 animate-spin" style={{ animationDuration: "12s" }} />
                  <p className="text-[10px] font-bold text-stone-600 uppercase leading-snug">
                    "Un espacio para bajar la marcha, sentir los latidos y respirar hondo junto a los más peques." ❤️
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => speakText(3)}
              className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 mt-2 cursor-pointer"
              data-html2canvas-ignore="true"
            >
              <AudioLines className="w-3.5 h-3.5" /> Escuchar notas de juego y relajación
            </button>
          </section>

          {/* EL GRAN DESEO DE LOS RESIDENTES */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🪵</span> EL DESEO DE NUESTROS VECINOS
            </h3>

            <div className="border-4 border-black p-5 md:p-8 bg-amber-50 rounded-3xl shadow-[6px_6px_0px_black] space-y-6">
              <div className="space-y-4">
                <span className="bg-amber-400 text-black font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                  🪵 EXPLANADAS DE AFUERA
                </span>
                <h4 className="text-2xl font-black uppercase text-stone-900 leading-none">
                  Estructuras de madera y papelitos de sueños
                </h4>
                <p className="text-xs md:text-sm font-bold leading-relaxed text-stone-700 uppercase">
                  En las explanadas de afuera, los residentes armaron unos tableros con estructuras de madera (parecidos a los de la verdulería, pero sin los cajones). Ahí te daban un papelito para responder la pregunta: 
                </p>
                <p className="text-sm font-black text-rose-600 bg-white border-2 border-dashed border-rose-500 p-3 rounded-xl uppercase shadow-[2.5px_2.5px_0px_rgba(244,63,94,0.2)]">
                  ¿Qué querés que siga existiendo siempre?
                </p>
                <p className="text-xs md:text-sm font-semibold italic text-stone-600">
                  Y la respuesta que emocionó a todos en Coronel Dorrego fue rotunda, grabada con muchísima fuerza: <strong>¡Que el Alero siga existiendo siempre!</strong> ❤️
                </p>
              </div>

              <button
                onClick={() => speakText(4)}
                className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 mt-2 cursor-pointer"
                data-html2canvas-ignore="true"
              >
                <AudioLines className="w-3.5 h-3.5" /> Escuchar la crónica de deseos
              </button>
            </div>
          </section>

          {/* ESCENARIOS COMPARTIDOS: MÚSICA Y BAILE */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🎶</span> MÚSICA, BAILE Y ALEGRÍA
            </h3>

            <div className="border-4 border-black p-6 bg-rose-50 rounded-3xl shadow-[5px_5px_0px_black] space-y-6">
              <span className="bg-rose-500 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                ESCENARIO PRINCIPAL A TODO TRAPO
              </span>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 space-y-3">
                  <ImageUploadSlot
                    id="escenario"
                    placeholderIcon={<Music className="w-8 h-8 text-rose-600 animate-pulse" />}
                    placeholderBg="bg-rose-100"
                    iconColor="text-rose-600"
                    title="Foto del Escenario"
                    subtitle="El Alero vibrando"
                    uploadedImages={uploadedImages}
                    onUpload={handleImageUpload}
                    onRemove={handleRemoveImage}
                    defaultImageUrl="https://i.postimg.cc/FRJWNR3n/IMG-20260627-180356-807.jpg"
                    aspectClass="aspect-[4/3]"
                  />
                  {/* Highly visible callout banner next to/under the image */}
                  <div className="bg-amber-100 border-4 border-dashed border-amber-500 p-3 rounded-2xl shadow-[2px_2px_0px_black] text-left">
                    <p className="text-[11px] font-black text-amber-950 uppercase tracking-tight flex items-center gap-1">
                      📸 ¡SUBÍ TU FOTO!
                    </p>
                    <p className="text-[10px] font-extrabold text-stone-800 mt-1 leading-normal">
                      Hacé clic arriba para subir fotos de la fiesta desde tu dispositivo.
                    </p>
                  </div>
                </div>

                {/* Desktop Computer Style Widescreen Video Player */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="border-4 border-black bg-white rounded-3xl shadow-[5px_5px_0px_black] overflow-hidden flex flex-col relative">
                    {/* Mock Computer Titlebar */}
                    <div className="bg-stone-100 border-b-4 border-black px-4 py-2 flex items-center justify-between gap-2" data-html2canvas-ignore="true">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-black inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border-2 border-black inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-black inline-block"></span>
                      </div>
                      <div className="bg-white border-2 border-black rounded px-2 py-0.5 text-[8px] font-mono text-stone-500 w-full max-w-[220px] truncate text-center select-none shadow-[1px_1px_0px_rgba(0,0,0,0.15)]">
                        🌐 screenapp.io/library/10-anos-alero
                      </div>
                      <div className="w-10"></div>
                    </div>

                    <div className="p-4 space-y-3 text-center">
                      <span className="bg-red-600 text-white font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block animate-pulse">
                        📺 COBERTURA EN VIVO
                      </span>
                      <h4 className="font-black text-sm uppercase leading-none text-rose-950">Festejo en Movimiento</h4>
                      
                      {/* Responsive Mock Computer Screen Video Wrapper */}
                      <div className="aspect-video w-full border-4 border-black rounded-2xl overflow-hidden relative shadow-[3px_3px_0px_black] bg-stone-950 flex items-center justify-center">
                        {uploadedImages["cumple_video"] ? (
                          <video 
                            key={uploadedImages["cumple_video"]}
                            controls 
                            playsInline 
                            className="w-full h-full object-contain"
                          >
                            <source src={uploadedImages["cumple_video"]} />
                            Tu navegador no soporta reproducción de video.
                          </video>
                        ) : (
                          <iframe
                            src="https://screenapp.io/app/#/library/69cf0069099145fdc5936b88/default/d6a29d02-74b2-4d80-ac45-9955fabd80cc"
                            title="El Alero Festejo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          ></iframe>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5 pt-1" data-html2canvas-ignore="true">
                        <input 
                          type="file" 
                          id="video-upload-input" 
                          className="hidden" 
                          accept="video/mp4,video/*" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload("cumple_video", file);
                            }
                          }}
                        />
                        
                        <div className="flex justify-center gap-1.5">
                          <button
                            onClick={() => document.getElementById("video-upload-input")?.click()}
                            className="bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-black px-2.5 py-1 text-[9px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer flex items-center gap-1"
                          >
                            📹 {uploadedImages["cumple_video"] ? "Cambiar Video" : "Subir Propio (MP4)"}
                          </button>
                          
                          {uploadedImages["cumple_video"] && (
                            <button
                              onClick={() => handleRemoveImage("cumple_video")}
                              className="bg-red-500 hover:bg-red-400 text-white border-2 border-black px-2 py-1 text-[9px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer"
                            >
                              🗑️ Reset
                            </button>
                          )}
                        </div>
                        
                        <p className="text-[8px] font-mono font-bold text-stone-500 uppercase leading-tight">
                          {uploadedImages["cumple_video"] ? "Video guardado en el servidor con éxito" : "Subí tu propio video MP4 para guardarlo de forma permanente"}
                        </p>
                      </div>

                      {!uploadedImages["cumple_video"] && (
                        <p className="text-[10px] font-bold text-stone-600 uppercase">
                          ¡Mirá el festejo del cumple! 🥳🎉
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <p className="text-sm font-bold text-stone-700 leading-relaxed uppercase text-justify">
                    Las explanadas se llenaron de gente de punta a punta y el escenario principal vibró con dos propuestas espectaculares para bailar con el alma:
                  </p>

                  <div className="space-y-4">
                    <div 
                      onClick={() => playSynthTone("coin")}
                      className="border-2 border-black p-4 bg-white rounded-2xl shadow-[2.5px_2.5px_0px_black] text-left hover:-translate-y-1 transition-transform cursor-pointer group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="bg-amber-400 text-black font-mono text-[7px] font-black px-1.5 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                          🎻 CHAMAMÉ
                        </span>
                        <Music className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
                      </div>
                      <h4 className="font-black text-base uppercase mt-2 text-stone-900 leading-none">Elegidos Chamamé</h4>
                      <p className="text-[11px] font-semibold text-stone-600 mt-2 leading-relaxed text-justify">
                        Pusieron a todo el patio a bailar con el acordeón y la guitarra bien arriba. ¡Un zapateo barrial inolvidable!
                      </p>
                    </div>

                    <div 
                      onClick={() => playSynthTone("celebrate")}
                      className="border-2 border-black p-4 bg-white rounded-2xl shadow-[2.5px_2.5px_0px_black] text-left hover:-translate-y-1 transition-transform cursor-pointer group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="bg-sky-500 text-white font-mono text-[7px] font-black px-1.5 py-0.5 rounded shadow-[1px_1px_0px_black] uppercase">
                          🎸 ROCK INFANTIL
                        </span>
                        <Disc className="w-4 h-4 text-sky-500 group-hover:spin transition-all" />
                      </div>
                      <h4 className="font-black text-base uppercase mt-2 text-stone-900 leading-none">Gulubú Rock</h4>
                      <p className="text-[11px] font-semibold text-stone-600 mt-2 leading-relaxed text-justify">
                        Los más chicos (¡y grandes!) cantaron, saltaron y agitaron los bonetes con el mejor rock infantil reversionado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => speakText(5)}
                className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 mt-2 cursor-pointer"
                data-html2canvas-ignore="true"
              >
                <AudioLines className="w-3.5 h-3.5" /> Escuchar notas de la música
              </button>
            </div>
          </section>

          {/* EL CIERRE: Cuenta regresiva hasta 10 */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-left tracking-tight border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🎂</span> EL GRAN CIERRE DEL CUMPLE
            </h3>

            <div className="border-4 border-black p-6 md:p-8 bg-yellow-50 rounded-3xl shadow-[6px_6px_0px_black] space-y-6">
              <span className="bg-yellow-400 text-black font-mono text-[8px] font-black px-2.5 py-1 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block">
                SOPLANDO LAS VELITAS EN COMUNIDAD
              </span>
              
              <p className="text-sm font-bold text-stone-700 leading-relaxed uppercase">
                Para terminar un día inolvidable, toda la gente se amontonó frente al escenario. Nos unimos en una sola voz para hacer la cuenta regresiva del 1 al 10, cantamos el feliz cumpleaños bien fuerte y soplamos las velitas de la gran torta de tres pisos. ¡Estuvo buenísimo!
              </p>

              {/* Interactive Cake and Countdown */}
              <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[4px_4px_0px_black] text-center space-y-4">
                <span className="text-[9px] font-mono font-black uppercase text-rose-700 bg-rose-100 px-3 py-1 rounded inline-block shadow-[1px_1px_0px_black]">
                  🎈 RECREÁ EL MOMENTO DEL CIERRE
                </span>

                {countdownValue === null ? (
                  <div className="py-4 space-y-3">
                    <p className="text-xs font-black uppercase text-stone-700">
                      ¡Hacé sonar la cuenta regresiva del feliz cumpleaños!
                    </p>
                    <button
                      onClick={startCountdown}
                      className="bg-rose-500 hover:bg-rose-400 text-white font-black text-xs px-6 py-2.5 border-2 border-black shadow-[2.5px_2.5px_0px_black] uppercase tracking-wider rounded active:translate-y-0.5 active:shadow-none cursor-pointer"
                    >
                      📣 Iniciar Cuenta Regresiva
                    </button>
                  </div>
                ) : (
                  <div className="py-2 space-y-4">
                    {countdownValue < 10 ? (
                      <motion.div 
                        key={countdownValue}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.4, opacity: 1 }}
                        className="text-6xl font-black text-rose-600 font-serif italic py-4"
                      >
                        ¡ {countdownValue} !
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="space-y-4"
                      >
                        <p className="text-5xl font-black text-emerald-600 uppercase tracking-tight italic">
                          🎂 ¡¡ 10 !! 🎂
                        </p>
                        <p className="text-sm font-black text-stone-800 uppercase animate-pulse">
                          🎉 ¡FELIZ CUMPLEAÑOS ALERO! 🎉
                        </p>
                        
                        <div className="text-6xl py-2 relative select-none">
                          {velitasSopladas ? "🎂 (¡Soplada!) Sparkles!" : "🎂🕯️🕯️🕯️"}
                        </div>

                        {!velitasSopladas ? (
                          <button
                            onClick={handleSoplar}
                            className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs px-6 py-2 border-2 border-black shadow-[2px_2px_0px_black] uppercase rounded cursor-pointer"
                          >
                            💨 ¡Soplar las Velitas!
                          </button>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-xs font-black text-emerald-600 uppercase">
                              ¡Velitas sopladas en comunidad con risas! ❤️
                            </p>
                            <button
                              onClick={() => setCountdownValue(null)}
                              className="text-[9px] font-mono text-stone-500 uppercase underline hover:text-stone-700 cursor-pointer"
                            >
                              Volver a empezar la cuenta
                            </button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => speakText(6)}
                className="text-[10px] font-black uppercase underline hover:text-rose-500 flex items-center gap-1 opacity-75 mt-2 cursor-pointer"
                data-html2canvas-ignore="true"
              >
                <AudioLines className="w-3.5 h-3.5" /> Escuchar crónica del cierre
              </button>
            </div>
          </section>

          {/* PERSISTENT DATABASE WISHES BOX IN SPECTACULAR COLORS */}
          <section id="buzon-ed9" className="relative group">
            <div className="absolute inset-0 bg-teal-100 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-teal-400"></div>
            <div className="bg-white border-[8px] border-black p-6 md:p-12 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                
                {/* Input Form Column (2/5) */}
                <div className="lg:col-span-2 space-y-6">
                  <span className="inline-block bg-teal-500 text-white px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[3px_3px_0px_black] mb-2 font-mono">
                    💝 ENVIÁ TU MENSAJE BARRIAL
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                    Mural de Deseos del Alero
                  </h2>
                  
                  <p className="text-xs font-bold text-gray-700 leading-relaxed bg-teal-50 border-2 border-black/10 p-3 rounded-lg">
                    ¿Qué mensaje le dejas al Alero por sus 10 años de vida? ¡Escribí felicitaciones, memorias o deseos! Se guardará para siempre en la base de datos de Aleroticias.
                  </p>

                  <form onSubmit={handleWishSubmit} className="space-y-4 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                    <div className="space-y-1.5">
                      <label htmlFor="alero-author-input" className="block text-xs font-black uppercase text-teal-700 flex items-center gap-1">
                        👤 Tu nombre o apodo:
                      </label>
                      <input
                        id="alero-author-input"
                        type="text"
                        value={newWishAuthor}
                        onChange={(e) => setNewWishAuthor(e.target.value)}
                        placeholder="Ej. Martín, Pía (7 años), Clara..."
                        className="w-full border-2 border-black p-2.5 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded-md shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                        maxLength={40}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="alero-text-input" className="block text-xs font-black uppercase text-teal-700">
                        ✍️ Tu deseo para el cumpleaños:
                      </label>
                      <textarea
                        id="alero-text-input"
                        value={newWishText}
                        onChange={(e) => setNewWishText(e.target.value)}
                        placeholder="¡Feliz cumple al Alero! Que siga existiendo siempre..."
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
                      className="w-full bg-black hover:bg-gray-800 text-white border-4 border-black py-3 text-xs font-black uppercase transition-all shadow-[4px_4px_0px_#14b8a6] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 rounded-md animate-pulse cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                      <span>{isSubmittingWish ? "Guardando..." : "¡Mandar Deseo al Mural!"}</span>
                    </button>
                  </form>
                </div>

                {/* List Output Column (3/5) */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Neon Scoreboard Wish Counter */}
                  <div className="bg-black text-[#14b8a6] border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-0.5 text-center sm:text-left">
                      <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block font-mono">🌟 REGISTRO DE DESEOS</span>
                      <span className="text-xs font-black uppercase text-white block">Deseos totales de Coronel Dorrego</span>
                    </div>
                    <div className="flex gap-1 bg-teal-950/50 p-1.5 rounded-lg border border-teal-500/30">
                      {String(wishes.length).padStart(4, "0").split("").map((digit, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-10 bg-black text-teal-400 border border-teal-500 font-mono font-black text-xl flex items-center justify-center rounded shadow-inner"
                          style={{ textShadow: "0 0 8px rgba(20,184,166,0.6)" }}
                        >
                          <motion.span
                            key={`${digit}-${i}`}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          >
                            {digit}
                          </motion.span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex border-b-4 border-black pb-2 items-center justify-between text-[#0f766e]">
                    <span className="text-sm font-black uppercase tracking-tight text-teal-600 flex items-center gap-1.5">
                      ✨ DESEOS RECIBIDOS ({wishes.length})
                    </span>
                    <span className="text-xs font-bold text-gray-400 font-mono">
                      BASE DE DATOS NUBE
                    </span>
                  </div>

                  <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
                    {wishes.length === 0 ? (
                      <div className="border-4 border-dashed border-black/20 p-8 text-center uppercase font-black text-gray-400 bg-gray-50/50 rounded-xl animate-pulse">
                        Cargando deseos comunitarios... ¡Escribí el tuyo!
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

        </main>
      </div>

      {/* Footer Area */}
      <footer className="mt-20 border-t-[12px] border-black pt-12 text-black flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center gap-8 text-[10px] md:text-base font-black uppercase tracking-widest">
           <span className="bg-rose-500 text-white px-3 py-1 shadow-[2px_2px_0px_black] hover:rotate-2 transition-transform">#ALEROTICIAS</span>
           <span className="bg-yellow-400 text-black px-3 py-1 shadow-[2px_2px_0px_black] hover:-rotate-2 transition-transform">#10AÑOSJUNTOS</span>
           <span className="bg-black text-white px-3 py-1 shadow-[2px_2px_0px_black] hover:rotate-3 transition-transform">#ELALEROSIGUE</span>
        </div>
        
        <div className="text-center w-full max-w-2xl border-t border-black/10 pt-8">
           <Heart className="w-12 h-12 mx-auto text-red-500 mb-4 animate-pulse fill-current" />
           <p className="font-serif italic font-black text-2xl md:text-4xl text-inherit">"Que el Alero siga existiendo siempre."</p>
           <p className="mt-4 text-xs font-black uppercase opacity-40">Aleroticias • Edición 28 de Junio de 2026</p>
        </div>
      </footer>

    </div>
  );
}

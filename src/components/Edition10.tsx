import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  AudioLines,
  Users,
  Check,
  Camera,
  Map,
  Coffee,
  Wind,
  Calendar,
  Flame,
  Flower2,
  Sparkles,
  Smile,
  Image as ImageIcon,
  Trash2,
} from "lucide-react";

// Import modular interactive sub-components
import LlamadoresWidget from "./edition10/LlamadoresWidget";
import MasitasWidget from "./edition10/MasitasWidget";
import CajonWidget from "./edition10/CajonWidget";
import KermesWidget from "./edition10/KermesWidget";

interface Wish {
  id: number;
  author: string;
  text: string;
  date: string;
}

// Inline Self-Contained Image Upload Slot to prevent import errors and remain highly reliable
interface ImageUploadSlotProps {
  id: string;
  title: string;
  subtitle: string;
  placeholderBg: string;
  iconColor: string;
  placeholderIcon: React.ReactNode;
  uploadedImages: { [key: string]: string };
  onUpload: (id: string, url: string) => void;
  onRemove: (id: string) => void;
  aspectClass?: string;
  defaultImageUrl?: string;
}

function ImageUploadSlot({
  id,
  title,
  subtitle,
  placeholderBg,
  iconColor,
  placeholderIcon,
  uploadedImages,
  onUpload,
  onRemove,
  aspectClass = "aspect-video",
  defaultImageUrl,
}: ImageUploadSlotProps) {
  const currentImage = uploadedImages[id] || defaultImageUrl;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          onUpload(id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_black] bg-white group/upload">
      {currentImage ? (
        <div className={`relative ${aspectClass} overflow-hidden bg-stone-100`}>
          <img
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center gap-2" data-html2canvas-ignore="true">
            <label className="bg-white hover:bg-stone-100 text-black border-2 border-black font-black text-[10px] uppercase px-3 py-1.5 rounded shadow-[2px_2px_0px_black] cursor-pointer active:translate-y-0.5">
              Cambiar foto
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
            <button
              onClick={() => onRemove(id)}
              className="bg-red-500 hover:bg-red-400 text-white border-2 border-black font-black text-[10px] uppercase px-3 py-1.5 rounded shadow-[2px_2px_0px_black] cursor-pointer active:translate-y-0.5"
            >
              Quitar
            </button>
          </div>
        </div>
      ) : (
        <label className={`flex flex-col items-center justify-center p-6 text-center ${placeholderBg} cursor-pointer hover:opacity-90 transition-opacity ${aspectClass}`} data-html2canvas-ignore="true">
          {placeholderIcon}
          <span className="block text-xs font-black uppercase mt-2 text-stone-900">{title}</span>
          <span className="block text-[9px] font-bold text-stone-500 uppercase mt-0.5">{subtitle}</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
      )}
    </div>
  );
}

export default function Edition10() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<{ [key: string]: string }>({});
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWishAuthor, setNewWishAuthor] = useState("");
  const [newWishText, setNewWishText] = useState("");
  const [isSubmittingWish, setIsSubmittingWish] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // Audio guide state
  const [speechState, setSpeechState] = useState({
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1,
  });
  const [isReadingAll, setIsReadingAll] = useState(false);

  // Synthesizer Web Audio API helper for retro gamified feedback sound effects
  const playSynthTone = (type: string) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "beep") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === "celebrate") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "whoosh") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === "coin") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
        osc.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08); // E6
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {
      console.warn("Audio Context is blocked or not supported on this browser.", e);
    }
  };

  // Exact paragraphs provided by user to read aloud
  const textToRead = [
    "Diario Aleroticias. Volumen Diez. Especial Vacaciones Copadas. Con fecha de hoy. ¡La alegría de las tardes de invierno en nuestro querido Alero Coronel Dorrego!",
    "El Recorrido Oficial de las Fábricas. Para ubicarnos bien dentro del Alero, este es el mapa de cómo están ordenadas las fábricas de derecha a izquierda: En la punta derecha: la Fábrica de Objetos. Al lado: la Fábrica de Rap y Audiovisual. En el centro: la Fábrica de Textil. Al lado de Textil: la Fábrica de la Palabra (que esta vez se tomó un descanso y no estuvo abierta). En la punta izquierda: la Cocina del Alero.",
    "Nota de Tapa: ¡Llamadores que vuelan al cielo! Las vacaciones arrancaron con todo de miércoles a domingo en el Alero Coronel Dorrego, potenciadas por la hermosa visita de las residentes del año pasado. En la Fábrica de Objetos se armó un taller espectacular donde cada uno armó su propio llamador volador. El proceso fue pura paciencia y arte: primero elegís un redondelito de madera; después le vas pegando cuadraditos de papel de colores por todo el redondel, intercalándolos y dejando espacio entre medio sin encimar todas las tiras de golpe. En otra mesa, elegís tiras de papeles largos de colores y las recortás si querés que no queden tan largas. Para terminar, se pasan hilitos por dos agujeritos que te hacen en la madera, se atan a un palito y listo. El patio se llenó de chicos corriendo con el palito en la mano para ver cómo sus llamadores volaban con el viento.",
    "El Diario Recetario Aleril: Masitas Secas Decoradas. ¡Huele riquísimo en la Cocina! Como usar la manga pastelera requiere mucha precisión para que los trazos queden finos y delicados, el taller del jueves estuvo orientado a mayores de 10 años. ¡Acá te dejamos la receta oficial para que las hagas en casa! Ingredientes: Para la masa: 150 gramos de harina 0000, 75 gramos de manteca fría, 50 gramos de azúcar impalpable, 1 yema, 1 cucharadita de esencia de vainilla y 1 cucharada de leche fría si hace falta. Para el glasé: 1 clara de huevo o agua, 150 gramos de azúcar impalpable, gotas de jugo de limón y colorantes en gel rojo y azul. Paso a paso: Hacer las masitas: En un bol se mezcla la harina con el azúcar y se agrega la manteca fría desarmándola con los dedos para hacer un arenado. Se suma la yema y la vainilla, uniendo todo sin amasar de más hasta formar un bollo. Tras dejarlo enfriar 30 minutos en la heladera, se estira la masa con palote de unos 5 milímetros y se cortan formas de corazones, estrellas, lunas y círculos. Se hornean a 180 grados entre 10 y 12 minutos hasta que estén apenas doradas en la base, y se dejan enfriar. Preparar el glasé: Se bate la clara con el limón agregando el azúcar impalpable de a poco hasta lograr una pasta blanca y brillante. Se separa en dos pocillos y se tiñe uno de rojo y otro de azul. La decoración fina: Se coloca el glasé en mangas con pico bien fino o bolsitas con la puntita apenas cortada. Para que quede delicado, se hacen trazos rápidos: dibujando solo el contorno de las formas, líneas en zigzag o un puntito en el centro. ¡Se deja secar una hora y listo para comer!",
    "¡Las Explanadas de afuera a puro Juego! Afuera en las explanadas el movimiento no para con los desafíos físicos y de kermés: Los Zancos: Para probar el equilibrio, están los zancos grandes y también los más chicos (esas maderitas atadas con sogas que tenés que tirar fuerte hacia arriba para poder caminar). Saltar la soga: Podés saltar en grupo con una soga gigante o usar las soguitas más pequeñas para saltar vos solo. Juegos de Feria sin trampa: Está el tablero inclinado tipo tobogán con un círculo en el medio para embocar bolsitas de harina, y una estructura de madera con forma de más que tiene varillas alargadas en el centro y en las puntas para embocar aros.",
    "Rincones de Paz y Arte. Adentro y en el Patio Central. El espacio Hacer Nacer estuvo abierto para recibir a todos con un ambiente de total tranquilidad: música suave, espacio para hacer yoga y un techo hermoso lleno de grullas de origami hechas a mano. Mientras tanto, en el patio central de adentro, se armaron las carpas tipis de tela y madera para meterse a descansar, y se pusieron las mesas para jugar partidas de ajedrez con las residentes invitadas. También estuvo el clásico cajón de verduras interactivo; esta vez tenía un texto con las opciones 1, 2 y 3 para responder una consigna, pero los chicos lo aprovecharon para lo que mejor saben hacer: dibujar encima y llenarlo de caras y colores hechos a mano!",
    "Cartelera: Teatro en Vacaciones. ¡Espectáculo confirmado! Este domingo 12 a las 17 horas, llega la obra de circo y clown Aventuras Clownescas por el grupo santafesino Haceme la Segunda. Dos payasos van a hacer lo imposible por crear nuevas rutinas mientras esperan a un director que no llega, tropezando con mil imprevistos donde el público va a tener que ayudarlos. ¡Entrada libre y gratuita!",
  ];

  const speakText = (index: number, readAll = false) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("La audioguía no está soportada en este navegador.");
      return;
    }

    if (speechState.isSpeaking && speechState.currentIndex === index) {
      if (speechState.isPaused) {
        window.speechSynthesis.resume();
        setSpeechState((prev) => ({ ...prev, isPaused: false }));
      } else {
        window.speechSynthesis.pause();
        setSpeechState((prev) => ({ ...prev, isPaused: true }));
      }
      return;
    }

    window.speechSynthesis.cancel();
    setIsReadingAll(readAll);

    const utterance = new SpeechSynthesisUtterance(textToRead[index]);
    utterance.lang = "es-AR";
    utterance.rate = 0.95;

    // Set Argentinian/Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const argVoice =
      voices.find((v) => v.lang.startsWith("es-AR")) ||
      voices.find((v) => v.lang.startsWith("es-ES")) ||
      voices.find((v) => v.lang.startsWith("es"));
    if (argVoice) {
      utterance.voice = argVoice;
    }

    utterance.onstart = () => {
      setSpeechState({
        isSpeaking: true,
        isPaused: false,
        currentIndex: index,
      });
    };

    utterance.onend = () => {
      if (readAll && index + 1 < textToRead.length) {
        speakText(index + 1, true);
      } else {
        setSpeechState({
          isSpeaking: false,
          isPaused: false,
          currentIndex: -1,
        });
        setIsReadingAll(false);
      }
    };

    utterance.onerror = () => {
      setSpeechState({
        isSpeaking: false,
        isPaused: false,
        currentIndex: -1,
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
      currentIndex: -1,
    });
    setIsReadingAll(false);
  };

  // Wishes Database Loader (sync with server or localStorage backup)
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
            text: "¡El taller de llamadores voladores fue lo mejor de las vacaciones! Correr en el patio bajo el sol con cascabeles. 🌬️🪁",
            date: "2026-07-10T12:00:00.000Z",
          },
          {
            id: 2,
            author: "Vecina Orgullosa",
            text: "La receta de las masitas decoradas con glasé azul y rojo nos quedó deliciosa. ¡Gracias a los coordinadores! 🧁🍪",
            date: "2026-07-10T14:30:00.000Z",
          },
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
      setWishError("¡Escribí tu deseo o mensaje para colgar!");
      return;
    }
    setWishError(null);
    setIsSubmittingWish(true);

    const authorVal = newWishAuthor.trim() ? newWishAuthor.trim() : "Vecino/a del Alero";
    const textVal = newWishText.trim();
    const dateVal = new Date().toISOString();
    const newWishObj = {
      id: Date.now(),
      author: authorVal,
      text: textVal,
      date: dateVal,
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
          playSynthTone("coin");
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
          wishesList = [newWishObj];
        }
        const updatedList = [newWishObj, ...wishesList];
        localStorage.setItem("el_dorrego_wishes", JSON.stringify(updatedList));
        setWishes(updatedList);
        setNewWishText("");
        setNewWishAuthor("");
        playSynthTone("coin");
      } catch (localErr) {
        console.error(localErr);
        setWishError("No se pudo guardar localmente.");
      }
    }
    setIsSubmittingWish(false);
  };

  const handleImageUpload = (id: string, url: string) => {
    playSynthTone("celebrate");
    const updated = { ...uploadedImages, [id]: url };
    setUploadedImages(updated);
    localStorage.setItem("el_dorrego_uploaded_v10", JSON.stringify(updated));
  };

  const handleRemoveImage = (id: string) => {
    playSynthTone("whoosh");
    const updated = { ...uploadedImages };
    delete updated[id];
    setUploadedImages(updated);
    localStorage.setItem("el_dorrego_uploaded_v10", JSON.stringify(updated));
  };

  useEffect(() => {
    fetchWishes();

    // Load saved images if any
    try {
      const stored = localStorage.getItem("el_dorrego_uploaded_v10");
      if (stored) {
        setUploadedImages(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }

    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, []);

  return (
    <div className="text-black space-y-16">
      {/* Top Info Bar */}
      <div className="flex justify-between items-end border-b-4 border-black pb-4 mb-8 text-black" id="top-bar-ed10">
        <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter">
          <span className="bg-black text-white px-2 py-1 mr-2 inline-block">VOLUMEN 10</span>
          ALEROTICIAS • ESPECIAL VACACIONES COPADAS 🍁🪁 • SANTA FE • {new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" }).toUpperCase()}
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase">
          AÑO I • Nº 010<br />
          EDICIÓN DE HOY
        </div>
      </div>

      {/* Main Header */}
      <header id="inicio-ed10" className="border-b-[12px] border-black pb-8 mb-12 text-center relative">
        <div className="absolute top-2 right-2 md:right-8 flex gap-2" data-html2canvas-ignore="true">
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playSynthTone("beep");
            }}
            className="border-2 border-black p-1.5 rounded bg-stone-100 hover:bg-stone-200 shadow-[2px_2px_0px_black] text-xs font-black uppercase tracking-tight flex items-center gap-1 cursor-pointer"
            title={soundEnabled ? "Silenciar sonidos" : "Activar sonidos"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline text-[9px]">{soundEnabled ? "Sonido ON" : "Sonido OFF"}</span>
          </button>
        </div>

        <motion.div
          initial={{ scale: 0.9, rotate: 6 }}
          animate={{ scale: 1, rotate: 3 }}
          className="absolute -top-12 -right-4 bg-sky-400 border-4 border-black px-4 py-2.5 rounded-2xl font-black text-xs transform hidden md:block text-black shadow-[4px_4px_0px_black] z-10 uppercase"
        >
          ¡ESPECIAL<br />VACACIONES<br />DE INVIERNO! ☃️
        </motion.div>

        <div className="text-center">
          <span className="bg-amber-500 text-white font-mono text-xs font-black px-4 py-1.5 rounded-full uppercase shadow-[2px_2px_0px_black] inline-block mb-4 animate-pulse">
            🗞️ ALEROTICIAS - VOLUMEN 10: Especial Vacaciones Copadas
          </span>

          <a href="#inicio-ed10" className="block hover:opacity-90 transition-opacity">
            <h1 className="text-[12vw] md:text-[9.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-black font-extrabold select-none">
              ALEROTICIAS
            </h1>
          </a>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-2.5 px-10 text-xl md:text-3xl font-black tracking-[0.15em] bg-white text-black translate-y-[-4px] uppercase shadow-[3px_3px_0px_black]">
              EDICIÓN VACACIONES DE INVIERNO
            </div>
          </div>
        </div>

        {/* Global TTS Player Bar */}
        <div className="mt-8 max-w-xl mx-auto bg-stone-50 border-4 border-black p-4 shadow-[4px_4px_0px_black] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4" data-html2canvas-ignore="true">
          <div className="flex items-center gap-3">
            <AudioLines className={`w-8 h-8 text-amber-500 ${speechState.isSpeaking && !speechState.isPaused ? "animate-pulse" : ""}`} />
            <div className="text-left">
              <span className="text-[9px] font-black uppercase text-stone-500 block">Audioguía de Aleroticias</span>
              {speechState.isSpeaking ? (
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase text-stone-950 block leading-none">
                    {isReadingAll ? `Escuchando Edición Completa` : `Escuchando Sección Individual`}
                  </span>
                  <span className="text-[10px] font-mono text-amber-600 block leading-none font-bold animate-pulse">
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
                  className="bg-amber-400 hover:bg-amber-300 border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[1.5px_1.5px_0px_black] flex items-center gap-1 cursor-pointer rounded"
                >
                  {speechState.isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                  <span>{speechState.isPaused ? "Reanudar" : "Pausar"}</span>
                </button>
                <button
                  onClick={stopSpeaking}
                  className="bg-red-500 hover:bg-red-400 text-white border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[1.5px_1.5px_0px_black] flex items-center gap-1 cursor-pointer rounded"
                >
                  <Square className="w-3 h-3" />
                  <span>Detener</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => speakText(0, true)}
                className="bg-black hover:bg-stone-800 text-white border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_#f59e0b] flex items-center gap-1.5 cursor-pointer rounded"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>NARRAR EDICIÓN ENTERA</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* SECTION 1: EL RECORRIDO OFICIAL DE LAS FÁBRICAS */}
      <section className="bg-yellow-50 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-yellow-400 border-b-4 border-l-4 border-black px-4 py-1.5 font-mono text-[10px] font-black uppercase">
          📍 MAPA DE LAS FÁBRICAS
        </div>

        <div className="flex items-start gap-2.5 mb-6">
          <Map className="w-8 h-8 text-yellow-600 shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-yellow-950 flex items-center gap-2">
              🗺️ El Recorrido Oficial de las Fábricas
            </h2>
            <p className="text-xs font-bold text-stone-600 uppercase mt-0.5">La ubicación dentro del patio central</p>
          </div>
        </div>

        {/* Exact text provided by user */}
        <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed max-w-4xl shadow-inner mb-8">
          "Para ubicarnos bien dentro del Alero, este es el mapa de cómo están ordenadas las fábricas de derecha a izquierda:
          En la punta derecha: la <strong>Fábrica de Objetos</strong>.
          Al lado: la <strong>Fábrica de Rap y Audiovisual</strong>.
          En el centro: la <strong>Fábrica de Textil</strong>.
          Al lado de Textil: la <strong>Fábrica de la Palabra</strong> (que esta vez se tomó un descanso y no estuvo abierta).
          En la punta izquierda: la <strong>Cocina del Alero</strong>."
        </p>

        {/* Interactive Layout Map representing Right to Left order */}
        <div className="border-4 border-black rounded-xl p-4 bg-stone-100 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <p className="text-[10px] font-black text-stone-500 uppercase tracking-wider mb-4 text-center">
            🗺️ PLANO VIRTUAL DEL ALERO • ORDENADAS DE DERECHA A IZQUIERDA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {[
              {
                id: "cocina",
                pos: "Extremo Izquierdo",
                name: "🍳 La Cocina del Alero",
                desc: "Ubicada en la punta izquierda. Hogar de deliciosas recetas que abrigan el cuerpo.",
                color: "bg-red-100 border-red-300 text-red-950 shadow-red-200",
              },
              {
                id: "palabra",
                pos: "Al lado de Textil",
                name: "📖 Fábrica de la Palabra",
                desc: "Esta vez se tomó un descanso y no estuvo abierta. ¡Donde se inventan las poesías!",
                color: "bg-stone-200 border-stone-300 text-stone-400 opacity-60 italic shadow-stone-200",
              },
              {
                id: "textil",
                pos: "Centro del Alero",
                name: "🧶 Fábrica de Textil",
                desc: "Ubicada en el centro. Costura fina, hilos, lanas de abrigo y mantas tejidas.",
                color: "bg-emerald-100 border-emerald-300 text-emerald-950 shadow-emerald-200",
              },
              {
                id: "rap",
                pos: "Al lado de Textil",
                name: "🎤 Rap y Audiovisual",
                desc: "Rimas urbanas, grabaciones de voces, micrófonos y edición de vídeos.",
                color: "bg-indigo-100 border-indigo-300 text-indigo-950 shadow-indigo-200",
              },
              {
                id: "objetos",
                pos: "Extremo Derecho",
                name: "🎨 Fábrica de Objetos",
                desc: "En la punta derecha. Cuna del ingenio donde armamos los llamadores voladores.",
                color: "bg-amber-100 border-amber-300 text-amber-950 shadow-amber-200",
              },
            ].map((fac) => (
              <motion.div
                key={fac.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  playSynthTone("beep");
                }}
                className={`p-4 border-2 border-black rounded-xl flex flex-col justify-between min-h-[150px] cursor-pointer ${fac.color} shadow-[2.5px_2.5px_0px_black]`}
              >
                <div>
                  <span className="text-[8px] font-black uppercase bg-black text-white px-2 py-0.5 rounded leading-none inline-block">
                    {fac.pos}
                  </span>
                  <h4 className="font-black text-xs uppercase mt-3 leading-tight text-stone-900">{fac.name}</h4>
                  <p className="text-[10px] font-bold leading-normal mt-2 text-stone-700">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: NOTA DE TAPA - LLAMADORES VOLADORES */}
      <section className="bg-sky-50 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-sky-400 border-b-4 border-l-4 border-black px-4 py-1.5 font-mono text-[10px] font-black uppercase">
          🎨 NOTA DE TAPA
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Wind className="w-8 h-8 text-sky-600 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-sky-950">
                🎨 ¡Llamadores que vuelan al cielo!
              </h2>
              <p className="text-xs font-bold text-stone-600 uppercase mt-0.5">El inicio de las vacaciones de invierno</p>
            </div>
          </div>
          <button
            onClick={() => speakText(2)}
            className="border-2 border-black bg-stone-50 hover:bg-stone-100 p-2 rounded shadow-[2px_2px_0px_black] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
            data-html2canvas-ignore="true"
          >
            <AudioLines className="w-4 h-4 text-sky-600" />
            <span>NARRAR NOTA</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {/* Exact text provided by user */}
            <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed shadow-inner italic">
              "Las vacaciones arrancaron con todo de miércoles a domingo en el Alero Coronel Dorrego, potenciadas por la hermosa visita de las residentes del año pasado. En la Fábrica de Objetos se armó un taller espectacular donde cada uno armó su propio 'llamador volador'."
            </p>
            <p className="text-xs font-bold text-stone-700 leading-relaxed bg-white/70 border-l-4 border-sky-400 p-4 rounded-r-xl">
              "El proceso fue pura paciencia y arte: primero elegís un redondelito de madera; después le vas pegando cuadraditos de papel de colores por todo el redondel, intercalándolos y dejando espacio entre medio sin encimar todas las tiras de golpe. En otra mesa, elegís tiras de papeles largos de colores y las recortás si querés que no queden tan largas. Para terminar, se pasan hilitos por dos agujeritos que te hacen en la madera, se atan a un palito ¡y listo! El patio se llenó de chicos corriendo con el palito en la mano para ver cómo sus llamadores volaban con el viento."
            </p>
          </div>

          {/* Interactive widget */}
          <LlamadoresWidget playSynthTone={playSynthTone} />
        </div>
      </section>

      {/* SECTION 3: DIARIO RECETARIO ALERIL */}
      <section className="bg-stone-100 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden group">
        <div className="absolute inset-0 bg-yellow-100 border-4 border-dashed border-yellow-400 translate-x-3 translate-y-3 -z-10 rounded-2xl"></div>
        <div className="absolute top-0 right-0 bg-amber-500 border-b-4 border-l-4 border-black px-4 py-1.5 font-mono text-[10px] font-black uppercase text-white">
          🍰 COCINA DEL ALERO
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Coffee className="w-8 h-8 text-amber-700 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-amber-950">
                🍪 El Diario Recetario Aleril: Masitas Secas Decoradas
              </h2>
              <p className="text-xs font-bold text-stone-600 uppercase mt-0.5">Precisión de manga pastelera</p>
            </div>
          </div>
          <button
            onClick={() => speakText(3)}
            className="border-2 border-black bg-stone-50 hover:bg-stone-100 p-2 rounded shadow-[2px_2px_0px_black] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
            data-html2canvas-ignore="true"
          >
            <AudioLines className="w-4 h-4 text-amber-700" />
            <span>NARRAR RECETA</span>
          </button>
        </div>

        {/* Exact text provided by user */}
        <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed max-w-4xl shadow-inner mb-6">
          "¡Huele riquísimo en la Cocina! Como usar la manga pastelera requiere mucha precisión para que los trazos queden finos y delicados, el taller del jueves estuvo orientado a mayores de 10 años. ¡Acá te dejamos la receta oficial para que las hagas en casa!"
        </p>

        {/* Interactive widget containing the step-by-step and decorator */}
        <MasitasWidget playSynthTone={playSynthTone} />
      </section>

      {/* SECTION 4: LAS EXPLANADAS */}
      <section className="bg-emerald-50 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-emerald-400 border-b-4 border-l-4 border-black px-4 py-1.5 font-mono text-[10px] font-black uppercase">
          🏃 MOVIMIENTO AFUERA
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Flame className="w-8 h-8 text-emerald-600 shrink-0 animate-pulse" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-emerald-950">
                🎪 ¡Las Explanadas de afuera a puro Juego!
              </h2>
              <p className="text-xs font-bold text-stone-600 uppercase mt-0.5">Desafíos físicos de equilibrio y risas</p>
            </div>
          </div>
          <button
            onClick={() => speakText(4)}
            className="border-2 border-black bg-stone-50 hover:bg-stone-100 p-2 rounded shadow-[2px_2px_0px_black] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
            data-html2canvas-ignore="true"
          >
            <AudioLines className="w-4 h-4 text-emerald-600" />
            <span>NARRAR EXPLANADAS</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {/* Exact text provided by user */}
            <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed shadow-inner">
              "Afuera en las explanadas el movimiento no para con los desafíos físicos y de kermés:"
            </p>

            <div className="space-y-3.5">
              {[
                {
                  emoji: "🧗",
                  title: "Los Zancos",
                  desc: "Para probar el equilibrio, están los zancos grandes y también los más chicos (esas maderitas atadas con sogas que tenés que tirar fuerte hacia arriba para poder caminar).",
                },
                {
                  emoji: "➰",
                  title: "Saltar la soga",
                  desc: "Podés saltar en grupo con una soga gigante o usar las soguitas más pequeñas para saltar vos solo.",
                },
                {
                  emoji: "🎯",
                  title: "Juegos de Feria (¡Sin trampa!)",
                  desc: "Está el tablero inclinado tipo tobogán con un círculo en el medio para embocar bolsitas de harina, y una estructura de madera con forma de más (➕) que tiene varillas alargadas en el centro y en las puntas para embocar aros.",
                },
              ].map((game) => (
                <div key={game.title} className="p-4 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_black] flex gap-3">
                  <span className="text-2xl shrink-0">{game.emoji}</span>
                  <div>
                    <h4 className="font-black text-xs uppercase text-stone-900">{game.title}</h4>
                    <p className="text-[10px] font-semibold text-stone-600 mt-1 leading-relaxed">{game.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive widget */}
          <KermesWidget playSynthTone={playSynthTone} />
        </div>
      </section>

      {/* SECTION 5: RINCONES DE PAZ Y ARTE */}
      <section className="bg-rose-50 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-rose-400 border-b-4 border-l-4 border-black px-4 py-1.5 font-mono text-[10px] font-black uppercase text-white">
          🧘 TRANQUILIDAD
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Flower2 className="w-8 h-8 text-rose-500 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-rose-950">
                🧘‍♂️ Rincones de Paz y Arte (Adentro y en el Patio Central)
              </h2>
              <p className="text-xs font-bold text-stone-600 uppercase mt-0.5">Espacio Hacer Nacer y el cajón de verduras</p>
            </div>
          </div>
          <button
            onClick={() => speakText(5)}
            className="border-2 border-black bg-stone-50 hover:bg-stone-100 p-2 rounded shadow-[2px_2px_0px_black] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
            data-html2canvas-ignore="true"
          >
            <AudioLines className="w-4 h-4 text-rose-500" />
            <span>NARRAR RINCONES</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {/* Exact text provided by user */}
            <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed shadow-inner">
              "El espacio Hacer Nacer estuvo abierto para recibir a todos con un ambiente de total tranquilidad: música suave, espacio para hacer yoga y un techo hermoso lleno de grullas de origami hechas a mano."
            </p>
            <p className="text-xs font-bold text-stone-700 leading-relaxed bg-white/70 p-4 border-l-4 border-rose-400 rounded-r-xl">
              "Mientras tanto, en el patio central de adentro, se armaron las carpas tipis de tela y madera para meterse a descansar, y se pusieron las mesas para jugar partidas de ajedrez con las residentes invitadas. También estuvo el clásico 'Cajón de Verduras' interactivo; esta vez tenía un texto con las opciones 1, 2 y 3 para responder una consigna, pero los chicos lo aprovecharon para lo que mejor saben hacer: ¡dibujar encima y llenarlo de caras y colores hechos a mano!"
            </p>
          </div>

          {/* Interactive drawing Cajon canvas */}
          <CajonWidget playSynthTone={playSynthTone} />
        </div>
      </section>

      {/* SECTION 6: CARTELERA, TEATRO EN VACACIONES & GRUPO INVITADO */}
      <section className="bg-stone-100 border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden group">
        <div className="absolute inset-0 bg-sky-50 border-4 border-dashed border-sky-300 translate-x-3 translate-y-3 -z-10 rounded-2xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cartelera */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 border-b-4 border-black pb-3">
              <Calendar className="w-8 h-8 text-sky-600 shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase leading-none text-sky-950">
                  🎭 Cartelera: Teatro en Vacaciones
                </h3>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mt-1">¡Espectáculo dominical confirmado!</p>
              </div>
            </div>

            {/* Exact text provided by user */}
            <p className="text-sm font-bold text-stone-800 bg-white border-2 border-black p-4 rounded-xl leading-relaxed shadow-inner italic">
              "¡Espectáculo confirmado! Este domingo 12 a las 17 h, llega la obra de circo y clown 'Aventuras Clownescas' por el grupo santafesino Haceme la Segunda. Dos payasos van a hacer lo imposible por crear nuevas rutinas mientras esperan a un director que no llega, tropezando con mil imprevistos donde el público va a tener que ayudarlos. ¡Entrada libre y gratuita!"
            </p>

            <div className="p-4 bg-sky-400 border-2 border-black rounded-xl text-black shadow-[3px_3px_0px_black]">
              <span className="bg-black text-white px-2 py-0.5 rounded text-[8px] font-black uppercase font-mono">
                📌 DOMINGO 12 • 17:00 HS
              </span>
              <h4 className="font-black text-xs uppercase mt-2">¡Traé tu mate y vení a reírte!</h4>
              <p className="text-[10px] font-bold leading-relaxed mt-1">
                La obra se realiza en el patio central techado para que el frío de julio no moleste. La entrada es totalmente libre y gratuita para vecinos, familias y amigos.
              </p>
            </div>
          </div>

          {/* Grupo Invitado Upload Slot */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 border-b-4 border-black pb-3">
              <Users className="w-8 h-8 text-indigo-600 shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase leading-none text-indigo-950">
                  👥 Grupo Invitado
                </h3>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mt-1">
                  ¡Sube la foto del grupo para tu ejemplar!
                </p>
              </div>
            </div>

            <p className="text-[10px] font-semibold text-stone-600 leading-relaxed bg-indigo-50 border border-indigo-200 p-3 rounded-lg">
              💡 <strong>Rincón del Recuerdo:</strong> Podés cargar la foto del grupo invitado aquí para que se imprima o guarde de forma totalmente personalizada en tu edición digital de Aleroticias.
            </p>

            <ImageUploadSlot
              id="grupo_invitado_v10"
              title="Cargar foto del Grupo Invitado"
              subtitle="Formatos JPG, PNG, GIF • Se guarda localmente"
              placeholderBg="bg-indigo-100 text-indigo-700 hover:bg-indigo-200/60"
              iconColor="text-indigo-600"
              placeholderIcon={<Camera className="w-8 h-8 text-indigo-600" />}
              uploadedImages={uploadedImages}
              onUpload={handleImageUpload}
              onRemove={handleRemoveImage}
              aspectClass="aspect-[4/3]"
              defaultImageUrl="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: MURAL DE DESEOS - PERSISTENCE */}
      <section id="buzon-ed10" className="relative group">
        <div className="absolute inset-0 bg-yellow-100 translate-x-3 translate-y-3 -z-10 rounded-2xl border-4 border-dashed border-yellow-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[10px_10px_0px_black] relative overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Wish input Form */}
            <div className="lg:col-span-2 space-y-5">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[2.5px_2.5px_0px_black] mb-1 font-mono">
                ✍️ CONECTADOS A LA COMUNIDAD
              </span>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-stone-900">
                MURAL DE SUEÑOS ALERIL
              </h2>

              <p className="text-[10px] font-bold text-stone-600 leading-relaxed bg-stone-50 border-2 border-black/10 p-3 rounded-lg">
                ¿Qué mensaje te gustaría compartir con Coronel Dorrego estas vacaciones de invierno? Escribí deseos, saludos o ideas de juego para tus vecinos. Se guardarán en el mural conectado de forma permanente.
              </p>

              <form onSubmit={handleWishSubmit} className="space-y-3.5 bg-stone-50 p-5 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                <div className="space-y-1">
                  <label htmlFor="wish-author-v10" className="block text-[10px] font-black uppercase text-stone-700">
                    👤 Tu nombre o seudónimo:
                  </label>
                  <input
                    id="wish-author-v10"
                    type="text"
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    placeholder="Ej. Sofía, Familia del Barrio, Mateo..."
                    className="w-full border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-yellow-50 uppercase rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.1)]"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="wish-text-v10" className="block text-[10px] font-black uppercase text-stone-700">
                    ✍️ Tu mensaje o deseo para el mural:
                  </label>
                  <textarea
                    id="wish-text-v10"
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    placeholder="¡Que pasemos unas vacaciones de invierno copadas y nos encontremos siempre riendo en El Alero!..."
                    className="w-full border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-yellow-50 h-24 resize-none rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.1)]"
                    maxLength={180}
                  />
                  <div className="text-right text-[9px] font-black text-stone-400">
                    {newWishText.length}/180 CARACTERES
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
                  className="w-full bg-black hover:bg-stone-800 text-white border-2 border-black py-2.5 text-xs font-black uppercase transition-all shadow-[3px_3px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 rounded-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                  <span>{isSubmittingWish ? "Guardando..." : "¡Colgar en el Mural!"}</span>
                </button>
              </form>
            </div>

            {/* List Output Column */}
            <div className="lg:col-span-3 space-y-5">
              <div className="flex border-b-2 border-black pb-2 items-center justify-between text-stone-500">
                <span className="text-xs font-black uppercase tracking-tight text-stone-900 flex items-center gap-1.5">
                  ✨ BAÚL COLECTIVO DE RECUERDOS ({wishes.length} DESEOS)
                </span>
                <span className="text-[8px] font-black text-stone-400 font-mono">
                  SINK NUBE PERMANENTE
                </span>
              </div>

              <div className="max-h-[480px] overflow-y-auto pr-2 space-y-3.5">
                {wishes.length === 0 ? (
                  <div className="border-4 border-dashed border-black/10 p-8 text-center uppercase font-black text-stone-400 bg-stone-50/50 rounded-xl animate-pulse text-xs">
                    Abriendo baúl de recuerdos... ¡Escribí el primer deseo para el Alero!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {wishes.map((wish, idx) => {
                      const stickerColors = [
                        "bg-yellow-100 border-yellow-300 shadow-yellow-200 text-yellow-950",
                        "bg-rose-100 border-rose-300 shadow-rose-200 text-rose-950",
                        "bg-sky-100 border-sky-300 shadow-sky-200 text-sky-950",
                        "bg-emerald-100 border-emerald-300 shadow-emerald-200 text-emerald-950",
                      ];
                      const stickerColor = stickerColors[idx % stickerColors.length];
                      const rotate = idx % 2 === 0 ? "rotate-0.5" : "-rotate-0.5";

                      return (
                        <motion.div
                          key={wish.id}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className={`p-4 border-2 border-black rounded-xl ${stickerColor} ${rotate} flex flex-col justify-between min-h-[110px] shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_4px_0px_black] transition-all`}
                        >
                          <p className="text-xs font-bold leading-relaxed italic text-stone-950">
                            "{wish.text}"
                          </p>
                          <div className="mt-2 pt-2 border-t border-black/10 flex justify-between items-center text-[9px] font-black uppercase">
                            <span className="truncate text-stone-800">👤 {wish.author}</span>
                            <span className="opacity-60 text-[8px]">
                              {new Date(wish.date).toLocaleDateString("es-AR", {
                                day: "numeric",
                                month: "short",
                              })}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Stickers / Footer */}
      <div className="flex flex-wrap justify-center gap-6 py-8" data-html2canvas-ignore="true">
        <div className="bg-yellow-400 text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-3 hover:rotate-0 transition-transform cursor-pointer uppercase text-xs">
          ¡Vacaciones Copadas! 🍂
        </div>
        <div className="bg-sky-400 text-black border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer uppercase text-xs">
          Aleroticias Comunitaria 🗞️
        </div>
        <div className="bg-rose-500 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer uppercase text-xs">
          El Alero Dorrego ❤️
        </div>
        <div className="bg-emerald-500 text-white border-4 border-black font-black px-6 py-2 shadow-[4px_4px_0px_black] transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer uppercase text-xs">
          Tarde de Juegos ✨
        </div>
      </div>
    </div>
  );
}

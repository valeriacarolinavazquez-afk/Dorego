import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  AudioLines,
  Play,
  Pause,
  Square,
  Sparkles,
  PartyPopper,
  Volume2,
  Heart,
  Bell,
  BellRing,
  Send,
  Smartphone,
  CheckCircle,
  Wifi,
  WifiOff
} from "lucide-react";

interface Wish {
  id: number;
  author: string;
  text: string;
  date: string;
}

interface AlertMessage {
  id: number;
  author: string;
  text: string;
  date: string;
}

export default function Edition07() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [checkedTips, setCheckedTips] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false
  });
  
  // --- STATE FOR DATABASE WISHES (Mensajes Solidarios de Mascotas) ---
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWishAuthor, setNewWishAuthor] = useState("");
  const [newWishText, setNewWishText] = useState("");
  const [isSubmittingWish, setIsSubmittingWish] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);

  // --- NOTIFICATION & COMMUNITY ALERTS STATES ---
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(5);
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);
  const [newAlertAuthor, setNewAlertAuthor] = useState("");
  const [newAlertText, setNewAlertText] = useState("");
  const [isSubmittingAlert, setIsSubmittingAlert] = useState(false);
  const [alertError, setAlertError] = useState<string | null>(null);
  const [devicePermissionError, setDevicePermissionError] = useState<string | null>(null);
  const [showInAppAlert, setShowInAppAlert] = useState<AlertMessage | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

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
    "Diario El Dorrego. Prensa Infantil. Volumen ocho, doce de junio de dos mil veintiséis. Edición Especial: Animales de nuestro barrio.",
    "Título principal: ¡Ayudemos a que vuelvan a casa! Nuestros vecinos de cuatro patas.",
    "En el barrio Coronel Dorrego y Guadalupe Oeste también viven muchos amigos peludos. A veces se asustan, se alejan y no encuentran el camino de vuelta. En este número les damos un lugar especial: difundimos el caso de Cabral y recordamos cómo podemos cuidar y ayudar a los animales de la zona.",
    "Se busca: Cabral, el gatito negro. Cabral es un vecino que se perdió hace poco en Guadalupe Oeste, por la zona de las calles Azcuénaga y Güemes.",
    "¿Cómo reconocerlo? Es macho, tiene dos años, es negro y está castrado. Solía llevar collar de color naranja. Su marca especial: tiene una manchita blanca en la ingle. Es de pelo lacio y tamaño mediano. Si lo ves o sabés algo de él, por favor llamá al: tres, cuatro, dos, cuatro, seis, tres, siete, uno, dos, cero. ¡Entre todos podemos ayudarlo a volver con su familia!",
    "¿Qué hacer si vemos un animal perdido? Para que estemos atentos y ayudemos bien: Primero, si vemos uno que parece perdido, no lo corramos ni lo asustemos —puede tener miedo. Segundo, fijémonos si tiene collar con teléfono o alguna marca especial. Tercero, si está bien, podemos avisar a los vecinos o difundirlo como hicimos con Cabral. Cuarto, recordemos: todos merecemos un hogar seguro.",
    "Recordatorio: ¡Faltan quince días para la fiesta! No nos olvidamos: el veintisiete de junio seguimos celebrando los diez años de El Alero. Allí nos encontraremos todos, con los bonetes decorados, las piñatas, las mantitas y mucho más. ¡Podemos llevar la buena noticia si encontramos a Cabral para compartirla en la fiesta!",
    "Cierre de la edición. Los animales también son parte de nuestro barrio. Cuidarlos, respetarlos y ayudar a que vuelvan a casa es una forma de querer más nuestro lugar. Si sabés de otro animal perdido, ¡avísanos para difundirlo en el próximo número!"
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

  const handleWishSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWishText.trim()) {
      setWishError("¡Por favor, escribí un mensaje solidario para nuestras mascotas!");
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
        let wishesList: Wish[] = [];
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

  // --- NOTIFICATION CHIME SYNTHESIS ---
  const playNotificationChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = "sine";
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(783.99, now); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.1); // C6
      osc.frequency.setValueAtTime(1318.51, now + 0.2); // E6
      
      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      console.warn("Chime unsupported or blocked by gesture", e);
    }
  };

  // --- API OPERATIONS FOR ALERTS & NOTIFICATIONS ---
  const fetchSubscriptionsCount = async () => {
    try {
      const url = getApiUrl("/api/notifications/subscriptions");
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSubscriberCount(data.count);
      }
    } catch (e) {
      console.warn("Could not fetch subscriptions count", e);
    }
  };

  const fetchCommunityAlerts = async (isPoll = false) => {
    try {
      const url = getApiUrl("/api/notifications/alerts");
      const res = await fetch(url);
      if (res.ok) {
        const data: AlertMessage[] = await res.json();
        
        // If polling and we receive a NEW alert that wasn't here before, trigger popup alerts!
        if (isPoll && data.length > 0) {
          // Compare the top alert ID with our current top alert
          const currentTopId = alerts.length > 0 ? alerts[0].id : null;
          const incomingTopId = data[0].id;
          
          if (currentTopId && incomingTopId !== currentTopId) {
            const newAlert = data[0];
            
            // Trigger customized local states
            setShowInAppAlert(newAlert);
            playNotificationChime();
            
            // Show browser notification if permission is active
            if (Notification.permission === "granted") {
              try {
                new window.Notification("Alerta Guadalupe Oeste 🚨", {
                  body: `${newAlert.author}: ${newAlert.text}`,
                  icon: "/input_file_0.png"
                });
              } catch (err) {
                console.warn("Native Notification throw:", err);
              }
            }
          }
        }
        
        setAlerts(data);
      }
    } catch (e) {
      console.warn("Error retrieving community alerts:", e);
    }
  };

  // Subscribe current device to notification channel
  const activateDeviceNotifications = async () => {
    setSubscribing(true);
    setDevicePermissionError(null);

    // 1. Verifying compatibility
    if (!("Notification" in window)) {
      setDevicePermissionError("Este teléfono o navegador no soporta notificaciones nativas.");
      setSubscribing(false);
      return;
    }

    try {
      // 2. Requesting standard permission
      const permission = await Notification.requestPermission();
      
      if (permission === "granted") {
        setIsSubscribed(true);
        playNotificationChime();
        
        // Generate or fetch a unique identifier for this browser/telephone to match on database
        let subscriptionId = localStorage.getItem("alero_subscription_uuid");
        if (!subscriptionId) {
          subscriptionId = "sub-" + Math.random().toString(36).substring(2, 15) + "-" + Date.now();
          localStorage.setItem("alero_subscription_uuid", subscriptionId);
        }

        // Register to Backend persistent database
        const url = getApiUrl("/api/notifications/subscribe");
        const regRes = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subscriptionId })
        });

        if (regRes.ok) {
          const regData = await regRes.json();
          setSubscriberCount(regData.count);
        }

        // Send a cute confirmation notification
        try {
          new window.Notification("¡Alertas Activadas! 🔔", {
            body: "A partir de ahora recibirás aquí los avisos de mascotas perdidas y llamadas comunitarias. ¡Gracias por sumarte!",
            icon: "/input_file_0.png"
          });
        } catch (e) {
          console.warn("Failed standard notification constructor:", e);
        }

      } else {
        setDevicePermissionError(
          "Permiso denegado. Si estás en AI Studio (iframe), recordá que los navegadores bloquean permisos dentro de marcos. ¡Hacé clic arriba en 'Abrir en nueva pestaña' para activarlo al 100%!"
        );
      }
    } catch (err) {
      console.error("Error asking for push notifications:", err);
      setDevicePermissionError(
        "Acción bloqueada por el navegador (Iframe Sandbox). Por favor abrí la app en una 'Nueva Pestaña' usando el botón superior para dar permiso en tu teléfono/computadora."
      );
    } finally {
      setSubscribing(false);
    }
  };

  // Submit emergency community alert
  const handleAlertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlertText.trim()) {
      setAlertError("Por favor escribí el mensaje de la alerta");
      return;
    }
    setAlertError(null);
    setIsSubmittingAlert(true);

    const authorVal = newAlertAuthor.trim() ? newAlertAuthor.trim() : "Vecino/a Alerta";
    const textVal = newAlertText.trim();

    try {
      const url = getApiUrl("/api/notifications/alerts");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: authorVal, text: textVal })
      });

      if (res.ok) {
        const updatedAlerts = await res.json();
        setAlerts(updatedAlerts);
        setNewAlertText("");
        setNewAlertAuthor("");
        
        // Play local chime on trigger
        playNotificationChime();
      } else {
        setAlertError("Error al enviar la alerta al servidor.");
      }
    } catch (err) {
      console.error("Alert submission error", err);
      setAlertError("Error al comunicarse con el canal de emergencias.");
    } finally {
      setIsSubmittingAlert(false);
    }
  };

  // Check state on mount to verify browser notification status
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "granted") {
        setIsSubscribed(true);
      }
    }
    
    fetchWishes();
    fetchSubscriptionsCount();
    fetchCommunityAlerts(false);

    // Real-time polling checker for community alerts: runs every 4 seconds to catch new bulletins!
    const pollInterval = setInterval(() => {
      fetchCommunityAlerts(true);
      fetchSubscriptionsCount();
    }, 4000);

    // Try registering PWA Service Worker for standard background push if support is native
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("Service Worker registrado con éxito para Web Push."))
        .catch(err => console.debug("Service Worker register ignored or restricted:", err));
    }

    return () => {
      clearInterval(pollInterval);
      try {
        window.speechSynthesis.cancel();
      } catch (err) {}
    };
  }, [alerts.length]); // Keep dependency updated for tracking alert length changes

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

  const toggleTip = (id: number) => {
    setCheckedTips(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allTipsChecked = Object.values(checkedTips).every(Boolean);

  const tips = [
    { id: 0, text: "Si vemos uno que parece perdido, no lo corramos ni lo asustemos —puede tener miedo 🏃" },
    { id: 1, text: "Fijémonos si tiene collar con teléfono o alguna marca especial 🏷️" },
    { id: 2, text: "Si está bien, podemos avisar a los vecinos o difundirlo como hicimos con Cabral 📢" },
    { id: 3, text: "Recordemos: todos merecemos un hogar seguro 🏠" }
  ];

  return (
    <div className="text-black space-y-12 paper-texture">
      {/* Dynamic Slide-Down Floating Banner for real-time Community Alerts */}
      <AnimatePresence>
        {showInAppAlert && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:w-[480px] md:-translate-x-1/2 bg-red-600 text-white border-4 border-black shadow-[6px_6px_0px_black] p-4 rounded-xl z-[9999] flex flex-col gap-2 pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-white/20 pb-1.5">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-yellow-400 px-2 py-0.5 rounded flex items-center gap-1 animate-pulse">
                🚨 ALERTA COMUNITARIA EN CURSO
              </span>
              <button 
                onClick={() => setShowInAppAlert(null)}
                className="text-white hover:text-stone-300 font-mono font-black text-xs cursor-pointer bg-black/30 w-5 h-5 flex items-center justify-center rounded-full border border-white/20"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-3 pt-1">
              <span className="text-3xl select-none">📢</span>
              <div className="space-y-1">
                <p className="text-[10px] font-mono font-black text-rose-200 uppercase tracking-widest">
                  EMITIDA POR: {showInAppAlert.author}
                </p>
                <p className="text-xs font-bold leading-relaxed text-left">
                  {showInAppAlert.text}
                </p>
              </div>
            </div>
            <div className="text-[9px] text-right font-mono text-white/60 pt-1">
              Recibido ahora mismo • 🔊 ¡Sonó el timbre barrial!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Top Info Bar - Forest Green & Amber Theme */}
      <div className="flex justify-between items-end border-b-4 pb-4 mb-8 border-emerald-500">
         <div className="text-[10px] md:text-sm font-black leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 via-amber-500 to-emerald-800">
          <span className="text-white px-2 py-1 mr-2 inline-block shadow-[2px_2px_0px_black] bg-gradient-to-r from-emerald-500 to-teal-600">VOLUMEN 08</span>
          DIARIO EL DORREGO • EDICIÓN ESPECIAL: ANIMALES DE NUESTRO BARRIO 🐾🐕🐈⬛ • SANTA FE • 12 DE JUNIO DE 2026
        </div>
        <div className="text-right text-[10px] md:text-sm font-black uppercase text-emerald-700">
          AÑO I • Nº 008<br />
          COMPROMISO COMUNITARIO CON LAS MASCOTAS
        </div>
      </div>

      {/* Spectacular Masthead with Emerald & Pink / Orange Border Gradients */}
      <header id="inicio-ed7" className="border-b-[12px] border-b-transparent bg-gradient-to-r from-emerald-500 via-teal-300 via-amber-400 via-emerald-300 to-pink-500 pb-1.5 mb-12 text-center relative rounded-b-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
        <div className="bg-white py-10 px-4">
          <motion.div 
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -8 }}
            className="absolute -top-10 -right-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-pink-300 border-4 border-black p-4 rounded-xl font-black text-xs md:text-sm text-black shadow-[6px_6px_0px_black] z-20"
          >
            🐈⬛ ¡MÁXIMA PRIORIDAD SOLIDARIA! 🐾
          </motion.div>
          
          <a href="#inicio-ed7" className="block hover:opacity-80 transition-opacity">
            <h1 className="text-[10vw] md:text-[7.5rem] font-serif font-black tracking-tighter leading-none mb-4 ink-bleed uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 via-amber-500 via-pink-400 to-emerald-700 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              EL DORREGO
            </h1>
          </a>
          
          <div className="relative inline-block px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-300 to-pink-400 transform -rotate-1 skew-x-2 translate-y-1"></div>
            <div className="relative border-4 border-black py-3 px-8 md:px-16 text-lg md:text-3xl font-black tracking-[0.1em] bg-amber-300 text-black translate-y-[-4px] shadow-[6px_6px_0px_black] uppercase leading-tight">
              🐾 EDICIÓN ESPECIAL: ANIMALES DE NUESTRO BARRIO 🐾
            </div>
          </div>

          <div className="mt-8 text-xs md:text-sm font-black max-w-xl mx-auto uppercase tracking-wide bg-emerald-50 border-2 border-black/20 p-2.5 rounded-lg text-emerald-950">
            "PRENSA INFANTIL ESCRITA COLECTIVAMENTE PARA PROMOVER EL ENCUENTRO Y EL AFECTO EN SANTA FE"
          </div>
        </div>
      </header>

      {/* CASSETTE WALKMAN PLAYER */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-stone-800 to-stone-900 text-white p-4 sm:p-6 rounded-2xl border-4 border-black shadow-[10px_10px_0px_black] relative overflow-hidden">
          <div className="absolute top-2 right-4 text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black">WALKMAN KM-26</div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              {/* Cassette visualization */}
              <div className="w-28 sm:w-36 h-16 sm:h-20 bg-amber-500 rounded-lg border-2 border-black relative p-2 flex flex-col justify-between hidden sm:flex">
                <div className="flex justify-between text-[6px] font-mono font-black text-black">
                  <span>A-SIDE</span>
                  <span>90 MIN</span>
                </div>
                <div className="bg-zinc-800 h-6 rounded border border-black flex items-center justify-around px-3 relative">
                  <motion.div 
                    animate={speechState.isSpeaking && !speechState.isPaused ? { rotate: 360 } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 rounded-full border-2 border-dashed border-white flex items-center justify-center text-[5px] text-zinc-400"
                  >
                    ✸
                  </motion.div>
                  <div className="w-6 h-1 bg-zinc-900 border border-zinc-700 rounded"></div>
                  <motion.div 
                    animate={speechState.isSpeaking && !speechState.isPaused ? { rotate: 360 } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 rounded-full border-2 border-dashed border-white flex items-center justify-center text-[5px] text-zinc-400"
                  >
                    ✸
                  </motion.div>
                </div>
                <div className="text-[6px] text-center font-black text-black tracking-widest uppercase">EL DORREGO VOL 8 - AUDIO</div>
              </div>
              <div className="text-left font-sans">
                <span className="text-[9px] font-mono bg-amber-400 text-black px-2 py-0.5 rounded uppercase font-black tracking-tight shrink-0">
                  🎙️ PORTAVOZ DE LAS INFANCIAS
                </span>
                <h4 className="text-lg font-black uppercase tracking-tight text-white mt-1.5 flex items-center gap-2">
                  <AudioLines className="w-5 h-5 text-amber-400 animate-pulse" /> Lectura Guiada de la Edición
                </h4>
                <p className="text-xs text-stone-300 font-medium leading-relaxed max-w-md mt-1">
                  {speechState.isSpeaking 
                    ? (speechState.isPaused ? "Lectura pausada. Presioná reanudar." : `Escuchando sección ${speechState.currentIndex + 1} de ${textToRead.length}...`) 
                    : "¡Escuchá la crónica completa dictada con cariño por nuestro sistema de voz barrial!"
                  }
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
              <button
                onClick={handlePlaySpeech}
                className="flex-1 md:flex-initial bg-emerald-500 hover:bg-emerald-400 text-white font-mono font-black text-xs uppercase px-5 py-3 border-2 border-black rounded-xl shadow-[4px_4px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer flex items-center justify-center gap-2"
              >
                {speechState.isSpeaking && !speechState.isPaused ? (
                  <>
                    <Pause className="w-4 h-4" /> PAUSAR
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" /> {speechState.isSpeaking ? "REANUDAR" : "REPRODUCIR"}
                  </>
                )}
              </button>
              {speechState.isSpeaking && (
                <button
                  onClick={handleStopSpeech}
                  className="bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs uppercase p-3 border-2 border-black rounded-xl shadow-[4px_4px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer"
                  title="Detener audio"
                >
                  <Square className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT BLOCK - THE ARTICLE */}
      <section id="cabral-ed7" className="relative group">
        <div className="absolute inset-0 bg-emerald-50 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-emerald-400"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-50/20 via-white to-amber-50/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Polaroid-style poster of Lost Cat (Takes 5/12 width) */}
            <div className="lg:col-span-5 bg-[#1e293b] text-white p-5 border-4 border-black shadow-[6px_6px_0px_black] flex flex-col justify-between rounded-xl transform rotate-1">
              <div>
                <div className="flex items-center gap-2 mb-3 bg-red-600 border-2 border-black text-white p-2 text-center uppercase font-black text-xs rounded shadow-sm justify-center">
                  <span>🚨 ¡SE BUSCA GATITO PERDIDO! 🐈⬛</span>
                </div>
                
                {/* Image of Cabral */}
                <div className="w-full aspect-[4/3] rounded-lg border-2 border-white/60 overflow-hidden bg-black relative shadow-inner mb-4 group cursor-zoom-in">
                  <img 
                    src="https://i.postimg.cc/0yS6FLwd/1781301706888.png" 
                    alt="Cabral Gato Perdido Oficial" 
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                    onClick={() => setIsFullscreen(true)}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  <div className="absolute bottom-1 right-2 bg-black/80 text-white font-mono text-[8px] px-1.5 py-0.5 rounded border border-white/10">
                    Hacé click para ampliar 🔎
                  </div>
                </div>

                <h3 className="text-xl font-black uppercase text-amber-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] text-center">
                  🐈⬛ CABRAL, EL GATITO NEGRO
                </h3>
                
                <p className="text-xs font-bold text-slate-300 text-center uppercase tracking-tight mb-4 mt-1 border-b border-white/10 pb-2">
                  Zona: Guadalupe Oeste • Calles Azcuénaga y Güemes
                </p>

                {/* Characteristics box */}
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5 text-xs text-slate-100 font-sans">
                  <div className="flex justify-between pb-1 border-b border-slate-700/50">
                    <span className="font-bold text-slate-400 uppercase">Sexo y Edad:</span>
                    <span className="font-black text-amber-200">Macho castrado, 2 años</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-slate-700/50">
                    <span className="font-bold text-slate-400 uppercase">Aspecto:</span>
                    <span className="font-black text-amber-200">Negro, pelo lacio, mediano</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-slate-700/50">
                    <span className="font-bold text-slate-400 uppercase">Collar:</span>
                    <span className="font-black text-amber-200">De color naranja</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-400 uppercase">Marca única:</span>
                    <span className="font-black text-red-300">Manchita blanca en la ingle 🤍</span>
                  </div>
                </div>

                <p className="text-center text-[10px] text-yellow-300 font-bold uppercase mt-3 leading-tight leading-relaxed">
                  "Se perdió hace poco en Guadalupe Oeste. ¡Por favor estate atento al patio y veredas!"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-center text-xs font-black text-yellow-400 uppercase tracking-widest mb-2">¡COMUNICATE DE INMEDIATO AL!</p>
                <a 
                  href="tel:3424637120"
                  className="bg-red-600 hover:bg-red-500 text-white text-center font-mono font-black text-sm block py-3 rounded-lg border-2 border-black active:translate-y-0.5 shadow-[4px_4px_0px_#f59e0b] transition-all cursor-pointer"
                >
                  📞 LLAMAR AL 342 463-7120
                </a>
              </div>
            </div>

            {/* Right: Narrative / Editorial body (Takes 7/12 width) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-emerald-600 text-white px-3 py-1 font-black uppercase text-[10px] transform rotate-1 shadow-[3px_3px_0px_black] mb-3">
                  📰 PRENSA COMUNITARIA INFANTIL
                </span>
                
                {/* 🟢 TÍTULO PRINCIPAL */}
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none mb-4">
                  ¡Ayudemos a que vuelvan a casa! Nuestros vecinos de cuatro patas
                </h3>

                {/* 🟡 ENTRADA */}
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <p className="text-xs md:text-sm font-black text-emerald-950 leading-relaxed uppercase">
                    En el barrio Coronel Dorrego y Guadalupe Oeste también viven muchos amigos peludos. A veces se asustan, se alejan y no encuentran el camino de vuelta. En este número les damos un lugar especial: difundimos el caso de Cabral y recordamos cómo podemos cuidar y ayudar a los animales de la zona.
                  </p>
                </div>

                {/* Editorial text styling */}
                <div className="mt-6 space-y-4 text-xs md:text-sm font-semibold text-gray-700 leading-relaxed font-sans">
                  <div className="border-t border-black/10 pt-4">
                    <p className="uppercase font-black text-[11px] text-[#15803d] tracking-wide mb-1 flex items-center gap-1">
                      <span>🐈⬛ CABRAL ES MIEMBRO DE NUESTRO HOGAR</span>
                    </p>
                    <p className="font-sans font-bold text-gray-700 text-justify">
                      Nuestra red de pequeños corresponsales se puso en alerta máxima. Las familias de Guadalupe Oeste se organizaron para difundir el rostro y las marcas de Cabral. Cada rincón, portón o vereda de las calles Azcuénaga y Güemes está siendo observado. Por eso le pusimos primera prioridad en la portada. ¡Llamá al teléfono ante cualquier avistamiento!
                    </p>
                  </div>
                </div>

                {/* Simple Highlights row */}
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="bg-emerald-100 p-2 text-center rounded border border-emerald-300 font-mono text-[9px] font-black uppercase">
                    🐈⬛ CASO CABRAL
                  </div>
                  <div className="bg-blue-100 p-2 text-center rounded border border-blue-300 font-mono text-[9px] font-black uppercase">
                    🐾 GUÍA COMUNITARIA
                  </div>
                  <div className="bg-purple-100 p-2 text-center rounded border border-purple-300 font-mono text-[9px] font-black uppercase">
                    🎉 CONTANDO 15 DÍAS
                  </div>
                </div>
              </div>

              {/* Quick calling warning box */}
              <div className="bg-[#fdf2f8] p-3 rounded-lg border-2 border-pink-200 text-pink-950 text-xs font-black uppercase tracking-tight flex items-center gap-3">
                <span className="text-xl animate-bounce">📢</span>
                <p>
                  "Si sabés dónde duerme o si comió galletitas por tu vereda, dale cobijo y llama al teléfono de arriba para regresarlo con su familia."
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: 🐾 ¿Qué hacer si vemos un animal perdido? */}
      <section id="lost-tips-ed7" className="relative group">
        <div className="absolute inset-0 bg-rose-50 translate-x-3 translate-y-3 -z-10 rounded-2xl border-4 border-dashed border-rose-300"></div>
        <div className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] space-y-6">
          
          <div className="border-b-4 border-rose-400 pb-3">
            <span className="bg-rose-500 text-white font-mono text-[10px] px-2.5 py-0.5 rounded font-black tracking-widest uppercase inline-block mb-1">
              PAUTAS DE RECONOCIMIENTO Y ACCIÓN
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-rose-950">
              🐾 ¿Qué hacer si vemos un animal perdido?
            </h3>
            <p className="text-xs font-black text-[#be123c] mt-1 uppercase">
              Hacé click en cada pauta para marcarla como aprendida. ¡Cuidemos juntos el hábitat barrial!
            </p>
          </div>

          {/* Interactive Guidelines checklists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip) => {
              const checked = checkedTips[tip.id];
              return (
                <button
                  key={tip.id}
                  onClick={() => toggleTip(tip.id)}
                  className={`p-4 border-2 border-black rounded-xl text-left transition-all relative ${checked ? 'bg-emerald-50 border-emerald-600 shadow-emerald-100' : 'bg-stone-50 hover:bg-stone-100 border-black shadow-[4px_4px_0px_black]'} flex items-start gap-3 justify-between`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded border-2 border-black flex items-center justify-center shrink-0 mt-0.5 ${checked ? 'bg-emerald-500 text-white' : 'bg-white text-transparent'}`}>
                      {checked ? "✓" : ""}
                    </div>
                    <span className="text-xs md:text-sm font-black uppercase leading-tight leading-relaxed text-slate-800">
                      {tip.text}
                    </span>
                  </div>
                  {checked && <span className="text-emerald-600 text-xs font-mono font-black shrink-0">¡LEÍDO!</span>}
                </button>
              );
            })}
          </div>

          {/* Celebrated banner when all read */}
          {allTipsChecked && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-500 border-4 border-black p-4 text-center rounded-xl text-white shadow-[4px_4px_0px_black]"
            >
              <h4 className="text-lg font-black uppercase tracking-tight flex items-center justify-center gap-2">
                <PartyPopper className="w-5 h-5 text-yellow-300 animate-spin" /> ¡EXCELENTE VECINO PROTECTOR!
              </h4>
              <p className="text-xs font-bold uppercase mt-1">
                Leíste y comprendiste todas las normas del cuidado animal. ¡Un barrio educado es un barrio feliz!
              </p>
            </motion.div>
          )}

        </div>
      </section>

      {/* SECTION 4: 🎉 Recordatorio: ¡Faltan 15 días para la fiesta! */}
      <section id="aniv-ed7" className="relative group">
        <div className="absolute inset-0 bg-[#fef08a]/40 translate-x-3 translate-y-3 -z-10 rounded-2xl border-4 border-dashed border-yellow-300"></div>
        <div className="bg-[#fef08a] border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden text-black text-center max-w-5xl mx-auto">
          
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-200/50 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="bg-black text-white font-mono text-[10px] px-3 py-0.5 rounded font-black tracking-widest uppercase">
              🎉 10° ANIVERSARIO EL ALERO COMUNITARIO
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-black leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,1)]">
              🎉 Recordatorio: ¡Faltan 15 días para la fiesta!
            </h3>
            
            <p className="text-xs md:text-sm font-bold leading-relaxed text-zinc-900 max-w-2xl mx-auto">
              No nos olvidamos: el 27 de junio seguimos celebrando los 10 años de El Alero. Allí nos encontraremos todos, con los bonetes decorados, las piñatas, las mantitas y mucho más. ¡Podemos llevar la buena noticia si encontramos a Cabral para compartirla en la fiesta!
            </p>

            {/* Countdown visual progress bar */}
            <div className="max-w-md mx-auto pt-4 relative">
              <div className="flex justify-between items-center text-xs font-black uppercase mb-1">
                <span>12 de Junio (Hoy)</span>
                <span className="bg-rose-500 text-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_black]">¡QUEDAN 15 DÍAS!</span>
                <span>27 de Junio</span>
              </div>
              <div className="w-full h-6 bg-white border-2 border-black rounded-lg overflow-hidden relative">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full w-[50%] border-r-2 border-black"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-black uppercase text-black">
                  PROGRESO PREPARATIVO: 50% COMPLETE
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: 🚨 NOTIFICACIONES EN TIEMPO REAL Y ALERTAS AL CELULAR */}
      <section id="notificaciones-ed7" className="relative group max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-rose-50 translate-x-3 translate-y-3 -z-10 rounded-2xl border-4 border-dashed border-rose-300"></div>
        <div className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_black] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b-4 border-black pb-4 mb-6">
            <div>
              <span className="bg-rose-500 text-white font-mono text-[9px] px-2.5 py-0.5 rounded font-black tracking-widest uppercase inline-block shadow-[2px_2px_0px_black]">
                SISTEMA COMUNITARIO DIGITAL
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-rose-950 mt-1 flex items-center gap-2 text-left">
                🚨 RED DE ALERTAS AL INSTANTE PARA TELÉFONOS
              </h3>
              <p className="text-xs font-bold text-gray-700 max-w-2xl text-left">
                ¿Querés recibir avisos al instante en tu celular si alguien ve a Cabral o necesita ayuda con una mascota? Activá las notificaciones de sistema y enterate al milisegundo.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-rose-50 p-2.5 border-2 border-black rounded-lg shrink-0">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="text-[10px] font-mono font-black text-rose-900 uppercase text-left">
                <span className="text-sm font-black text-rose-950 block">{subscriberCount} TELÉFONOS</span>
                Conectados en el Barrio
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: Suscribirse */}
            <div className="space-y-4 bg-amber-50/40 p-4 rounded-xl border-2 border-zinc-200">
              <h4 className="text-sm font-black uppercase text-amber-950 flex items-center gap-1 text-left">
                <Smartphone className="w-4 h-4 text-amber-600" />
                1. Activa tu Teléfono o Computadora
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-bold text-left">
                Sumate como punto de escucha activa. Tu navegador pedirá permiso de notificaciones para que, aunque tengas el diario cerrado, tu sistema te tire un aviso sonoro si se publica una alerta urgente.
              </p>

              {isSubscribed ? (
                <div className="bg-emerald-100 border-2 border-emerald-500 p-3 rounded-lg flex items-center gap-3 shadow-[2.5px_2.5px_0px_black]">
                  <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-black uppercase text-emerald-900 leading-none">
                      ¡Habilitado al 100%!
                    </p>
                    <p className="text-[10px] font-bold text-emerald-800 uppercase mt-0.5">
                      Este dispositivo recibirá avisos nativos.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={activateDeviceNotifications}
                  disabled={subscribing}
                  className="w-full bg-rose-500 hover:bg-rose-400 text-white font-black uppercase text-xs py-3 px-4 border-2 border-black shadow-[4px_4px_0px_black] rounded-lg active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <BellRing className="w-4 h-4 animate-bounce" />
                  {subscribing ? "SOLICITANDO PERMISOS..." : "¡VINCULAR MI TELÉFONO PARA ALERTAS!"}
                </button>
              )}

              {devicePermissionError && (
                <div className="bg-amber-100 border-2 border-amber-500 p-3 text-[11px] leading-relaxed font-bold text-amber-900 uppercase rounded-lg text-left">
                  ⚠️ {devicePermissionError}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-200/50">
                <button
                  type="button"
                  onClick={playNotificationChime}
                  className="bg-white hover:bg-stone-50 text-black border border-black font-black text-[9px] uppercase px-2.5 py-1 rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none cursor-pointer inline-flex items-center gap-1"
                >
                  🔊 PROBAR SONIDO DE TIMBRE
                </button>

                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black uppercase text-stone-500">Sonido:</span>
                  <button
                    type="button"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`font-black text-[9px] px-2 py-0.5 rounded border border-black uppercase cursor-pointer ${soundEnabled ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}
                  >
                    {soundEnabled ? 'ACTIVO' : 'SILENCIADO'}
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Send emergency alerts */}
            <div className="space-y-4 bg-rose-50/20 p-4 rounded-xl border-2 border-zinc-200">
              <h4 className="text-sm font-black uppercase text-rose-950 flex items-center gap-1 text-left">
                <Send className="w-4 h-4 text-rose-600" />
                2. Enviar Alerta Inmediata a la Red
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-bold text-left">
                ¿Viste un gato negro parecido a Cabral, o hay alguna noticia urgente del cuidado animal? Escribila abajo y hacé sonar los timbres de todos los vecinos suscriptos.
              </p>

              <form onSubmit={handleAlertSubmit} className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1 text-left">
                    <label className="block text-[9px] font-black uppercase text-rose-900 mb-0.5">Nombre/Firma</label>
                    <input
                      type="text"
                      placeholder="Ej. Juan S."
                      value={newAlertAuthor}
                      onChange={(e) => setNewAlertAuthor(e.target.value)}
                      className="w-full border-2 border-black p-1.5 text-xs font-bold focus:outline-none focus:bg-rose-50 uppercase rounded shadow-[1px_1px_0px_black]"
                      maxLength={15}
                    />
                  </div>
                  <div className="col-span-2 text-left">
                    <label className="block text-[9px] font-black uppercase text-rose-900 mb-0.5">¿Qué pasó en el barrio?</label>
                    <input
                      type="text"
                      placeholder="Ej. ¡Un gatito negro durmiendo en Azcuénaga al 1500!..."
                      value={newAlertText}
                      onChange={(e) => setNewAlertText(e.target.value)}
                      className="w-full border-2 border-black p-1.5 text-xs font-bold focus:outline-none focus:bg-rose-50 rounded shadow-[1px_1px_0px_black]"
                      maxLength={90}
                    />
                  </div>
                </div>

                {alertError && (
                  <div className="bg-red-100 border border-red-500 text-[10px] p-1 font-black text-red-700 text-center uppercase rounded">
                    ⚠️ {alertError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingAlert}
                  className="w-full bg-black hover:bg-stone-800 text-white font-black text-xs py-2.5 px-4 border-2 border-black shadow-[3px_3px_0px_#e11d48] rounded-lg active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer uppercase"
                >
                  <Bell className="w-3.5 h-3.5 text-yellow-300" />
                  {isSubmittingAlert ? "TRANSMITIENDO A LOS TELÉFONOS..." : "¡DISPARAR ALERTA GENERAL!"}
                </button>
              </form>
            </div>
          </div>

          {/* Alert Logs */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-red-200">
            <h5 className="font-mono text-[10px] font-black uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-1.5 text-left">
              <span>🗂️ HISTORIAL DE AVISOS COMUNITARIOS (ÚLTIMAS PUBLICACIONES)</span>
            </h5>
            
            <div className="max-h-[220px] overflow-y-auto space-y-2.5 pr-2">
              {alerts.length === 0 ? (
                <div className="text-center font-mono text-[10px] text-gray-400 py-4 uppercase">
                  No hay alertas registradas recientemente.
                </div>
              ) : (
                alerts.map((al, idx) => (
                  <div 
                    key={al.id} 
                    className={`p-3 border-2 border-black rounded-lg flex items-start justify-between gap-4 shadow-[2px_2px_0px_rgba(0,0,0,0.15)] ${idx === 0 ? 'bg-amber-50 border-amber-400 animate-pulse' : 'bg-stone-50'}`}
                  >
                    <div className="flex gap-2 text-left">
                      <span className="text-base select-none">{idx === 0 ? "🚨" : "🔔"}</span>
                      <div className="space-y-0.5">
                        <span className="bg-black text-[8px] text-white font-mono px-1.5 py-0.5 font-black uppercase rounded">
                          {al.author}
                        </span>
                        <p className="text-xs font-bold text-gray-800">
                          {al.text}
                        </p>
                      </div>
                    </div>
                    
                    <span className="text-[9px] font-mono text-gray-400 whitespace-nowrap">
                      {new Date(al.date).toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: 🟣 CIERRE */}
      <section className="bg-stone-100 border-4 border-black p-5 rounded-xl max-w-4xl mx-auto text-center border-dashed relative">
        <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-1"> REFLEXIÓN FINAL DEL DIARIO</h4>
        <p className="text-xs md:text-sm font-black text-stone-850 italic max-w-3xl mx-auto leading-relaxed uppercase">
          "Los animales también son parte de nuestro barrio. Cuidarlos, respetarlos y ayudar a que vuelvan a casa es una forma de querer más nuestro lugar. Si sabés de otro animal perdido, ¡avísanos para difundirlo en el próximo número!"
        </p>
      </section>

      {/* SECTION 6: DB COMMUNITY WISHES PANEL ("BUZÓN SOLIDARIO DE CORONEL DORREGO") */}
      <section id="buzon-ed7" className="relative group">
        <div className="absolute inset-0 bg-teal-50 translate-x-4 translate-y-4 -z-10 rounded-2xl border-4 border-dashed border-teal-300"></div>
        <div className="bg-white border-[8px] border-black p-6 md:p-10 shadow-[15px_15px_0px_black] relative overflow-hidden rounded-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            
            {/* Form Column (2/5) */}
            <div className="lg:col-span-2 space-y-4">
              <span className="inline-block bg-teal-600 text-white px-3 py-1 font-black uppercase text-xs transform -rotate-1 shadow-[3px_3px_0px_black] mb-2 font-mono">
                💝 ESCRIBÍ EN EL DESEO SOLIDARIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-teal-950">
                EL ALMACÉN SOLIDARIO ANIMAL
              </h2>
              
              <p className="text-xs font-bold text-gray-700 leading-relaxed bg-teal-50 border-2 border-black/10 p-3 rounded-lg">
                ¿Qué mensaje barrial de bienestar animal le dejas a Cabral o a las mascotas de nuestra zona? ¡Anotá tus palabras solidarias o pistas de avistaje de Cabral! Se almacenará duraderamente en nuestra base conectada.
              </p>

              <form onSubmit={handleWishSubmit} className="space-y-4 bg-gray-50 p-4 border-4 border-black shadow-[4px_4px_0px_black] rounded-xl relative">
                <div className="space-y-1.5">
                  <label htmlFor="animal-author-input" className="block text-xs font-black uppercase text-teal-900 flex items-center gap-1">
                    👤 Tu nombre o seudónimo:
                  </label>
                  <input
                    id="animal-author-input"
                    type="text"
                    value={newWishAuthor}
                    onChange={(e) => setNewWishAuthor(e.target.value)}
                    placeholder="Ej. Mateo de Guadalupe, Abuela Juana..."
                    className="w-full border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 uppercase rounded shadow-[1px_1px_0px_black]"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="animal-text-input" className="block text-xs font-black uppercase text-teal-900">
                    ✍️ Mensaje, abrazo de aliento o consejo:
                  </label>
                  <textarea
                    id="animal-text-input"
                    value={newWishText}
                    onChange={(e) => setNewWishText(e.target.value)}
                    placeholder="¡Dejá tu mensaje solidario aquí!..."
                    className="w-full border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-amber-50 h-24 resize-none rounded shadow-[1px_1px_0px_black]"
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
                  className="w-full bg-black hover:bg-stone-800 text-white border-2 border-black py-2.5 text-xs font-black uppercase shadow-[3px_3px_0px_#0d9488] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 rounded cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isSubmittingWish ? "Guardando en la nube..." : "¡Mandar Deseo al Almacén!"}</span>
                </button>
              </form>
            </div>

            {/* Wishes Sticky-Notes column (3/5) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="border-b-4 border-black pb-2 flex justify-between items-center text-teal-900">
                <span className="text-sm font-black uppercase text-teal-800 flex items-center gap-1.5">
                  ✨ MENSAJES RECIBIDOS EN LA RED COMUNITARIA ({wishes.length})
                </span>
                <span className="text-[9px] font-mono opacity-60">CONECTADO</span>
              </div>

              <div className="max-h-[480px] overflow-y-auto pr-2 space-y-4">
                {wishes.length === 0 ? (
                  <div className="border-4 border-dashed border-black/20 p-8 text-center uppercase font-black text-gray-400 bg-gray-50/50 rounded-xl">
                    Cargando almacén... ¡Anotá tus palabras solidarias primero!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AnimatePresence>
                      {wishes.map((wish, idx) => {
                        const colors = [
                          "bg-emerald-100 border-emerald-300",
                          "bg-stone-50 border-stone-200",
                          "bg-amber-100 border-amber-300",
                          "bg-teal-100 border-teal-200",
                          "bg-rose-100 border-rose-300"
                        ];
                        const col = colors[idx % colors.length];
                        const rot = idx % 2 === 0 ? "rotate-1" : "-rotate-1";

                        return (
                          <motion.div
                            key={wish.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={`p-4 border-2 border-black rounded-lg ${col} ${rot} flex flex-col justify-between min-h-[100px] shadow-[3px_3px_0px_black] hover:-translate-y-0.5 transition-all`}
                          >
                            <p className="text-xs font-bold leading-normal italic text-slate-900">
                              "{wish.text}"
                            </p>
                            <div className="mt-2.5 pt-2 border-t border-black/10 flex justify-between items-center text-[9px] font-black uppercase text-stone-600">
                              <span className="truncate">👤 {wish.author}</span>
                              <span>
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

      {/* Cute Footer Badges */}
      <div className="flex flex-wrap justify-center gap-4 py-6">
        <span className="bg-emerald-500 text-white border-2 border-black font-black px-4 py-1.5 shadow-[3px_3px_0px_black] transform rotate-3 uppercase text-xs">
          ¡CUIDAR A CABRAL! 🐾
        </span>
        <span className="bg-amber-400 text-black border-2 border-black font-black px-4 py-1.5 shadow-[3px_3px_0px_black] transform -rotate-2 uppercase text-xs">
          ALERO 10 AÑOS EL 27 DE JUNIO 🎉
        </span>
      </div>

      {/* Lightbox Modal for Fullscreen Poster view of Cabral Flyer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4 overflow-y-auto"
            onClick={() => setIsFullscreen(false)}
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

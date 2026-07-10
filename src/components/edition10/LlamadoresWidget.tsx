import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wind, Play, Sparkles } from "lucide-react";

interface LlamadoresWidgetProps {
  playSynthTone: (type: string) => void;
}

interface CustomLlamador {
  id: number;
  text: string;
  woodColor: string;
  paperColor: string;
  streamerCount: number;
  x: number;
  y: number;
}

export default function LlamadoresWidget({ playSynthTone }: LlamadoresWidgetProps) {
  const [wishText, setWishText] = useState("");
  const [selectedWood, setSelectedWood] = useState("#d7ccc8"); // light brown
  const [selectedPaper, setSelectedPaper] = useState("#ff8a80"); // pastel coral
  const [streamerCount, setStreamerCount] = useState(3);
  const [activeLlamadores, setActiveLlamadores] = useState<CustomLlamador[]>([]);

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    playSynthTone("whoosh");

    const newLlamador: CustomLlamador = {
      id: Date.now(),
      text: wishText.trim().toUpperCase(),
      woodColor: selectedWood,
      paperColor: selectedPaper,
      streamerCount: streamerCount,
      x: Math.random() * 50 + 25, // 25% to 75%
      y: Math.random() * 30 + 10,
    };

    setActiveLlamadores((prev) => [...prev, newLlamador]);
    setWishText("");

    // Remove from sky after animation completes (8 seconds)
    setTimeout(() => {
      setActiveLlamadores((prev) => prev.filter((item) => item.id !== newLlamador.id));
    }, 8000);
  };

  return (
    <div className="border-4 border-black bg-gradient-to-b from-sky-400 via-sky-300 to-sky-500 rounded-2xl p-4 md:p-6 text-black relative min-h-[420px] flex flex-col justify-between overflow-hidden shadow-[6px_6px_0px_black] group">
      {/* Absolute sky grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.07)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,.07)_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10">
        <span className="bg-white border-2 border-black text-black text-[9px] font-black px-2 py-0.5 rounded uppercase shadow-[1.5px_1.5px_0px_black] inline-block mb-2 font-mono">
          🪁 TALLER VIRTUAL INTERACTIVO
        </span>
        <h4 className="text-lg font-black uppercase text-sky-950 flex items-center gap-1.5 leading-none">
          ¡Crea y Eleva tu Llamador Volador!
        </h4>
        <p className="text-[10px] font-bold text-sky-900 mt-1 leading-snug">
          Elegí la madera, pegale papeles de colores, colgate de las tiras y escribí un deseo para lanzarlo al viento del patio del Alero.
        </p>
      </div>

      {/* Windy Sky Canvas Area */}
      <div className="relative h-44 my-4 border-4 border-black bg-sky-200/50 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Wind lines animating in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-24 h-0.5 bg-white/40 top-1/4 -left-28 animate-[wind_3s_infinite_linear]"></div>
          <div className="absolute w-36 h-0.5 bg-white/30 top-1/2 -left-40 animate-[wind_4s_infinite_linear_1s]"></div>
          <div className="absolute w-20 h-0.5 bg-white/40 top-3/4 -left-24 animate-[wind_2.5s_infinite_linear_0.5s]"></div>
        </div>

        <AnimatePresence>
          {activeLlamadores.length === 0 ? (
            <div className="text-center p-4 max-w-xs select-none">
              <Wind className="w-8 h-8 text-sky-800 mx-auto opacity-50 animate-bounce" />
              <span className="text-[10px] font-black uppercase text-sky-900/60 block mt-1.5">
                🌬️ El patio está tranquilo. ¡Armá tu llamador abajo y corre contra el viento para elevar tu deseo!
              </span>
            </div>
          ) : (
            activeLlamadores.map((llamador) => (
              <motion.div
                key={llamador.id}
                initial={{ opacity: 0, y: 160, scale: 0.5, x: `${llamador.x}%`, rotate: -15 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: -60,
                  scale: [0.5, 1, 1, 0.4],
                  x: [`${llamador.x}%`, `${llamador.x + (Math.random() * 20 - 10)}%`],
                  rotate: [-15, 15, -15, 5],
                }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute bottom-2 flex flex-col items-center pointer-events-none"
              >
                {/* Wood Circle */}
                <div
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center relative shadow-[2px_2px_0px_black]"
                  style={{ backgroundColor: llamador.woodColor }}
                >
                  {/* Embedded paper decoration */}
                  <div
                    className="w-7 h-7 rounded-full border border-black/30"
                    style={{ backgroundColor: llamador.paperColor }}
                  />
                  {/* Holes */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full" />
                  <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full" />
                </div>

                {/* Hanger string to stick */}
                <div className="w-0.5 h-3 bg-stone-700" />

                {/* Streamers */}
                <div className="flex gap-1 justify-center -mt-1">
                  {Array.from({ length: llamador.streamerCount }).map((_, sIdx) => (
                    <div
                      key={sIdx}
                      className="w-1 h-8 rounded-b animate-pulse"
                      style={{
                        backgroundColor:
                          sIdx % 2 === 0 ? llamador.paperColor : "#fff59d",
                        animationDelay: `${sIdx * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating Wish text badge */}
                <div className="mt-1 bg-yellow-300 border border-black text-[7px] font-black px-1 rounded shadow leading-none uppercase max-w-[80px] text-center truncate">
                  ✨ {llamador.text}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Crafting Options */}
      <form onSubmit={handleLaunch} className="space-y-3 z-10" data-html2canvas-ignore="true">
        <div className="grid grid-cols-2 gap-3 bg-white/95 border-2 border-black p-3 rounded-xl shadow-[3px_3px_0px_black]">
          <div className="space-y-1">
            <span className="block text-[8px] font-black uppercase text-stone-500">1. Base de madera:</span>
            <div className="flex gap-2">
              {[
                { name: "Pino", code: "#d7ccc8" },
                { name: "Roble", code: "#8d6e63" },
                { name: "Nogal", code: "#4e342e" },
              ].map((wood) => (
                <button
                  key={wood.code}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setSelectedWood(wood.code);
                  }}
                  className={`w-6 h-6 rounded-full border-2 border-black shadow-[1px_1px_0px_black] transition-transform ${
                    selectedWood === wood.code ? "scale-125 ring-2 ring-sky-500" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: wood.code }}
                  title={wood.name}
                />
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="block text-[8px] font-black uppercase text-stone-500">2. Cuadraditos de papel:</span>
            <div className="flex gap-1.5">
              {[
                { name: "Rosa", code: "#ff8a80" },
                { name: "Cian", code: "#80d8ff" },
                { name: "Amarillo", code: "#ffff8d" },
                { name: "Verde", code: "#b9f6ca" },
              ].map((paper) => (
                <button
                  key={paper.code}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setSelectedPaper(paper.code);
                  }}
                  className={`w-5 h-5 rounded border border-black transition-transform ${
                    selectedPaper === paper.code ? "scale-125 ring-2 ring-sky-500" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: paper.code }}
                  title={paper.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wish Input & Submit */}
        <div className="flex gap-2">
          <input
            type="text"
            value={wishText}
            onChange={(e) => setWishText(e.target.value)}
            placeholder="Ej. JUGAR BAJO EL SOL..."
            className="flex-1 text-xs font-bold border-2 border-black p-2.5 rounded shadow-[2.5px_2.5px_0px_black] uppercase focus:outline-none bg-white focus:bg-yellow-50"
            maxLength={25}
          />
          <button
            type="submit"
            disabled={!wishText.trim()}
            className={`border-2 border-black px-4 py-2.5 text-xs font-black uppercase shadow-[2.5px_2.5px_0px_black] active:translate-y-0.5 active:shadow-none shrink-0 rounded flex items-center gap-1.5 transition-colors ${
              wishText.trim()
                ? "bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer"
                : "bg-stone-300 text-stone-500 cursor-not-allowed"
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>ELEVAR 🚀</span>
          </button>
        </div>
      </form>
    </div>
  );
}

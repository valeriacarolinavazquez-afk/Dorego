import React, { useState, useEffect } from "react";
import { Play, Trophy, RotateCcw, HelpCircle } from "lucide-react";

interface KermesWidgetProps {
  playSynthTone: (type: string) => void;
}

export default function KermesWidget({ playSynthTone }: KermesWidgetProps) {
  const [activeGame, setActiveGame] = useState<"zancos" | "soga" | "feria">("zancos");
  const [gameStatus, setGameStatus] = useState<"idle" | "playing" | "win" | "lose">("idle");
  const [meterValue, setMeterValue] = useState(0);
  const [direction, setDirection] = useState(1);
  const [score, setScore] = useState(0);

  // Meter animation for Zancos & Feria trajectory
  useEffect(() => {
    if (gameStatus !== "playing") return;

    const interval = setInterval(() => {
      setMeterValue((prev) => {
        let next = prev + direction * 5;
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
    }, 40);

    return () => clearInterval(interval);
  }, [gameStatus, direction]);

  const startGame = () => {
    playSynthTone("beep");
    setGameStatus("playing");
    setMeterValue(0);
    setDirection(1);
  };

  const handleAction = () => {
    if (gameStatus !== "playing") return;

    if (activeGame === "zancos") {
      // Must stop close to 50 (40 to 60 is safe zone)
      if (meterValue >= 38 && meterValue <= 62) {
        setGameStatus("win");
        setScore((prev) => prev + 1);
        playSynthTone("celebrate");
      } else {
        setGameStatus("lose");
        playSynthTone("whoosh");
      }
    } else if (activeGame === "soga") {
      // Jump timer: soga spins, must hit when value is between 80 and 100 (rope is at bottom)
      if (meterValue >= 75 && meterValue <= 100) {
        setGameStatus("win");
        setScore((prev) => prev + 1);
        playSynthTone("celebrate");
      } else {
        setGameStatus("lose");
        playSynthTone("whoosh");
      }
    } else {
      // Feria: Embocar aros in the (+) center (near 50) or holes
      if (meterValue >= 42 && meterValue <= 58) {
        setGameStatus("win");
        setScore((prev) => prev + 1);
        playSynthTone("celebrate");
      } else {
        setGameStatus("lose");
        playSynthTone("whoosh");
      }
    }
  };

  return (
    <div className="border-4 border-black bg-emerald-50 rounded-2xl p-5 md:p-6 shadow-[6px_6px_0px_black] space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-2 border-black pb-3">
        <div>
          <span className="bg-emerald-600 border-2 border-black text-white text-[9px] font-black px-2 py-0.5 uppercase rounded shadow-[1.5px_1.5px_0px_black] inline-block font-mono">
            🎪 EXPLANADAS: MINI-JUEGO DE RECREO
          </span>
          <h4 className="text-lg font-black uppercase text-emerald-950 leading-none mt-1">
            ¡Desafío de Kermés del Alero!
          </h4>
        </div>
        <div className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase text-emerald-900 shadow-[1.5px_1.5px_0px_black]">
          🏆 LOGROS: {score} DESAFÍOS GANADOS
        </div>
      </div>

      {/* Game Selector Tabs */}
      <div className="grid grid-cols-3 gap-2" data-html2canvas-ignore="true">
        {[
          { id: "zancos", label: "🧗 Los Zancos", desc: "Equilibrio alto" },
          { id: "soga", label: "➰ Saltar Soga", desc: "Coordinación" },
          { id: "feria", label: "🎯 Juegos Feria", desc: "Puntería sin trampa" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              playSynthTone("beep");
              setActiveGame(tab.id as any);
              setGameStatus("idle");
            }}
            className={`border-2 border-black p-2 rounded-xl text-left shadow-[2px_2px_0px_black] active:translate-y-0.5 active:shadow-none transition-all ${
              activeGame === tab.id
                ? "bg-emerald-400 text-black border-4 font-black scale-102"
                : "bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            <p className="text-xs font-black uppercase leading-none">{tab.label}</p>
            <p className="text-[8px] opacity-60 font-mono mt-1 uppercase hidden sm:block">{tab.desc}</p>
          </button>
        ))}
      </div>

      {/* Game Stage Area */}
      <div className="bg-stone-900 text-white border-4 border-black p-6 rounded-xl relative h-64 flex flex-col justify-between items-center overflow-hidden shadow-inner select-none">
        {/* Dynamic game graphics depending on selected tab */}
        <div className="text-center w-full">
          {activeGame === "zancos" && (
            <div className="space-y-1">
              <span className="text-3xl animate-bounce inline-block">🧗</span>
              <h5 className="text-xs font-black uppercase text-emerald-300">Desafío: Los Zancos Grandes</h5>
              <p className="text-[10px] text-stone-400 uppercase max-w-xs mx-auto leading-tight">
                "Para probar el equilibrio, están los zancos grandes y también los más chicos (maderitas con sogas)."
              </p>
              <p className="text-[9px] text-yellow-400 uppercase font-mono mt-1">
                ⚠️ FRENÁ EL MEDIDOR JUSTO EN EL CENTRO PARA MANTENERTE EN PIE
              </p>
            </div>
          )}

          {activeGame === "soga" && (
            <div className="space-y-1">
              <span className="text-3xl animate-[spin_3s_infinite_linear] inline-block">➰</span>
              <h5 className="text-xs font-black uppercase text-emerald-300">Desafío: Saltar la Soga Gigante</h5>
              <p className="text-[10px] text-stone-400 uppercase max-w-xs mx-auto leading-tight">
                "Podés saltar en grupo con una soga gigante o usar las soguitas más pequeñas para saltar vos solo."
              </p>
              <p className="text-[9px] text-yellow-400 uppercase font-mono mt-1">
                ⚠️ SALTA CUANDO LA SOGA ESTÉ ABAJO DEL TODO (MEDIDOR AL MÁXIMO)
              </p>
            </div>
          )}

          {activeGame === "feria" && (
            <div className="space-y-1">
              <span className="text-3xl inline-block animate-pulse">➕</span>
              <h5 className="text-xs font-black uppercase text-emerald-300">Desafío: Tablero Más (+) Embocar Aros</h5>
              <p className="text-[10px] text-stone-400 uppercase max-w-xs mx-auto leading-tight">
                "Tablero inclinado para embocar bolsitas de harina, y estructura de madera en forma de más con varillas para aros."
              </p>
              <p className="text-[9px] text-yellow-400 uppercase font-mono mt-1">
                ⚠️ APUNTA AL CENTRO DE LA ESTRUCTURA PARA EMBOCAR EL ARO SIN TRAMPA
              </p>
            </div>
          )}
        </div>

        {/* Feedback / Controls */}
        <div className="w-full flex flex-col items-center gap-3">
          {gameStatus === "idle" && (
            <button
              onClick={startGame}
              className="bg-emerald-400 text-black border-2 border-black font-black px-6 py-2 rounded shadow-[2px_2px_0px_white] hover:bg-emerald-300 active:translate-y-0.5 cursor-pointer text-xs uppercase"
            >
              ¡PROBAR DESAFÍO! 🚀
            </button>
          )}

          {gameStatus === "playing" && (
            <div className="w-full max-w-xs space-y-3">
              {/* Sliding Meter bar */}
              <div className="relative w-full h-4 bg-stone-700 border border-stone-500 rounded-full overflow-hidden">
                {/* Target safe zone markers */}
                {activeGame === "soga" ? (
                  <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-emerald-500/40 border-l border-emerald-400" />
                ) : (
                  <div className="absolute left-[40%] right-[40%] top-0 bottom-0 bg-emerald-500/40 border-x border-emerald-400" />
                )}

                {/* Sliding gauge */}
                <div
                  className="absolute top-0 bottom-0 w-2.5 bg-yellow-400 shadow-[0_0_8px_#facc15]"
                  style={{ left: `${meterValue}%`, transform: "translateX(-50%)" }}
                />
              </div>

              <button
                onClick={handleAction}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-black font-black py-2.5 rounded shadow-[2px_2px_0px_white] text-xs uppercase cursor-pointer"
              >
                {activeGame === "zancos" ? "🚶 ¡MANTENER EQUILIBRIO!" : activeGame === "soga" ? "🦘 ¡SALTAR!" : "🎯 ¡LANZAR ARO!"}
              </button>
            </div>
          )}

          {gameStatus === "win" && (
            <div className="space-y-2">
              <p className="text-emerald-400 text-sm font-black uppercase flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4" /> ¡ESPECTACULAR! LOGRASTE EL DESAFÍO
              </p>
              <button
                onClick={startGame}
                className="bg-stone-800 hover:bg-stone-700 border-2 border-white/20 text-white font-black px-4 py-1 text-[10px] rounded uppercase flex items-center gap-1 mx-auto cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Volver a intentar
              </button>
            </div>
          )}

          {gameStatus === "lose" && (
            <div className="space-y-2">
              <p className="text-red-400 text-sm font-black uppercase">
                {activeGame === "zancos" ? "💥 ¡TE CAÍSTE! PERDISTE EL EQUILIBRIO" : activeGame === "soga" ? "💥 ¡ENREDADO! LA SOGA TE TOCÓ" : "💥 ¡POR POCO! SE CAYÓ EL ARO"}
              </p>
              <button
                onClick={startGame}
                className="bg-stone-800 hover:bg-stone-700 border-2 border-white/20 text-white font-black px-4 py-1 text-[10px] rounded uppercase flex items-center gap-1 mx-auto cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

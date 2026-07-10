import React, { useState } from "react";
import { Check, Flame, Award, Cookie } from "lucide-react";

interface MasitasWidgetProps {
  playSynthTone: (type: string) => void;
}

interface BakedMasita {
  id: number;
  name: string;
  shape: "corazon" | "estrella" | "luna" | "circulo";
  color: "rojo" | "azul" | "ambos";
  pattern: "contorno" | "zigzag" | "puntito";
}

export default function MasitasWidget({ playSynthTone }: MasitasWidgetProps) {
  const [shape, setShape] = useState<"corazon" | "estrella" | "luna" | "circulo">("corazon");
  const [glaseColor, setGlaseColor] = useState<"rojo" | "azul" | "ambos">("rojo");
  const [pattern, setPattern] = useState<"contorno" | "zigzag" | "puntito">("contorno");
  const [cookieName, setCookieName] = useState("");
  const [bakedCookies, setBakedCookies] = useState<BakedMasita[]>([
    { id: 1, name: "CORAZÓN DE INVIERNO", shape: "corazon", color: "azul", pattern: "zigzag" },
  ]);

  const handleBake = (e: React.FormEvent) => {
    e.preventDefault();
    playSynthTone("celebrate");

    const finalName = cookieName.trim() ? cookieName.trim().toUpperCase() : `MASITA DULCE`;
    const newCookie: BakedMasita = {
      id: Date.now(),
      name: finalName,
      shape: shape,
      color: glaseColor,
      pattern: pattern,
    };

    setBakedCookies((prev) => [newCookie, ...prev]);
    setCookieName("");
  };

  const getShapeEmoji = (s: string) => {
    switch (s) {
      case "corazon":
        return "❤️";
      case "estrella":
        return "⭐";
      case "luna":
        return "🌙";
      default:
        return "⭕";
    }
  };

  const renderVirtualCookie = () => {
    let shapeStyles = "";
    switch (shape) {
      case "corazon":
        shapeStyles = "w-32 h-32 rounded-[30%] rotate-45 flex items-center justify-center relative";
        break;
      case "estrella":
        shapeStyles = "w-32 h-32 clip-star flex items-center justify-center relative"; // using a clip path or custom layout
        break;
      case "luna":
        shapeStyles = "w-32 h-32 rounded-full border-r-[24px] border-b-[8px] border-amber-200 bg-transparent flex items-center justify-center relative";
        break;
      default:
        shapeStyles = "w-32 h-32 rounded-full flex items-center justify-center relative";
    }

    // Cookie dough color
    const doughColor = "bg-[#e5c185] border-4 border-[#cfa55b]";

    return (
      <div className="flex flex-col items-center justify-center bg-stone-100 border-4 border-black p-6 rounded-xl h-52 relative overflow-hidden shadow-inner">
        {shape === "luna" ? (
          // Custom rendering for moon to keep it clean
          <div className="relative">
            <div className="w-28 h-28 rounded-full shadow-[20px_10px_0px_0px_#e5c185_inset] rotate-[-40deg] flex items-center justify-center">
              {/* Pattern inside moon */}
              <div
                className={`absolute w-3 h-3 rounded-full ${
                  glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"
                } top-8 right-6`}
              />
            </div>
          </div>
        ) : shape === "estrella" ? (
          // Star rendering using stacked triangles or clean polygon
          <div
            className="w-28 h-28 bg-[#e5c185] border-4 border-[#cfa55b] flex items-center justify-center relative"
            style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
          >
            {/* Precision glasé lines */}
            {pattern === "contorno" && (
              <div
                className="w-20 h-20 border-2 border-dashed pointer-events-none absolute"
                style={{
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  borderColor: glaseColor === "rojo" ? "#ef4444" : glaseColor === "azul" ? "#3b82f6" : "#8b5cf6",
                }}
              />
            )}
            {pattern === "zigzag" && (
              <div className="space-y-1 rotate-12 absolute">
                <div className={`w-12 h-1 ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"} rounded`} />
                <div className={`w-16 h-1 ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"} rounded`} />
                <div className={`w-10 h-1 ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"} rounded`} />
              </div>
            )}
            {pattern === "puntito" && (
              <div className={`w-4 h-4 rounded-full ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"} shadow-md`} />
            )}
          </div>
        ) : (
          // Circle or Heart (stacked rotated boxes for simplicity)
          <div className={`${shapeStyles} ${doughColor} shadow-[2px_2px_0px_rgba(0,0,0,0.15)]`}>
            {/* Draw Glasé */}
            {pattern === "contorno" && (
              <div
                className={`absolute w-[80%] h-[80%] border-4 border-dashed rounded-[inherit] ${
                  glaseColor === "rojo" ? "border-red-500" : glaseColor === "azul" ? "border-blue-500" : "border-purple-600"
                }`}
              />
            )}

            {pattern === "zigzag" && (
              <div className="absolute flex flex-col gap-1.5 -rotate-45">
                <div className={`w-12 h-1 rounded ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"}`} />
                <div className={`w-16 h-1 rounded ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"}`} />
                <div className={`w-12 h-1 rounded ${glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"}`} opacity-80 />
              </div>
            )}

            {pattern === "puntito" && (
              <div
                className={`absolute w-5 h-5 rounded-full ${
                  glaseColor === "rojo" ? "bg-red-500" : glaseColor === "azul" ? "bg-blue-500" : "bg-purple-600"
                } shadow`}
              />
            )}
          </div>
        )}

        <span className="text-[9px] font-black uppercase text-stone-500 bg-white border border-black px-1.5 rounded mt-3.5 shadow-[1px_1px_0px_black] z-10">
          🔍 Manga de Precisión ({pattern === "contorno" ? "Solo Contorno" : pattern === "zigzag" ? "Zig-Zag" : "Punto Central"})
        </span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Recipe Book Left Panel */}
      <div className="bg-yellow-50 border-4 border-black p-5 md:p-6 rounded-2xl shadow-[6px_6px_0px_black] font-sans relative">
        <div className="absolute top-0 right-0 bg-amber-400 border-b-2 border-l-2 border-black px-3 py-1 font-mono text-[9px] font-black uppercase">
          📝 CUADERNO DE LA COCINA
        </div>

        <h4 className="text-xl font-black text-amber-950 uppercase border-b-2 border-black pb-2 mb-4 flex items-center gap-2">
          <Cookie className="w-5 h-5 text-amber-700" />
          Masitas Secas Decoradas
        </h4>

        <div className="space-y-4 text-xs leading-relaxed text-stone-800">
          <div>
            <h5 className="font-black uppercase text-stone-900 text-[10px] mb-1.5 flex items-center gap-1">
              🥣 INGREDIENTES OFICIALES:
            </h5>
            <ul className="list-disc list-inside space-y-1 font-semibold text-stone-700 pl-1">
              <li>
                <strong>Para la masa:</strong> 150 g de harina 0000, 75 g de manteca fría, 50 g de azúcar impalpable, 1 yema, 1 cdita. de esencia de vainilla y 1 cda. de leche fría (si hace falta).
              </li>
              <li>
                <strong>Para el glasé:</strong> 1 clara de huevo (o agua), 150 g de azúcar impalpable, gotas de jugo de limón y colorantes en gel (rojo y azul).
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase text-stone-900 text-[10px] mb-1.5 flex items-center gap-1">
              👩‍🍳 PASO A PASO RECETIL:
            </h5>
            <ol className="space-y-2 text-[11px] font-medium text-stone-700 list-decimal pl-3.5">
              <li>
                <strong>Hacer las masitas:</strong> En un bol se mezcla la harina con el azúcar y se agrega la manteca fría desarmándola con los dedos para hacer un arenado. Se suma la yema y la vainilla, uniendo todo sin amasar de más hasta formar un bollo. Tras dejarlo enfriar 30 minutos en la heladera, se estira la masa con palote (de unos 5 mm) y se cortan formas de corazones, estrellas, lunas y círculos. Se hornean a 180°C entre 10 y 12 minutos hasta que estén apenas doradas en la base, y se dejan enfriar.
              </li>
              <li>
                <strong>Preparar el glasé:</strong> Se bate la clara con el limón agregando el azúcar impalpable de a poco hasta lograr una pasta blanca y brillante. Se separa en dos pocillos y se tiñe uno de rojo y otro de azul.
              </li>
              <li>
                <strong>La decoración fina:</strong> Se coloca el glasé en mangas con pico bien fino (o bolsitas con la puntita apenas cortada). Para que quede delicado, se hacen trazos rápidos: dibujando solo el contorno de las formas, líneas en zigzag o un puntito en el centro. ¡Se deja secar una hora y listo para comer!
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Interactive Biscuit Decorator Right Panel */}
      <div className="bg-white border-4 border-black p-5 md:p-6 rounded-2xl shadow-[6px_6px_0px_black] space-y-4">
        <h4 className="text-sm font-black uppercase text-stone-900 border-b-2 border-black pb-2 flex items-center gap-1">
          🎨 Decorador Virtual de Masitas
        </h4>

        {renderVirtualCookie()}

        <form onSubmit={handleBake} className="space-y-4" data-html2canvas-ignore="true">
          {/* Shape Option */}
          <div className="space-y-1">
            <label className="block text-[9px] font-black uppercase text-stone-500">1. Elegí la forma del cortante:</label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { id: "corazon", label: "❤️ Corazón" },
                { id: "estrella", label: "⭐ Estrella" },
                { id: "luna", label: "🌙 Luna" },
                { id: "circulo", label: "⭕ Círculo" },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setShape(s.id as any);
                  }}
                  className={`border-2 border-black py-1 text-[10px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none transition-colors ${
                    shape === s.id ? "bg-amber-400 text-black border-2" : "bg-stone-50 text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Glasé Color */}
          <div className="space-y-1">
            <label className="block text-[9px] font-black uppercase text-stone-500">2. Teñido del glasé:</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: "rojo", label: "🔴 Glasé Rojo" },
                { id: "azul", label: "🔵 Glasé Azul" },
                { id: "ambos", label: "🟣 Ambos Colores" },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setGlaseColor(c.id as any);
                  }}
                  className={`border-2 border-black py-1 text-[10px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none transition-colors ${
                    glaseColor === c.id ? "bg-amber-400 text-black border-2" : "bg-stone-50 text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stroke Pattern */}
          <div className="space-y-1">
            <label className="block text-[9px] font-black uppercase text-stone-500">3. Trazo con manga fina:</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: "contorno", label: "Contorno" },
                { id: "zigzag", label: "Zig-Zag" },
                { id: "puntito", label: "Punto Centro" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setPattern(p.id as any);
                  }}
                  className={`border-2 border-black py-1 text-[10px] font-black uppercase rounded shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none transition-colors ${
                    pattern === p.id ? "bg-amber-400 text-black border-2" : "bg-stone-50 text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Submit */}
          <div className="space-y-1.5">
            <label className="block text-[9px] font-black uppercase text-stone-500" htmlFor="cookie-name">4. Nombre de tu creación:</label>
            <div className="flex gap-2">
              <input
                id="cookie-name"
                type="text"
                value={cookieName}
                onChange={(e) => setCookieName(e.target.value)}
                placeholder="Ej. Delicia de la Abuela..."
                className="flex-1 text-xs font-bold border-2 border-black p-2 rounded uppercase focus:outline-none focus:bg-stone-50"
                maxLength={25}
              />
              <button
                type="submit"
                className="bg-black hover:bg-stone-800 text-white border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_#f59e0b] active:translate-y-0.5 active:shadow-none rounded flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>DECORAR ✨</span>
              </button>
            </div>
          </div>
        </form>

        {/* Baked Cookies List */}
        {bakedCookies.length > 0 && (
          <div className="mt-2 pt-2 border-t border-dashed border-black max-h-[110px] overflow-y-auto space-y-1.5">
            <p className="text-[8px] font-black uppercase text-emerald-600 tracking-wider">🧁 BANDEJA DE HORNEADO:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {bakedCookies.map((cookie) => (
                <div key={cookie.id} className="p-2 bg-stone-50 border-2 border-black rounded-lg text-[9px] font-bold flex items-center justify-between">
                  <div>
                    <p className="font-black uppercase text-stone-900">🍪 {cookie.name}</p>
                    <p className="text-stone-500 font-mono text-[7px] uppercase mt-0.5">
                      {cookie.shape} • GLASÉ: {cookie.color} • TRAZO: {cookie.pattern}
                    </p>
                  </div>
                  <span className="text-base shrink-0">{getShapeEmoji(cookie.shape)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

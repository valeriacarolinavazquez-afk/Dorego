import React, { useRef, useState, useEffect } from "react";
import { Paintbrush, Trash2, CheckCircle, Smile } from "lucide-react";

interface CajonWidgetProps {
  playSynthTone: (type: string) => void;
}

export default function CajonWidget({ playSynthTone }: CajonWidgetProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState("#ef4444"); // default red
  const [brushSize, setBrushSize] = useState(6);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Initialize and handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas resolution to match its displayed size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 400;
      canvas.height = rect.height || 260;

      // Keep lines smooth
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Play drawing sound effect
    if (Math.random() > 0.6) {
      playSynthTone("beep");
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playSynthTone("coin");
  };

  const handleSelectOption = (opt: number) => {
    playSynthTone("beep");
    setSelectedOption(opt);
  };

  return (
    <div className="border-4 border-black bg-stone-50 rounded-2xl p-4 md:p-6 shadow-[6px_6px_0px_black] space-y-4">
      <div className="flex justify-between items-start border-b-2 border-black pb-2">
        <div>
          <span className="bg-orange-500 border-2 border-black text-white text-[9px] font-black px-2 py-0.5 uppercase rounded shadow-[1.5px_1.5px_0px_black] inline-block font-mono">
            🥫 CAJÓN DE VERDURAS INTERACTIVO
          </span>
          <h4 className="text-lg font-black uppercase text-stone-900 leading-none mt-1">
            Mesa de Respuestas y Garabatos
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* The Consigna & Options */}
        <div className="md:col-span-1 space-y-3 bg-amber-50/50 border-2 border-black p-4 rounded-xl">
          <p className="text-[10px] font-black uppercase text-amber-800 font-mono">
            ❓ LA CONSIGNA DEL ALERO:
          </p>
          <p className="text-xs font-black text-stone-900 uppercase">
            ¿Qué es lo que más te divierte de jugar en el patio del Alero?
          </p>

          <div className="space-y-2 pt-1.5" data-html2canvas-ignore="true">
            {[
              { id: 1, text: "🧗 Subir a los zancos y desafiar el equilibrio." },
              { id: 2, text: "🎨 Armar llamadores de deseos con madera y cascabeles." },
              { id: 3, text: "🧁 Costurar mi recetario y amasar galletitas dulces." },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-2.5 border-2 border-black text-[10px] font-bold uppercase transition-all rounded shadow-[2px_2px_0px_black] active:translate-y-0.5 active:shadow-none flex items-center gap-2 ${
                  selectedOption === opt.id
                    ? "bg-amber-400 text-black border-2 font-black"
                    : "bg-white text-stone-700 hover:bg-stone-50"
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full border border-black flex items-center justify-center shrink-0 ${selectedOption === opt.id ? "bg-black" : "bg-white"}`}>
                  {selectedOption === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span>{opt.text}</span>
              </button>
            ))}
          </div>

          {selectedOption && (
            <div className="p-2.5 bg-emerald-100 border-2 border-emerald-500 text-[10px] font-black text-emerald-800 uppercase rounded text-center animate-pulse flex items-center justify-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Opción {selectedOption} Seleccionada</span>
            </div>
          )}
        </div>

        {/* The Drawing Board */}
        <div className="md:col-span-2 space-y-2">
          <p className="text-[10px] font-black uppercase text-stone-500 font-mono flex items-center gap-1">
            🎨 ¡DIBUJÁ DIRECTAMENTE SOBRE EL CAJÓN DE MADERA!
          </p>

          <div
            ref={containerRef}
            className="border-4 border-black bg-[#cf9a5b] rounded-xl relative h-60 cursor-crosshair overflow-hidden shadow-[4px_4px_0px_black]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          >
            {/* Wooden Planks representation behind */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b-2 border-black h-1/4" />
              <div className="border-b-2 border-black h-1/4" />
              <div className="border-b-2 border-black h-1/4" />
            </div>

            {/* floating children's drawings elements as background guides */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40">
              <div className="text-center">
                <Smile className="w-12 h-12 text-stone-800 mx-auto stroke-[1.5]" />
                <span className="text-[8px] font-black uppercase text-stone-900 block mt-1 tracking-wider">
                  CAJÓN DE VERDURAS VIRTUAL
                </span>
              </div>
            </div>

            {/* Canvas overlay */}
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="absolute inset-0 w-full h-full z-10"
            />
          </div>

          {/* Canvas Toolbars */}
          <div className="flex flex-wrap justify-between items-center gap-3 bg-stone-100 border-2 border-black p-2.5 rounded-xl" data-html2canvas-ignore="true">
            {/* Color selection */}
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black uppercase text-stone-500 mr-1">Témpera:</span>
              {[
                { name: "Rojo", code: "#ef4444" },
                { name: "Azul", code: "#3b82f6" },
                { name: "Amarillo", code: "#eab308" },
                { name: "Verde", code: "#22c55e" },
                { name: "Negro", code: "#000000" },
                { name: "Tiza", code: "#ffffff" },
              ].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setColor(c.code);
                  }}
                  className={`w-5.5 h-5.5 rounded-full border-2 border-black shadow-[1px_1px_0px_black] transition-transform ${
                    color === c.code ? "scale-125 ring-2 ring-orange-500" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.code }}
                  title={c.name}
                />
              ))}
            </div>

            {/* Brush sizes */}
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black uppercase text-stone-500 mr-1">Pincel:</span>
              {[
                { label: "Fino", val: 3 },
                { label: "Medio", val: 6 },
                { label: "Grueso", val: 12 },
              ].map((b) => (
                <button
                  key={b.val}
                  type="button"
                  onClick={() => {
                    playSynthTone("beep");
                    setBrushSize(b.val);
                  }}
                  className={`border border-black px-2 py-0.5 text-[8px] font-black uppercase rounded shadow-[1px_1px_0px_black] ${
                    brushSize === b.val ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <button
              onClick={clearCanvas}
              className="bg-stone-200 hover:bg-stone-300 text-stone-800 border-2 border-black px-3 py-1 text-[9px] font-black uppercase shadow-[1.5px_1.5px_0px_black] active:translate-y-0.5 active:shadow-none rounded flex items-center gap-1 cursor-pointer"
              title="Borrar todos los garabatos"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

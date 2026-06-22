import { motion } from "motion/react";
import { Gem, Sparkles, Circle, Check, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";

export function Home() {
  const { selectedAccessory, selectedGemstone, selectedMetal, engraving, lighting, setLighting } = useAppContext();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full border-b border-stone-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Editorial copy column */}
        <div className="lg:col-span-6 space-y-6 text-left lg:pr-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2b5876]/10 border border-[#2b5876]/20 text-[#2b5876] text-[10px] uppercase font-bold tracking-[0.15em]">
            <Gem className="w-3 h-3" />
            KIMBERLEY CERTIFIED ORIGINS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] font-normal text-[#211d1a] tracking-wide">
            Bespoke Radiance <br />
            <span className="text-[#2b5876]">
              Cut For Eternity
            </span>
          </h1>

          <p className="text-base text-stone-600 leading-relaxed font-serif italic">
            "We examine thousand-carat mineral roughs and hand-select only the pure center. Our crystals and precious stones are faceted by third-generation Antwerp artisans, maximizing light dispersion and energetic resonance."
          </p>

          <p className="text-xs text-stone-500 leading-relaxed max-w-xl">
            Engineered exclusively for life's most meaningful vows and investments. Tailored to absolute millimeter precision for your custom setting, joined with conflict-free diamonds and pure 18K gold or Platinum at our Geneva workshop.
          </p>

          {/* Crucial Trust Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200 max-w-md">
            <div>
              <span className="block font-serif text-3xl text-[#2b5876] font-light">120</span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 font-bold mt-1">Hours of Polishing</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-[#2b5876] font-light">VVS1</span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 font-bold mt-1">GIA Certification</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-[#2b5876] font-light">2mm</span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 font-bold mt-1">Pavilion symmetry</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link 
              to="/customizer" 
              className="bg-[#2b5876] hover:bg-[#1a3a4e] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all text-center rounded-none shadow-sm"
            >
              Configure Your Heirloom
            </Link>
            <Link 
              to="/ritual" 
              className="border border-[#2b5876] text-[#2b5876] hover:bg-[#2b5876]/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all text-center rounded-none font-medium"
            >
              The Faceting Ritual
            </Link>
          </div>

          {/* Certification trust line */}
          <div className="flex items-center gap-2 pt-2 text-[10px] text-stone-500 font-serif">
            <Check className="w-3.5 h-3.5 text-[#2b5876]" />
            <span>Includes Wax-Sealed GIA Authenticity Card & Pre-paid Vault Courier delivery.</span>
          </div>
        </div>

        {/* Interactive Showcase */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-sm bg-white border border-[#e7e5e4] p-6 shadow-md relative">
            <div className="absolute top-3 left-3 bg-[#2b5876]/10 border border-[#2b5876]/25 text-[#2b5876] font-mono text-[8px] px-2 py-0.5 font-bold uppercase tracking-wider">
              Live Refraction Render
            </div>
            
            <div className="absolute top-3 right-3 text-stone-400 font-mono text-[8px]">
              {selectedAccessory.caratWeight}
            </div>

            {/* Dynamic physical canvas container */}
            <div className="my-8 aspect-square relative flex items-center justify-center p-8 bg-[#faf9f6] border border-stone-100 shadow-inner overflow-hidden">
              <div className={`absolute inset-0 opacity-45 transition-all duration-700 ${
                lighting === "golden" 
                  ? "bg-[radial-gradient(circle_at_center,rgba(43,88,118,0.25)_0%,transparent_70%)]" 
                  : lighting === "noon" 
                  ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_60%)]" 
                  : "bg-[radial-gradient(circle_at_center,rgba(194,156,109,0.3)_0%,transparent_65%)]"
              }`}></div>

              {/* Main Gemstone container */}
              <div 
                className="w-full h-full relative border border-stone-200/50 group shadow-md transition-all duration-500 overflow-hidden flex flex-col justify-between"
                style={{ backgroundImage: `url(${selectedGemstone.bgTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none mix-blend-overlay ${
                  lighting === "golden" 
                    ? "bg-gradient-to-br from-[#2b5876]/40 via-transparent to-stone-400/20 opacity-70" 
                    : lighting === "noon" 
                    ? "bg-gradient-to-tr from-white/35 via-transparent to-white/10 opacity-50" 
                    : "bg-gradient-to-b from-[#c29c6d]/50 via-transparent to-amber-950/40 opacity-80"
                }`}></div>

                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-20">
                  {selectedAccessory.category === "ring" ? (
                    <Gem className="w-24 h-24 text-stone-100 stroke-[1]" />
                  ) : selectedAccessory.category === "necklace" ? (
                    <Sparkles className="w-20 h-20 text-stone-100 stroke-[1]" />
                  ) : (
                    <Circle className="w-16 h-16 text-stone-100 stroke-[1]" />
                  )}
                </div>

                <div className="p-3 z-10 flex justify-between items-start">
                  <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1596704017254-9b121068fb29?auto=format&fit=crop&q=80&w=40" className="h-6 w-6 rounded-full border border-[#2b5876]/30 opacity-70 shadow-sm" alt="Atelier emblem" />
                  <div className="text-right">
                    <span className="block text-[6px] tracking-[0.2em] font-mono text-stone-300 uppercase">antwerp cut grade</span>
                    <span className="block text-[8px] font-bold text-white uppercase tracking-wider">Triple Excellent</span>
                  </div>
                </div>

                <div className={`w-full py-3.5 px-3.5 z-10 border-t border-black/10 flex items-center justify-between ${selectedMetal.colorClass} text-white`}>
                  <div className="drop-shadow-md">
                    <span className="block text-[7px] text-white/90 font-mono uppercase tracking-wider">{selectedMetal.origin}</span>
                    <span className="block text-[9px] font-bold tracking-wide">{selectedMetal.name} Setting</span>
                  </div>
                  
                  {engraving && (
                    <div className="px-2 py-0.5 bg-black/40 border border-stone-300/40 text-stone-200 font-mono text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {engraving.substring(0, 3)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lighting simulator */}
            <div className="bg-[#faf6f1] p-3 border border-stone-200 flex items-center justify-between text-[9px]">
              <span className="text-stone-500 font-bold uppercase tracking-widest flex items-center gap-1">
                <Volume2 className="w-3 h-3 text-[#2b5876]" />
                Refractive Index Shift:
              </span>
              <div className="flex gap-1">
                {[
                  { id: "noon", label: "Daylight" },
                  { id: "golden", label: "Golden Hour" },
                  { id: "candle", label: "Candleglow" }
                ].map((light) => (
                  <button
                    key={light.id}
                    onClick={() => setLighting(light.id as any)}
                    className={`uppercase px-2 py-1 select-none transition-all cursor-pointer font-semibold ${
                      lighting === light.id 
                        ? "bg-[#2b5876] text-white" 
                        : "bg-white text-stone-600 hover:text-stone-900 border border-stone-250"
                    }`}
                  >
                    {light.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between text-[11px] text-stone-500">
              <span className="italic">GIA Grading Check:</span>
              <span className="font-mono text-stone-900 font-bold">
                Verified Authentic
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

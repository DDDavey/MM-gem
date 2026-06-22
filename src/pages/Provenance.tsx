import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function Provenance() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#211d1a] py-24 px-6 lg:px-12 border-b border-stone-900 text-[#fcfbf9]" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599643478524-41bec29f52f4?auto=format&fit=crop&q=80&w=1200')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundBlendMode: "overlay" }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#211d1a]/95 border-2 border-dashed border-[#2b5876]/40 p-8 sm:p-12 relative">
        
        <div className="flex justify-center flex-col items-center">
          <ShieldCheck className="w-10 h-10 text-[#2b5876] mb-4" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#2b5876] font-bold">certified ethical origins</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-normal leading-tight tracking-wide">
          "We source under the strict protective auspices of the Kimberley Process."
        </h2>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif max-w-2xl mx-auto italic">
          "Every Maison Lithos heirloom carries an individual wax-sealed GIA certificate containing the precise geological origin of the crystal and guaranteeing a completely ethical, conflict-free pathway from mine to atelier."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left border-t border-stone-700/80">
          <div className="space-y-0.5">
            <span className="text-[9px] uppercase tracking-widest text-[#2b5876] font-mono block">GIA Registry</span>
            <span className="text-xs font-bold text-white block">Individually Laser Inscribed</span>
            <p className="text-[10px] text-stone-400">Our diamonds over 0.5ct are mapped and inscribed by the Gemological Institute of America.</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[9px] uppercase tracking-widest text-[#2b5876] font-mono block">Kimberley Protocol</span>
            <span className="text-xs font-bold text-white block">100% Conflict-Free Stones</span>
            <p className="text-[10px] text-stone-400">Rigorous audit trails ensure your investment supports ethical mining communities globally.</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[9px] uppercase tracking-widest text-[#2b5876] font-mono block">Recycled Metals</span>
            <span className="text-xs font-bold text-white block">Eco-Conscious Forging</span>
            <p className="text-[10px] text-stone-400">Our Geneva smiths alloy exclusively 100% recycled Platinum and solid Gold to prevent earth degradation.</p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

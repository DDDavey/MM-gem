import { motion } from "motion/react";
import { RotateCcw, ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white text-[#211d1a] py-20 px-6 lg:px-12 border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#2b5876] font-bold block">COMMITTED UNTO LONGEVITY</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 leading-tight">The Eternal Heirloom Guarantee</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            We understand that wearing high-ticket precious stones daily builds realistic worry about loose prongs, dulling, or scratches. Our materials are forged to endure life—not gather dust inside velvet boxes.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-[#2b5876]/10 shrink-0 border border-[#2b5876]/20 flex items-center justify-center text-[#2b5876]">
                <RotateCcw className="w-4 h-4 text-[#2b5876]" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-stone-900 uppercase">Complimentary Restorative Cleaning</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                  Should your setting lose its brilliant luster, send it back via our secure courier. We provide complimentary lifelong sonic cleaning and polishing.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-8 w-8 bg-[#2b5876]/10 shrink-0 border border-[#2b5876]/20 flex items-center justify-center text-[#2b5876]">
                <ShieldCheck className="w-4 h-4 text-[#2b5876]" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-stone-900 uppercase">Annual Prong Tightening</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                  Metals can shift subtly over years. We perform complimentary micro-inspections under 40x magnification with pre-paid priority routing to ensure absolute security for center stones.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 bg-[#faf6f1] p-6 border border-stone-200 space-y-4">
          <h3 className="font-serif text-base text-stone-900 uppercase tracking-wider">Custom Procurement Specifications Table</h3>
          <div className="space-y-3 text-xs text-stone-700">
            {[
              { name: "Crystal Provenance", val: "Mined under strict Kimberley Process international guidelines" },
              { name: "Cut Verification", val: "Hand-faceted in Antwerp and verified 'Excellent' via light performance machines" },
              { name: "Noble Metals", val: "Hypoallergenic 18K solid alloys or pure 950 Swiss Platinum" },
              { name: "Grading Authority", val: "Gemological Institute of America (GIA)" },
              { name: "Setting Architecture", val: "Cathedral mounts, solid tension beds, or bespoke prongs" },
              { name: "Security & Transport", val: "Signed, armored courier dispatch directly to customer vaults" }
            ].map((spec, sidx) => (
              <div key={sidx} className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="font-semibold">{spec.name}:</span>
                <span className="text-stone-500 text-right">{spec.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

import { useState } from "react";
import { motion } from "motion/react";

export function Ritual() {
  const [activeCutStep, setActiveCutStep] = useState(0);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#faf6f1] text-[#211d1a] py-20 px-6 lg:px-12 border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#2b5876] font-bold block">EXPERIENCING THE CUT</span>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-900 leading-tight">
              Third-Generation Artisans.<br />Absolute Optical Precision.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm text-stone-600 leading-relaxed font-serif">
              "Mass-market jewelry optimizes stones to retain maximum weight, often sacrificing brilliance. Our atelier preserves a higher mandate. Every diamond and precious crystal is faceted to strict 'Excellent' proportions in Antwerp, prioritizing the magnificent display of light dispersion over carat retention."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Rough Stone Selection",
              description: "Our master gemologists examine thousand-carat mineral roughs from verified conflict-free mines. Only the purest, most structurally sound center slices are selected for Maison Lithos."
            },
            {
              step: "02",
              title: "Laser Cleaving & Mapping",
              description: "Using advanced 3D spectroscopy, the stone's internal crystal lattice is mapped. A high-precision laser cleaves the rough, avoiding microscopic inclusions."
            },
            {
              step: "03",
              title: "Antwerp Hand-Faceting",
              description: "Artisans polish the 57 facets of a brilliant cut onto a traditional scaife wheel covered in diamond dust. This slow, microscopic process cannot be fully automated without losing brilliance."
            },
            {
              step: "04",
              title: "The Final Cathedral Setting",
              description: "The stone is transported to Geneva, where master metalsmiths forge the 18K gold or Platinum setting around it, tensioning the prongs by hand to ensure absolute structural security."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveCutStep(idx)}
              className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-72 rounded-none relative overflow-hidden ${
                activeCutStep === idx 
                  ? "bg-[#211d1a] text-[#fcfbf9] border-[#211d1a]" 
                  : "bg-white border-stone-200 text-stone-800 hover:border-[#2b5876]"
              }`}
            >
              <div>
                <span className={`block font-serif text-3.5xl font-light mb-4 ${
                  activeCutStep === idx ? "text-[#2b5876]" : "text-stone-300"
                }`}>{item.step}</span>
                <h3 className="font-serif text-base font-bold mb-2 tracking-wide leading-tight">{item.title}</h3>
                <p className={`text-[11px] leading-relaxed ${
                  activeCutStep === idx ? "text-stone-300" : "text-stone-500"
                }`}>{item.description}</p>
              </div>
              
              <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold pt-4">
                <span className={`h-1.5 w-1.5 rounded-full ${activeCutStep === idx ? "bg-[#2b5876]" : "bg-stone-300"}`}></span>
                <span>{activeCutStep === idx ? "Active Step" : "Examine Process"}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

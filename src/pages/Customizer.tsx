import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { ACCESSORIES, GEMSTONES, METALS } from "../data";
import { useAppContext } from "../context";

export function Customizer() {
  const { 
    selectedAccessory, setSelectedAccessory,
    selectedGemstone, setSelectedGemstone,
    selectedMetal, setSelectedMetal,
    fitType, setFitType,
    engraving, setEngraving,
    totalCost,
    setIsCheckoutOpen,
    setIsConciergeOpen
  } = useAppContext();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#faf9f6]/90 py-20 px-6 lg:px-12 border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#2b5876] font-bold block">ateliers specifications</span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-900 tracking-wide">Design Your Heirloom</h2>
          <p className="text-xs text-stone-500">
            Your selected coordinates align our gemologists, lapidary schedules, and premium Geneva metal forging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-stone-200 space-y-8">
            
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#211d1a] border-b border-stone-100 pb-2 flex justify-between items-center">
                <span>1. Select Accessory Class</span>
                <span className="text-[10px] text-stone-400 font-mono">architecture</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ACCESSORIES.map((acc) => {
                  const AppIcon = acc.icon;
                  const isSelected = selectedAccessory.id === acc.id;
                  return (
                    <button
                      key={acc.id}
                      onClick={() => setSelectedAccessory(acc)}
                      className={`p-3 border transition-all text-left flex flex-col justify-between h-20 cursor-pointer ${
                        isSelected 
                          ? "border-[#2b5876] bg-[#2b5876]/5 text-[#211d1a]" 
                          : "border-stone-200 hover:border-stone-400 text-stone-500 bg-white"
                      }`}
                    >
                      <AppIcon className={`w-3.5 h-3.5 ${isSelected ? "text-[#2b5876]" : "text-stone-400"}`} />
                      <div>
                        <div className="font-serif text-xs font-bold leading-tight">{acc.name}</div>
                        <div className="text-[8px] font-mono text-stone-400 mt-1 uppercase">Foundation</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#211d1a] border-b border-stone-100 pb-2 flex justify-between items-center">
                <span>2. Crystal & Precious Gemstone</span>
                <span className="text-[10px] text-stone-400 font-mono">center stone</span>
              </label>
              <div className="space-y-2.5">
                {GEMSTONES.map((gem) => {
                  const isSelected = selectedGemstone.id === gem.id;
                  return (
                    <button
                      key={gem.id}
                      onClick={() => setSelectedGemstone(gem)}
                      className={`w-full text-left p-3.5 border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-pointer ${
                        isSelected 
                          ? "border-[#2b5876] bg-[#2b5876]/5" 
                          : "border-stone-200 hover:border-stone-400 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div 
                          className="h-10 w-10 shrink-0 border border-stone-200 flex items-center justify-center overflow-hidden"
                          style={{ backgroundImage: `url(${gem.bgTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        ></div>
                        <div className="space-y-0.5">
                          <h4 className={`text-xs font-serif font-bold ${isSelected ? "text-[#2b5876]" : "text-stone-900"}`}>{gem.name}</h4>
                          <p className="text-[10px] text-stone-500 leading-tight max-w-md">{gem.description}</p>
                          <p className="text-[8px] text-[#2b5876] font-mono uppercase tracking-wider italic">{gem.prestigeDetails}</p>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0 mt-2 sm:mt-0">
                        {gem.addedCost > 0 ? (
                          <span className="block text-xs font-mono font-bold text-stone-950">+${gem.addedCost} USD</span>
                        ) : (
                          <span className="block text-xs font-mono font-bold text-stone-400">Included</span>
                        )}
                        <span className="block text-[8px] text-stone-400 font-mono mt-0.5">sourcing fee</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#211d1a] border-b border-stone-100 pb-2">
                3. Select Precious Metal Setting
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {METALS.map((metal) => {
                  const isSelected = selectedMetal.id === metal.id;
                  return (
                    <button
                      key={metal.id}
                      onClick={() => setSelectedMetal(metal)}
                      className={`p-3 border text-left flex flex-col justify-between gap-2.5 h-24 transition-all cursor-pointer ${
                        isSelected 
                          ? "border-[#2b5876] bg-[#2b5876]/5" 
                          : "border-stone-200 hover:border-stone-400 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`h-3 w-3 rounded-full ${metal.colorClass} border border-stone-300 drop-shadow-sm`}></span>
                        <span className="text-[9px] uppercase font-mono text-stone-400">{metal.origin}</span>
                      </div>
                      <div>
                        <div className="font-serif text-xs font-bold text-stone-900 mb-0.5">{metal.name}</div>
                        <div className="text-[9px] leading-tight text-stone-500">{metal.character}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#211d1a] border-b border-stone-100 pb-2">
                4. Setting Adjustment & Sizing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "standard", label: "Standard Sizing Block", desc: "Crafted using standard international jewelers mandrels.", added: 0 },
                  { id: "bespoke", label: "Bespoke Wax Cast", desc: "A custom 3D wax mold is created exactly for your contours.", added: 550 },
                  { id: "invisible", label: "Invisible Comfort Fit", desc: "Rounded inner band for extreme daily wear comfort.", added: 0 }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFitType(option.id)}
                    className={`p-3 border text-left cursor-pointer transition-all ${
                      fitType === option.id 
                        ? "border-[#2b5876] bg-[#2b5876]/5 text-stone-900" 
                        : "border-stone-200 bg-white hover:border-stone-400 text-stone-500"
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider">{option.label}</div>
                    <div className="text-[9px] text-stone-400 leading-tight mt-1">{option.desc}</div>
                    {option.added > 0 && <span className="block text-[8px] text-[#2b5876] font-mono mt-1">+${option.added} USD</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#211d1a] border-b border-stone-100 pb-2 flex justify-between items-center">
                <span>5. Complimentary Inner Engraving</span>
                <span className="text-[10px] text-stone-400 font-mono">Laser inscribed</span>
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  maxLength={10}
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value.replace(/[^a-zA-Z0-9\s]/g, "").substring(0, 10))}
                  placeholder="XX-XX-XXXX"
                  className="bg-stone-50 border border-stone-300 p-2.5 outline-none focus:border-[#2b5876] text-stone-900 font-mono text-center tracking-[0.2em] uppercase text-sm w-36 font-bold"
                />
                <p className="text-xs text-stone-500 leading-relaxed md:pt-1">
                  Inscribed with a micron-precision laser hidden along the inner band or clasp. Leave empty for unbranded minimalism.
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white border-2 border-dashed border-[#2b5876]/40 p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-stone-200 pb-4 text-center">
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#2b5876] uppercase font-bold block">bespoke commission certificate</span>
                <h3 className="font-serif text-2xl text-stone-900 font-medium mt-1">Maison Lithos Appraisal</h3>
              </div>

              <div className="space-y-2.5 text-xs border-b border-stone-200 pb-4 text-[#57534e]">
                <div className="flex justify-between">
                  <span>Accessory Architecture:</span>
                  <span className="font-bold text-[#211d1a]">{selectedAccessory.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Center Stone:</span>
                  <span className="font-bold text-[#211d1a]">{selectedGemstone.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Precious Metal:</span>
                  <span className="font-bold text-[#211d1a]">{selectedMetal.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sizing Model:</span>
                  <span className="font-bold text-[#211d1a] capitalize">{fitType} Fit</span>
                </div>
                <div className="flex justify-between">
                  <span>Inner Engraving:</span>
                  <span className="font-mono text-[#2b5876] font-bold tracking-wider">{engraving ? engraving.toUpperCase() : "None"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Allocated lead-times:</span>
                  <span className="text-[#2b5876] font-bold">{selectedAccessory.leadTime}</span>
                </div>
              </div>

              <div className="bg-[#faf6f1] p-4 text-xs border border-stone-150 grid grid-cols-2 gap-3">
                <div>
                  <span className="block text-[8px] text-stone-400 uppercase font-mono">Assigned Artisans</span>
                  <span className="block font-serif text-[#2b5876] font-bold mt-0.5">Master Lapidary & Setter</span>
                </div>
                <div>
                  <span className="block text-[8px] text-stone-400 uppercase font-mono">Required rotation hours</span>
                  <span className="block font-serif text-[#2b5876] font-bold mt-0.5">
                    {selectedAccessory.category === "ring" ? "120 Hours" : selectedAccessory.category === "necklace" ? "95 Hours" : "80 Hours"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between text-stone-500">
                  <span>Atelier Base Architecture:</span>
                  <span>${selectedAccessory.basePrice}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Rare Material Sourcing:</span>
                  <span>+${selectedGemstone.addedCost}</span>
                </div>
                {fitType === "bespoke" && (
                  <div className="flex justify-between text-stone-500">
                    <span>Bespoke 3D Wax Mold:</span>
                    <span>+$550</span>
                  </div>
                )}
                
                <div className="flex items-baseline justify-between pt-4 border-t border-stone-200 text-[#211d1a]">
                  <span className="text-sm font-bold">Total Appraisal Value:</span>
                  <span className="font-serif text-2xl font-bold text-[#2b5876]">${totalCost} <span className="text-[10px] font-sans font-normal text-stone-500">USD</span></span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-4 bg-[#211d1a] hover:bg-[#2b5876] text-white font-bold text-xs uppercase tracking-widest transition-all rounded-none cursor-pointer text-center"
              >
                Initiate Secure Commission • ${totalCost}
              </button>

              <p className="text-[10px] text-stone-400 text-center italic">
                GIA verification confirmed on registry. Adult signature armored transport is complimentary.
              </p>

            </div>

            <div 
              onClick={() => setIsConciergeOpen(true)}
              className="bg-[#faf6f1] border border-stone-200 p-5 rounded-none cursor-pointer hover:border-[#2b5876] transition-all flex items-start gap-4"
            >
              <div className="h-9 w-9 bg-white border border-[#2b5876]/30 shrink-0 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#2b5876]" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-[#211d1a] uppercase tracking-wider flex items-center gap-1.5">
                  Consult with Madame Celeste
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2b5876] animate-pulse"></span>
                </h4>
                <p className="text-[10px] text-stone-500 leading-normal mt-1 italic">
                  "Do you inquire about the VVS1 clarity grades or the durability of our Platinum settings? Press to converse directly with our head gemologist."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

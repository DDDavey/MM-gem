import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ArrowRight, Fingerprint, ScanEye, Award, CheckCircle2 } from "lucide-react";

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "", piece: "", details: "" });
  const [jsonOutput, setJsonOutput] = useState<string | null>(null);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setJsonOutput(JSON.stringify(inquiryForm, null, 2));
  };

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#e4e4e7] min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto px-8 py-12 gap-8 items-center pt-24">
        {/* Left Editorial */}
        <motion.div 
          style={{ y: heroY, opacity }}
          className="space-y-8 z-10"
        >
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1] tracking-tight text-white">
              Aesthetic<br />
              <span className="text-[#8f8f9d] italic font-light tracking-normal">Precision.</span>
            </h1>
            <p className="font-sans text-[#8f8f9d] text-xs md:text-sm leading-relaxed max-w-xs tracking-wide">
              An exploration of symmetry and light. We forge rare elements into bespoke artifacts.
            </p>
          </div>

          <div className="pt-4">
            <Link 
              to="/customizer"
              className="inline-flex items-center gap-3 border border-white/20 text-[#e4e4e7] hover:bg-white hover:text-[#050505] px-6 py-3 rounded-none transition-all duration-[400ms] ease-[var(--ease-hydraulic)]"
            >
              <span className="font-sans font-medium text-[10px] uppercase tracking-[0.2em]">
                Commission
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Right Multimedia Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[50vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200" 
            alt="Flagship Piece"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">Flagship Item</span>
          </div>
        </motion.div>
      </section>

      {/* 2. CURATED COLLECTION (Bento Grid) */}
      <section className="py-24 px-8 max-w-[100rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl lg:text-4xl tracking-wide mb-2">Curated Archives</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[20rem] gap-4">
          {/* Card 1: Large Feature */}
          <div className="group md:col-span-8 bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden relative backdrop-blur-2xl transition-all duration-[400ms] ease-[var(--ease-hydraulic)] hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.1)]">
            <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1599643478524-fb524451000b?auto=format&fit=crop&q=80&w=1000" alt="Bespoke Rings" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-[600ms] ease-[var(--ease-hydraulic)] grayscale mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[black]/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="font-serif text-2xl mb-1 text-white">Architectural Rings</h3>
              <p className="font-mono text-[9px] text-[#8f8f9d] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-[var(--ease-hydraulic)]">Pure platinum bands.</p>
            </div>
          </div>

          {/* Card 2: Tall Variant */}
          <div className="group md:col-span-4 md:row-span-2 bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden relative backdrop-blur-2xl transition-all duration-[400ms] ease-[var(--ease-hydraulic)] hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.1)]">
            <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" alt="Chains" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-[600ms] ease-[var(--ease-hydraulic)] grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-serif text-2xl text-white mb-2">Heavy Chains</h3>
              <p className="font-mono text-[9px] text-[#8f8f9d] uppercase tracking-[0.2em] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-hydraulic)]">
                18K Solid Gold
              </p>
            </div>
          </div>

          {/* Card 3: Small Variant with Photo added */}
          <div className="group md:col-span-4 bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden relative backdrop-blur-2xl transition-all duration-[400ms] ease-[var(--ease-hydraulic)] hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.1)] flex flex-col justify-end p-8">
            <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1605100804763-247f67b4548e?auto=format&fit=crop&q=80&w=600" alt="Rare Minerals" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-[600ms] ease-[var(--ease-hydraulic)] grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl text-white mb-2">Rare Mineral Cuts</h3>
              <p className="font-mono text-[9px] text-[#8f8f9d] uppercase tracking-[0.2em] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-hydraulic)]">
                Sourced precisely.
              </p>
            </div>
          </div>

          {/* Card 4: Small Variant CTA */}
          <div className="group md:col-span-4 bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden relative backdrop-blur-2xl transition-all duration-[400ms] ease-[var(--ease-hydraulic)] hover:bg-[#0f0f0f] hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.1)] flex flex-col items-center justify-center p-8 cursor-pointer text-center">
            <h3 className="font-serif text-xl text-[#e4e4e7] mb-4">View Archives</h3>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors duration-[400ms]">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRAFTSMANSHIP STORY */}
      <section className="py-24 px-8 bg-[#0a0a0a] border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-[70rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-4 text-white">
              Absolute Purity.
            </h2>
            <p className="font-sans text-[#8f8f9d] text-xs leading-relaxed max-w-sm">
              We reject mass production. Every piece is an orchestration of ethical sourcing and generational craftsmanship. No compromise. Only the artifact.
            </p>
          </div>
          
          <div className="space-y-6 lg:ml-auto">
            {["GIA Certified Clarity", "Conflict-Free Origins", "Generational Warranty"].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <CheckCircle2 className="w-5 h-5 text-white/20 group-hover:text-[#D4AF37] transition-colors duration-[400ms]" />
                <h4 className="font-serif text-lg text-[#e4e4e7]">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIP INQUIRY CTA */}
      <section className="py-24 px-8 max-w-[40rem] mx-auto text-center">
        <h2 className="font-serif text-3xl mb-4 text-white">Private Acquisitions</h2>
        <p className="font-mono text-[9px] text-[#8f8f9d] uppercase tracking-[0.2em] mb-12">Formal request for unlisted designs.</p>

        <form onSubmit={handleInquiry} className="text-left bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl backdrop-blur-3xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input 
                required
                type="text" 
                placeholder="Client Name"
                value={inquiryForm.name}
                onChange={e => setInquiryForm({...inquiryForm, name: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-[#e4e4e7] placeholder-[#8f8f9d] focus:border-[#D4AF37] outline-none font-sans text-xs transition-colors duration-[400ms]"
              />
            </div>
            <div className="space-y-2">
              <input 
                required
                type="email" 
                placeholder="Secure Email"
                value={inquiryForm.email}
                onChange={e => setInquiryForm({...inquiryForm, email: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-[#e4e4e7] placeholder-[#8f8f9d] focus:border-[#D4AF37] outline-none font-sans text-xs transition-colors duration-[400ms]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <select 
              required
              value={inquiryForm.piece}
              onChange={e => setInquiryForm({...inquiryForm, piece: e.target.value})}
              className={`w-full bg-transparent border-b border-white/10 pb-2 focus:border-[#D4AF37] outline-none font-sans text-xs transition-colors duration-[400ms] cursor-pointer appearance-none ${!inquiryForm.piece ? "text-[#8f8f9d]" : "text-[#e4e4e7]"}`}
            >
              <option value="" disabled className="bg-[#050505]">Select Curation</option>
              <option value="Tension Ring" className="bg-[#050505]">Tension Ring</option>
              <option value="Heavy Chain" className="bg-[#050505]">Solid Chain</option>
              <option value="Pendant" className="bg-[#050505]">Diamond Pendant</option>
            </select>
          </div>

          <div className="space-y-2">
            <textarea 
              required
              rows={2}
              value={inquiryForm.details}
              onChange={e => setInquiryForm({...inquiryForm, details: e.target.value})}
              className="w-full bg-transparent border-b border-white/10 pb-2 text-[#e4e4e7] placeholder-[#8f8f9d] focus:border-[#D4AF37] outline-none font-sans text-xs transition-colors duration-[400ms] resize-none"
              placeholder="Technical directives..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-white text-[#050505] hover:bg-[#D4AF37] hover:text-[#050505] py-3.5 mt-4 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-[400ms] ease-[var(--ease-hydraulic)]"
          >
            Submit Request
          </button>
        </form>

        {jsonOutput && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl text-left overflow-x-auto"
          >
            <p className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] mb-4">Request Transmitted:</p>
            <pre className="font-mono text-[10px] text-[#8f8f9d] whitespace-pre-wrap">{jsonOutput}</pre>
          </motion.div>
        )}
      </section>
    </div>
  );
}


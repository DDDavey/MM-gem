import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Gem, 
  Circle,
  MessageSquare, 
  Send, 
  X, 
  Volume2, 
  Download, 
  MapPin, 
  Mail, 
  Lock, 
  RotateCcw, 
  Check,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types and Configs for the interactive storefront
interface AccessoryConfig {
  id: string;
  name: string;
  category: "ring" | "necklace" | "bracelet";
  basePrice: number;
  caratWeight: string;
  icon: any;
  leadTime: string;
}

interface GemstoneConfig {
  id: string;
  name: string;
  description: string;
  prestigeDetails: string;
  colorName: string;
  addedCost: number;
  bgTexture: string;
}

interface MetalConfig {
  id: string;
  name: string;
  origin: string;
  colorClass: string;
  character: string;
}

const ACCESSORIES: AccessoryConfig[] = [
  { id: "ring-solitaire", name: "Classic Solitaire Ring", category: "ring", basePrice: 2850, caratWeight: "1.2ct - 3.5ct Equivalent", icon: Gem, leadTime: "3 to 4 weeks" },
  { id: "ring-halo", name: "Cathedral Halo Ring", category: "ring", basePrice: 3250, caratWeight: "1.5ct - 4.0ct Equivalent", icon: Gem, leadTime: "3 to 5 weeks" },
  { id: "necklace-pendant", name: "Tear Drop Pendant", category: "necklace", basePrice: 1850, caratWeight: "2.0ct Equivalent", icon: Sparkles, leadTime: "2 to 3 weeks" },
  { id: "necklace-riviera", name: "Riviera Eternity Collar", category: "necklace", basePrice: 8500, caratWeight: "15.0ct Total Weight", icon: Sparkles, leadTime: "5 to 6 weeks" },
  { id: "bracelet-tennis", name: "Classic Tennis Bracelet", category: "bracelet", basePrice: 5400, caratWeight: "8.0ct Total Weight", icon: Circle, leadTime: "4 to 5 weeks" },
  { id: "bracelet-bangle", name: "Solid Imperial Bangle", category: "bracelet", basePrice: 4200, caratWeight: "Solid Metal", icon: Circle, leadTime: "3 to 4 weeks" }
];

const GEMSTONES: GemstoneConfig[] = [
  { 
    id: "diamond-flawless", 
    name: "Internally Flawless VVS1 Diamond", 
    description: "Ethically grown and artisan-cut to maximize light return. Masterfully faceted to achieve the coveted 'Hearts and Arrows' optical symmetry.",
    prestigeDetails: "D-Color, VVS1 Clarity. Triple Excellent Cut. GIA Certified.",
    colorName: "Brilliant Luminous White",
    addedCost: 4500,
    bgTexture: "https://images.unsplash.com/photo-1599643478524-41bec29f52f4?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: "sapphire-ceylon", 
    name: "Royal Ceylon Blue Sapphire", 
    description: "A breathtaking cornflower blue crystal, sourced from historic mines. Its velvety saturation shifts magically under evening light.",
    prestigeDetails: "Unheated, conflict-free. Hand-polished in Antwerp.",
    colorName: "Deep Cornflower Velvet Blue",
    addedCost: 2800,
    bgTexture: "https://images.unsplash.com/photo-1615397323605-e405a30ed9b3?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: "emerald-colombian", 
    name: "Muzo Green Colombian Emerald", 
    description: "Distinctive pure green hue with highly desirable 'jardin' inclusions that prove its natural earthly origins.",
    prestigeDetails: "Micro-oiled for preservation. Highly rare vivid saturation.",
    colorName: "Vivid Jardin Green",
    addedCost: 3200,
    bgTexture: "https://images.unsplash.com/photo-1601058268499-e655c65f9797?auto=format&fit=crop&q=80&w=600"
  }
];

const METALS: MetalConfig[] = [
  { id: "platinum", name: "950 Solid Platinum", origin: "Geneva, Switzerland", colorClass: "bg-[#e5e4e2]", character: "Imperishable and dense. Will never tarnish or lose its white luster." },
  { id: "yellow-gold", name: "18K Imperial Yellow Gold", origin: "Arezzo, Italy", colorClass: "bg-[#d4af37]", character: "Rich, warm historical alloy. Hypoallergenic and timeless." },
  { id: "rose-gold", name: "18K Parisian Rose Gold", origin: "Paris, France", colorClass: "bg-[#b76e79]", character: "Infused with slight copper for a romantic, universally flattering tone." }
];

export default function App() {
  // Storefront customized state
  const [selectedAccessory, setSelectedAccessory] = useState<AccessoryConfig>(ACCESSORIES[0]);
  const [selectedGemstone, setSelectedGemstone] = useState<GemstoneConfig>(GEMSTONES[0]);
  const [selectedMetal, setSelectedMetal] = useState<MetalConfig>(METALS[0]);
  const [fitType, setFitType] = useState<string>("standard");
  const [engraving, setEngraving] = useState<string>("");
  
  // Customization viewer lighting simulator state
  const [lighting, setLighting] = useState<"noon" | "golden" | "candle">("golden");

  // Cart / Checkout Modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmittingCommission, setIsSubmittingCommission] = useState(false);
  const [orderRegistryId, setOrderRegistryId] = useState<string | null>(null);
  const [receiptData, setReceiptData] = useState<any | null>(null);

  // Concierge Chat drawer state
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "model"; content: string }>>([
    { role: "model", content: "Greetings. I am Madame Celeste, chief gemologist for Maison Lithos. I am delighted to assist you in designing a bespoke crystal or precious stone heirloom. Ask me of our ethical sourcing, GIA-certified diamonds, or our Antwerp cutting process." }
  ]);
  const [isAskingConcierge, setIsAskingConcierge] = useState(false);

  // Email Lead Capture / Exit Intent Alert
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [ledgerEmail, setLedgerEmail] = useState("");
  const [ledgerEnrolled, setLedgerEnrolled] = useState(false);

  // Interactive Loom step
  const [activeCutStep, setActiveCutStep] = useState(0);

  // Page tracking scroll states to show header highlight
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Subtle trigger of exit intent on mouse top exit
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30 && !ledgerEnrolled) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ledgerEnrolled]);

  const handleAskConcierge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatMessage("");
    setChatHistory(prev => [...prev, { role: "user", content: userMsg }]);
    setIsAskingConcierge(true);

    try {
      const response = await fetch("/api/concierge-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: chatHistory })
      });
      const data = await response.json();
      if (response.ok && data.reply) {
        setChatHistory(prev => [...prev, { role: "model", content: data.reply }]);
      } else {
        setChatHistory(prev => [...prev, { role: "model", content: "Our master cutters are operating with intense focus under the loupe. Let me retrieve my documents shortly." }]);
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { role: "model", content: "Connection to the atelier is quiet. Your patience is revered." }]);
    } finally {
      setIsAskingConcierge(false);
    }
  };

  const totalCost = selectedAccessory.basePrice + selectedGemstone.addedCost + (fitType === "bespoke" ? 550 : 0);

  const handleBookCommission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName || !address) return;

    setIsSubmittingCommission(true);
    setTimeout(() => {
      const uniqueId = `LITHOS-${Math.floor(100000 + Math.random() * 900000)}`;
      const assignedCutter = ["Master Van Der Berg", "Artisan Dubois", "Gemologist Celeste"][Math.floor(Math.random() * 3)];
      const cycles = ["Antwerp Cutting Cycle (Autumn Dispatch)", "Immediate Vault Allocations"][Math.floor(Math.random() * 2)];

      setReceiptData({
        id: uniqueId,
        customerName: fullName,
        customerEmail: email,
        customerPhone: phone || "Reserved Private Line",
        address,
        device: selectedAccessory.name,
        motif: selectedGemstone.name,
        motifColor: selectedGemstone.colorName,
        leather: selectedMetal.name,
        fitType: fitType === "standard" ? "Standard Sizing Block" : fitType === "bespoke" ? "Bespoke Wax Cast Adjustment" : "Invisible Micro-Sizing",
        engraving: engraving ? engraving.toUpperCase() : "None Requested",
        weaver: assignedCutter,
        cycle: cycles,
        price: totalCost,
        caratWeight: selectedAccessory.caratWeight,
        craftHours: selectedAccessory.category === "ring" ? "120 Craft Hours" : selectedAccessory.category === "necklace" ? "95 Craft Hours" : "80 Craft Hours",
        timestamp: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      });
      setOrderRegistryId(uniqueId);
      setIsSubmittingCommission(false);
      setLedgerEnrolled(true);
    }, 1200);
  };

  const handleEnrollLedger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ledgerEmail.trim()) return;
    setLedgerEnrolled(true);
    setTimeout(() => {
      setShowExitIntent(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#211d1a] flex flex-col font-sans selection:bg-[#2b5876] selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Maison Lithos Header Announcement */}
      <div className="bg-[#2b5876] text-white py-2 px-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-center flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span>The Antwerp Rough Cycle • 3 Rare Master Cuts Remaining Globally</span>
        <button 
          onClick={() => setIsCheckoutOpen(true)} 
          className="border-b border-white hover:opacity-80 transition-opacity font-bold ml-1 cursor-pointer"
        >
          Secure Allocation
        </button>
      </div>

      {/* Luxury Minimal double-tiered bar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrollPosition > 50 
          ? "bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#e7e5e4] shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center border-b border-[#e7e5e4]/60 gap-1.5">
          <div className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-[#2b5876] stroke-[1.5]" />
          </div>
          <span className="font-serif text-2xl lg:text-3.5xl tracking-[0.25em] font-normal text-[#211d1a] hover:opacity-95 cursor-pointer select-none">
            MAISON LITHOS
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#2b5876] uppercase font-bold">
            antwerp hand-cut • geneva metalsmithing
          </span>
        </div>

        {/* Categories navigation & Utility Menu */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.18em]">
          
          <nav className="hidden md:flex items-center gap-8 text-[#57534e]">
            <a href="#customizer" className="hover:text-[#2b5876] font-medium transition-colors">Bespoke Designer</a>
            <a href="#ritual" className="hover:text-[#2b5876] font-medium transition-colors">The Faceting Ritual</a>
            <a href="#provenance" className="hover:text-[#2b5876] font-medium transition-colors">Kimberley Process</a>
            <a href="#guarantee" className="hover:text-[#2b5876] font-medium transition-colors">Atelier Pledge</a>
          </nav>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <button 
              onClick={() => setIsConciergeOpen(true)}
              className="flex items-center gap-1.5 text-[#2b5876] font-bold hover:opacity-80 transition-opacity cursor-pointer text-[10px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consult Gemologist</span>
            </button>
            <span className="h-4 w-px bg-stone-300 hidden md:block"></span>
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-[#211d1a] text-[#fcfbf9] hover:bg-[#2b5876] text-[10px] font-bold px-4 py-2 transition-all rounded-none cursor-pointer"
            >
              Book Commission
            </button>
          </div>
        </div>
      </header>

      {/* Hero Exhibition */}
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
              <a 
                href="#customizer" 
                className="bg-[#2b5876] hover:bg-[#1a3a4e] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all text-center rounded-none shadow-sm"
              >
                Configure Your Heirloom
              </a>
              <a 
                href="#ritual" 
                className="border border-[#2b5876] text-[#2b5876] hover:bg-[#2b5876]/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all text-center rounded-none font-medium"
              >
                The Faceting Ritual
              </a>
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

      {/* Interactive PDP Tailoring Workshop */}
      <motion.section 
        id="customizer" 
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

      {/* The Weaving Secret -> The Faceting Ritual */}
      <motion.section 
        id="ritual" 
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

      {/* UNESCO Certified Block -> Ethical Provenance Block */}
      <motion.section 
        id="provenance" 
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

      {/* Physical Guarantee Details */}
      <motion.section 
        id="guarantee" 
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

      {/* Footer */}
      <footer className="bg-[#1c1917] text-stone-400 py-16 px-6 lg:px-12 text-xs text-center space-y-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h5 className="font-serif text-[#fcfbf9] font-bold text-xs uppercase tracking-wider">maison lithos</h5>
            <p className="text-[11px] leading-relaxed leading-normal">
              Serving generation-spanning collectors who revere ethical brilliance and demanding material purity. We forge the earth's brightest elements.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-serif text-[#fcfbf9] font-bold text-xs uppercase tracking-wider">security & courier</h5>
            <p className="text-[11px] leading-relaxed leading-normal font-serif italic">
              All dispatches are shipped inside custom-fitted security vaults with adult presence signature requirements. Fully insured throughout cargo transit.
            </p>
          </div>
          <div className="space-y-2 font-mono text-[10px]">
            <h5 className="font-serif text-[#fcfbf9] font-bold text-[#2b5876] text-xs uppercase tracking-wider">atelier coordinates</h5>
            <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Antwerp Cutters & Geneva Smiths</p>
            <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> commissions@maisonlithos.com</p>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto text-[10px] opacity-80">
          <p>© 2026 Maison Lithos. Mimicking pristine luxury designs with complete respect to copyrights and patents.</p>
          <div className="flex gap-4 text-[#2b5876] font-bold uppercase tracking-wider font-mono">
            <a href="#customizer" className="hover:opacity-80">Bespoke Storefront</a>
            <a href="#ritual" className="hover:opacity-80">The Process</a>
          </div>
        </div>
      </footer>

      {/* Checkout Booking Drawer or Certified Bill Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-[#211d1a] border border-[#2b5876]/30 p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl space-y-6"
            >
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setOrderRegistryId(null);
                  setReceiptData(null);
                }}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!orderRegistryId ? (
                <form onSubmit={handleBookCommission} className="space-y-5">
                  <div className="text-center space-y-1">
                    <span className="font-serif text-[10px] text-[#2b5876] tracking-[0.2em] uppercase font-bold">private administrative commission registration</span>
                    <h3 className="font-serif text-2.5xl text-[#211d1a] leading-tight">Secure Your Lapidary Cycle</h3>
                    <p className="text-xs text-stone-500 max-w-md mx-auto">
                      Fill out our client information registry. Upon secure submission, our head gemologist assigns your physical rough crystal.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#faf6f1] border border-[#2b5876]/20 space-y-2 text-xs">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#2b5876] font-bold">Selected Configuration Specs:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div>
                        <span className="block text-stone-400 text-[10px]">Accessory Form:</span>
                        <span className="font-bold">{selectedAccessory.name}</span>
                      </div>
                      <div>
                        <span className="block text-stone-400 text-[10px]">Center Stone:</span>
                        <span className="font-bold text-[#2b5876]">{selectedGemstone.name}</span>
                      </div>
                      <div>
                        <span className="block text-stone-400 text-[10px]">Precious Metal:</span>
                        <span className="font-bold">{selectedMetal.name}</span>
                      </div>
                      <div>
                        <span className="block text-stone-400 text-[10px]">Total Price:</span>
                        <span className="font-bold text-stone-900">${totalCost} USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Secure Email Address Name</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@finance.com"
                          className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Bespoke Client Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Eleanor V. Mercer"
                          className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Courier Telephone Coordinate</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (415) 555-4420"
                          className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Laser Engraving</label>
                        <input
                          type="text"
                          maxLength={10}
                          value={engraving}
                          onChange={(e) => setEngraving(e.target.value.replace(/[^a-zA-Z0-9\s]/g, "").substring(0, 10))}
                          placeholder="XX-XX-XXXX"
                          className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876] font-mono tracking-[0.2em]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Insured Courier Delivery Vault Address</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="100 Golden Gate Ave, Penthouse, San Francisco, CA"
                        className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono text-stone-500 mb-1 font-bold">Gemologist special directives</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={2}
                        placeholder="e.g. Ensure the tension setting leaves the pavilion unobstructed..."
                        className="w-full p-2.5 bg-stone-50 border border-stone-250 outline-none text-[#211d1a] focus:border-[#2b5876] resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-2">
                      <Lock className="w-4 h-4 text-[#2b5876]" />
                      <p className="text-[10px] text-stone-400 text-left leading-tight">Your administrative dossier is strictly confidential.</p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingCommission}
                      className="w-full sm:w-auto bg-[#211d1a] hover:bg-[#2b5876] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 transition-all flex items-center justify-center gap-1.5"
                    >
                      {isSubmittingCommission ? (
                        <>
                          <RotateCcw className="w-4 h-4 animate-spin text-white" />
                          Registering...
                        </>
                      ) : (
                        `Register Commission • $${totalCost}`
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 text-center"
                >
                  <div className="h-10 w-10 bg-[#2b5876]/10 text-[#2b5876] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 text-[#2b5876]" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#2b5876] font-bold block">✓ Appraisal Charter Registered</span>
                    <h3 className="font-serif text-2.5xl text-[#211d1a]">Bespoke Imperial Charter</h3>
                    <p className="text-xs text-stone-500 max-w-md mx-auto">
                      Your diamond cutting rotation is secured. Download or print the certified charter below.
                    </p>
                  </div>

                  <div className="p-6 bg-[#faf9f6] border-2 border-dashed border-[#2b5876]/40 text-left space-y-3 font-mono text-[11px] text-stone-700">
                    <div className="border-b border-stone-200 pb-2 flex justify-between font-bold text-[10px]">
                      <span>APPRAISAL ID: {receiptData.id}</span>
                      <span>DATE: {receiptData.timestamp}</span>
                    </div>

                    <div className="space-y-1.5 text-stone-600">
                      <div className="flex justify-between"><span>COMMISSIONER:</span><span className="text-stone-900 font-serif font-bold">{receiptData.customerName}</span></div>
                      <div className="flex justify-between"><span>DISPATCH ADDRESS:</span><span className="text-stone-900 text-right truncate max-w-[240px]">{receiptData.address}</span></div>
                      <div className="flex justify-between"><span>ACCESSORY CLASS:</span><span className="text-stone-800 font-bold">{receiptData.device}</span></div>
                      <div className="flex justify-between"><span>CENTER STONE:</span><span className="text-[#2b5876] font-bold">{receiptData.motif}</span></div>
                      <div className="flex justify-between"><span>PRECIOUS METAL:</span><span className="text-stone-800">{receiptData.leather}</span></div>
                      <div className="flex justify-between"><span>INNER ENGRAVING:</span><span className="text-stone-700 font-bold tracking-widest">{receiptData.engraving}</span></div>
                      <div className="flex justify-between border-t border-stone-200 pt-2 font-bold"><span>MASTER ARTISAN:</span><span className="text-stone-950">{receiptData.weaver}</span></div>
                      <div className="flex justify-between"><span>ROTATION ESTIMATED:</span><span className="text-[#2b5876]">{receiptData.cycle}</span></div>
                      <div className="flex justify-between"><span>Lapidary Cut time:</span><span>{receiptData.craftHours}</span></div>
                    </div>

                    <div className="border-t border-stone-200 pt-2 flex justify-between font-bold text-stone-900">
                      <span>TOTAL SECURED VALUE:</span>
                      <span className="text-lg text-[#2b5876] font-serif">${receiptData.price} USD</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 justify-center">
                    <button
                      onClick={() => window.print()}
                      className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-all border border-stone-300 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-stone-600" />
                      Print Charter
                    </button>
                    <button
                      onClick={() => {
                        setIsCheckoutOpen(false);
                        setOrderRegistryId(null);
                        setReceiptData(null);
                      }}
                      className="px-5 py-2.5 bg-[#2b5876] hover:bg-[#1a3a4e] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Concierge Sidebar */}
      <AnimatePresence>
        {isConciergeOpen && (
          <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md flex">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConciergeOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 sm:hidden"
            />

            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-white text-[#211d1a] border-l border-stone-200 h-full w-full relative z-50 flex flex-col justify-between shadow-2xl"
            >
              <div className="p-4 bg-[#faf6f1] border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-white border border-[#2b5876]/30 flex items-center justify-center text-[#2b5876]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-serif font-bold text-stone-900 uppercase">Madame Celeste</h3>
                    <p className="text-[8px] font-mono uppercase tracking-widest text-[#2b5876]">Chief Gemologist</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsConciergeOpen(false)}
                  className="text-stone-400 hover:text-stone-900 cursor-pointer p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
                {chatHistory.map((item, idx) => (
                  <div key={idx} className={`flex flex-col ${item.role === "user" ? "items-end" : "items-start"}`}>
                    <span className="text-[8px] uppercase font-mono tracking-widest text-[#2b5876] mb-1">
                      {item.role === "user" ? "Bespoke Client" : "Madame Celeste"}
                    </span>
                    <div className={`p-3 max-w-[85%] text-xs leading-relaxed font-serif rounded-none ${
                      item.role === "user" 
                        ? "bg-[#2b5876] text-white" 
                        : "bg-[#faf6f1] text-[#211d1a] border border-stone-200 italic shadow-sm"
                    }`}>
                      {item.content}
                    </div>
                  </div>
                ))}

                {isAskingConcierge && (
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] uppercase font-mono tracking-widest text-stone-400 mb-1">Examining clarity grades...</span>
                    <div className="p-3 bg-stone-50 border border-stone-200 text-stone-500 text-xs italic flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 animate-spin text-[#2b5876]" />
                      Evaluating mineral inclusions...
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleAskConcierge} className="p-4 bg-[#faf6f1] border-t border-stone-150 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask about GIA grades, prongs, alloys..."
                    className="flex-1 bg-white border border-stone-250 p-2.5 text-xs outline-none focus:border-[#2b5876] placeholder-stone-400"
                  />
                  <button
                    type="submit"
                    disabled={isAskingConcierge || !chatMessage.trim()}
                    className="bg-[#211d1a] hover:bg-[#2b5876] text-white h-9 w-9 flex items-center justify-center cursor-pointer transition-colors shrink-0 disabled:opacity-40"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[8px] text-stone-400 text-center italic">
                  Answers powered by real-time Gemini AI. Securely guided by Gemological authorities.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExitIntent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitIntent(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              className="bg-white text-[#211d1a] border border-[#2b5876]/40 p-8 max-w-lg w-full relative z-10 shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1.5">
                <span className="font-serif text-[10px] text-[#2b5876] tracking-[0.25em] uppercase font-bold block">private ledger invitation</span>
                <h3 className="font-serif text-2xl text-stone-900 leading-tight">Enroll in The Lapidary Annals</h3>
                <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto font-serif italic">
                  "Diamond cutting rotations are structurally restricted. Members receive first reservation slots and a $150 credit on their first bespoke order."
                </p>
              </div>

              {!ledgerEnrolled ? (
                <form onSubmit={handleEnrollLedger} className="space-y-3 max-w-sm mx-auto">
                  <input
                    type="email"
                    required
                    value={ledgerEmail}
                    onChange={(e) => setLedgerEmail(e.target.value)}
                    placeholder="Enter private email address"
                    className="w-full p-2.5 bg-stone-50 border border-stone-250 text-xs outline-none focus:border-[#2b5876] text-center"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#211d1a] text-white hover:bg-[#2b5876] font-bold cursor-pointer text-xs uppercase tracking-widest transition-all"
                  >
                    Acquire $150 Reservation Voucher
                  </button>
                </form>
              ) : (
                <div className="p-4 bg-[#faf6f1] border border-[#2b5876]/30 text-[#2b5876] font-mono text-xs text-center">
                  <div className="text-[#2b5876] font-bold mb-1">✓ INVITATION ACCOUNT VERIFIED</div>
                  Voucher coordinate dispatched. Check your inbox for our autumn ledger credentials.
                </div>
              )}

              <p className="text-[9px] text-stone-400">
                Spams are strictly rejected. Dossier protected by absolute atelier security.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

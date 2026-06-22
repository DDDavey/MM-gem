import { useState, useEffect } from "react";
import { Gem, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const { setIsCheckoutOpen, setIsConciergeOpen } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#D4AF37] text-[#050505] py-2 px-4 text-[10px] tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#050505] animate-pulse"></span>
        <span>The Antwerp Rough Cycle • 3 Rare Master Cuts Remaining Globally</span>
        <button onClick={() => setIsCheckoutOpen(true)} className="border-b border-[#050505] hover:opacity-80 transition-opacity font-bold ml-1 cursor-pointer">
          Secure Allocation
        </button>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-[400ms] ease-[var(--ease-hydraulic)] ${
        scrollPosition > 50 
          ? "bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent"
      }`}>
        <div className="max-w-[90rem] mx-auto px-8 py-8 flex flex-col items-center justify-center gap-2">
          <Link to="/" className="font-serif text-3xl lg:text-4xl tracking-[0.3em] font-normal text-[#e4e4e7] hover:text-white transition-colors cursor-pointer select-none">
            MAISON LITHOS
          </Link>
          <span className="text-[10px] tracking-[0.4em] text-[#8f8f9d] uppercase font-medium">
            antwerp hand-cut • geneva metalsmithing
          </span>
        </div>

        <div className="max-w-[90rem] mx-auto px-8 py-5 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em] border-t border-white/5">
          
          <nav className="hidden md:flex items-center gap-10 text-[#8f8f9d]">
            <Link to="/customizer" className={`${location.pathname === "/customizer" ? "text-white" : ""} hover:text-white font-medium transition-colors duration-300 ease-[var(--ease-hydraulic)]`}>Bespoke Designer</Link>
            <Link to="/ritual" className={`${location.pathname === "/ritual" ? "text-white" : ""} hover:text-white font-medium transition-colors duration-300 ease-[var(--ease-hydraulic)]`}>The Faceting Ritual</Link>
            <Link to="/provenance" className={`${location.pathname === "/provenance" ? "text-white" : ""} hover:text-white font-medium transition-colors duration-300 ease-[var(--ease-hydraulic)]`}>Kimberley Process</Link>
            <Link to="/guarantee" className={`${location.pathname === "/guarantee" ? "text-white" : ""} hover:text-white font-medium transition-colors duration-300 ease-[var(--ease-hydraulic)]`}>Atelier Pledge</Link>
          </nav>

          <div className="flex items-center justify-between w-full md:w-auto gap-6">
            <button 
              onClick={() => setIsConciergeOpen(true)}
              className="flex items-center gap-2 text-[#8f8f9d] hover:text-white transition-colors duration-300 ease-[var(--ease-hydraulic)] cursor-pointer text-[10px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="font-medium tracking-[0.2em]">Consult Gemologist</span>
            </button>
            <span className="h-4 w-[1px] bg-white/10 hidden md:block"></span>
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-[#D4AF37] text-[#050505] hover:bg-white text-[10px] font-bold px-6 py-2.5 transition-all duration-300 ease-[var(--ease-hydraulic)] rounded-none cursor-pointer active:scale-98"
            >
              Book Commission
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

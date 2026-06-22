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
      <div className="bg-[#2b5876] text-white py-2 px-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-center flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span>The Antwerp Rough Cycle • 3 Rare Master Cuts Remaining Globally</span>
        <button onClick={() => setIsCheckoutOpen(true)} className="border-b border-white hover:opacity-80 transition-opacity font-bold ml-1 cursor-pointer">
          Secure Allocation
        </button>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrollPosition > 50 
          ? "bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#e7e5e4] shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center border-b border-[#e7e5e4]/60 gap-1.5">
          <Link to="/" className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-[#2b5876] stroke-[1.5]" />
          </Link>
          <Link to="/" className="font-serif text-2xl lg:text-3.5xl tracking-[0.25em] font-normal text-[#211d1a] hover:opacity-95 cursor-pointer select-none">
            MAISON LITHOS
          </Link>
          <span className="text-[9px] tracking-[0.35em] text-[#2b5876] uppercase font-bold">
            antwerp hand-cut • geneva metalsmithing
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.18em]">
          
          <nav className="hidden md:flex items-center gap-8 text-[#57534e]">
            <Link to="/customizer" className={`${location.pathname === "/customizer" ? "text-[#2b5876]" : ""} hover:text-[#2b5876] font-medium transition-colors`}>Bespoke Designer</Link>
            <Link to="/ritual" className={`${location.pathname === "/ritual" ? "text-[#2b5876]" : ""} hover:text-[#2b5876] font-medium transition-colors`}>The Faceting Ritual</Link>
            <Link to="/provenance" className={`${location.pathname === "/provenance" ? "text-[#2b5876]" : ""} hover:text-[#2b5876] font-medium transition-colors`}>Kimberley Process</Link>
            <Link to="/guarantee" className={`${location.pathname === "/guarantee" ? "text-[#2b5876]" : ""} hover:text-[#2b5876] font-medium transition-colors`}>Atelier Pledge</Link>
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
    </>
  );
}

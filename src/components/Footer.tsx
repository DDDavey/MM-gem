import { MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-[#8f8f9d] py-16 px-6 lg:px-12 text-xs text-center space-y-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="space-y-4">
          <h5 className="font-sans text-[#e4e4e7] font-bold text-[10px] uppercase tracking-[0.2em]">Maison Lithos</h5>
          <p className="text-[11px] leading-loose">
            Serving generation-spanning collectors who revere ethical brilliance and demanding material purity. We forge the earth's brightest elements.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-sans text-[#e4e4e7] font-bold text-[10px] uppercase tracking-[0.2em]">Security & Courier</h5>
          <p className="text-[11px] leading-loose">
            All dispatches are shipped inside custom-fitted security vaults with adult presence signature requirements. Fully insured throughout cargo transit.
          </p>
        </div>
        <div className="space-y-4 font-mono text-[10px]">
          <h5 className="font-sans text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.2em]">Atelier Coordinates</h5>
          <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Antwerp Cutters & Geneva Smiths</p>
          <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> commissions@maisonlithos.com</p>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[90rem] mx-auto text-[10px] opacity-80">
        <p className="tracking-wide">© 2026 Maison Lithos. Independent lapidary services.</p>
        <div className="flex gap-6 text-[#D4AF37] font-bold uppercase tracking-[0.2em] font-sans">
          <Link to="/customizer" className="hover:text-white transition-colors duration-300 ease-[var(--ease-hydraulic)]">Bespoke Storefront</Link>
          <Link to="/ritual" className="hover:text-white transition-colors duration-300 ease-[var(--ease-hydraulic)]">The Process</Link>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
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
          <Link to="/customizer" className="hover:opacity-80">Bespoke Storefront</Link>
          <Link to="/ritual" className="hover:opacity-80">The Process</Link>
        </div>
      </div>
    </footer>
  );
}

import { Sparkles, Circle, Gem } from "lucide-react";

export interface AccessoryConfig {
  id: string;
  name: string;
  category: "ring" | "necklace" | "bracelet";
  basePrice: number;
  caratWeight: string;
  icon: any;
  leadTime: string;
}

export interface GemstoneConfig {
  id: string;
  name: string;
  description: string;
  prestigeDetails: string;
  colorName: string;
  addedCost: number;
  bgTexture: string;
}

export interface MetalConfig {
  id: string;
  name: string;
  origin: string;
  colorClass: string;
  character: string;
}

export const ACCESSORIES: AccessoryConfig[] = [
  { id: "ring-solitaire", name: "Classic Solitaire Ring", category: "ring", basePrice: 2850, caratWeight: "1.2ct - 3.5ct Equivalent", icon: Gem, leadTime: "3 to 4 weeks" },
  { id: "ring-halo", name: "Cathedral Halo Ring", category: "ring", basePrice: 3250, caratWeight: "1.5ct - 4.0ct Equivalent", icon: Gem, leadTime: "3 to 5 weeks" },
  { id: "necklace-pendant", name: "Tear Drop Pendant", category: "necklace", basePrice: 1850, caratWeight: "2.0ct Equivalent", icon: Sparkles, leadTime: "2 to 3 weeks" },
  { id: "necklace-riviera", name: "Riviera Eternity Collar", category: "necklace", basePrice: 8500, caratWeight: "15.0ct Total Weight", icon: Sparkles, leadTime: "5 to 6 weeks" },
  { id: "bracelet-tennis", name: "Classic Tennis Bracelet", category: "bracelet", basePrice: 5400, caratWeight: "8.0ct Total Weight", icon: Circle, leadTime: "4 to 5 weeks" },
  { id: "bracelet-bangle", name: "Solid Imperial Bangle", category: "bracelet", basePrice: 4200, caratWeight: "Solid Metal", icon: Circle, leadTime: "3 to 4 weeks" }
];

export const GEMSTONES: GemstoneConfig[] = [
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

export const METALS: MetalConfig[] = [
  { id: "platinum", name: "950 Solid Platinum", origin: "Geneva, Switzerland", colorClass: "bg-[#e5e4e2]", character: "Imperishable and dense. Will never tarnish or lose its white luster." },
  { id: "yellow-gold", name: "18K Imperial Yellow Gold", origin: "Arezzo, Italy", colorClass: "bg-[#d4af37]", character: "Rich, warm historical alloy. Hypoallergenic and timeless." },
  { id: "rose-gold", name: "18K Parisian Rose Gold", origin: "Paris, France", colorClass: "bg-[#b76e79]", character: "Infused with slight copper for a romantic, universally flattering tone." }
];

import React, { createContext, useContext, useState } from "react";
import { ACCESSORIES, GEMSTONES, METALS, AccessoryConfig, GemstoneConfig, MetalConfig } from "./data";

interface AppState {
  selectedAccessory: AccessoryConfig;
  setSelectedAccessory: (acc: AccessoryConfig) => void;
  selectedGemstone: GemstoneConfig;
  setSelectedGemstone: (gem: GemstoneConfig) => void;
  selectedMetal: MetalConfig;
  setSelectedMetal: (metal: MetalConfig) => void;
  fitType: string;
  setFitType: (fit: string) => void;
  engraving: string;
  setEngraving: (eng: string) => void;
  lighting: "noon" | "golden" | "candle";
  setLighting: (l: "noon" | "golden" | "candle") => void;
  totalCost: number;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (val: boolean) => void;
  isConciergeOpen: boolean;
  setIsConciergeOpen: (val: boolean) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [selectedAccessory, setSelectedAccessory] = useState<AccessoryConfig>(ACCESSORIES[0]);
  const [selectedGemstone, setSelectedGemstone] = useState<GemstoneConfig>(GEMSTONES[0]);
  const [selectedMetal, setSelectedMetal] = useState<MetalConfig>(METALS[0]);
  const [fitType, setFitType] = useState<string>("standard");
  const [engraving, setEngraving] = useState<string>("");
  const [lighting, setLighting] = useState<"noon" | "golden" | "candle">("golden");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  const totalCost = selectedAccessory.basePrice + selectedGemstone.addedCost + (fitType === "bespoke" ? 550 : 0);

  return (
    <AppContext.Provider value={{
      selectedAccessory, setSelectedAccessory,
      selectedGemstone, setSelectedGemstone,
      selectedMetal, setSelectedMetal,
      fitType, setFitType,
      engraving, setEngraving,
      lighting, setLighting,
      totalCost,
      isCheckoutOpen, setIsCheckoutOpen,
      isConciergeOpen, setIsConciergeOpen
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
}

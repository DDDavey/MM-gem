import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Lock, RotateCcw, Check, Download, X, ShieldCheck, Send } from "lucide-react";
import { useAppContext } from "./context";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Customizer } from "./pages/Customizer";
import { Ritual } from "./pages/Ritual";
import { Provenance } from "./pages/Provenance";
import { Guarantee } from "./pages/Guarantee";

export default function App() {
  const { 
    selectedAccessory, selectedGemstone, selectedMetal,
    fitType, engraving, totalCost,
    isCheckoutOpen, setIsCheckoutOpen,
    isConciergeOpen, setIsConciergeOpen
  } = useAppContext();

  // Contact / Form State
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmittingCommission, setIsSubmittingCommission] = useState(false);
  const [orderRegistryId, setOrderRegistryId] = useState<string | null>(null);
  const [receiptData, setReceiptData] = useState<any | null>(null);

  // Concierge Chat State
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "model"; content: string }>>([
    { role: "model", content: "Greetings. I am Madame Celeste, chief gemologist for Maison Lithos. I am delighted to assist you in designing a bespoke crystal or precious stone heirloom. Ask me of our ethical sourcing, GIA-certified diamonds, or our Antwerp cutting process." }
  ]);
  const [isAskingConcierge, setIsAskingConcierge] = useState(false);

  const [ledgerEmail, setLedgerEmail] = useState("");
  const [ledgerEnrolled, setLedgerEnrolled] = useState(false);

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
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#211d1a] flex flex-col font-sans selection:bg-[#2b5876] selection:text-white relative overflow-x-hidden antialiased">
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customizer" element={<Customizer />} />
          <Route path="/ritual" element={<Ritual />} />
          <Route path="/provenance" element={<Provenance />} />
          <Route path="/guarantee" element={<Guarantee />} />
        </Routes>
      </main>

      <Footer />

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
                        <div className="w-full p-2.5 bg-stone-100 border border-stone-250 text-stone-500 font-mono tracking-[0.2em]">
                          {engraving || "XX-XX-XXXX"}
                        </div>
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
                      className="w-full sm:w-auto bg-[#211d1a] hover:bg-[#2b5876] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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

    </div>
  );
}

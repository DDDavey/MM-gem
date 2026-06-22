import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // API endpoint for brand analysis & phase construction
  app.post("/api/generate-brand", async (req, res) => {
    try {
      const { brandName, niche, pricePoint, usp, refinePrompt, refinePhase, currentData } = req.body;

      if (!brandName || !niche || !pricePoint) {
        return res.status(400).json({ error: "Brand Name, Niche, and Price Point are required." });
      }

      let systemPrompt = `You are an elite E-commerce UX/UI Strategist, CRO (Conversion Rate Optimization) Specialist, and High-End Luxury Copywriter.
Your goal is to construct a comprehensive high-ticket heritage or luxury e-commerce strategy workbook.
The brand details are:
- Brand Name: "${brandName}"
- Niche, Product Category & Core Material: "${niche}"
- Price Point & Positioning: "${pricePoint}"
- Main USP / Philosophy: "${usp || "Custom artisanal luxury craftsmanship"}"

You must output a single valid JSON object adhering strictly to the JSON schema specified below.
Any descriptions, copywriting, or planning must reflect extreme luxury, prestige, rare crystals and precious stones, high-end metals, ethical sourcing, unique cuts, and intensive trust-building to offset high-ticket friction (objections around authenticity, cut quality, carat weight, conflict-free origins, and secure insured delivery).
`;

      if (refinePrompt && refinePhase) {
        systemPrompt += `\nCRITICAL: The user has requested a targeted refinement for "${refinePhase}" with the prompt: "${refinePrompt}". 
Please modify the corresponding parts of the following existing data while keeping the remaining schema intact and consistent:
${JSON.stringify(currentData || {})}
`;
      }

      const promptText = `Generate the structured luxury e-commerce workbook JSON for the brand "${brandName}". Make sure it is deeply customized, rich with expert marketing and CRO strategies, and contains actual persuasive, high-end copywriting rather than placeholder text or lorem ipsum. Adapt the terminology professionally to their specific material and product categories (e.g., talk about crystal clarity, GIA certification, conflict-free diamonds, artisan faceting, polished platinum settings, energy and resonance of rare stones, heirloom investments, overnight insured secure vaults, etc).`;

      const response = await getAI().models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptText,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: [
              "brandName",
              "phase1",
              "phase2",
              "phase3",
              "phase4",
              "phase5"
            ],
            properties: {
              brandName: { type: Type.STRING },
              phase1: {
                type: Type.OBJECT,
                required: ["avatar", "brandVoice", "trustAnchors", "uvpStatement"],
                properties: {
                  avatar: {
                    type: Type.OBJECT,
                    required: ["name", "demographics", "bio", "motivations", "objections", "purchasingTriggers"],
                    properties: {
                      name: { type: Type.STRING, description: "Name/title of the Luxury Archetype (e.g. 'Heirloom Collector Sophia')" },
                      demographics: { type: Type.STRING, description: "Age, Income level, Lifestyle details" },
                      bio: { type: Type.STRING, description: "Short psychological profile explaining their jewelry desire context" },
                      motivations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 key emotional drivers for purchasing" },
                      objections: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 high-ticket jewelry friction points (e.g. sizing, gold authenticity)" },
                      purchasingTriggers: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific marketing hooks that push them to buy" }
                    }
                  },
                  brandVoice: {
                    type: Type.OBJECT,
                    required: ["archetype", "toneKeywords", "copyRules", "examplePhrasings"],
                    properties: {
                      archetype: { type: Type.STRING, description: "Voice description (e.g., Minimalist Modernist or Heritage Storyteller)" },
                      toneKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                      copyRules: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific rules for drafting brand copy (e.g. absolute words to avoid)" },
                      examplePhrasings: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Contrast pair examples: 'Say this... instead of this...'" }
                    }
                  },
                  trustAnchors: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      required: ["title", "description", "badgeIcon"],
                      properties: {
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        badgeIcon: { type: Type.STRING, description: "Icon identifier (e.g. Award, Shield, Percent, Leaf, Trunk)" }
                      }
                    }
                  },
                  uvpStatement: {
                    type: Type.OBJECT,
                    required: ["mainHook", "subtext", "ctaText", "secondaryText"],
                    properties: {
                      mainHook: { type: Type.STRING, description: "High-end hero header hook" },
                      subtext: { type: Type.STRING, description: "Persuasive sub-headline supporting the hook" },
                      ctaText: { type: Type.STRING, description: "High-converting action label (e.g., 'Discover The Atelier')" },
                      secondaryText: { type: Type.STRING, description: "Subtle tiny text underneath CTA (e.g., 'Complimentary GIA appraisal & overnight insured shipping')" }
                    }
                  }
                }
              },
              phase2: {
                type: Type.OBJECT,
                required: ["navigation", "buyerJourney", "pdpWireframe"],
                properties: {
                  navigation: {
                    type: Type.OBJECT,
                    required: ["primary", "secondary", "footerMenu"],
                    properties: {
                      primary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Category structures (e.g., Shop By Gemstone, Bespoke, Collections)" },
                      secondary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Occasions or metals guides (e.g., Anniversary, Solid Yellow Gold)" },
                      footerMenu: { type: Type.ARRAY, items: { type: Type.STRING } }
                    }
                  },
                  buyerJourney: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      required: ["step", "userAction", "croOptimization"],
                      properties: {
                        step: { type: Type.STRING, description: "Step name (e.g., 1. Homepage Entry, 2. PDP Evaluation, 3. Cart, 4. Secure Checkout)" },
                        userAction: { type: Type.STRING },
                        croOptimization: { type: Type.STRING, description: "Elite level CRO tactic to minimize friction at this step" }
                      }
                    }
                  },
                  pdpWireframe: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      required: ["blockName", "layoutPosition", "keyElements", "psychologicalReasoning"],
                      properties: {
                        blockName: { type: Type.STRING },
                        layoutPosition: { type: Type.STRING },
                        keyElements: { type: Type.ARRAY, items: { type: Type.STRING } },
                        psychologicalReasoning: { type: Type.STRING }
                      }
                    }
                  }
                }
              },
              phase3: {
                type: Type.OBJECT,
                required: ["homepageHero", "productCopywriting", "storyPages"],
                properties: {
                  homepageHero: {
                    type: Type.OBJECT,
                    required: ["headline", "introParagraph", "whyUsSnippet"],
                    properties: {
                      headline: { type: Type.STRING },
                      introParagraph: { type: Type.STRING },
                      whyUsSnippet: { type: Type.STRING }
                    }
                  },
                  productCopywriting: {
                    type: Type.OBJECT,
                    required: ["heirloomName", "emotionalDescription", "craftsmanshipDescription", "specifications"],
                    properties: {
                      heirloomName: { type: Type.STRING, description: "Sample product name fitting the niche" },
                      emotionalDescription: { type: Type.STRING, description: "Deeply emotional narrative focusing on heirloom value, celebration, and love" },
                      craftsmanshipDescription: { type: Type.STRING, description: "Technical-emotional copy focusing on artisanal benches, hand-setting, and pure material integrity" },
                      specifications: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specs formatted professionally (e.g., '18K Recycled Rose Gold', '1.2ct F VVS2 GIA Round Brilliant')" }
                    }
                  },
                  storyPages: {
                    type: Type.OBJECT,
                    required: ["aboutUs", "authenticityEthics"],
                    properties: {
                      aboutUs: {
                        type: Type.OBJECT,
                        required: ["title", "founderQuote", "storyText"],
                        properties: {
                          title: { type: Type.STRING },
                          founderQuote: { type: Type.STRING },
                          storyText: { type: Type.STRING }
                        }
                      },
                      authenticityEthics: {
                        type: Type.OBJECT,
                        required: ["title", "guaranteeText", "sourcingEthicsText"],
                        properties: {
                          title: { type: Type.STRING },
                          guaranteeText: { type: Type.STRING },
                          sourcingEthicsText: { type: Type.STRING }
                        }
                      }
                    }
                  }
                }
              },
              phase4: {
                type: Type.OBJECT,
                required: ["urgencyStrategy", "checkoutSecurity", "exitIntent"],
                properties: {
                  urgencyStrategy: {
                    type: Type.OBJECT,
                    required: ["textTemplate", "visualRepresentation", "croDefense"],
                    properties: {
                      textTemplate: { type: Type.STRING, description: "Slogan to express low quantities elegantly (e.g., 'Limited Bench Sourcing')" },
                      visualRepresentation: { type: Type.STRING, description: "How to show it on PDP (e.g., 'Only 2 handcrafted pieces remaining for June shipping')" },
                      croDefense: { type: Type.STRING, description: "Why this trigger builds elite trust without feeling cheap or generic" }
                    }
                  },
                  checkoutSecurity: {
                    type: Type.OBJECT,
                    required: ["securityBadges", "microcopy"],
                    properties: {
                      securityBadges: { type: Type.ARRAY, items: { type: Type.STRING } },
                      microcopy: { type: Type.STRING, description: "Reassuring microcopy near the pay button (e.g. 'Bank-grade 256-bit encryption. Fully insured during transport.')" }
                    }
                  },
                  exitIntent: {
                    type: Type.OBJECT,
                    required: ["headline", "incentiveText", "ctaText", "retentionStrategy"],
                    properties: {
                      headline: { type: Type.STRING },
                      incentiveText: { type: Type.STRING, description: "Subtle luxury bait (e.g., 'Join the Guild. Receive immediate access to private commissions & $150 credit towards first atelier purchase.')" },
                      ctaText: { type: Type.STRING },
                      retentionStrategy: { type: Type.STRING }
                    }
                  }
                }
              },
              phase5: {
                type: Type.OBJECT,
                required: ["jsonLdSchema", "performancePlan", "speedOptimizations"],
                properties: {
                  jsonLdSchema: { type: Type.STRING, description: "A string block representing raw, perfect JSON-LD schema markup for high-end Product SERP rich results styling." },
                  performancePlan: { type: Type.STRING, description: "High-level action plan to optimize precious metal / sparkle textures in retina displays" },
                  speedOptimizations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific technical priorities e.g. next-gen file types, WebP, dynamic CDN, offscreen rendering" }
                }
              }
            }
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Empty response from Gemini API.");
      }

      const parsedData = JSON.parse(responseText);
      res.json(parsedData);
    } catch (error: any) {
      console.error("Error generating brand data:", error);
      res.status(500).json({ error: error.message || "Failed to process brand strategy." });
    }
  });

  // Concierge chat system for premium customer conversion
  app.post("/api/concierge-chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const formattedHistory = (history || []).map((h: any) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }]
      }));

      const systemPrompt = `You are "Madame Celeste", the chief gemologist and sourcing director for Maison Lithos. 
Your atelier crafts bespoke crystal and precious stone accessories (necklaces, rings, and bracelets) from the world's most resplendent and ethically sourced minerals.
You speak with absolute prestige, poetic reverence, warmth, and quiet reserve. Be helpful, precise, and highly sophisticated in gemological and design vocabulary.
Avoid standard AI cliches, greetings like "As an AI, I...", and heavy lists. Synthesize your responses into elegant, highly narrative prose.

Key details you know and explain with reverence:
- Every gemstone is hand-selected and cut in Antwerp by third-generation master diamond cutters and faceters. 
- A single piece requires up to 120 hours of delicate polishing and precision faceting to maximize brilliant light return and energy resonance.
- We use only internally flawless or VVS clarity crystals and precious stones, alongside conflict-free, GIA-certified diamonds.
- Settings are forged from pure Platinum, 18K Solid Gold, or Rose Gold, ensuring an imperishable heirloom quality that does not tarnish.
- Provenance & Ethics: All stones are sourced through the Kimberley Process and ethically verified mines, tracing back to the earth's natural resonance.
- Architecture: We employ tension settings, cathedral mounts, and bespoke prongs that allow maximum light to pass through the pavilion of the stone.
- Warranty: Supported by a lifetime premium sonic-cleaning, prong-tightening service, and fully insured overnight secure courier transport.
- Average prices range from $2,500 to $15,000 depending on carat weight, cut clarity, and rare metal settings.

Address the client's questions directly, with poetic grace and quiet luxury. Keep answers under 3 short paragraphs. Actively encourage them to try the customized atelier configurator on the page to design their bespoke commission.`;

      const response = await getAI().models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          ...formattedHistory,
          { role: "user", parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Concierge Chat Error:", error);
      res.status(500).json({ error: "Madame Celeste is briefly away examining a rare sapphire parcel. Please retry shortly." });
    }
  });

  // Serve static files in production setup or Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

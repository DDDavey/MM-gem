import { BrandWorkbook } from "./types";

export const BRAND_PRESETS: Record<string, { name: string; niche: string; pricePoint: string; usp: string; workbook: BrandWorkbook }> = {
  yunjin: {
    name: "Yun Imperial Atelier",
    niche: "Nanjing Yunjin Brocade & Bespoke Gold-Thread Tech Folios",
    pricePoint: "High-Ticket Heritage ($1,200 - $4,500)",
    usp: "Sourced from the last master wood-shaft weavers of Nanjing. Integrated with pure 24K gold foil threads and real peacock feather filaments, hand-lined with Italian full-grain vegetable-dyed leather, custom-fitted for American iPhone, iPad, and MacBooks.",
    workbook: {
      brandName: "Yun Imperial Atelier",
      phase1: {
        avatar: {
          name: "Design & Culture Collector Austin",
          demographics: "Male/Female/Non-binary, 35-58, Silicon Valley tech executive, architect, or creative director, HNW ($350k+ income), resides in San Francisco / New York.",
          bio: "Austin uses his iPad and MacBook Pro for daily high-level client pitches and executive design approvals. He carries plain leather sleeves but wants something that is a true conversation piece—representing ultimate cultural provenance, historic art, and extreme tactile quality. He appreciates beautiful textiles and wants an everyday talisman that protects his essential tech with imperial silk nobility.",
          motivations: [
            "Securing a completely unique conversation piece for daily executive settings",
            "Sponsoring and preserving dying global UNESCO craftsmanship heritages",
            "Protecting essential daily tech with the highest luxury tactile experience"
          ],
          objections: [
            "Tech compatibility: Will his next-generation Apple MacBook or iPhone fit perfectly without sliding?",
            "Silk durability: Will Nanjing Yunjin's delicate gold-wrapped silk threads snag or fray in a daily commuter bag?",
            "Authenticity anxiety: Is this real master-loom Nanjing Yunjin with natural peacock feathers or a cheap modern machine jacquard weave?"
          ],
          purchasingTriggers: [
            "Uncompromising video walk-through demonstrating individual snag-resistant satin weaving locks",
            "Certified UNESCO legacy seal with serial-numbered artisan weaver registry coordinates",
            "Interactive multi-model device dimensional fitter showing a millimeter-perfect glove fit for Apple devices"
          ]
        },
        brandVoice: {
          archetype: "Keeper of Imperial Dynasties and Silicon Sagas",
          toneKeywords: ["Imperial", "Masterwork", "Vat-Dyed", "Millennial-Loom", "Luster", "Glove-Fit"],
          copyRules: [
            "Never use mass-market terms like 'fancy', 'lifestyle casing', 'ethnic print', or 'affordable luxury'. Use 'Imperial provenance', 'millennial-loom standard', or 'tactile shield'.",
            "Do NOT offer 'coupon codes' or 'clearance price drops'. Use 'Atelier registry allotment' or 'curator commission preference'.",
            "Describe the integration with tech reverently: don't say 'this fits an iPad', say 'seamlessly cradles your digital canvas in 24k gold-wrapped silk splendor'."
          ],
          examplePhrasings: [
            "Say: 'Register your device commission with our master weaver.' instead of 'Buy our iPad sleeve online.'",
            "Say: 'Woven over eighty days on historic dual-man wood-looms.' instead of 'Handmade silk bag.'",
            "Say: 'A majestic dialogue between ancient luster and modern digital canvas.' instead of 'A highly protective tech accessory.'"
          ]
        },
        trustAnchors: [
          {
            title: "UNESCO Heritage Registry",
            description: "Each tech folio features a physical certified weaver signature stamp and registry coordinate verifying its loom origin from the quiet workshops of Nanjing.",
            badgeIcon: "Shield"
          },
          {
            title: "24K Gold & Peacock Fiber Assay",
            description: "All designs ship with verified lab fiber dossiers proving the integration of genuine 24-karat gold-foil hand-wound threads and natural peacock tail barbules.",
            badgeIcon: "Award"
          },
          {
            title: "Snag-Free Commute Warranty",
            description: "Our proprietary weave-locking seal treats the final brocade surface. Includes lifetime replacement of any accidental silk thread snagging.",
            badgeIcon: "Trunk"
          }
        ],
        uvpStatement: {
          mainHook: "Imperial Armor for Your Daily Canvas",
          subtext: "Millennial-loom Nanjing Yunjin Brocade, woven with hand-drawn gold wires, peacock feathers, and certified French silk, hand-stitched into pristine tech folios.",
          ctaText: "Commission Your Folio",
          secondaryText: "Millimeter-fitted for Apple hardware. Includes registered global express dispatch and signature delivery."
        }
      },
      phase2: {
        navigation: {
          primary: ["The Weaving Ritual", "MacBook Folios", "iPhone Courtyard Slips", "UNESCO Legacy Charter"],
          secondary: ["Device Sizing Configurator", "Golden-Thread Registry", "Consult with a Curator"],
          footerMenu: ["Loom Origin Dossiers", "Silk Snag-Treatment Care", "Corporate Executive Commissions", "Secure Courier Protocol"]
        },
        buyerJourney: [
          {
            step: "Loom Entrance Desk",
            userAction: "Austin lands on the homepage from a premium tech/design newsletter. He wants to see that this is a highly rare Chinese craft combined with pristine modern tech ergonomics.",
            croOptimization: "High-contrast hero showcasing the massive 15-foot double-shaft wood loom, with an interactive 'UNESCO legacy badge' explaining Yunjin's 1600-year history."
          },
          {
            step: "Device Fitter Evaluation",
            userAction: "He explores the MacBook tech folio, questioning if it has enough padding and if his device model will snag.",
            croOptimization: "Display an interactive 'Millimeter-Glove Specurator' where the user selects their exact MacBook or iPad model, displaying high-end cross-sections showing internal leather bumpers and snag-resistant micro-wool lining."
          },
          {
            step: "Loom Sequence Selection",
            userAction: "He chooses the weave pattern (e.g. Imperial Dragon Scale or Golden Cloud Swirl) and device year.",
            croOptimization: "Provide a live timeline showing the 80-day master loom schedule, indicating exactly which week his customized piece will be hand-joined with the Italian leather."
          },
          {
            step: "Secure High-Ticket Checkout",
            userAction: "Austin puts down $1,800 USD for a custom folio case.",
            croOptimization: "Replace traditional credit card fields with secure digital certificates and explicit adult signature delivery protocol, with an options checkbox for private custom monogram engraving."
          }
        ],
        pdpWireframe: [
          {
            blockName: "The 3D Tactile Weave Interactor",
            layoutPosition: "Left Screen Column",
            keyElements: [
              "1000% dynamic zoom revealing gold foil thread spiraling",
              "Daylight-to-Noon luster slider showing color shifts under office fluorescent vs natural sunlight",
              "Behind-the-woven-curtain cross section of internal impact-resistant wool core"
            ],
            psychologicalReasoning: "Overcomes the tactile online purchase friction by emphasizing Nanjing Yunjin's unique optical chameleon-like property (which changes colors depending on the light angle)."
          },
          {
            blockName: "Device Armour Fitter Registry",
            layoutPosition: "Directly Above Purchase CTA",
            keyElements: [
              "Apple Device Model selector with millimeter dimensions",
              "Premium bumper security detail (internal natural latex corners)",
              "Waterproofing and Snag-Resistant certificate check"
            ],
            psychologicalReasoning: "Neutralizes the 'snagging and fitment' doubts right before checkout, making him feel that his laptop is absolutely secure."
          },
          {
            blockName: "Atelier Weaver Card",
            layoutPosition: "Sticky Add-to-bag Companion Block",
            keyElements: [
              "Loom registry certificate tracker",
              "Direct connection to the Nanjing weaving curator",
              "Free return fitment request form with pre-paid courier label"
            ],
            psychologicalReasoning: "Acts as a safety shield at the high-friction point of purchase, eliminating device-fit and snag worries."
          }
        ]
      },
      phase3: {
        homepageHero: {
          headline: "Imperial Splendor Forged for Modern Canvases",
          introParagraph: "We believe a luxury device sleeve should carry the weight of empires. Our folios are hand-woven in Nanjing on dual-man ancient wood-looms using 24k gold threads and genuine peacock feathers, then hand-joined with premium full-grain Italian leather.",
          whyUsSnippet: "While generic tech cases are stamped in mechanical plastic factories, Yun Imperial Atelier preserves the world's most sophisticated silk-weaving art. Our master weavers spend an entire day producing just two inches of our signature brocade."
        },
        productCopywriting: {
          heirloomName: "The Yunjin Dragon-Scroll MacBook Sleeve",
          emotionalDescription: "Sought by those who navigate the modern world but revere historical artistry. Handcrafted to cocoon your Apple MacBook Pro, this masterpiece wraps your everyday tech canvas in the majestic luster of Imperial Nanjing Yunjin—a UNESCO-protected fabric historically reserved exclusively for Chinese emperors.",
          craftsmanshipDescription: "The silk surface is hand-woven by two master-artisans sitting atop a fifteen-high timber loom, interlacing solid silk fibers with hand-beaten gold wire. The case features internal anti-shock wool bumpers and a quiet double-magnet seal to prevent any magnetic interference with your device's motherboard.",
          specifications: [
            "Hand-woven Nanjing Cloud Brocade (Yunjin Silk)",
            "Weft: 24-Karat Pure Gold Foil Wrapped Silk Filaments",
            "Embroidery: Authentic Iridescent Peacock Tail Barbules",
            "Lining: Custom Water-Resistant Swiss Micro-Wool Interior",
            "Structure: Hand-Stitched French Calfskin Leather Trim"
          ]
        },
        storyPages: {
          aboutUs: {
            title: "Two Masters, One Loom",
            founderQuote: "We do not manufacture tech sleeves; we build tactile cathedrals for modern instruments.",
            storyText: "Our atelier represents an unprecedented alliance. In local Nanjing courtyards, our master weavers operate complex wooden-shaft looms unchanged since the Ming Dynasty. These historic brocades are then flown to our Florence workshop, where master leather-smiths bind the silk inside deep-milled vegetable calfskin. The result is the ultimate dialogue between 1600 years of Eastern texture and Western high-performance design."
          },
          authenticityEthics: {
            title: "Guaranteed Imperial Provenance",
            guaranteeText: "Every Yun Imperial Folio is registered under a government-authenticated Nanjing Brocade Association certificate. We guarantee that your silk is woven purely on manual timber looms—never automated industrial machines—and that our weavers are paid fair-trade master-wages in modern studios.",
            sourcingEthicsText: "We strictly utilize naturally shed peacock feathers and responsibly sourced non-harmful silk harvests. Our precious gold foil is recycled from ethical sovereign bank deposits."
          }
        }
      },
      phase4: {
        urgencyStrategy: {
          textTemplate: "Limited Loom Allocation Sourcing",
          visualRepresentation: "We have only 3 active loom slots remaining for handcrafting this pattern during the current textile cycle.",
          croDefense: "Avoids cheapening countdown timers. By explaining that a master wood-loom only produces two inches of silk per day, Austin understands the physical bottleneck of luxury, heightening its desirability."
        },
        checkoutSecurity: {
          securityBadges: [
            "UNESCO Crafts Registry Token",
            "Nanjing Brocade Association Certification Seal",
            "Armored Secure Shipping Vault Delivery"
          ],
          microcopy: "Acquire in complete confidence. If your device thickness alters after ordering, our atelier provides automated return courier pick-up and custom resizing within 14 days."
        },
        exitIntent: {
          headline: "Enter The Yun Imperial Ledger",
          incentiveText: "Join our private quarterly archive. Register is limited. Members receive first-priority reservation slots for upcoming master-weaver loom rotations and a $100 credit toward their initial customized folio commission.",
          ctaText: "Enroll in the Ledger",
          retentionStrategy: "Secures top-of-funnel customer emails by offering exclusive priority loom invitations rather than standard cheap retail discounts."
        }
      },
      phase5: {
        jsonLdSchema: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "The Yunjin Dragon-Scroll MacBook Sleeve",
  "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  "description": "Luxurious, hand-woven Nanjing Yunjin Cloud Brocade MacBook sleeve crafted with 24k gold threads, natural peacock feathers, and full-grain Italian leather.",
  "brand": {
    "@type": "Brand",
    "name": "Yun Imperial Atelier"
  },
  "offers": {
    "@type": "Offer",
    "price": "1800",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder",
    "url": "https://yunimperial.com/products/dragon-scroll-macbook-sleeve"
  }
}`,
        performancePlan: "To display the organic chameleon luster of gold thread and peacock feather silk without screen delay, utilize progressive CSS-masked WebP textures with multi-handshake global CDN. Implement pre-fetching on catalog detail views.",
        speedOptimizations: [
          "Dynamic high-DPI image source-sets mapping 24k gold luster under variable mobile screen brightness",
          "Aesthetic WebGL rendering loops for brocade progressive loading",
          "Deferred render loops on interactive loom wireframe layouts"
        ]
      }
    }
  },
  aurelia: {
    name: "Aurelia Atelier",
    niche: "Haute Joaillerie & Ethical Bespoke GIA Diamonds",
    pricePoint: "High-End Luxury ($2,000 - $15,000+)",
    usp: "Conflict-free tracked diamonds verified by Swiss Blockchain, 18K recycled gold, lifetime master-artisan warranty.",
    workbook: {
      brandName: "Aurelia Atelier",
      phase1: {
        avatar: {
          name: "Heirloom Connoisseur Sophia",
          demographics: "Female, 34-55, HNW Household ($250k+ income), Art & Design enthusiast, values provenance over simple brand logo prestige.",
          bio: "Sophia is celebrating a major professional milestone and wants a permanent, custom token to commemorate it. She refuses mall jeweler mass-production. She wants custom engineering, absolute gemstone security (she has nightmares about stones falling out), and demands pristine, certifiable ethics.",
          motivations: [
            "Commemorating personal status and independent success",
            "Sourcing a wearable sculpture with a rich artistic backstory",
            "Generational investment—creating a piece that is proudly passed down"
          ],
          objections: [
            "Gemstone safety: How can she trust the prongs are meticulously set?",
            "Ethical anxiety: Is she inadvertently sponsoring global exploitation?",
            "Digital disconnect: Buying high-ticket online without feeling the metal weight"
          ],
          purchasingTriggers: [
            "Ultra-high-definition interactive rendering of the master artisan's workbench",
            "Instant access to full, downloadable GIA lab certificates and transparency trail",
            "A personal video message from the master bench-jeweller detailing the ring's custom setting process"
          ]
        },
        brandVoice: {
          archetype: "Heritage Storyteller with Swiss Precision",
          toneKeywords: ["Bespoke", "Revered", "Atelier", "Engineering", "Pristine", "Heirloom"],
          copyRules: [
            "Do NOT use words like 'Savings', 'Bargain', 'Cheap', or 'Discount'. Use 'Appraisal credit' or 'Acquisition value'.",
            "Never sound rushed. Use measured, graceful passive-to-active flows that convey patient mastery.",
            "Describe mechanics elegantly: do not say 'the diamond sits in gold', say 'meticulously cradled in hand-sculpted 18k solid gold prongs'."
          ],
          examplePhrasings: [
            "Say: 'Acquire your commission with custom terms.' instead of 'Buy with finance.'",
            "Say: 'Sculpted for a lifetime of devotion.' instead of 'Durable material.'",
            "Say: 'A personal tribute to your journey.' instead of 'Wear it on occasions.'"
          ]
        },
        trustAnchors: [
          {
            title: "Swiss Blockchain Sourcing",
            description: "Track your diamond’s absolute provenance from mine-of-origin to our atelier, backed by immutable digital records.",
            badgeIcon: "Shield"
          },
          {
            title: "GIA Laser-Engraved Grading",
            description: "All solitaire commissions are shipped with physical GIA Laboratory Certificates and verified microscope-aligned serial numbers.",
            badgeIcon: "Award"
          },
          {
            title: "The Lifetime Bench Guarantee",
            description: "Complimentary annual prong-tightening checks, ultrasonic cleaning, and lifelong structural warranty by our master jewelers.",
            badgeIcon: "Trunk"
          }
        ],
        uvpStatement: {
          mainHook: "Sculpted Proof of Your Devotion",
          subtext: "Artisan-engineered fine diamonds, tracked by Swiss blockchain, and hand-forged in 100% recycled 18-karat gold.",
          ctaText: "Commission Your Heirloom",
          secondaryText: "Includes fully insured courier door-to-door, complimentary GIA appraisal value, and custom ring sizing."
        }
      },
      phase2: {
        navigation: {
          primary: ["The Commission Process", "Solitaire Rings", "Atelier Archive", "Ethics Charter"],
          secondary: ["Shop GIA Loose Diamonds", "Artisan Fine Bands", "Book Concierge Consultation"],
          footerMenu: ["The Swiss Ledger", "Sizing & Fit Guide", "Lifetime Concierge Care", "Insured Shipping Protocol"]
        },
        buyerJourney: [
          {
            step: "Homepage Arrival",
            userAction: "Sophia lands via luxury curated editorial. She wants to see immediately that this is highly bespoke, expensive, and deeply values ethical transparency.",
            croOptimization: "High-contrast hero section with heavy serif display typography, zero discount popups, showcasing the Swiss blockchain badge and direct founder trust statement."
          },
          {
            step: "PDP Blueprint Exploration",
            userAction: "She browses a specific signature solitaire ring, inspecting close-up prongs and diamond angles.",
            croOptimization: "Place a 'Meet Your Artisan' drawer directly above the main Add to Bag. Display GIA micro-specs in tabular format paired with high-definition rendering of the actual stone."
          },
          {
            step: "Atelier Assembly Engagement",
            userAction: "She selects her custom ring setting and stone size.",
            croOptimization: "Display an interactive 'Master Bench Timeline' showing estimated shipping dates based on active orders, instilling status of exclusivity."
          },
          {
            step: "Luxury checkout",
            userAction: "Proceeds to input payment for a $8,500 purchase.",
            croOptimization: "Replace traditional credit card fields with high-security bank-to-bank wire options with a dedicated $150 wiring grant, alongside verified 256-bit Swiss cryptographic seals."
          }
        ],
        pdpWireframe: [
          {
            blockName: "The Masterpiece Carousel",
            layoutPosition: "Top Left (Split screen on desktop)",
            keyElements: [
              "300% Macro focus shot on prong alignment",
              "Video snippet showing light dispersion under real sunlight",
              "Interactive model scaling relative to hands"
            ],
            psychologicalReasoning: "Eradicates the 'digital disconnect' by providing tactile micro-visuals that reveal exact artisanal control."
          },
          {
            blockName: "The Prestige Specs Table",
            layoutPosition: "Directly Below Hero Pricing",
            keyElements: [
              "GIA Registry Identifier input",
              "Blockchain certificate hash link",
              "Custom setting weight and gold purity proof"
            ],
            psychologicalReasoning: "Appeals to high-end rationality; Sophia can confirm exact gemstone pedigree immediately before checkout."
          },
          {
            blockName: "Artisan Confidence Card",
            layoutPosition: "Sticky Add-to-bag Companion Block",
            keyElements: [
              "Prong security assurance highlight",
              "Direct phone concierge contact link",
              "Overnight insured shipping transit guarantee"
            ],
            psychologicalReasoning: "Acts as a safety shield at the high-friction point of purchase, eliminating gemstone loss anxiety."
          }
        ]
      },
      phase3: {
        homepageHero: {
          headline: "Elegance Forged for the Generations",
          introParagraph: "We believe a diamond ring is more than fine jewelry. It is an enduring testament to milestones, crafted on solitary workbenches using fully certified conflict-free origin stones and recycled precious metals.",
          whyUsSnippet: "Unlike mall jewelers who rely on rapid industrial cast-molding, Aurelia Atelier is home to three generational artisans who hand-sculpt, polish, and custom-prick every setting bead."
        },
        productCopywriting: {
          heirloomName: "The Aurelia Cathedral Solitaire",
          emotionalDescription: "Sought by those who understand the silent legacy of milestones. Handcrafted to resemble the elegant arch of historic Swiss cathedrals, this masterpiece suspends your hand-selected GIA diamond in a breathtaking position, flooding each facet with pure, unmitigated light.",
          craftsmanshipDescription: "The band is drawn by hand through hardened steel plates to compile extreme density, ensuring the gold maintains its posture for centuries. Solitaires are hand-secured with four robust wire prongs that wrap with whisper-soft precision around the brilliant crown.",
          specifications: [
            "18K Recycled Sovereign Yellow Gold",
            "1.85ct Round Brilliant Ideal-Cut GIA Diamond",
            "Color grade: F (Exceptionally Rare Colorless)",
            "Clarity grade: VVS1 (No inclusions visible under 10x magnification)",
            "Prong setting: High-rise double platinum cathedral prongs"
          ]
        },
        storyPages: {
          aboutUs: {
            title: "Generations on the Bench",
            founderQuote: "We do not cast gold; we sculpt heritage. Each piece carries the distinct touch of the artisan who carved its soul.",
            storyText: "Aurelia Atelier was founded to counter the hyper-industrialization of the fine jewelry trade. In our quiet Zurich workshop, we preserve techniques passed down from master to apprentice over three centuries. Every file stroke, every hammer blow, is guided by an unwavering eye for heirloom immortality."
          },
          authenticityEthics: {
            title: "The Ethics of Splendor",
            guaranteeText: "Every diamond above 0.5 carats selected at Aurelia is accompanied by a lifetime blockchain ledger tracing its mine-of-origin. We promise our diamonds did not fund military regimes, violence, or environmental devastation.",
            sourcingEthicsText: "We strictly utilize 100% post-consumer recycled gold and platinum, eliminating the need for destructive raw mining practices. Our carbon fingerprint is neutralized through registered forestry programs in the Swiss Alps."
          }
        }
      },
      phase4: {
        urgencyStrategy: {
          textTemplate: "Limited Atelier Bench Sourcing",
          visualRepresentation: "We have only 3 active artisan bench slots remaining for June fulfillment. Average creation is 21 days from signature approval.",
          croDefense: "Avoids pressure urgency like 'HURRY! BUY NOW!', which degrades luxury. Instead, frames availability as a natural byproduct of elite craftsman speed constraints."
        },
        checkoutSecurity: {
          securityBadges: [
            "Swiss Lloyds Insured transit",
            "Verified GIA laboratory verification badge",
            "Federal Hallmarks Certification of gold purity"
          ],
          microcopy: "Acquire with safety. Every transit is fully insured, requiring an adult signature upon arrival at your secure destination."
        },
        exitIntent: {
          headline: "Enter The Aurelia Archive",
          incentiveText: "Join our private quarterly roster. Roster members receive exclusive access to raw conflict-free rough stone allocations and a $150 credit towards their initial bespoke setting commission.",
          ctaText: "Enroll in the Archive",
          retentionStrategy: "Captures top-funnel buyers by offering highly exclusive early gemstone commissions rather than a cheap '10% off coupon code'."
        }
      },
      phase5: {
        jsonLdSchema: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "The Aurelia Cathedral Solitaire Ring",
  "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  "description": "High-end, GIA-certified diamond cathedral solitaire engagement ring handcrafted in 18k recycled sovereigns yellow gold.",
  "brand": {
    "@type": "Brand",
    "name": "Aurelia Atelier"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "8500",
    "highPrice": "14500",
    "offerCount": "2",
    "price": "8500",
    "availability": "https://schema.org/PreOrder",
    "seller": {
      "@type": "JewelryStore",
      "name": "Aurelia Atelier"
    }
  }
}`,
        performancePlan: "To display perfect diamond clarity and gold luster without delay, utilize next-gen progressive WebP textures with multi-handshake global CDN. Implement pre-fetching on catalog grids.",
        speedOptimizations: [
          "Dynamic image sizing depending on screen DPI (1x, 2x, 3x for high-resolution premium screens)",
          "CSS-based shadow gradients instead of embedded images mapping diamond luminescence",
          "Deferred render loops on interactive non-above-the-fold wireframe graphics"
        ]
      }
    }
  },
  vespera: {
    name: "Vespera Crypt",
    niche: "Gothic High-Luxury & Dark Rhodium Handcast Filigree",
    pricePoint: "Premium Artisanal ($1,500 - $8,000)",
    usp: "Deep oxidized 18K gold Filigree, raw untamed black diamonds, celestial tracking alignment charts.",
    workbook: {
      brandName: "Vespera Crypt",
      phase1: {
        avatar: {
          name: "The Nocturnal Romantic Julian",
          demographics: "Male/Female/Non-binary, 28-45, designer/architect or creative director, high discretionary income, loves dark counter-culture elegance.",
          bio: "Julian is seeking an wedding band or signature talisman that rejects classic commercial white-room wedding aesthetics. Understated, mysterious, yet crafted to absolute luxury standards. They suspect cheap knockoffs and want deep historical alloy secrets with real certification.",
          motivations: [
            "Expressing a deep, non-traditional romantic union",
            "Finding high jewelry that aligns with a curated avant-garde dark design sense",
            "Obtaining hand-engraved, relic-tier pieces with unique metallurgical weight"
          ],
          objections: [
            "Will the black rhodium coating fade back to generic white gold?",
            "Is gothic jewelry just costume-tier or real certified 18k gold & high-grade black diamonds?",
            "Can I get a custom engraving that has actual historical fidelity?"
          ],
          purchasingTriggers: [
            "Full microscopic metallurgical composition guarantees of our custom formulation dark gold",
            "An interactive previewer for historical Old World custom runic engraving options",
            "A personal narrative detailing the hand-carved wax mold process used for every piece"
          ]
        },
        brandVoice: {
          archetype: "Mystical Poet and Alchemist",
          toneKeywords: ["Nocturnal", "Talisman", "Alchemical", "Filigree", "Obsidian", "Sovereign"],
          copyRules: [
            "Avoid generic words like 'trendy', 'cool', 'rockstar', or 'affordable'.",
            "Reference rich architectural terms (Gothic arches, catacombs, celestial paths, oxidized depth).",
            "Speak of the jewel’s destiny as 'choosing the keeper' rather than 'selecting an Add to Cart item'."
          ],
          examplePhrasings: [
            "Say: 'A talisman destined to bind the shadow.' instead of 'Buy our unique ring designs.'",
            "Say: 'Hand-oxidized 18K blackened palladium' instead of 'Colored black gold plating.'",
            "Say: 'Initiate the rite of acquisition.' instead of 'Proceed to payment forms.'"
          ]
        },
        trustAnchors: [
          {
            title: "Alchemical Palladium Gold Purity",
            description: "No cheap electroplating. Our dark precious metals are forged through integrated 18K solid alloy oxidation.",
            badgeIcon: "Shield"
          },
          {
            title: "Natural Untreated Black Diamonds",
            description: "Every diamond block is naturally carbon-saturated, accompanied by state-authenticated carbon isotope testing charts.",
            badgeIcon: "Award"
          },
          {
            title: "Historical Filigree Warranty",
            description: "Free lifetime refurbishment of the custom blackened outer shadow layer, keeping your relic pristine.",
            badgeIcon: "Trunk"
          }
        ],
        uvpStatement: {
          mainHook: "Talismanic Monuments of Devotion",
          subtext: "Dark-alloyed 18K gold relics, hand-sculpted under night skies, and set with pristine certified deep black diamonds.",
          ctaText: "Acquire Your Relic",
          secondaryText: "Presented in hand-turned petrified wood cases with complimentary custom astronomical constellation mapping."
        }
      },
      phase2: {
        navigation: {
          primary: ["The Craft of Shadow", "Nocturnal Talismans", "Custom Alchemy Room", "Origin Ledger"],
          secondary: ["Raw Carbon Gemstones", "Mourning Rings", "Metallurgical Consultations"],
          footerMenu: ["The Relic Care Protocol", "Historical Filigree Guide", "Fully Insured Armored Transit"]
        },
        buyerJourney: [
          {
            step: "Ritual Entry",
            userAction: "Julian explores the dark, tactile landing layout. They want to instantly sense that this is a real luxury product, not cheap Halloween styling.",
            croOptimization: "High contrast dark design with deep charcoal textures, high-end photography of real hot-forge wax pours, with zero popups."
          },
          {
            step: "Talisman Detail Appraisal",
            userAction: "They inspect Vespera's signature skull-filigree micro-prongs and diamond dark luster.",
            croOptimization: "Provide a 'Metallurgical Blueprint' drawer that details the alloy proportions and hand-carving timeline above the main CTA."
          },
          {
            step: "Bespoke Engraving Projection",
            userAction: "They type custom initials for a runic look.",
            croOptimization: "A sleek real-time runic font generator overlay demonstrating custom engraving visual outcomes."
          },
          {
            step: "Secure Guild Checkout",
            userAction: "Inputting payment for a $4,800 custom oxidized commitment ring.",
            croOptimization: "High-security checkout with options for confidential bespoke checkout, framed with trust seals under lock-and-key design."
          }
        ],
        pdpWireframe: [
          {
            blockName: "The Relic Relational Zoom",
            layoutPosition: "Hero Left Split",
            keyElements: [
              "Macro-photographic video of alloy porosity and dark patina",
              "A slider comparing 1-year and 10-year natural wear sheen transitions"
            ],
            psychologicalReasoning: "Tackles Julian's primary fear that black gold will quickly rub away, demonstrating the beautiful organic lifecycle of deep-alloy blackening."
          },
          {
            blockName: "Alchemist Specifications Registry",
            layoutPosition: "Right Side Column",
            keyElements: [
              "Carbon origin tracking metadata",
              "18k gold sovereign weight in grams count",
              "Hand-chiseled seal validation marker"
            ],
            psychologicalReasoning: "Validates high-ticket cost with objective, certified lab data, showing deep-seated premium value."
          }
        ]
      },
      phase3: {
        homepageHero: {
          headline: "Artisanal Relics From the Void",
          introParagraph: "We specialize in the restoration of medieval gothic filigree craft. Every ring is handcast, hand-engraved, and alchemically alloyed with 18K recycled sovereign yellow gold and heavy dark palladium.",
          whyUsSnippet: "Mass jewelers stamp standard bands using massive hydraulic machinery. Vespera handcars master wax designs, capturing the glorious, irregular architecture of ancient stone and starry skies."
        },
        productCopywriting: {
          heirloomName: "The Vespera Cathedral Crypt Band",
          emotionalDescription: "Designed for those whose romance is eternal, unyielding, and runs beneath the surface of the ordinary world. The cathedral crypt band features intricately woven ribs crafted to copy the majestic vaulted ceilings of historic cathedrals, framing an untamed centerpiece.",
          craftsmanshipDescription: "The deep-shadow texture is obtained by hand-applying an alchemical palladium compound directly to the crevices of the solid yellow gold, followed by high-velocity hand burnishing. An untreated 2.0-carat obsidian black diamond is clasped securely in eight hand-split claw prongs.",
          specifications: [
            "18K Solid Gold fortified with 15% Deep-Alloy Palladium",
            "2.10ct Natural Untreated Heart-of-Carbon GIA Black Diamond",
            "Clarity: AAA Grade Carbon Purity",
            "Style: Eight-Claw High-Noon Reliquary Corona Setting",
            "Signature: Hand-chiseled alchemist certification hallmark"
          ]
        },
        storyPages: {
          aboutUs: {
            title: "Wax & Fire: Our Relic Origin",
            founderQuote: "We do not polish away character; we let the dark fire speak.",
            storyText: "Our founder, a medieval historian and master smith, launched Vespera in a converted cathedral foundry. Frustrated by the clinical, lifeless rows of generic jewelry store rings, they pioneered a proprietary long-wear 18k solid gold blackening alloy to bring texture, weight, and history back into high jewelry commissions."
          },
          authenticityEthics: {
            title: "Ethical Darkness",
            guaranteeText: "Our deep-black diamonds are ethically hand-extracted from monitored eco-alliances in Australia, ensuring minimal ecological damage.",
            sourcingEthicsText: "We refuse to use standard mercury chemical washes. Our metals are refined in zero-emissions sovereign laboratories, utilizing clean energy."
          }
        }
      },
      phase4: {
        urgencyStrategy: {
          textTemplate: "The Lunar Forge Cycle",
          visualRepresentation: "Only 4 custom commissions can be forged under the current moon phase to guarantee the metallurgical cooling density cycle.",
          croDefense: "Provides unique astronomical story value that justifies the high wait time, elevating wait-time from a hassle to an exclusive asset."
        },
        checkoutSecurity: {
          securityBadges: [
            "Armored Secure Shipping Vault Delivery",
            "Certified Chemical Certificate Assay Seal",
            "Historical Guild Trademark Registry"
          ],
          microcopy: "Acquire in complete confidence. If your relic requires a custom fit post-proposal, our guild will coordinate complimentary return courier collection."
        },
        exitIntent: {
          headline: "Enter the Secret Codex",
          incentiveText: "Join our private quarterly ledger. Register is limited. Roster members receive first selection on raw uncut black diamond shipments and priority forge scheduling slot approvals.",
          ctaText: "Enroll in the Codex",
          retentionStrategy: "Avoids cheapening the brand with standard discount percentages by giving authentic privilege access."
        }
      },
      phase5: {
        jsonLdSchema: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "The Vespera Cathedral Crypt Band",
  "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  "description": "Luxurious gothic dark rhodium and 18K blackened palladium heirloom filigree band featuring a natural GIA black diamond.",
  "brand": {
    "@type": "Brand",
    "name": "Vespera Crypt"
  },
  "offers": {
    "@type": "Offer",
    "price": "4800",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://vesperacrypt.com/products/cathedral-crypt-band"
  }
}`,
        performancePlan: "Implement dynamic level-of-detail asset mapping. Highly textured gothic filigree looks stunning in high resolutions. Render 3D filigree files progressively using WebGL canvas grids first.",
        speedOptimizations: [
          "Responsive high-retina responsive source sets optimized for deep luxury screen contrast",
          "Inline CSS shadows for gothic filigree depth instead of heavy graphic files",
          "Lazy frame loads on non-visible section visual outlines"
        ]
      }
    }
  }
};


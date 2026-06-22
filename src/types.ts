export interface Avatar {
  name: string;
  demographics: string;
  bio: string;
  motivations: string[];
  objections: string[];
  purchasingTriggers: string[];
}

export interface BrandVoice {
  archetype: string;
  toneKeywords: string[];
  copyRules: string[];
  examplePhrasings: string[];
}

export interface TrustAnchor {
  title: string;
  description: string;
  badgeIcon: string;
}

export interface UvpStatement {
  mainHook: string;
  subtext: string;
  ctaText: string;
  secondaryText: string;
}

export interface Phase1Data {
  avatar: Avatar;
  brandVoice: BrandVoice;
  trustAnchors: TrustAnchor[];
  uvpStatement: UvpStatement;
}

export interface NavigationStructure {
  primary: string[];
  secondary: string[];
  footerMenu: string[];
}

export interface BuyerJourneyStep {
  step: string;
  userAction: string;
  croOptimization: string;
}

export interface PdpWireframeBlock {
  blockName: string;
  layoutPosition: string;
  keyElements: string[];
  psychologicalReasoning: string;
}

export interface Phase2Data {
  navigation: NavigationStructure;
  buyerJourney: BuyerJourneyStep[];
  pdpWireframe: PdpWireframeBlock[];
}

export interface HomepageHero {
  headline: string;
  introParagraph: string;
  whyUsSnippet: string;
}

export interface ProductCopywriting {
  heirloomName: string;
  emotionalDescription: string;
  craftsmanshipDescription: string;
  specifications: string[];
}

export interface StoryPages {
  aboutUs: {
    title: string;
    founderQuote: string;
    storyText: string;
  };
  authenticityEthics: {
    title: string;
    guaranteeText: string;
    sourcingEthicsText: string;
  };
}

export interface Phase3Data {
  homepageHero: HomepageHero;
  productCopywriting: ProductCopywriting;
  storyPages: StoryPages;
}

export interface UrgencyStrategy {
  textTemplate: string;
  visualRepresentation: string;
  croDefense: string;
}

export interface CheckoutSecurity {
  securityBadges: string[];
  microcopy: string;
}

export interface ExitIntent {
  headline: string;
  incentiveText: string;
  ctaText: string;
  retentionStrategy: string;
}

export interface Phase4Data {
  urgencyStrategy: UrgencyStrategy;
  checkoutSecurity: CheckoutSecurity;
  exitIntent: ExitIntent;
}

export interface Phase5Data {
  jsonLdSchema: string;
  performancePlan: string;
  speedOptimizations: string[];
}

export interface BrandWorkbook {
  brandName: string;
  phase1: Phase1Data;
  phase2: Phase2Data;
  phase3: Phase3Data;
  phase4: Phase4Data;
  phase5: Phase5Data;
}

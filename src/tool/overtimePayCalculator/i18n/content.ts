import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type {
  BibliographyEntry,
  HowToStep,
  SEOSection,
  ToolLocaleContent,
} from "../../../types";
import type { OvertimePayCalculatorUI } from "../ui";

export interface OvertimeContentCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  ui: OvertimePayCalculatorUI;
  faq: { question: string; answer: string }[];
  howTo: HowToStep[];
  seo: SEOSection[];
  bibliography: BibliographyEntry[];
}

export function createOvertimeContent(
  copy: OvertimeContentCopy,
): ToolLocaleContent<OvertimePayCalculatorUI> {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    inLanguage: copy.locale,
  };

  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    seo: copy.seo,
    faq: copy.faq,
    bibliography: copy.bibliography,
    howTo: copy.howTo,
    schemas: [faqSchema, howToSchema, appSchema],
  };
}

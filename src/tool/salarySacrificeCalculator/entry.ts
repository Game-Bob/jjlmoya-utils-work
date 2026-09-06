import type { ToolLocaleContent, WorkToolEntry } from "../../types";
import type { SalarySacrificeCalculatorUI } from "./ui";
import { content as en } from "./i18n/en";
import { getLocalizedSalarySacrificeContent } from "./i18n/localized";

export type SalarySacrificeCalculatorLocaleContent =
  ToolLocaleContent<SalarySacrificeCalculatorUI>;

export const salarySacrificeCalculator: WorkToolEntry<SalarySacrificeCalculatorUI> =
  {
    id: "salary-sacrifice-take-home-calculator",
    icons: {
      bg: "mdi:bank-transfer-out",
      fg: "mdi:cash-sync",
    },
    i18n: {
      de: async () => getLocalizedSalarySacrificeContent("de"),
      en: async () => en,
      es: async () => getLocalizedSalarySacrificeContent("es"),
      fr: async () => getLocalizedSalarySacrificeContent("fr"),
      id: async () => getLocalizedSalarySacrificeContent("id"),
      it: async () => getLocalizedSalarySacrificeContent("it"),
      ja: async () => getLocalizedSalarySacrificeContent("ja"),
      ko: async () => getLocalizedSalarySacrificeContent("ko"),
      nl: async () => getLocalizedSalarySacrificeContent("nl"),
      pl: async () => getLocalizedSalarySacrificeContent("pl"),
      pt: async () => getLocalizedSalarySacrificeContent("pt"),
      ru: async () => getLocalizedSalarySacrificeContent("ru"),
      sv: async () => getLocalizedSalarySacrificeContent("sv"),
      tr: async () => getLocalizedSalarySacrificeContent("tr"),
      zh: async () => getLocalizedSalarySacrificeContent("zh"),
    },
  };

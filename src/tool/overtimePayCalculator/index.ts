import type { ToolDefinition } from "../../types";
import { overtimePayCalculator } from "./entry";

export * from "./entry";

export const OVERTIME_PAY_CALCULATOR_TOOL: ToolDefinition = {
  entry: overtimePayCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};

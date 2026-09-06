import type { ToolDefinition } from "../../types";
import { salarySacrificeCalculator } from "./entry";

export * from "./entry";

export const SALARY_SACRIFICE_TAKE_HOME_CALCULATOR_TOOL: ToolDefinition = {
  entry: salarySacrificeCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};

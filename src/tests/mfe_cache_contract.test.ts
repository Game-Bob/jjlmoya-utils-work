import { describe, expect, it } from "vitest";
import { getCacheControl, LONG_LIVED_ASSET_CACHE, SITEMAP_CACHE } from "../worker";

describe("MFE cache contract", () => {
    it("caches versioned assets and manifests for one year", () => {
        expect(getCacheControl("/_utilities/work/images/tool.webp")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/_utilities/work/styles/tool.css")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/en/utilities/categories/work/tool/manifest.json")).toBe(LONG_LIVED_ASSET_CACHE);
    });

    it("keeps sitemaps refreshable", () => {
        expect(getCacheControl("/_utilities/en/work/sitemap.xml")).toBe(SITEMAP_CACHE);
    });
});

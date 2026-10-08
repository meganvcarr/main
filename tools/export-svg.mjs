// Renders index.html in Chromium and converts the live DOM to SVG files
// with real <text> elements, so they import into Figma as editable layers.
// Usage: npm install && npm run export
import { chromium } from "playwright-core";
import { build } from "esbuild";
import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const bundle = await build({
  stdin: {
    contents: `import { documentToSVG, inlineResources } from "dom-to-svg";
      window.__toSVG = async () => {
        const svg = documentToSVG(document);
        await inlineResources(svg.documentElement);
        return new XMLSerializer().serializeToString(svg);
      };`,
    resolveDir: root,
  },
  bundle: true,
  format: "iife",
  write: false,
});

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});

for (const [name, width] of [["desktop", 1440], ["mobile", 390]]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(pathToFileURL(path.join(root, "index.html")).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.addScriptTag({ content: bundle.outputFiles[0].text });
  const svg = await page.evaluate(() => window.__toSVG());
  const out = path.join(root, "figma", `endoverdose-${name}.svg`);
  await writeFile(out, svg);
  await page.screenshot({ path: path.join(root, "figma", `endoverdose-${name}.png`), fullPage: true });
  console.log("wrote", path.relative(root, out));
  await page.close();
}

await browser.close();

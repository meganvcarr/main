# End Overdose — website recreation

A recreation of [endoverdose.net](https://endoverdose.net/) for a school design project.
It's built so the design can be dragged straight into Figma.

## Get it into Figma

**Option A: drag and drop (no plugin needed)**

1. Download `figma/endoverdose-desktop.svg` (and `figma/endoverdose-mobile.svg` if you want the phone layout).
2. Drag the file onto your Figma canvas.
3. Every heading, paragraph and button label comes in as an **editable text layer** in Montserrat.
   Shapes, colors, rounded corners and icons come in as editable vectors.
4. Optional cleanup: select the imported group, then use *Frame selection* (Ctrl/Cmd + Alt + G)
   and *Ungroup* to work with individual sections.

The `.png` files next to the SVGs are screenshots to compare against.

**Option B: auto layout import with the html.to.design plugin**

If you want Figma auto layout (frames that resize like the website does), install the free
**html.to.design** plugin in Figma and import `index.html`, or this page once it's hosted
(for example on GitHub Pages).

## Edit the design in code

- `index.html` holds the page content, section by section.
- `styles.css` holds the styles. The colors and fonts at the top (`:root`) work like Figma styles.
  Change `--red` and the whole page updates.

After editing, regenerate the Figma files:

```bash
npm install
npm run export   # writes figma/*.svg and figma/*.png
```

The export uses Chromium through `playwright-core`. If it can't find a browser, set
`CHROMIUM_PATH` to your Chrome/Chromium executable.

## Notes

- Text content comes from End Overdose's public pages (mission, stats, chapters, campaign, donation tiers).
- Photos are placeholders labelled "Hero photo" and "Chapter photo". Drop real images into those frames in Figma.

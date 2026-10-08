# End Overdose — website recreation

A recreation of [endoverdose.net](https://endoverdose.net/) for a school design project.
It's built so the design can be dragged straight into Figma.

## Get it into Figma

**Option A: drag and drop (no plugin needed)**

1. Download a file from the `figma/` folder:
   - `endoverdose-home-desktop.svg`: homepage (2000px wide, same size as the reference screenshots)
   - `endoverdose-solution-desktop.svg`: About Us → Our Solution page
   - `endoverdose-home-mobile.svg` / `endoverdose-solution-mobile.svg`: phone layouts (390px wide)
2. Drag the file onto your Figma canvas.
3. Every heading, paragraph and button label comes in as an **editable text layer**, using the site's
   fonts (all free in Figma): **Tiny5** (pixel headlines and numbers), **Roboto Condensed** (menu, labels,
   buttons), **Roboto Mono** (body text), and **Lexend** (logo).
   Shapes, colors, rounded corners and icons come in as editable vectors.
4. Optional cleanup: select the imported group, then use *Frame selection* (Ctrl/Cmd + Alt + G)
   and *Ungroup* to work with individual sections.

The `.png` files next to the SVGs are screenshots to compare against.

**Option B: auto layout import with the html.to.design plugin**

If you want Figma auto layout (frames that resize like the website does), install the free
**html.to.design** plugin in Figma and import `index.html`, or this page once it's hosted
(for example on GitHub Pages).

## Edit the design in code

- `index.html` is the homepage and `solution.html` is the Our Solution page.
- `styles.css` holds the styles. The colors and fonts at the top (`:root`) work like Figma styles.
  Change `--red` and the whole site updates.

After editing, regenerate the Figma files:

```bash
npm install
npm run export   # writes figma/*.svg and figma/*.png
```

The export uses Chromium through `playwright-core`. If it can't find a browser, set
`CHROMIUM_PATH` to your Chrome/Chromium executable.

## Notes

- Text, colors and fonts are matched to screenshots of the live site.
- The pixel-art illustrations (naloxone box and cat) and the YouTube video are placeholders. Paste the real
  images into those spots in Figma. Media logos are recreated as styled text.

// Regenerates public/og.png (1200×630) and public/icon.png (512×512).
// Run: node scripts/make-images.mjs   (needs Playwright + Chromium installed)
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

import fs from "node:fs";
const mark = fs.readFileSync("public/logo-mark.svg", "utf8");
const markAt = (px) => mark.replace("<svg ", `<svg width="${px}" height="${px}" `);
const font = `Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`;

const og = `<html><head><style>html,body{margin:0;height:100%}</style></head><body style="background:#fff;font-family:${font};display:flex;">
  <div style="width:24px;background:#5b21b6"></div>
  <div style="padding:80px 90px;display:flex;flex-direction:column;justify-content:space-between;flex:1;background:linear-gradient(#f5f3ff,#fff)">
    <div style="display:flex;align-items:center;gap:18px;font-size:56px;font-weight:800;color:#111827;letter-spacing:-1px"><div style="width:64px;height:64px;border-radius:12px;overflow:hidden">${markAt(64)}</div><div><span style="color:#5b21b6">Hire</span>Gladd</div></div>
    <div style="font-size:68px;line-height:1.1;font-weight:800;color:#111827;letter-spacing:-1.5px;max-width:960px">We find your people. <span style="color:#5b21b6">You run your business.</span></div>
    <div style="font-size:30px;color:#4b5563">Hiring and office support for growing businesses</div>
  </div></body></html>`;

const icon = `<html><head><style>html,body{margin:0;height:100%}</style></head><body>${markAt(512)}</body></html>`;

const browser = await chromium.launch();
for (const [html, w, h, out] of [[og, 1200, 630, "public/og.png"], [icon, 512, 512, "public/icon.png"]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.setContent(html);
  await page.screenshot({ path: out });
  await page.close();
}
await browser.close();
console.log("Wrote public/og.png and public/icon.png");

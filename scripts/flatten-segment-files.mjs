// Runs after `next build` (see the "build" script in package.json).
//
// For fast client-side navigation, Next.js prefetches small per-segment data
// files such as `/contact/__next.contact.__PAGE__.txt`. The static export
// writes those files into nested folders (`contact/__next.contact/__PAGE__.txt`),
// so on a plain static host the prefetch requests return 404 and show up as
// console errors. This script copies each nested file to the flat, dotted
// name the browser actually requests. The originals are left in place.
import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
let copied = 0;

function flatten(segmentDir, currentDir) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      flatten(segmentDir, fullPath);
      continue;
    }
    const relative = path.relative(segmentDir, fullPath).split(path.sep).join(".");
    fs.copyFileSync(fullPath, `${segmentDir}.${relative}`);
    copied += 1;
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(fullPath, fullPath);
    else walk(fullPath);
  }
}

if (!fs.existsSync(outDir)) {
  console.error("flatten-segment-files: no out/ folder found. Run `next build` first.");
  process.exit(1);
}

walk(outDir);
console.log(`flatten-segment-files: wrote ${copied} prefetch file(s).`);

/**
 * theme-replace.cjs
 *
 * Replaces hardcoded hex color values in JSX style props with CSS variable
 * references. Runs ONLY on files in src/screens/ and src/App.jsx.
 *
 * Rules:
 *  - Replaces only colors known to be themed (backgrounds, text, borders).
 *  - Does NOT touch: red alerts (#DC2626), Google brand colors, fixed SVG
 *    design colors (wheat gold, leaf greens), or always-white SVG strokes.
 *  - Uses string.replaceAll so no regex multiline edge-cases.
 */

const fs   = require('fs');
const path = require('path');

// Order matters: longest / most specific first to avoid partial clashes.
const REPLACEMENTS = [
  // ── Backgrounds ────────────────────────────────────────────────────────────
  // Exact main bg
  ["background:'#F8F6F0'",    "background:'var(--cs-bg)'"],
  ['background:"#F8F6F0"',    "background:'var(--cs-bg)'"],

  // White card bg  (single + double quotes, lowercase + uppercase)
  ["background:'#FFFFFF'",    "background:'var(--cs-card)'"],
  ['background:"#FFFFFF"',    "background:'var(--cs-card)'"],
  ["background:'#ffffff'",    "background:'var(--cs-card)'"],
  ["background:'white'",      "background:'var(--cs-card)'"],
  ['background:"white"',      "background:'var(--cs-card)'"],
  ["background:'#fff'",       "background:'var(--cs-card)'"],
  ['background:"#fff"',       "background:'var(--cs-card)'"],

  // Alt card / section bg
  ["background:'#F0EDE6'",    "background:'var(--cs-card-alt)'"],
  ['background:"#F0EDE6"',    "background:'var(--cs-card-alt)'"],

  // Light accent bg (green tint sections)
  ["background:'#F0F7F2'",    "background:'var(--cs-accent-light)'"],
  ['background:"#F0F7F2"',    "background:'var(--cs-accent-light)'"],

  // ── Text colors ─────────────────────────────────────────────────────────────
  ["color:'#1A2416'",         "color:'var(--cs-text)'"],
  ['color:"#1A2416"',         "color:'var(--cs-text)'"],

  ["color:'#5A6B52'",         "color:'var(--cs-text-sec)'"],
  ['color:"#5A6B52"',         "color:'var(--cs-text-sec)'"],

  ["color:'#9CA3AF'",         "color:'var(--cs-text-muted)'"],
  ['color:"#9CA3AF"',         "color:'var(--cs-text-muted)'"],

  ["color:'#4A7C59'",         "color:'var(--cs-accent)'"],
  ['color:"#4A7C59"',         "color:'var(--cs-accent)'"],

  ["color:'#7A8C72'",         "color:'var(--cs-text-dim)'"],
  ['color:"#7A8C72"',         "color:'var(--cs-text-dim)'"],

  ["color:'#A0A8A0'",         "color:'var(--cs-text-dim)'"],
  ['color:"#A0A8A0"',         "color:'var(--cs-text-dim)'"],

  ["color:'#C4C0B8'",         "color:'var(--cs-icon-dim)'"],
  ['color:"#C4C0B8"',         "color:'var(--cs-icon-dim)'"],

  ["color:'#3d6b4a'",         "color:'var(--cs-accent-bold)'"],
  ["color:'#3D6B4A'",         "color:'var(--cs-accent-bold)'"],

  // ── stroke / fill for SVG icons that should theme ──────────────────────────
  ["stroke:'#1A2416'",        "stroke:'var(--cs-text)'"],
  ["fill:'#1A2416'",          "fill:'var(--cs-text)'"],

  // ── Border shorthand strings (solid color) ─────────────────────────────────
  // These appear as: border:'1px solid #E8E4D8' etc.
  // We replace only the color portion inside the string.
  // Using replaceAll on the full pattern is safe since the prefix is unique.
  ["solid #E8E4D8",           "solid var(--cs-border)"],
  ["solid #F0EDE6",           "solid var(--cs-border-soft)"],
  ["solid #F8F6F0",           "solid var(--cs-bg)"],

  // borderBottom / borderTop shorthand
  ["1px solid #F8F6F0",       "1px solid var(--cs-bg)"],
  ["1px solid #F0EDE6",       "1px solid var(--cs-border-soft)"],

  // ── Box shadows ────────────────────────────────────────────────────────────
  ["rgba(0,0,0,0.07)",        "var(--cs-shadow)"],
  ["rgba(0,0,0,0.06)",        "var(--cs-shadow)"],
  ["rgba(0,0,0,0.08)",        "var(--cs-shadow-md)"],
  ["rgba(0,0,0,0.10)",        "var(--cs-shadow-md)"],
];

const SCREEN_DIR = path.join('src', 'screens');
const OTHER_FILES = ['src/App.jsx'];

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [from, to] of REPLACEMENTS) {
    if (src.includes(from)) {
      src = src.replaceAll(from, to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, src);
    console.log('  Patched:', path.basename(filePath));
  } else {
    console.log('  No change:', path.basename(filePath));
  }
}

// Process all screens
fs.readdirSync(SCREEN_DIR)
  .filter(f => f.endsWith('.jsx'))
  .forEach(f => processFile(path.join(SCREEN_DIR, f)));

// Process other files
OTHER_FILES.forEach(f => processFile(f));

console.log('\nDone — all theme-able colors replaced with CSS variables.');

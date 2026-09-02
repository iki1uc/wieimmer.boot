// Liste deiner Module
const MODULES = [
  '1.js','2.js','3.js','4.js','5.js','6.js','7.js','8.js','9.js'
];

// Zufallsfunktion
function pickRandomModule() {
  const idx = Math.floor(Math.random() * MODULES.length);
  return MODULES[idx];
}

// Bedarfsfunktion (General-Beschleunigung)
function pickByNeed(state) {
  const need = state.pump + state.depth + state.drift;

  if (need < 10) return '1.js';
  if (need < 20) return '2.js';
  if (need < 30) return '3.js';
  if (need < 40) return '4.js';
  if (need < 50) return '5.js';
  if (need < 60) return '6.js';
  if (need < 70) return '7.js';
  if (need < 80) return '8.js';
  return '9.js';
}

// Hauptalgorithmus
function GBS9(state) {
  const randomPick = pickRandomModule();
  const needPick = pickByNeed(state);

  // 50% Zufall, 50% Bedarf
  return Math.random() < 0.5 ? randomPick : needPick;
}

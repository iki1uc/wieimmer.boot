// ============================================================
// respo_bridge.js · PRO
// 9hoch9 → Antwort-Brücke
// leicht · mystisch · hardware-ready
// ============================================================

import { computeAxes } from "./axes.js";
import { computeLAGE } from "./lage.js";
import { ghost5E } from "./ghost.js";
import { updateTmp } from "./tmp.js";

export function respo9hoch9(Phi, phi, phi2, phiinfty) {

    // 1) Achsen
    const axes = computeAxes(Phi, phi, phi2, phiinfty);

    // 2) Lage
    const lage = computeLAGE(Phi, phi, phi2, phiinfty);

    // 3) Ghost
    const ghost = ghost5E(Phi, phi, phi2, phiinfty);

    // 4) Mystery-Layer (sanft, nicht laut)
    const mystery = {
        drift: (Phi * 0.33 + phi2 * 0.11).toFixed(2),
        echo: (phi + phiinfty) % 7,
        trace: ((Phi + phi + phi2 + phiinfty) / 4).toFixed(2)
    };

    // 5) tmp aktualisieren (UI-friendly)
    updateTmp(
        lage.mini,
        axes,
        axes.bewegung,
        ghost.orbit
    );

    // 6) Antwort-Objekt
    return {
        cube: "9hoch9",
        axes,
        lage,
        ghost,
        mystery,
        tmp: "aktualisiert"
    };
}

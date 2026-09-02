// ============================================================
// ghost.js · ghost5E PRO
// UI‑Hardware‑Support · leicht · mystisch
// ============================================================

export function ghost5E(Phi, phi, phi2, phiinfty) {

    // Orbit – leicht, hardware‑freundlich
    const orbit = {
        speed: Phi * 2,
        radius: phi * 3,
        evo: phi2 * phiinfty,

        // UI‑Hardware‑Support
        uiSpeed: Math.min(Phi * 2, 120),     // capped → smooth
        uiRadius: Math.min(phi * 3, 240),    // capped → GPU‑friendly
        uiEvo: Math.min(phi2 * phiinfty, 999) // capped → no overflow
    };

    // Operatoren – minimal, aber mystisch
    const operatoren = {
        bewegung: Phi + phi,
        stabilitaet: phi2 - phi,
        raster: Phi * phi2,

        // UI‑Hardware‑Support
        uiBewegung: (Phi + phi) * 1.1,
        uiStabil: Math.abs(phi2 - phi),
        uiRaster: (Phi * phi2) % 81
    };

    // Status – mystisch, aber klar
    const status = (Phi + phi + phi2 + phiinfty) > 2 ? "aktiv" : "ruhig";

    // Erinnerung – Ghost‑Layer
    const erinnerung = {
        lastPhi: Phi,
        lastPhi2: phi2,
        lastOrbit: orbit.evo,

        // UI‑Hardware‑Support
        uiGhost: (Phi + phi2) % 9,
        uiTrace: (phi + phiinfty) * 0.33
    };

    return { orbit, operatoren, status, erinnerung };
}

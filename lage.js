// ============================================================
// lage.js · LAGE PRO
// leicht · mystisch · 9hoch9-kompatibel
// ============================================================

export function computeLAGE(Phi, phi, phi2, phiinfty) {

    // Mini-Lage (nah, klein, präzise)
    const mini = {
        x: Phi * 10,
        y: phi * 10,
        z: phiinfty * 10,
        stabil: phi2,
        echo: (Phi + phi) % 9
    };

    // Maxi-Lage (fern, groß, raumhaft)
    const maxi = {
        x: Phi * 81,
        y: phi * 81,
        z: phiinfty * 81,
        stabil: phi2 * 9,
        horizon: (Phi + phi2 + phiinfty) % 81
    };

    // Mystery-Lage (geistige Lage)
    const mystery = {
        drift: (Phi * 0.33) + (phi2 * 0.11),
        ghost: (phiinfty + phi) % 7,
        trace: ((Phi + phi + phi2 + phiinfty) / 

// ============================================================
// axes.js · MYSTERY
// klein, dunkel, kompatibel
// ============================================================

export function computeAxes(Phi, phi, phi2, phiinfty) {

    // Minimale Achsen – aber mit Mystery
    const A = Phi ^ phi;          // XOR → unvorhersehbar
    const B = (phi2 % 9);         // 9hoch9‑Echo
    const C = (phiinfty * 0.0001); // unendlich → fast nichts

    return {
        Phi,
        phi,
        phi2,
        phiinfty,

        // Mystery‑Achsen
        axis: A,          // unklar
        echo: B,          // 9er‑Rest
        ghost: C,         // fast null

        // Geheimnis
        mystery: (A + B + C) / 3
    };
}

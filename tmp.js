// ============================================================
// tmp.js · Mind-Stelle PRO
// speichert letzte Zustände für Orbit / Ghost / Lage / Achsen
// ============================================================

export const tmp = {
    lastPosition: null,
    lastAxes: null,
    lastMovement: null,
    lastOrbit: null,

    // Mind‑Echo (sanft, mystisch)
    echo: 0,
    drift: 0,
    trace: 0
};

export function updateTmp(position, axes, movement, orbit) {

    tmp.lastPosition = position;
    tmp.lastAxes = axes;
    tmp.lastMovement = movement;
    tmp.lastOrbit = orbit;

    // Mind‑Echo (leicht, UI‑freundlich)
    tmp.echo = (movement % 9);

    // Drift (sanft, hardware‑freundlich)
    tmp.drift = ((position.x + position.y + position.z) * 0.01).toFixed(2);

    // Trace (geistige Mittelung)
    tmp.trace = ((axes.Phi + axes.phi + axes.phi2 + axes.phiinfty) / 4).toFixed(2);
}

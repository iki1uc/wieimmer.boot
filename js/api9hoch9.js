// ============================================================
// api9hoch9 · PRO
// ULTRA-kompatibel mit allen Modulen in wieimmer.boot
// Kontextsensitiv · 9hoch9-aware · Engine-aware · Visio-aware
// ============================================================

import { NINEHOCH9 } from "./9^.js";
import { SCHABANAK } from "./schabanak.fusion.js";
import { UNRAUM } from "./ULTRA‑UNRAUM.js";
import { XROOM } from "./X.room.CORE.js";
import { XIN } from "./X.room.IN.js";
import { XOUT } from "./X.room.OUT.js";
import { respo9hoch9 } from "./respo_bridge.js";

export function api9hoch9(Phi, phi, phi2, phiinfty) {

    // Kontext erkennen
    const context =
        document.getElementById("cube") ? "ID" :
        document.getElementById("statusText") ? "INDEX" :
        location.pathname.includes("README") ? "DOCU" :
        "UNKNOWN";

    // 9hoch9 Matrix
    const M = new NINEHOCH9().build();

    // UNRAUM aktivieren
    UNRAUM.init();

    // X.room aktivieren
    XROOM.init();
    XIN.init();
    XOUT.init();

    // SCHABANAK aktivieren
    SCHABANAK.init();

    // API‑Objekt
    const api = {
        context,
        Phi,
        phi,
        phi2,
        phiinfty,

        matrix9: M.matrix,
        matrix3: XIN.MATRIX,

        unraum: UNRAUM.build(),
        xroom: XROOM,
        xin: XIN.holo(),
        xout: XOUT.holo(),

        schabanak: {
            pulse: SCHABANAK.pulse,
            prefetch: SCHABANAK.prefetch(),
            force: (r, c) => SCHABANAK.force(r, c)
        },

        respo: respo9hoch9(Phi, phi, phi2, phiinfty)
    };

    return api;
}

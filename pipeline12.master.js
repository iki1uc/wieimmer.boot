
// ============================================================
// pipeline12.master.js · PRO
// 12‑Stufen‑Pipeline für wieimmer.boot
// verbindet Orbit → Fusion → Ghost → Lage → NAV
// ============================================================

import { api9hoch9 } from "./api9hoch9.js";
import { computeAxes } from "./axes.js";
import { ghost5E } from "./ghost.js";
import { computeLAGE } from "./lage.js";
import { CXR_ORBIT } from "./cxr.orbit.js";
import { FUSION9 } from "./fusion9.js";
import { NAV9 } from "./navigator9.js";

class PIPE12 {

    run(Phi, phi, phi2, phiinfty){

        // 1) API laden
        const api = api9hoch9(Phi, phi, phi2, phiinfty);

        // 2) Achsen
        const axes = computeAxes(Phi, phi, phi2, phiinfty);

        // 3) Ghost
        const ghost = ghost5E(Phi, phi, phi2, phiinfty);

        // 4) Lage
        const lage = computeLAGE(Phi, phi, phi2, phiinfty);

        // 5) Orbit
        const orbit = CXR_ORBIT.start(api.matrix9);

        // 6) Fusion
        const fusion = FUSION9.fuse(api.matrix9);

        // 7) NAV
        const nav = NAV9.build();

        // 8) Output‑Objekt
        return {
            api,
            axes,
            ghost,
            lage,
            orbit,
            fusion,
            nav
        };
    }

    renderAll(data){
        // 9) Orbit anzeigen
        if(window.ORBIT_UI){
            ORBIT_UI.render(data.orbit);
        }

        // 10) Fusion anzeigen
        if(window.FUSION9){
            FUSION9.render(data.fusion);
        }

        // 11) NAV anzeigen
        if(window.NAV9){
            NAV9.render(data.nav);
        }

        // 12) Ghost‑Scan anzeigen
        if(window.GHOST_UI){
            GHOST_UI.render(data.ghost);
        }
    }
}

window.PIPE12 = new PIPE12();

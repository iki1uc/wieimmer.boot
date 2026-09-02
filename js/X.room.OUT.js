// ============================================================
// X.room.OUT · PRO
// Ausgang-Raum für wieimmer.boot
// Kontextsensitiv · 9hoch9-aware · HOLO-output
// ============================================================

import { NINEHOCH9 } from "./9^.js";
import { SCHABANAK } from "./schabanak.fusion.js";
import { UNRAUM } from "./ULTRA‑UNRAUM.js";

export const XOUT = {

    ID: "X",
    SIGNATUR: "NC",
    LAGE: "CENTER",
    PORT: "OUT",
    RAW: "HOLO",
    OUTPUT: "HOLOGRAMM",

    MATRIX: null,
    CONTEXT: "none",

    init(){
        this.detectContext();

        const M = new NINEHOCH9();
        this.MATRIX = M.build().matrix;   // komplette 9x9

        console.log("X.room.OUT aktiv:", this.CONTEXT, "→ PORT:", this.PORT);
    },

    // Kontextdetektor
    detectContext(){
        if (document.getElementById("cube")) {
            this.CONTEXT = "ID";
            this.LAGE = "VISIO";
            this.ID = "OUT-ID";
            return;
        }

        if (document.getElementById("statusText") || document.getElementById("btnStart")) {
            this.CONTEXT = "INDEX";
            this.LAGE = "ENGINE";
            this.ID = "OUT-ENGINE";
            return;
        }

        if (location.pathname.includes("README")) {
            this.CONTEXT = "DOCU";
            this.LAGE = "DOCU";
            this.ID = "OUT-DOCU";
            return;
        }

        this.CONTEXT = "UNKNOWN";
        this.LAGE = "NONE";
        this.ID = "OUT-UNK";
    },

    // HOLO‑Output: 9x9 → Orbit → EVO → UNRAUM → SCHABANAK
    holo(){
        return {
            PORT: this.PORT,
            RAW: this.RAW,
            OUTPUT: this.OUTPUT,
            CONTEXT: this.CONTEXT,
            LAGE: this.LAGE,
            SIGNATUR: this.SIGNATUR,
            ID: this.ID,

            MATRIX9: this.MATRIX,
            ORBIT: ["q","u","i","o"],

            EVO: {
                QI: SCHABANAK.EVO?.QI ?? 0,
                IQQ: SCHABANAK.EVO?.IQQ ?? 0,
                REV: SCHABANAK.EVO?.rev ?? 0
            },

            UNRAUM: UNRAUM.build(),
            PREFETCH: SCHABANAK.prefetch()
        };
    }
};

// ============================================================
// X.room.IN · PRO
// Eingang-Raum für wieimmer.boot
// Kontextsensitiv · 9hoch9-aware · HOLO-ready
// ============================================================

import { NINEHOCH9 } from "./9^.js";
import { SCHABANAK } from "./schabanak.fusion.js";
import { UNRAUM } from "./ULTRA‑UNRAUM.js";

export const XIN = {

    ID: "X",
    SIGNATUR: "NC",
    LAGE: "CENTER",
    PORT: "IN",
    RAW: "CLEAN",
    HOLO: true,

    MATRIX: null,
    CONTEXT: "none",

    init(){
        this.detectContext();

        const M = new NINEHOCH9();
        this.MATRIX = this.extract3x3(M.build());

        console.log("X.room.IN aktiv:", this.CONTEXT, "→ PORT:", this.PORT);
    },

    // Kontextdetektor
    detectContext(){
        if (document.getElementById("cube")) {
            this.CONTEXT = "ID";
            this.LAGE = "VISIO";
            this.ID = "IN-ID";
            return;
        }

        if (document.getElementById("statusText") || document.getElementById("btnStart")) {
            this.CONTEXT = "INDEX";
            this.LAGE = "ENGINE";
            this.ID = "IN-ENGINE";
            return;
        }

        if (location.pathname.includes("README")) {
            this.CONTEXT = "DOCU";
            this.LAGE = "DOCU";
            this.ID = "IN-DOCU";
            return;
        }

        this.CONTEXT = "UNKNOWN";
        this.LAGE = "NONE";
        this.ID = "IN-UNK";
    },

    // 3x3 aus 9x9 extrahieren
    extract3x3(matrix){
        const out = [];
        for(let r=0; r<3; r++){
            const row = [];
            for(let c=0; c<3; c++){
                row.push(matrix.matrix[r][c]);
            }
            out.push(row);
        }
        return out;
    },

    // HOLO‑Modus: 3×3 → 9×9 → 81‑Orbit
    holo(){
        return {
            PORT: this.PORT,
            RAW: this.RAW,
            HOLO: this.HOLO,
            CONTEXT: this.CONTEXT,
            LAGE: this.LAGE,
            SIGNATUR: this.SIGNATUR,
            ID: this.ID,
            MATRIX3: this.MATRIX,
            UNRAUM: UNRAUM.build(),
            SCHABANAK: SCHABANAK.prefetch()
        };
    }
};

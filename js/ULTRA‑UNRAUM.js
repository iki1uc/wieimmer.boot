// ============================================================
// ULTRA‑UNRAUM.js
// Fusion aus ULTRA‑NC3×3.room + NC.math + PRE9×9 + Schabanak
// Kontextsensitiv · 9hoch9-aware · Engine-aware · Visio-aware
// ============================================================

import { SCHABANAK } from "./schabanak.fusion.js";
import { NINEHOCH9 } from "./9^.js";

export const UNRAUM = {

    name: "UNRAUM.unknown",
    context: "none",
    layer: 0,
    matrix: null,

    init(){
        this.detectContext();

        const M = new NINEHOCH9();
        this.matrix = M.build();

        console.log("ULTRA‑UNRAUM aktiv:", this.name, "→ Kontext:", this.context);
    },

    // Kontextdetektor
    detectContext(){
        // ID.html → Visio‑Cylinder
        if (document.getElementById("cube")) {
            this.context = "visio";
            this.name = "UNRAUM.visio";
            this.layer = 81;
            return;
        }

        // index.html → Engine‑Stoff
        if (document.getElementById("statusText") || document.getElementById("btnStart")) {
            this.context = "engine";
            this.name = "UNRAUM.engine";
            this.layer = 9;
            return;
        }

        // README → Dokumentation
        if (location.pathname.includes("README")) {
            this.context = "docu";
            this.name = "UNRAUM.docu";
            this.layer = 3;
            return;
        }

        this.context = "unknown";
        this.name = "UNRAUM.unknown";
        this.layer = 0;
    },

    // Ableitung aus N10–N90 (ersetzt alte Raum‑Definition)
    derive(n){
        const qi   = n % 9;
        const iqq  = n % 3;
        const octa = n % 8;

        return {
            N: n,
            NC: qi,
            H: iqq,
            B: qi * 2,
            T: qi * 3,
            ID: n * this.layer,
            RAW: this.prefetch()
        };
    },

    // PREFETCH‑Modus aus PRE9×9
    prefetch(){
        if(this.context === "engine") return "ULTRA-U";
        if(this.context === "visio")  return "ULTRA-VISIO";
        if(this.context === "docu")   return "ULTRA-DOCU";
        return "ULTRA-UNKNOWN";
    },

    // Neue Raum‑Matrix erzeugen
    build(){
        const out = [];

        for(let n=10; n<=90; n+=10){
            out.push(this.derive(n));
        }

        return out;
    }
};

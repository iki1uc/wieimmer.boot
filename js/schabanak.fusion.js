// ============================================================
// SCHABANAK · FUSION · PRO
// Fusion aus: NC.math + PRE9×9.math + ID‑Cylinder
// Kontextsensitiv · 9hoch9-aware · ULTRA-aware
// ============================================================

import { NINEHOCH9 } from "./9^.js";

export const SCHABANAK = {

    name: "SCHABANAK.unknown",
    context: "none",

    matrix: null,
    pulse: 0,

    init(){
        this.detectContext();

        const M = new NINEHOCH9();
        this.matrix = M.build();

        console.log("SCHABANAK FUSION aktiv:", this.name, "→ Kontext:", this.context);
    },

    // Kontextdetektor
    detectContext(){
        // ID.html → Visio‑Cylinder
        if (document.getElementById("cube")) {
            this.context = "visio";
            this.name = "SCHABANAK.visio";
            return;
        }

        // index.html → Engine‑Stoff
        if (document.getElementById("statusText") || document.getElementById("btnStart")) {
            this.context = "engine";
            this.name = "SCHABANAK.engine";
            return;
        }

        // README → Dokumentation
        if (location.pathname.includes("README")) {
            this.context = "docu";
            this.name = "SCHABANAK.docu";
            return;
        }

        this.context = "unknown";
        this.name = "SCHABANAK.unknown";
    },

    // 3‑9‑81 Puls
    updatePulse(dt){
        this.pulse = (this.pulse + dt*0.002) % (Math.PI*2);
        return this.pulse;
    },

    // Kraft aus NC.math + PRE9×9 + Cylinder
    force(r, c){
        const qi   = this.matrix.qi(r, c);
        const iqq  = this.matrix.iqq(r, c);
        const octa = this.matrix.octa[r][c];

        let base = qi + iqq + octa;

        // Kontextabhängige Kraft
        if(this.context === "engine"){
            base *= 2.0; // Engine = stärkste Kraft
        }
        if(this.context === "visio"){
            base *= 1.4; // Visio = mittlere Kraft
        }
        if(this.context === "docu"){
            base *= 0.7; // Doku = schwächste Kraft
        }

        return base;
    },

    // Cylinder‑Kraft (ID‑Cylinder PRO)
    cylinder(r, c){
        const f = this.force(r, c);

        return {
            topSpin:    Math.sin(this.pulse*1.4 + f*0.01) * 50,
            bottomSpin: Math.cos(this.pulse*1.4 + f*0.01) * -50,
            midPulse:   Math.sin(this.pulse*2.2 + f*0.02) * 25,
            gearPull:   Math.sin(this.pulse*3.1 + f*0.03) * 5,
            power:      f
        };
    },

    // PREFETCH‑Modus aus PRE9×9
    prefetch(){
        if(this.context === "engine") return "ULTRA-U";
        if(this.context === "visio")  return "ULTRA-VISIO";
        if(this.context === "docu")   return "ULTRA-DOCU";
        return "ULTRA-UNKNOWN";
    }
};

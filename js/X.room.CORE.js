// ============================================================
// X.room.CORE · PRO
// Kontextsensitiv · 9hoch9-aware · Engine-aware · Visio-aware
// ============================================================

import { SCHABANAK } from "./schabanak.fusion.js";
import { UNRAUM } from "./ULTRA‑UNRAUM.js";
import { NINEHOCH9 } from "./9^.js";

export const XROOM = {

    ID: "X",
    SIGNATUR: "NC",
    FUNKTION: "NAVIGATION",
    ACHSEN: ["6e", "x", "y", "t", "h", "b"],
    ORBIT: ["q", "u", "i", "o"],

    EVO: {
        QI: 0,
        IQQ: 0,
        upg: 0,
        upd: 0,
        rev: 0
    },

    MATRIX: null,
    CONTEXT: "none",

    init(){
        this.detectContext();

        const M = new NINEHOCH9();
        this.MATRIX = M.build();

        console.log("X.room.CORE aktiv:", this.CONTEXT);
    },

    // Kontextdetektor
    detectContext(){
        if (document.getElementById("cube")) {
            this.CONTEXT = "ID";
            this.FUNKTION = "VISIO-NAV";
            this.ID = "ID10";
            return;
        }

        if (document.getElementById("statusText") || document.getElementById("btnStart")) {
            this.CONTEXT = "INDEX";
            this.FUNKTION = "ENGINE-NAV";
            this.ID = "IDX9";
            return;
        }

        if (location.pathname.includes("README")) {
            this.CONTEXT = "DOCU";
            this.FUNKTION = "DOCU-NAV";
            this.ID = "DOC3";
            return;
        }

        this.CONTEXT = "UNKNOWN";
        this.ID = "UNK0";
    },

    // EVO aktualisieren
    evo(r, c){
        const qi   = this.MATRIX.qi(r, c);
        const iqq  = this.MATRIX.iqq(r, c);

        this.EVO.QI  = qi;
        this.EVO.IQQ = iqq;
        this.EVO.upg = qi + iqq;
        this.EVO.upd = qi * iqq;
        this.EVO.rev = (qi + iqq) % 8;

        return this.EVO;
    },

    // Raumdaten aus UNRAUM
    raum(){
        return UNRAUM.build();
    },

    // Kraft aus SCHABANAK
    kraft(r, c){
        return SCHABANAK.force(r, c);
    }
};

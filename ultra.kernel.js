class ULTRA_KERNEL {

    build(){
        const raw = window.NC9X9 || [];
        const out = [];

        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                const val = raw[r][c];

                row.push({
                    r, c,
                    val,
                    qi: AXES.qi(r,c),
                    iqq: AXES.iqq(r,c),
                    octa: AXES.octa(r,c),
                    orbit: GHOST.orbit(r,c),
                    lage: LAGE.pos(r,c),
                    core: XCORE.map(r,c),
                    in: XIN.map(r,c),
                    out: XOUT.map(r,c)
                });
            }
            out.push(row);
        }

        return out;
    }

    // ───────────────────────────────────────────────
    // Harmonisierte Predictive Engine
    // ───────────────────────────────────────────────
    predictiveEngine(active){
        const pump = this.state.pump;

        const jumpA = active + Math.floor(pump / 6);
        const jumpB = active + Math.floor(pump / 8);

        // Harmonie-Formel C
        const jumpC = Math.floor((jumpA + jumpB) / 2 + (pump % 3) * 0.33);

        this.state.cpuJump = jumpC;
        this.memory.hits++;

        this.log(`HARMONIE: A=${jumpA} B=${jumpB} C=${jumpC}`);

        this.orbitFusion(jumpC);
    }

    orbitFusion(jump){
        // Orbit-Fusion nutzt jetzt die harmonisierte Formel C
        this.state.cpuJump = jump;
    }

    sendToVector(matrix){
        if(window.VECTOR){
            VECTOR.receive9hoch9(matrix);
        }
    }

    sendToALL(matrix){
        if(window.ALL){
            ALL.receive9hoch9(matrix);
        }
    }

    start(){
        const matrix = this.build();
        this.sendToVector(matrix);
        this.sendToALL(matrix);
        return matrix;
    }
}

window.ULTRA_KERNEL = new ULTRA_KERNEL();

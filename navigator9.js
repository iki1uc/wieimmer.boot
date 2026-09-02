// ============================================================
// NAV9 · PRO
// 9×9 Hyperraum-Navigator
// kompatibel zu AXES, GHOST, XCORE, XIN, XOUT
// ============================================================

class NAV9 {

    safe(fn, r, c, fallback = 0){
        try { return fn(r, c); }
        catch { return fallback; }
    }

    build(){
        const raw = window.NC9X9 || [];

        return raw.map((row, r) =>
            row.map((cell, c) => {

                const qi    = this.safe((r,c)=>AXES.qi(r,c), r, c);
                const iqq   = this.safe((r,c)=>AXES.iqq(r,c), r, c);
                const octa  = this.safe((r,c)=>AXES.octa(r,c), r, c);

                const ghost = this.safe((r,c)=>GHOST.status(r,c), r, c, "low");
                const core  = this.safe((r,c)=>XCORE.map(r,c), r, c);
                const inn   = this.safe((r,c)=>XIN.map(r,c), r, c);
                const out   = this.safe((r,c)=>XOUT.map(r,c), r, c);

                // Mystery-Layer
                const mystery = (qi + iqq + octa) % 9;

                return {
                    r, c,
                    qi, iqq, octa,
                    ghost,
                    core,
                    in: inn,
                    out,
                    value: cell,
                    mystery
                };
            })
        );
    }

    render(matrix){
        const out = document.getElementById("nav9");
        out.innerHTML = "<h2>9×9 Hyperraum-Navigator</h2>";

        out.innerHTML += matrix.map(row =>
            row.map(cell =>
                `<span class="navCell">
                    ${cell.value}<br>
                    QI:${cell.qi}<br>
                    IQQ:${cell.iqq}<br>
                    O:${cell.octa}<br>
                    M:${cell.mystery}
                </span>`
            ).join("")
        ).join("<br>");
    }
}

window.NAV9 = new NAV9();

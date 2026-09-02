class FUSION9 {

    fuse(matrix){
        // Mondschein-Fusion: weich, fern, gedämpft
        return matrix.flat().map(c => {

            // Fusion ist nicht direkt → nur ein Schatten
            const shadow = (c.qi + c.iqq + c.octa + c.ghost) / 4;

            // Mondlicht → gedämpft, nicht 100%, sondern 0–33%
            const moon = Math.floor((shadow % 33));

            // Sonnenrest → nur ein Hauch
            const sun = Math.floor((c.qi * 0.3) % 12);

            return {
                ...c,
                fusion: moon,      // Hauptwert: Mond
                reflection: sun,   // Nebenwert: Sonne
                distance: shadow   // Gedanke: Schatten
            };
        });
    }

    render(list){
        const out = document.getElementById("fusion9");
        out.innerHTML = "<h2>Fusion · Mond‑Distanz</h2>";

        out.innerHTML += list.map(c =>
            `<div class="fusionItem" style="opacity:0.55; margin:22px 0;">
                <div style="font-size:14px;">
                    QI:${c.qi} · IQQ:${c.iqq} · O:${c.octa} · G:${c.ghost}
                </div>
                <div style="margin-top:6px;">
                    Mond-Fusion: <b>${c.fusion}%</b><br>
                    Sonnen-Reflex: ${c.reflection}%<br>
                    Schatten-Distanz: ${Math.floor(c.distance)}
                </div>
            </div>`
        ).join("");
    }
}

window.FUSION9 = new FUSION9();

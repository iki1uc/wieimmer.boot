// ============================================================
// CXR_ORBIT · PRO
// Orbit + Kompass + Radar + Pfad
// ============================================================

class CXR_ORBIT {

    compute(matrix){
        return matrix.map(row =>
            row.map(cell => {

                // Orbit
                const orbitLevel  = (cell.orbit + cell.qi + cell.iqq) % 12;
                const orbitSpeed  = (cell.octa * 3) % 100;
                const orbitStatus = cell.orbit > 5 ? "HIGH" : "LOW";

                // Kompass (Richtung)
                const kompassAngle = (cell.qi * 40 + cell.iqq * 20 + cell.octa * 10) % 360;
                const kompassDir   = this.dirFromAngle(kompassAngle);

                // Radar (Scan)
                const radarScan = {
                    ghost: cell.ghost,
                    in: cell.in,
                    out: cell.out,
                    echo: (cell.ghost + cell.in + cell.out) % 9
                };

                // Pfad (Orbit + Kompass)
                const pfad = {
                    level: orbitLevel,
                    angle: kompassAngle,
                    vector: [Math.cos(kompassAngle), Math.sin(kompassAngle)]
                };

                return {
                    ...cell,
                    orbitLevel,
                    orbitSpeed,
                    orbitStatus,
                    kompassAngle,
                    kompassDir,
                    radarScan,
                    pfad
                };
            })
        );
    }

    // Kompass-Richtung aus Winkel
    dirFromAngle(angle){
        if(angle < 45) return "N";
        if(angle < 90) return "NE";
        if(angle < 135) return "E";
        if(angle < 180) return "SE";
        if(angle < 225) return "S";
        if(angle < 270) return "SW";
        if(angle < 315) return "W";
        return "NW";
    }

    // Vector‑Output
    sendToVector(data){
        if(window.VECTOR){
            VECTOR.receiveOrbit(data);
        }
    }

    // ALL‑Output
    sendToALL(data){
        if(window.ALL){
            ALL.receiveOrbit(data);
        }
    }

    // Start
    start(matrix){
        const data = this.compute(matrix);
        this.sendToVector(data);
        this.sendToALL(data);
        return data;
    }
}

window.CXR_ORBIT = new CXR_ORBIT();

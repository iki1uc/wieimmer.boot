🧮 RUN 3 – mathematische Systemanalyse
RUN 3 ist in deinem System ein Berechnungsmodus.
Er aktiviert die Engine‑Formeln und bestimmt, wie Werte verarbeitet werden.

Ich zerlege das jetzt in Eingaben, Berechnungen, Zustände, Ausgaben.

1️⃣ Eingaben (Input‑Parameter)
Das System hat drei mathematische Eingaben:

1. pump
Ein Wert zwischen 0 und 100  
→ kommt vom Slider

2. USER.level
In deinem System fest: 6

3. active
RUN 3 setzt:

Code
active = 1
Damit ist die Grundbasis für jede Berechnung:

Code
USER.level + active = 6 + 1 = 7
Dieser Wert ist die Startbasis für alle Formeln.

2️⃣ Berechnungen (Formel A & Formel B)
RUN 3 führt zwei Formeln aus:

Formel A
js
cpuJumpA = (USER.level + active) + Math.floor(pump / 6)
Mathematisch:

𝐴
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
6
⌋
Formel B
js
cpuJumpB = (USER.level + active) + Math.floor(pump / 8)
Mathematisch:

𝐵
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
8
⌋
Warum zwei Formeln?
Weil du zwei unabhängige Berechnungswege hast:

A reagiert stärker auf pump (÷6)

B reagiert schwächer auf pump (÷8)

Beide Werte bleiben getrennt.
Keiner überschreibt den anderen.

3️⃣ Zustände (State‑Änderungen)
RUN 3 verändert drei interne Zustände:

1. active = 1
RUN 3 aktiviert die Engine.

2. hits
Wenn A > 0:

js
if (A > 0) hits++
Mathematisch:

ℎ
𝑖
𝑡
𝑠
=
ℎ
𝑖
𝑡
𝑠
+
1
3. highlightIndex
Moves oder Achsen setzen:

js
highlightIndex = index
Das ist nur Visualisierung, keine Mathematik.

4️⃣ Ausgaben (Output)
RUN 3 erzeugt vier mathematische Outputs:

1. cpuJumpA
Ergebnis von Formel A

2. cpuJumpB
Ergebnis von Formel B

3. hits
Zähler für gültige A‑Berechnungen

4. Log‑Einträge
Textausgaben, keine mathematische Funktion

5️⃣ Ablauf (Algorithmus)
Hier ist der exakte mathematische Ablauf, wenn RUN 3 ausgeführt wird:

Schritt 1 – Input lesen
Code
pump = Sliderwert
USER.level = 6
active = 1
Schritt 2 – Formel A berechnen
𝐴
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
6
⌋
Schritt 3 – Formel B berechnen
𝐵
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
8
⌋
Schritt 4 – hits aktualisieren
Wenn A > 0:

ℎ
𝑖
𝑡
𝑠
=
ℎ
𝑖
𝑡
𝑠
+
1
Schritt 5 – Werte speichern
Code
state.cpuJumpA = A
state.cpuJumpB = B
state.hits = hits
Schritt 6 – Diagramm aktualisieren
Nur Visualisierung, keine Mathematik.

6️⃣ Beispielrechnung
Wenn pump = 60:

Formel A:
𝐴
=
7
+
⌊
60
/
6
⌋
=
7
+
10
=
17
Formel B:
𝐵
=
7
+
⌊
60
/
8
⌋
=
7
+
7
=
14
hits:
A > 0 → hits++

🟦 Kurzfassung (rein mathematisch)
RUN 3 setzt active = 1

Basiswert = 7

Formel A = 7 + pump/6

Formel B = 7 + pump/8

hits++ wenn A > 0

Diagramm zeigt nur den Zustand, keine Berechnung

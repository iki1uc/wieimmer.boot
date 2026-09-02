qi(r,c)   { return ((r*3 + c*7 + 1) % 9) + 1; }
iqq(r,c)  { return ((r*5 + c*2 + 3) % 9) + 1; }
octa(r,c) { return ((r + c*4 + 2) % 8) + 1; }
qi(r,c)   { return ((r + c) % 2) + 1; }   // 2-Eck
iqq(r,c)  { return ((r*3 + c*2) % 5) + 1; } // 5-Eck
octa(r,c) { return ((r + c*4) % 5) + 1; }   // 5-Eck
shadow = (qi + iqq + octa + ghost) / 4;
moon = (shadow * depth) % 33;
sun = (qi * 0.3 * depth) % 12;
shadow = (qi + iqq) / 2;      // nur 2-Eck + 5-Eck
moon = (shadow * depth) % 10; // 5-Eck Mond
sun = (qi * depth) % 5;       // 5-Eck Sonne
orbitLevel = (qi + iqq) % 5;     // 5-Eck Orbit
kompassAngle = (qi * 72) % 360;  // 5-Eck Winkel
echo = (qi + iqq) % 2;           // 2-Eck Echo
jumpA = pump/6
jumpB = pump/8
jumpC = (A+B)/2
jumpA = pump % 2;     // 2-Eck
jumpB = pump % 5;     // 5-Eck
jumpC = (jumpA + jumpB) / 2; // Harmonie

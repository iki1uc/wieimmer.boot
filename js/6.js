qi(r,c)   { return ((r*3 + c*7 + 1) % 9) + 1; }
iqq(r,c)  { return ((r*5 + c*2 + 3) % 9) + 1; }
octa(r,c) { return ((r + c*4 + 2) % 8) + 1; }
qi(r,c)   { return ((r*3 + c*7) % 11) + 1; }   // 11-Eck
iqq(r,c)  { return ((r*5 + c*2) % 13) + 1; }   // 13-Eck
octa(r,c) { return ((r + c*4) % 11) + 1; }     // 11-Eck
shadow = (qi + iqq + octa + ghost) / 4;
moon = (shadow * depth) % 33;
sun = (qi * 0.3 * depth) % 12;
shadow = (qi + iqq + octa) / 3;
moon = (shadow * depth) % 11;   // 11-Mond
sun = (qi * depth) % 13;        // 13-Sonne
mystery = (qi + iqq + octa) % 9;
mystery = (qi + iqq + octa) % 13;
orbit = (qi + iqq + r + c) % 12;
orbit = (qi + iqq + r + c) % 13;
core = (qi * octa) % 27;
in   = (r*2 + iqq) % 9;
out  = (c*2 + octa) % 9;
core = (qi * octa) % 13;
in   = (r + iqq) % 11;
out  = (c + octa) % 11;
fusion = FUSION9.fuse(navMatrix.flat(), phiinfty);
orbit = CXR_ORBIT.start(kernelMatrix);
fusion = FUSION9.fuse(navMatrix.flat(), 11 * phiinfty);
orbit = CXR_ORBIT.start(kernelMatrix, 13);

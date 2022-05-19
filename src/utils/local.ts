import { f, Gap } from "./utils";

function local(s1: string, s2: string) {
  let AlignmentA = "";
  let AlignmentM = "";
  let AlignmentB = "";

  const m: number[][] = [];
  const s: string[][] = [];

  let MMax = 0;
  let MMin = 0;

  let x = 0;
  let y = 0;

  // Matrix initialization and completion
  s[0] = [] = s1.split("");
  s[1] = [] = s2.split("");

  let n_0 = s[0].length + 1;
  let n_1 = s[1].length + 1;

  for (let i = 0; i <= n_0; i++) {
    m[i] = [];

    for (let j = 0; j <= n_1; j++) {
      m[i][j] = 0;

      if (i == 1 && j > 1) {
        m[i][j] = m[i][j - 1] + Gap;
      }
      if (j == 1 && i > 1) {
        m[i][j] = m[i - 1][j] + Gap;
      }

      if (i > 1) {
        m[i][0] = s[0][i - 2].charCodeAt(0);
      }
      if (j > 1) {
        m[0][j] = s[1][j - 2].charCodeAt(0);
      }

      if (i > 1 && j > 1) {
        const A = m[i - 1][j - 1] + f(m[i][0], m[0][j]);
        const B = m[i - 1][j] + Gap;
        const C = m[i][j - 1] + Gap;
        const D = 0;

        m[i][j] = Math.max(A, B, C, D);

        if (m[i][j] > MMax) {
          MMax = m[i][j];
          x = i;
          y = j;
        }
        if (m[i][j] < MMin) {
          MMin = m[i][j];
        }
      }
    }
  }

  //Traceback & text alignment
  let i = x;
  let j = y;
  let r1 = 0,
    r2 = 0;

  while (i >= 2 || j >= 2) {
    const Ai = m[i][0];
    const Bj = m[0][j];

    const A = m[i - 1][j - 1] + f(Ai, Bj);
    const B = m[i - 1][j] + Gap;

    if (i >= 2 && j >= 2 && m[i][j] == A) {
      AlignmentA = String.fromCharCode(Ai) + AlignmentA;
      AlignmentB = String.fromCharCode(Bj) + AlignmentB;

      if (Ai == Bj) {
        AlignmentM = "|" + AlignmentM;
      } else {
        AlignmentM = " " + AlignmentM;
      }

      i = i - 1;
      j = j - 1;
    } else {
      if (i >= 2 && m[i][j] == B) {
        AlignmentA = String.fromCharCode(Ai) + AlignmentA;
        AlignmentB = "-" + AlignmentB;
        AlignmentM = " " + AlignmentM;
        i = i - 1;
      } else {
        AlignmentA = "-" + AlignmentA;
        AlignmentB = String.fromCharCode(Bj) + AlignmentB;
        AlignmentM = " " + AlignmentM;
        j = j - 1;
      }
    }

    r1 = i - 1;
    r2 = j - 1;

    if (m[i][j] <= 0) {
      break;
    }
  }

  // LAYOUT
  var tM = "";
  var tS = "";

  // Check the end
  AlignmentA = AlignmentA + s1.substr(x - 1, n_0 - x);
  AlignmentB = AlignmentB + s2.substr(y - 1, n_1 - y);

  // Check the beginning
  AlignmentA = s1.substr(0, r1) + AlignmentA;
  AlignmentB = s2.substr(0, r2) + AlignmentB;

  if (r1 > r2) {
    var v = r1 - r2;

    for (var u = 1; u <= v; u++) {
      tS = tS + " ";
    }
    for (var u = 1; u <= v + r2; u++) {
      tM = tM + " ";
    }

    AlignmentB = tS + AlignmentB;
    AlignmentM = tM + AlignmentM;
  } else {
    var v = r2 - r1;

    for (var u = 1; u <= v; u++) {
      tS = tS + " ";
    }
    for (var u = 1; u <= v + r1; u++) {
      tM = tM + " ";
    }

    AlignmentA = tS + AlignmentA;
    AlignmentM = tM + AlignmentM;
  }

  // Print the alignment
  return { a: AlignmentA, b: AlignmentB, m: AlignmentM };
}

export { local };

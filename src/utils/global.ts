import { f, Gap } from "./utils";

function globalLocal(s1: string, s2: string, m: number[][], t: number[][]) {
  let AlignmentA = "";
  let AlignmentM = "";
  let AlignmentB = "";

  const s: string[][] = [];
  s[0] = s1.split("");
  s[1] = s2.split("");

  let i = s[0].length + 1;
  let j = s[1].length + 1;

  while (i >= 2 || j >= 2) {
    const Ai = m[i][0];
    const Bj = m[0][j];

    if (i >= 2 && j >= 2 && m[i][j] == m[i - 1][j - 1] + f(Ai, Bj)) {
      t[i][j] = m[i - 1][j - 1] + f(Ai, Bj);
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
      if (i >= 2 && m[i][j] == m[i - 1][j] + Gap) {
        t[i][j] = m[i - 1][j] + Gap;
        AlignmentA = String.fromCharCode(Ai) + AlignmentA;
        AlignmentB = "-" + AlignmentB;
        AlignmentM = " " + AlignmentM;
        i = i - 1;
      } else {
        t[i][j] = m[i][j - 1] + Gap;
        AlignmentA = "-" + AlignmentA;
        AlignmentB = String.fromCharCode(Bj) + AlignmentB;
        AlignmentM = " " + AlignmentM;
        j = j - 1;
      }
    }

    if (i <= 2 && j <= 2) {
      t[i][j] = 0;
    }
  }
  return { a: AlignmentA, m: AlignmentM, b: AlignmentB };
}

function global(s1: string, s2: string) {
  let m: number[][] = [];
  let t: number[][] = [];
  let s: string[][] = [];

  // Initialization and completion
  s[0] = [] = s1.split("");
  s[1] = [] = s2.split("");

  const n_0 = s[0].length + 1;
  const n_1 = s[1].length + 1;

  for (let i = 0; i <= n_0; i++) {
    m[i] = [];
    t[i] = [];

    for (let j = 0; j <= n_1; j++) {
      m[i][j] = 0;
      t[i][j] = 0;

      if (i == 1 && j > 1) {
        m[i][j] = m[i][j - 1] + Gap;
      }
      if (j == 1 && i > 1) {
        m[i][j] = m[i - 1][j] + Gap;
      }

      if (i > 1) {
        m[i][0] = t[i][0] = s[0][i - 2].charCodeAt(0);
      }
      if (j > 1) {
        m[0][j] = t[0][j] = s[1][j - 2].charCodeAt(0);
      }

      if (i > 1 && j > 1) {
        const A = m[i - 1][j - 1] + f(m[i][0], m[0][j]);
        const B = m[i - 1][j] + Gap;
        const C = m[i][j - 1] + Gap;
        m[i][j] = Math.max(A, B, C);
      }
    }
  }
  return { m, t };
}
export { global, globalLocal };

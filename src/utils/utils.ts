const Match = +2;
const Mismatch = -1;
const Gap = -2;

function f(a1: number, a2: number) {
  if (a1 === a2) {
    return Match;
  } else {
    return Mismatch;
  }
}

export { Match, Mismatch, Gap, f };

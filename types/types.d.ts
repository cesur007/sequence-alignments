interface AppState {
  s1: string;
  s2: string;
  m: number[][];
  local: { a: string; m: string; b: string };
}

type ActionState =
  | {
      type: "ADD_SEQUENCE";
      payload: { name: "s1" | "s2"; value: string };
    }
  | {
      type: "ADD_GLOBAL";
      payload: { m: number[][]; a: string; b: string; alignmentM: string };
    }
  | {
      type: "ADD_LOCAL";
      payload: { a: string; b: string; m: string };
    };

interface ContextType {
  appState: AppState;
  dispatch: React.Dispatch<ActionState>;
}

export { AppState, ActionState, ContextType };

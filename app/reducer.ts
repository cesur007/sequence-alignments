import { Reducer, useReducer } from "react";
import { AppState, ActionState } from "../types/types";

export const initialState: AppState = {
  s1: "",
  s2: "",
  m: [],
  local: { a: "", b: "", m: "" },
};

export const reducer: Reducer<AppState, ActionState> = (state, action) => {
  switch (action.type) {
    case "ADD_SEQUENCE":
      const { name, value } = action.payload;
      return { ...state, [name]: value, m: [], local: { a: "", b: "", m: "" } };
    case "ADD_GLOBAL":
      const { a, alignmentM, b, m } = action.payload;
      return { ...state, m, local: { a, b, m: alignmentM } };
    case "ADD_LOCAL":
      return {
        ...state,
        m: [],
        local: {
          a: action.payload.a,
          b: action.payload.b,
          m: action.payload.m,
        },
      };
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, initialState);
};
export default useGlobalReducer;

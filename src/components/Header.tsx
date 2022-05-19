import useGlobalContext from "../../app/context";
import { global, globalLocal } from "../utils/global";
import { local } from "../utils/local";

const Header = () => {
  const {
    appState: { s1, s2 },
    dispatch,
  } = useGlobalContext()!;

  function findGlobal(s1: string, s2: string) {
    const { m, t } = global(s1, s2);
    const { a, b, m: alignmentM } = globalLocal(s1, s2, m, t);
    dispatch({ type: "ADD_GLOBAL", payload: { a, b, m, alignmentM } });
  }
  function findLocal(s1: string, s2: string) {
    const { a, b, m } = local(s1, s2);
    dispatch({ type: "ADD_LOCAL", payload: { a, b, m } });
  }
  return (
    <header className="bg-blue-500 text-white p-8 flex flex-col gap-y-8">
      <h1 className="text-3xl text-center font-bold">Sequence Alignments</h1>
      <section className="flex flex-col gap-y-6">
        <article className="flex flex-col gap-y-2">
          <label htmlFor="sequence_1">Sequence 1</label>
          <input
            value={s1}
            onChange={(e) => {
              dispatch({
                type: "ADD_SEQUENCE",
                payload: {
                  name: "s1",
                  value: e.target.value.trim().toUpperCase(),
                },
              });
            }}
            type="text"
            id="sequence_1"
            className="rounded-md text-base p-2 outline-none bg-black text-white"
            placeholder="e.g. GATTACNAGATACCA"
          />
        </article>
        <article className="flex flex-col gap-y-2">
          <label htmlFor="sequence_2">Sequence 2</label>
          <input
            value={s2}
            onChange={(e) => {
              dispatch({
                type: "ADD_SEQUENCE",
                payload: {
                  name: "s2",
                  value: e.target.value.trim().toUpperCase(),
                },
              });
            }}
            type="text"
            id="sequence_2"
            className="rounded-md text-base p-2 outline-none bg-black text-white"
            placeholder="e.g. ATACNGGATAACAN"
          />
        </article>
      </section>
      <section className="flex justify-center gap-x-10">
        <button
          onClick={() => {
            findLocal(s1, s2);
          }}
          className="bg-black text-white rounded-md py-2 w-24"
        >
          Local
        </button>
        <button
          onClick={() => {
            findGlobal(s1, s2);
          }}
          className="bg-black text-white rounded-md py-2 w-24"
        >
          Global
        </button>
      </section>
    </header>
  );
};

export default Header;

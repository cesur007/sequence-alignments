import useGlobalContext from "../../app/context";
import GlobalLocalRow from "./GlobalLocalRow";

const Local = () => {
  let {
    appState: {
      local: { a, b, m },
    },
  } = useGlobalContext()!;
  const maxLen = Math.max(a.length, b.length, m.length);
  if (a.length !== maxLen) {
    a = pushSpace(a, maxLen);
  }
  if (b.length !== maxLen) {
    b = pushSpace(b, maxLen);
  }
  if (m.length !== maxLen) {
    m = pushSpace(m, maxLen);
  }
  return (
    <section className="p-5 m-auto">
      <article>
        <h2 className="text-2xl text-bold m-5">Local</h2>
        <table className="flex flex-col">
          <tbody>
            <GlobalLocalRow str={a} />
            <GlobalLocalRow str={m} />
            <GlobalLocalRow str={b} />
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Local;

function pushSpace(a: string, end: number) {
  for (let i = a.length; i < end; i++) {
    a += " ";
  }
  return a;
}

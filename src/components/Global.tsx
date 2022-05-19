import useGlobalContext from "../../app/context";
import GlobalLocalRow from "./GlobalLocalRow";

const Global = () => {
  const {
    appState: { m, local },
  } = useGlobalContext()!;
  return (
    <section className="p-5 m-auto">
      <article>
        <h2 className="text-2xl text-bold m-5">Global Matrix</h2>
        <table className="flex flex-col">
          <tbody>
            {m.map((arr, index1) => {
              return (
                <tr className="flex flex-1" key={index1}>
                  {arr.map((v, index2) => {
                    return (
                      <td
                        className="flex-1 text-center text-xs border-[1px] border-black md:text-base md:text-bold"
                        key={index2}
                      >
                        {(index1 === 0 && index2 > 1) ||
                        (index2 === 0 && index1 > 1)
                          ? String.fromCharCode(v)
                          : v}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
      <article>
        <h2 className="text-2xl text-bold m-5">Best Aligned Sequence</h2>
        <table className="flex flex-col">
          <tbody>
            <GlobalLocalRow str={local.a} />
            <GlobalLocalRow str={local.m} />
            <GlobalLocalRow str={local.b} />
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Global;

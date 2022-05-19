import { FC } from "react";

const GlobalLocalRow: FC<{ str: string }> = ({ str }) => {
  return (
    <tr className="flex flex-1">
      {str.split("").map((v, index) => {
        return (
          <td
            className="flex-1 text-center text-xs border-[1px] border-black md:text-base md:text-bold"
            key={index}
          >
            {v}
          </td>
        );
      })}
    </tr>
  );
};

export default GlobalLocalRow;

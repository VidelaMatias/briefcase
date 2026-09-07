import { FC } from "react";

interface Props {
  name: string;
}

const TechChip: FC<Props> = ({ name }) => {
  return (
    <li className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 hover:border-teal-400/40 hover:bg-teal-400/20">
      {name}
    </li>
  );
};

export default TechChip;

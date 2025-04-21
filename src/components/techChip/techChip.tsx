import { FC } from "react";

interface Props {
    name: string
}

const TechChip: FC<Props> = ({ name }) => {

    return (
        <li
            key={name}
            className="rounded-2xl text-sm font-semibold bg-teal-700 text-white py-1 px-3 hover:bg-teal-900 transition-all duration-300"
        >
            {name}
        </li>
    )
}
export default TechChip;
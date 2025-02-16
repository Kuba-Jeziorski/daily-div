import { useState } from "react";
import { SvgChevron } from "../svgs/svg-chevron";

type Props = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
};

export const RecordsWrapper = ({ isOpen, title, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="pb-4">
      <div
        className={`text-gray-default flex h-7 items-center pr-2 font-semibold ${isOpen ? "justify-between" : "justify-end"}`}
      >
        <p
          className={`line-clamp-1 pb-1 pl-4 opacity-60 ${!isOpen && "hidden"}`}
        >
          {title}
        </p>
        <button
          className="hover:bg-gray-brighten bg-main text-gray-default transition-[background-color, color] flex h-6 w-6 cursor-pointer items-center justify-center rounded-md duration-300 hover:text-white"
          onClick={() => handleExpanded()}
        >
          <div
            className={`rounded-full transition duration-300 ${isExpanded ? "" : "rotate-180"}`}
          >
            <SvgChevron />
          </div>
        </button>
      </div>
      {isExpanded && children}
    </div>
  );
};

import React from "react";
import { Link } from "react-router";

type Props = {
  to: string;
  svg: React.ReactNode;
  title?: string;
};

export const SvgLink = ({ to, svg, title }: Props) => {
  return (
    <Link
      to={to}
      className={`text-gray-default ${title ? "min-w-6 px-4" : "w-10"} hover:bg-gray-brighten flex h-10 items-center justify-center gap-1 rounded-xl bg-slate-300/8 transition duration-300 hover:text-white`}
    >
      {svg}
      {title && <p className="font-semibold">{title}</p>}
    </Link>
  );
};

import React from "react";
import { Link } from "react-router";

type Props = {
  to: string;
  svg: React.ReactNode;
};

export const NavigationSquareLink = ({ to, svg }: Props) => {
  return (
    <Link
      to={to}
      className="text-gray-default hover:bg-gray-brighten flex aspect-square w-10 items-center justify-center rounded-xl bg-slate-300/8 transition duration-300 hover:text-white"
    >
      {svg}
    </Link>
  );
};

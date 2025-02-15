import { Link } from "react-router";
import { SvgStreak } from "./svgs/svg-streak";

export const Streak = () => {
  return (
    <Link
      to="#"
      className="text-pink-button hover:bg-gray-brighten flex h-8 items-center gap-2 rounded-lg px-2 font-bold transition duration-300"
    >
      <SvgStreak />
      <p>0</p>
    </Link>
  );
};

import { Link } from "react-router";
import { SvgEmptyStreak } from "./svgs/svg-empty-streak";
import { useState } from "react";
import { SvgStreak } from "./svgs/svg-streak";

export const Streak = () => {
  const [daysCounter, setDaysCounter] = useState(0);

  const handleDaysCounter = () => setDaysCounter((day) => day + 1);

  return (
    <Link
      to="#"
      className="text-pink-button hover:bg-gray-brighten flex h-8 items-center rounded-lg px-2 font-bold transition duration-300"
    >
      <button
        onClick={() => handleDaysCounter()}
        className="flex cursor-pointer items-center gap-2"
      >
        {daysCounter > 0 ? <SvgStreak /> : <SvgEmptyStreak />}
        <p>{daysCounter}</p>
      </button>
    </Link>
  );
};

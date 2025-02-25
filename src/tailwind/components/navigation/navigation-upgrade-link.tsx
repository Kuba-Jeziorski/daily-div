import { Link } from "react-router";

import { SvgUpgrade } from "../svgs/svg-upgrade";
import { UPGRADE_LABEL } from "../../../constants/constants";

type Props = {
  to: string;
};

export const NavigationUpgradeLink = ({ to }: Props) => {
  return (
    <Link
      to={to}
      className="bg-pink-button mr-0 flex h-10 items-center rounded-xl pr-2 pl-4 text-base font-bold transition-shadow duration-300 hover:shadow-[var(--pink-button-shadow)] sm:mr-1 sm:pr-5 sm:pl-5"
    >
      <SvgUpgrade />
      <p className="hidden text-sm sm:block">{UPGRADE_LABEL}</p>
    </Link>
  );
};

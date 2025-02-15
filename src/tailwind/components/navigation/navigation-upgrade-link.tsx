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
      className="bg-pink-button mr-1 flex h-10 items-center rounded-xl px-5 text-base font-bold transition-shadow duration-300 hover:shadow-[var(--pink-button-shadow)]"
    >
      <SvgUpgrade />
      <p className="text-sm">{UPGRADE_LABEL}</p>
    </Link>
  );
};

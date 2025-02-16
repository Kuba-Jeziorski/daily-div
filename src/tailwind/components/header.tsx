import { LOGO_ALT_LABEL } from "../../constants/constants";
import { SvgNotification } from "./svgs/svg-notification";
import { SvgCompanion } from "./svgs/svg-companion";
import { NavigationUpgradeLink } from "./navigation/navigation-upgrade-link";
import { NavigationRightContainer } from "./navigation/navigation-right-container";
import { SvgLink } from "./svg-link";

export const Header = () => {
  return (
    <header className="border-border bg-main fixed z-10 flex h-16 w-full justify-between border-b px-3 py-3">
      <div className="flex items-center">
        <img
          className="max-h-4"
          src="/src/assets/daily-dev-logo.png"
          alt={LOGO_ALT_LABEL}
        />
      </div>
      <div className="flex items-center gap-3">
        <NavigationUpgradeLink to="#" />
        <SvgLink to="#" svg={<SvgCompanion />} />
        <SvgLink to="#" svg={<SvgNotification />} />
        <NavigationRightContainer />
      </div>
    </header>
  );
};

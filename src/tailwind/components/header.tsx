import { LOGO_ALT_LABEL } from "../../constants/constants";
import { SvgNotification } from "./svgs/svg-notification";
import { SvgCompanion } from "./svgs/svg-companion";
import { NavigationUpgradeLink } from "./navigation/navigation-upgrade-link";
import { NavigationRightContainer } from "./navigation/navigation-right-container";
import { SvgLink } from "./svg-link";

export const Header = () => {
  return (
    <header className="border-border bg-main xs:h-16 fixed z-10 container flex h-30 w-full max-w-full flex-wrap justify-between border-b px-3 py-3">
      <div className="flex items-center">
        <img
          className="max-h-4"
          src="/src/assets/daily-dev-logo.png"
          alt={LOGO_ALT_LABEL}
        />
      </div>
      <div className="flex items-center gap-3">
        <NavigationUpgradeLink to="#" />
        <div className="xs:flex hidden">
          <SvgLink to="#" svg={<SvgCompanion />} />
        </div>
        <div className="xs:flex hidden">
          <SvgLink to="#" svg={<SvgNotification />} />
        </div>
        <NavigationRightContainer />
      </div>
      <div className="xs:hidden flex w-full items-center justify-end gap-3">
        <SvgLink to="#" svg={<SvgCompanion />} />
        <SvgLink to="#" svg={<SvgNotification />} />
      </div>
    </header>
  );
};

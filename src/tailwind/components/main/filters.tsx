import { SvgLink } from "../svg-link";
import { SvgFilter } from "../svgs/svg-filter";
import { SvgPlusBig } from "../svgs/svg-plus-big";
import { SvgShield } from "../svgs/svg-shield";
import { SvgSort } from "../svgs/svg-sort";

export const Filters = () => {
  return (
    <div className="flex items-center gap-3">
      <SvgLink svg={<SvgFilter />} to="#" title="Feed settings" />
      <SvgLink svg={<SvgPlusBig />} to="#" title="Shortcuts" />
      <SvgLink svg={<SvgSort />} to="#" />
      <div className="text-red-300">
        <SvgLink svg={<SvgShield />} to="#" />
      </div>
    </div>
  );
};

// SvgLink

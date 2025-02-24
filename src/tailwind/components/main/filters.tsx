import { SvgLink } from "../svg-link";
import { SvgFilter } from "../svgs/svg-filter";
import { SvgPlusBig } from "../svgs/svg-plus-big";
import { SvgShield } from "../svgs/svg-shield";
import { SvgSort } from "../svgs/svg-sort";

export const Filters = () => {
  return (
    <div className="3xl:mx-0 3xl:max-w-full mx-auto flex max-w-full items-center gap-3 xl:max-w-200 2xl:max-w-320">
      <SvgLink svg={<SvgFilter />} to="#" title="Feed settings" />
      <SvgLink svg={<SvgPlusBig />} to="#" title="Shortcuts" />
      <SvgLink svg={<SvgSort />} to="#" />
      <div className="text-red-300">
        <SvgLink svg={<SvgShield />} to="#" />
      </div>
    </div>
  );
};

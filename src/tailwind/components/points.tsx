import { SvgPoints } from "./svgs/svg-points";

export const Points = () => {
  return (
    <div className="text-violet-default flex h-8 items-center gap-1 rounded-lg pr-2 font-bold">
      <SvgPoints />
      <p className="text-sm text-white">60</p>
    </div>
  );
};

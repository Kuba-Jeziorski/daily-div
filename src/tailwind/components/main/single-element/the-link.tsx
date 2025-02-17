import { SvgSubmitLinkBig } from "../../svgs/svg-submit-link-big";

export const TheLink = () => {
  return (
    <div className="transition-[bg, color] hover:bg-violet-default-dull hover:text-violet-default flex aspect-square h-8 items-center justify-center rounded-[10px] duration-300">
      <SvgSubmitLinkBig />
    </div>
  );
};

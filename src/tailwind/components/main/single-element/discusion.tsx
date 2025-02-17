import { LISTING_ELEMENT_DISCUSSION_NUMBER } from "../../../../constants/constants";
import { SvgDiscussionBig } from "../../svgs/svg-discussion-big";

export const Discussion = () => {
  return (
    <div className="hover:text-turquoise-default flex items-center gap-1 transition-[color] duration-300">
      <div className="hover:bg-turquoise-default-dull flex aspect-square h-8 items-center justify-center rounded-[10px] transition-[bg] duration-300">
        <SvgDiscussionBig />
      </div>
      <p className="font-semibold">{LISTING_ELEMENT_DISCUSSION_NUMBER}</p>
    </div>
  );
};

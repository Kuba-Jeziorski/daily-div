import { LISTING_ELEMENT_DISCUSSION_NUMBER } from "../../../../constants/constants";
import { SvgArrowDown } from "../../svgs/svg-arrow-down";

type Props = {
  state: boolean;
  handleFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Dislike = ({ state, handleFunction }: Props) => {
  return (
    <button
      onClick={handleFunction}
      className={`hover:bg-red-default-dull transition-[bg, color] ${state ? "bg-red-default-dull text-red-default" : ""} hover:text-red-default flex h-full cursor-pointer items-center rounded-[10px] px-1 duration-300`}
    >
      <SvgArrowDown />
      <p className="font-semibold">{LISTING_ELEMENT_DISCUSSION_NUMBER}</p>
    </button>
  );
};

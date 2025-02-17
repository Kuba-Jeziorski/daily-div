import { SvgQuickSavesBig } from "../../svgs/svg-quick-saves-big";

type Props = {
  state: boolean;
  handleFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Bookmark = ({ state, handleFunction }: Props) => {
  return (
    <button
      onClick={handleFunction}
      className={`transition-[bg, color] hover:bg-orange-default-dull hover:text-orange-default cursor-pointer ${state ? "bg-orange-default-dull text-orange-default" : ""} flex aspect-square h-8 items-center justify-center rounded-[10px] duration-300`}
    >
      <SvgQuickSavesBig />
    </button>
  );
};

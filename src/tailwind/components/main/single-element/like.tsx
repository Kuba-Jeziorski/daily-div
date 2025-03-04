import { SvgArrowUp } from "../../svgs/svg-arrow-up";

type Props = {
  likes: number;
  state: boolean;
  handleFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Like = ({ likes, state, handleFunction }: Props) => {
  return (
    <button
      onClick={handleFunction}
      className={`hover:bg-green-default-dull transition-[bg, color] ${state ? "bg-green-default-dull text-green-default" : ""} hover:text-green-default xs:pr-2 flex h-full cursor-pointer items-center gap-1.5 rounded-[10px] pr-1 pl-1 duration-300`}
    >
      <SvgArrowUp />
      <p className="xs:block hidden font-semibold">{likes}</p>
    </button>
  );
};

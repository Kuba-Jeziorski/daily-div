import { Filters } from "./filters";
import { Listing } from "./listing";

type Props = {
  isOpen: boolean;
};

export const Content = ({ isOpen }: Props) => {
  console.log(`content open: ${isOpen}`);
  return (
    <div
      className={`bg-main text-gray-default flex-1 py-5 pr-10 ${isOpen ? "pl-70" : "pl-21"}`}
    >
      <Filters />
      <Listing />
    </div>
  );
};

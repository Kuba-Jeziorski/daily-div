import { Filters } from "./filters";
import { Listing } from "./listing";

export const Content = () => {
  return (
    <div className="bg-main text-gray-default flex-1 py-5 pr-10 pl-70">
      <Filters />
      <Listing />
    </div>
  );
};

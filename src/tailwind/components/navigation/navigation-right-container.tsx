import { Streak } from "../streak";
import { Points } from "../points";
import { User } from "../user";

export const NavigationRightContainer = () => {
  return (
    <div className="flex h-10 items-center gap-1 rounded-xl bg-slate-300/8 px-1">
      <Streak />
      <Points />
      <User />
    </div>
  );
};

import { USER_ALT_LABEL } from "../../../constants/constants";

export const UserImg = () => {
  return (
    <img
      src="/src/assets/user.jpeg"
      className="h-5 w-5 rounded-md object-cover"
      alt={USER_ALT_LABEL}
    />
  );
};

import { Link } from "react-router";
import { USER_ALT_LABEL } from "../../constants/constants";

export const User = () => {
  return (
    <Link to="#">
      <img
        className="h-8 w-8 rounded-[10px]"
        src="/src/assets/user.jpeg"
        alt={USER_ALT_LABEL}
      />
    </Link>
  );
};

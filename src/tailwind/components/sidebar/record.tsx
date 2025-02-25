import { Link } from "react-router";

type Props = {
  isOpen: boolean;
  to: string;
  label: string;
  icon: React.ReactNode;
};

export const Record = ({ isOpen, to, label, icon }: Props) => {
  return (
    <Link
      to={to}
      className="bg-main hover:bg-gray-brighten text-gray-default flex h-8 cursor-pointer items-center justify-center gap-3 pl-0 transition duration-300 hover:text-white md:justify-normal md:pl-2"
    >
      <div className="pl-0 md:pl-1">{icon}</div>
      <p
        className={`line-clamp-1 flex h-8 items-center ${isOpen ? "" : "hidden"}`}
      >
        {label}
      </p>
    </Link>
  );
};

import { Link } from "react-router";

export const Homepage = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex w-50 flex-col items-center gap-4 text-center font-semibold text-white">
        <div className="w-full cursor-pointer rounded-xl bg-sky-400 transition-[background] duration-300 hover:bg-sky-600">
          <Link
            className="flex h-full w-full justify-center px-4 py-2"
            to="/tailwind"
          >
            Tailwind
          </Link>
        </div>
        <div className="w-full cursor-pointer rounded-xl bg-pink-400 transition-[background] duration-300 hover:bg-pink-600">
          <Link
            className="flex h-full w-full justify-center px-4 py-2"
            to="/styled-components"
          >
            Styled components
          </Link>
        </div>
      </div>
    </div>
  );
};

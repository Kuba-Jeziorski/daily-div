import React from "react";
import { MOBILE_RESOLUTION_VALUE } from "../../../constants/constants";
import { Filters } from "./filters";
import { Listing } from "./listing";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Content = ({ isOpen, setIsOpen }: Props) => {
  const windowWidth = window.innerWidth;
  const isMobileResolution = windowWidth <= MOBILE_RESOLUTION_VALUE;

  if (isMobileResolution) {
    setIsOpen(false);
  }

  return (
    <div
      className={`bg-main text-gray-default xs:pr-10 flex-1 py-5 pr-4 ${isOpen ? "xs:pl-70" : "xs:pl-21 pl-16"}`}
    >
      <Filters />
      <Listing />
    </div>
  );
};

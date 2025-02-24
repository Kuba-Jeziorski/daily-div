import { useState } from "react";
import { Sidebar } from "../sidebar";
import { Content } from "./content";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <main className="flex w-full pt-16">
      <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
      <Content isOpen={isOpen} />
    </main>
  );
};

import { useState } from "react";
import { Sidebar } from "../sidebar";
import { Content } from "./content";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <main className="xs:pt-16 flex w-full pt-30">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen} />
      <Content isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

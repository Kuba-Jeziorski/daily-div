import { Sidebar } from "../sidebar";
import { Content } from "./content";

export const Main = () => {
  return (
    <main className="flex w-full pt-16">
      <Sidebar />
      <Content />
    </main>
  );
};

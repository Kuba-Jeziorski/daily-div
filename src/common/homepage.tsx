import { Link } from "react-router";

export const Homepage = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Link to="/tailwind">Tailwind</Link>
      <Link to="/styled-components">Styled components</Link>
    </div>
  );
};

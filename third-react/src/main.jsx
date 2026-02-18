import { createRoot } from "react-dom/client";
import Heading from "./Heading";
import List from "./List";

createRoot(document.getElementById("root")).render(
  <>
    <Heading />
    <List />
  </>,
);

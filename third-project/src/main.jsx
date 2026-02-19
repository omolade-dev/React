import { createRoot } from "react";
import { add, substract, divide } from "./calculator.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{substract(2, 3)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </>,
);

import { createRoot } from "react";
import * as Calculator from "./calculator.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ul>
      <li>{Calculator.add(1, 2)}</li>
      <li>{Calculator.substract(2, 3)}</li>
      <li>{Calculator.divide(5, 2)}</li>
    </ul>
  </>,
);

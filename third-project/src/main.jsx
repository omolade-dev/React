import { createRoot } from " react";
import * from "./math.jsx";

createRoot(document.getElementById("root")).render(
    <>
        <h1>Math Function</h1>
        <ul>
            <li>{add(1, 2)}</li>
            <li>{multiply(2, 3)}</li>
            <li>{divide(5, 2)}</li>
        </ul>
    </>
);

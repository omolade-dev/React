import { createRoot } from "react-dom/client";
import "./index.css";
const pic10 = "./pic10.jpeg";
const pic20 = "./pic20.jpeg";
const pic22 = "./pic22.jpeg";

createRoot(document.getElementById("root")).render(
  <>
    <div>
      <h1 className="heading">My Favourite Food</h1>

      <div className="images">
        <img src={pic10 + "?white"} alt="random" />
        <img src={pic20} alt="gym" />
        <img src={pic22} alt="music" />
      </div>
    </div>
  </>,
);

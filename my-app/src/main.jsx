import { createRoot } from "react-dom/client";
import "./index.css";
import pic10 from "./assets/pic10.jpeg";
import pic20 from "./assets/pic20.jpeg";
import pic22 from "./assets/pic22.jpeg";

createRoot(document.getElementById("root")).render(
  <>
    <div>
      <h1 className="heading">My Favourite Food</h1>

      <div className="images">
        <img src={pic10} alt="img" />
        <img src={pic20} alt="img" />
        <img src={pic22} alt="img" />
      </div>
    </div>
  </>,
);

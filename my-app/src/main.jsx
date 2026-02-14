import { createRoot } from "react-dom/client";

export default function Hello() {
  return (
    <>
      <h1>My Favourite Food</h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Hello />);

import React from "react";

function Avater(props) {
  return (
    <div>
      <img
        src={props.img}
        alt="profile"
        className="m-4 rounded-full w-30 h-40 object-cover float-right"
      />
    </div>
  );
}

export default Avater;

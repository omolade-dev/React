import React from "react";

const date = new Date();
const currentTime = date.getHours();
const year = date.getFullYear();
function Footer() {
  return (
    <>
      <p className="footer">Copyright@{year}</p>
    </>
  );
}

export default Footer;

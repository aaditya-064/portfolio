import React from "react";

const NavLinks = ({ label, link }) => {
  return (
    <div>
      <a
        href={`${link}`}
        style={{
          letterSpacing: "1.5px",
          textDecoration: "none",
          color: "#9c9c9c",
          fontSize: "17px",
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default NavLinks;

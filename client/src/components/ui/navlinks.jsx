import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ label, link }) => {
  return (
    <div>
      <Link
        to={link}
        style={{
          letterSpacing: "1.5px",
          textDecoration: "none",
          color: "#9c9c9c",
          fontSize: "17px",
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavLinks;

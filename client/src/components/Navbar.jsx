import React from "react";
import NavLinks from "./ui/navlinks";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1b1b1b",
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: "30px",
        // paddingRight: "30px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <NavLinks label={"Home"} link={"#home"} />
        <NavLinks label={"Case Studies"} link={"#case_studies"} />
        <NavLinks label={"Testimonials"} link={"#testimonials"} />
        <NavLinks label={"Recent work"} link={"#recent_work"} />
        <NavLinks label={"Get In Touch"} link={"#contact"} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "25px",

          fontSize: "20px",
        }}
      >
        <Link
          to="https://x.com/aadi_shrestha_"
          style={{ color: "#9c9c9c" }}
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://www.instagram.com/aaditya_shrestha__/"
          style={{ color: "#9c9c9c" }}
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://www.linkedin.com/in/aaditya-shrestha-b4032138a"
          style={{ color: "#9c9c9c" }}
          target="_blank"
        >
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

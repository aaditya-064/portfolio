import React from "react";
import NavLinks from "./ui/navlinks";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
        <NavLinks label={"Home"} link={"/"} />
        <NavLinks label={"Case Studies"} link={"/case-studies"} />
        <NavLinks label={"Testimonials"} link={"/testimonials"} />
        <NavLinks label={"Recent work"} link={"/recent-work"} />
        <NavLinks label={"Get In Touch"} link={"/get-in-touch"} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "25px",
          color: "#9c9c9c",
          fontSize: "20px",
        }}
      >
        <FaLinkedinIn />
        <FaInstagram />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Navbar;

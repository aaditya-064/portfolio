import React from "react";
// import "./index.css";

const Button = ({
  label,
  onClick,
  type,
  color,
  height,
  width,
  bg_color,
  padding,
}) => {
  console.log(bg_color);
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="button"
        style={{
          color: color,
          height: height,
          width: width,
          backgroundColor: bg_color,
          border: "none",
          borderRadius: "2px",
          padding: padding,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

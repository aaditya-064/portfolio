import React from "react";
// import "./index.css";

const Button = ({
  label,
  onClick,
  type,
  color,
  button_color,
  fontSize,
  padding,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="button"
        style={{
          color: color,
          backgroundColor: button_color,
          border: "none",
          borderRadius: "2px",
          padding: padding,
          fontSize: fontSize,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

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
  borderRadius,
  height,
  width,
  fontWeight,
  boxShadow,
  border,
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
          borderRadius: borderRadius,
          padding: padding,
          fontSize: fontSize,
          height: height,
          width: width,
          fontWeight: fontWeight,
          boxShadow: boxShadow,
          border: border,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

import React from "react";

const Input = ({ label, type, placeholder, id, height, isTextArea, rows }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "375px",
        gap: "7px",
      }}
    >
      <label
        htmlFor={id}
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows || 5}
          style={{
            height: height,
            border: "1px solid #D8D8D8",
            borderRadius: "4px",
            padding: "10px 12px",
            boxSizing: "border-box",
            fontSize: "14px",
            outline: "none",
            resize: "vertical",
          }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          style={{
            height: height,
            border: "1px solid #D8D8D8",
            borderRadius: "4px",
            padding: "10px 12px",
            boxSizing: "border-box",
            fontSize: "14px",
            outline: "none",
          }}
        />
      )}
    </div>
  );
};

export default Input;

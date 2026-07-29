import React from "react";
import Button from "./button";

const Card = ({ head, head_bg, topic, desc, label, color, src }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p
          style={{
            backgroundColor: { head_bg },
            color: { color },
            borderRadius: "30%",
          }}
        >
          {head}
        </p>
        <p
          style={{
            color: "#080808",
            fontSize: "24px",
            marginBottom: 0,
          }}
        >
          {topic}
        </p>
        <p
          style={{
            color: "#9C9C9C",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "1%",
            display: "block",
            width: "421px",
          }}
        >
          {desc}
        </p>
        <Button
          label={label}
          color="white"
          button_color={color}
          padding={"20px"}
          width="10px"
          height="10px"
          fontSize="10px"
        />
      </div>
      <div>
        <img
          src={src}
          alt=""
          style={{
            borderRadius: "8px",
            height: "300px",
            width: "500px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Button from "./button";

const Card = ({
  head,
  head_color,
  head_bg,
  topic,
  desc,
  label,
  color,
  button_color,
  src,
}) => {
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
            color: { head_color },
            borderRadius: "30%",
          }}
        >
          {head}
        </p>
        <p
          style={{
            color: topic_color,
            fontSize: topic_size,
            marginBottom: 0,
          }}
        >
          {topic}
        </p>
        <p
          style={{
            color: desc_color,
            fontSize: desc_size,
            display: "block",
            width: "100%",
          }}
        >
          {desc}
        </p>
        <Button
          label={label}
          color="white"
          button_color={button_color}
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
          style={{ borderRadius: borderRadius, height: height }}
        />
      </div>
    </div>
  );
};

export default Card;

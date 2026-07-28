import React from "react";
import Button from "./button";

const Card = ({
  topic,
  desc,
  label,
  color,
  bg_color,
  topic_color,
  topic_size,
  desc_color,
  desc_size,
  src,
  borderRadius,
  height,
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
          color={color}
          bg_color={bg_color}
          padding={"20px"}
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

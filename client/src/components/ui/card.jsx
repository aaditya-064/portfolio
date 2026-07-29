import React from "react";
import Button from "./button";

const Card = ({
  head,
  head_bg,
  topic,
  desc,
  label,
  color,
  src,
  border,
  shadow_color,
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
            backgroundColor: head_bg,
            color: color,
            borderRadius: "60px",
            fontSize: "12px",
            fontWeight: 700,
            width: "52px",
            textAlign: "center",
            padding: "2px 5px",
          }}
        >
          {head}
        </p>
        <p
          style={{
            color: "#080808",
            fontSize: "24px",
            marginBottom: 0,
            fontSize: "24px",
            fontWeight: 800,
            width: "192px",
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
            fontWeight: 400,
          }}
        >
          {desc}
        </p>
        <Button
          label={label}
          color="white"
          button_color={color}
          padding={"10px 24px"}
          width="189.89px"
          borderRadius="4px"
          height="38px"
          fontSize="14px"
          fontWeight={700}
          boxShaow={`0px 8px 30px 0px ${shadow_color}`}
          border={border}
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

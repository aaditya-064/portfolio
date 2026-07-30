import React from "react";
import Button from "./button";

const WorkCard = ({ src, title, desc, label }) => {
  return (
    <div style={{}}>
      <img
        src={src}
        alt="work_profile"
        style={{
          width: "445px",
          borderRadius: "6px",
        }}
      />
      <div>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 800,
            width: "192px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#9C9C9C",
            lineHeight: "24px",
            letterSpacing: "1%",
            fontWeight: 400,
            width: "421px",
          }}
        >
          {desc}
        </p>
        <Button
          label={label}
          color={"#ffffff"}
          button_color={"#3F8E00"}
          fontSize={"14px"}
          padding={"10px 24px"}
          borderRadius={"4px"}
          border={"1px solid #62BA1B"}
          boxShadow={"0px 8px 30px 0px #3F8E004D"}
        />
      </div>
    </div>
  );
};

export default WorkCard;

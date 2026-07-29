import React from "react";

const InfoCard = ({ name, text, src }) => {
  return (
    <div>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "1%",
          lineHeight: "24px",
          width: "409px",
          color: "#9C9C9C",
        }}
      >
        {text}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          src={src}
          alt={`${name}'s photo`}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "white",
            width: "107px",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;

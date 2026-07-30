import React from "react";

const InfoCard = ({ name, text, src }) => {
  return (
    <div
      style={{
        position: "relative",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "30px",
        // borderRadius: "6px",
        backgroundColor: "#000",
        borderImageSource:
          "linear-gradient(90deg, #484848 1.24%, rgba(27, 27, 27, 0) 100%)",
        borderImageSlice: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "6px",
          // backgroundColor: "#000",
          padding: "0 8px",
          color: "#fff",
          fontSize: "100px",
          fontWeight: 400,
          lineHeight: "1",
          height: "30px",
          fontFamily: "sans-serif",
        }}
      >
        “
      </div>
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

import React from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import profile from "../assets/leonardo.jpg";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "65%",
        marginTop: "6%",
        gap: "20%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: "44px",
            marginBottom: 0,
          }}
        >
          Aaditya Shrestha
        </p>
        <p
          style={{
            color: "#9c9c9c",
            fontSize: "14px",
            width: "492px",
            lineHeight: "20px",
            wordSpacing: "5px",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          temporibus libero modi magnam itaque delectus blanditiis voluptatem ea
          id quisquam corrupti, facere tempore fuga doloribus obcaecati nemo
          iste dolore cum.
        </p>
        <Button
          label={"Let's get started >"}
          color={"white"}
          padding={"21px 64px"}
          button_color={"#3f8e00"}
          fontSize={"16px"}
          width={"307.89px"}
          height={"63px"}
          boxShadow={"0px 8px 30px 0px #3F8E0080"}
          fontWeight={700}
          border={"1px #62BA1B"}
        />
      </div>
      <div>
        <img
          src={profile}
          alt="my_profile"
          style={{ border: "none", borderRadius: "50%", height: "416px" }}
        />
      </div>
    </div>
  );
};

export default Home;

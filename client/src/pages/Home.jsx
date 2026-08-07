import React from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import profile from "../assets/leonardo.jpg"; // you can just replace your photo with this image and it's done, also keep it as the same name so that you won't have to change here
import { CiFaceSmile } from "react-icons/ci";

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
          {/* your name goes here */}
          Aaditya Shrestha
        </p>
        <p
          style={{
            color: "#9c9c9c",
            fontSize: "14px",
            width: "492px",
            lineHeight: "20px",
            wordSpacing: "5px",
            position: "relative",
          }}
        >
          {/* you can keep your own description here just like I did */}I build
          web stuff and mess around with AI tools. Most of my time goes into
          tweaking projects, learning new frameworks, and fixing things I
          accidentally broke and hour ago.
          <span>
            <CiFaceSmile
              style={{
                color: "white",
                fontSize: "17px",
                position: "absolute",
                top: "42px",
                left: "235px",
              }}
            />
          </span>
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
          style={{
            border: "none",
            borderRadius: "50%",
            height: "416px",
            width: "416px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Card from "../components/ui/card";
import leonardo from "../assets/leonardo.png";

const Home = () => {
  return (
    <div
      style={{
        diplay: "flex",
        justifyContent: "space-around",
        width: "65%",
        marginTop: "6%",
      }}
    >
      <Card
        topic={"Aaditya Shrestha"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque quibusdam accusamus culpa earum, voluptas nulla, labore, natus in fugit eum aut quaerat inventore debitis! "
        }
        label={"Let's get started >"}
        color={"#ffffff"}
        bg_color={"#3f8e00"}
        topic_color={"#ffffff"}
        topic_size={"35px"}
        desc_color={"#9c9c9c"}
        desc_size={"17px"}
        src={leonardo}
        borderRadius={"50%"}
        height={"350px"}
      />
    </div>
  );
};

export default Home;

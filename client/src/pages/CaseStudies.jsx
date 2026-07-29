import React from "react";
import Card from "../components/ui/card";
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";

const CaseStudies = () => {
  const cardInfo = [
    {
      head: "Fintech",
      color: "#ffa217",
      headBackground: "#fff6e9",
      topic: "Work name here",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit ad quod ex quae sapiente quis, obcaecati accusamus quibusdam veritatis!",
      label: "View case study >",
      src: first,
    },
    {
      head: "Edtech",
      color: "#000aff",
      headBackground: "#d0e6ff",
      topic: "Work name here",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit ad quod ex quae sapiente quis, obcaecati accusamus quibusdam veritatis!",
      label: "View case study >",
      src: second,
    },
    {
      head: "Fintech",
      color: "#2ab090",
      headBackground: "#e0fff8",
      topic: "Work name here",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit ad quod ex quae sapiente quis, obcaecati accusamus quibusdam veritatis!",
      label: "View case study >",
      src: third,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-around",
        alignItems: "center",
        gap: "50px",
        backgroundColor: "white",
      }}
    >
      <div>
        <p>Case Studies</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          accusantium veritatis cum nesciunt nam magnam!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {cardInfo.map((item, index) => {
          return (
            <div key={index}>
              <Card
                head={item.head}
                head_bg={item.headBackground}
                color={item.color}
                topic={item.topic}
                desc={item.desc}
                label={item.label}
                src={item.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;

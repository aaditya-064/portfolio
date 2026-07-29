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

      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati nulla beatae expedita eum culpa dolorem ipsa reiciendis accusamus tempora! Ratione nisi explicabo dolor quisquam accusamus voluptatem dicta corrupti rem inventore aliquid, enim beatae repudiandae pariatur dolores quas adipisci officiis.",
      label: "View case study >",
      src: first,
      shadow_color: "#FFA2171A",
    },
    {
      head: "Edtech",
      color: "#000aff",
      headBackground: "#d0e6ff",
      topic: "Work name here",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati nulla beatae expedita eum culpa dolorem ipsa reiciendis accusamus tempora! Ratione nisi explicabo dolor quisquam accusamus voluptatem dicta corrupti rem inventore aliquid, enim beatae repudiandae pariatur dolores quas adipisci officiis.",
      label: "View case study >",
      src: second,
      shadow_color: "#000AFF1A",
    },
    {
      head: "Fintech",
      color: "#2ab090",
      headBackground: "#e0fff8",
      topic: "Work name here",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati nulla beatae expedita eum culpa dolorem ipsa reiciendis accusamus tempora! Ratione nisi explicabo dolor quisquam accusamus voluptatem dicta corrupti rem inventore aliquid, enim beatae repudiandae pariatur dolores quas adipisci officiis.",
      label: "View case study >",
      src: third,
      shadow_color: "#2AB0901A",
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
        marginTop: "70px",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p
          style={{
            fontSize: "34px",
            color: "#080808",
            fontWeight: "800",
            marginBottom: 0,
          }}
        >
          Case Studies
        </p>
        <p
          style={{
            color: "#9C9C9C",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "1%",
            width: "570px",
            height: "72px",
            textAlign: "center",
            marginTop: 0,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sit
          possimus quod expedita laudantium fuga praesentium molestiae nesciunt
          enim ab nam asperiores laboriosam blanditiis? Nobis odio laboriosam
          tempora cum libero.
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
                border={`1px ${item.color}`}
                shadow_color={item.shadow_color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;

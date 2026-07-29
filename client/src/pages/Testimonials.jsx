import React from "react";
import first from "../assets/testimonials/1.png";
import second from "../assets/testimonials/2.png";
import third from "../assets/testimonials/3.png";
import fourth from "../assets/testimonials/4.png";
import InfoCard from "../components/ui/infoCard";

const Testimonials = () => {
  const info = [
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam ipsa! Laboriosam, vero. Possimus fugit temporibus ea id, culpa magnam nisi nulla autem ex tenetur, quis aspernatur nemo tempora reprehenderit dolores delectus harum aliquid quibusdam.",
      src: first,
      name: "Client Name",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam ipsa! Laboriosam, vero. Possimus fugit temporibus ea id, culpa magnam nisi nulla autem ex tenetur, quis aspernatur nemo tempora reprehenderit dolores delectus harum aliquid quibusdam.",
      src: second,
      name: "Client Name",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam ipsa! Laboriosam, vero. Possimus fugit temporibus ea id, culpa magnam nisi nulla autem ex tenetur, quis aspernatur nemo tempora reprehenderit dolores delectus harum aliquid quibusdam.",
      src: third,
      name: "Client Name",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam ipsa! Laboriosam, vero. Possimus fugit temporibus ea id, culpa magnam nisi nulla autem ex tenetur, quis aspernatur nemo tempora reprehenderit dolores delectus harum aliquid quibusdam.",
      src: fourth,
      name: "Client Name",
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
        // backgroundColor: "",
        marginTop: "70px",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <p
          style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "white",
            marginBottom: 0,
          }}
        >
          Testimonials
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#9C9C9C",
            width: "570px",
            textAlign: "center",
            lineSpacing: "1%",
            lineHeight: "24px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repudiandae, voluptates sed at, exercitationem ex inventore, magni
          impedit animi officia libero magnam harum.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "4rem",
        }}
      >
        {info.map((item, index) => {
          return (
            <div key={index}>
              <InfoCard name={item.name} src={item.src} text={item.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;

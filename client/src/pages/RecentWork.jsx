import React from "react";
import first from "../assets/work/1.png";
import second from "../assets/work/2.png";
import WorkCard from "../components/ui/work_card";

const RecentWork = () => {
  // change your images in ../assets/work folder, and choose the title, desc, and label according to your requirements
  // also, yet to implement the know more function of the button
  const info = [
    {
      src: first,
      title: "Work name here",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur velit id sint, facilis ab optio.",
      label: "Know more >",
    },
    {
      src: second,
      title: "Work name here",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur velit id sint, facilis ab optio.",
      label: "Know more >",
    },
  ];
  return (
    <div style={{ marginBottom: "70px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: 800, marginBottom: 0 }}>
          Recent Work
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#9C9C9C",
            lineHeight: "24px",
            letterSpacing: "1%",
            marginTop: 0,
            width: "570px",
            textAlign: "center",
          }}
        >
          {/* describe about your recent works here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          veniam, facere consequuntur quibusdam dolorem voluptate amet similique
          libero, vitae sunt aperiam minus commodi vel numquam eaque accusamus
          rerum vero nesciunt.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "30px",
        }}
      >
        {info.map((item, index) => {
          return (
            <div key={index}>
              <WorkCard
                src={item.src}
                title={item.title}
                desc={item.desc}
                label={item.label}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentWork;

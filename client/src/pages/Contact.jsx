import React from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const Contact = () => {
  const info = [
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Please enter your email",
      height: "40px",
    },
    {
      label: "Mobile",
      id: "mobile",
      type: "text",
      placeholder: "Enter mobile",
      height: "40px",
    },
    {
      label: "Message",
      id: "message",
      type: "text",
      placeholder: "Enter your message",
      height: "120px",
      isTextArea: true,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <p
          style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 0,
          }}
        >
          Get In Touch
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            width: "570px",
            lineHeight: "24px",
            letterSpacing: "1%",
            color: "#9C9C9C",
            textAlign: "center",
          }}
        >
          {/* here goes your contact description */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          praesentium laborum suscipit quidem quis? Incidunt sequi eum nulla rem
          voluptates nam fuga, magnam error illo?
        </p>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {info.map((item, index) => {
          return (
            <div key={index}>
              <Input
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                height={item.height}
                id={item.id}
                isTextArea={item.isTextArea}
              />
            </div>
          );
        })}
        <Button
          type={"submit"}
          label={"Submit >"}
          color={"#ffffff"}
          button_color={"#3F8E00"}
          borderRadius={"4px"}
          padding={"16px 24px"}
          fontSize={"14px"}
          height={"50px"}
          width={"100%"}
          border={"1px solid #62BA1B"}
          fontWeight={"700"}
          boxShadow={"0px 8px 30px 0px #3F8E004D"}
        />
      </form>
    </div>
  );
};

export default Contact;

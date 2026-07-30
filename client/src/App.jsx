import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-8px",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: "102%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "60px",
        }}
      >
        <Navbar />
        <Home />
      </div>
      <CaseStudies />
      <div
        style={{
          backgroundColor: "#080808",
          width: "102%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "60px",
        }}
      >
        <Testimonials />
      </div>
    </div>
  );
}

export default App;

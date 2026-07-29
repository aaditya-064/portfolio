import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";

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
          width: "101%",
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
    </div>
  );
}

export default App;

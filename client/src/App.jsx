import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import RecentWork from "./pages/RecentWork";
import Contact from "./pages/Contact";

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
        <section id="home">
          <Home />
        </section>
      </div>
      <section id="case_studies">
        <CaseStudies />
      </section>
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
        <section id="testimonials">
          <Testimonials />
        </section>
      </div>
      <section id="recent_work">
        <RecentWork />
      </section>
      <div
        style={{
          backgroundColor: "#080808",
          width: "102%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "120px",
        }}
      >
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

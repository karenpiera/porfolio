import React from "react";
import Navbar from "../component/navbar/navbar.jsx";
import Skill from "@/component/skill/skill.jsx";
import Proyects from "@/component/proyects/proyects.jsx";
import Clock from "@/component/relog/relog.jsx";
import About from "@/component/about/about.jsx";
import Contac from "@/component/contac/contac.jsx";
import Botton from "@/component/botton/botton.jsx";

function Page() {
  return (
    <div>
      <div>
        <Clock />
      </div>

      <div
        style={{
          marginTop: "40px", // Márgen superior
          marginBottom: "20px", // Márgen inferior
          marginLeft: "180px", // Márgen izquierdo
          marginRight: "20px", // Márgen derecho
          padding: 0,
          listStyle: "none",
        }}
      >
        <img src="/K.png" alt="Image 1" className="w-240 h-auto" />
      </div>
      <div
        style={{
          marginTop: "20px", // Márgen superior
          marginBottom: "20px", // Márgen inferior
          marginLeft: "680px", // Márgen izquierdo
          marginRight: "20px", // Márgen derecho
          padding: 0,
          listStyle: "none",
        }}
      >
        <br />
        <img src="/dev1.png" alt="Image 2" className="w-240 h-auto" />
      </div>
      <div style={{ margin: "320px 10px 60px " }}>
        <img src="/skill.png" alt="Image 3" className="w-36 h-auto ml-40" />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "250px 10px 60px" }}>
        <img src="/about.png" alt="Image 3" className="w-36 h-auto ml-40" />
      </div>

      <div
        id="About"
        style={{
          marginTop: "20px", // Márgen superior
          marginBottom: "20px", // Márgen inferior
          marginLeft: "680px", // Márgen izquierdo
          marginRight: "20px", // Márgen derecho
          padding: 0,
          listStyle: "none",
        }}
      >
        <About />
      </div>
      <div style={{ margin: "250px 10px 60px" }}>
        <img src="/pro.png" alt="Image 3" className="w-36 h-auto ml-40" />
      </div>
      <div id="Proyects">
        <Proyects />
      </div>
      <div style={{ margin: "250px 10px 60px" }}>
        <img src="/cont.png" alt="Image 3" className="w-36 h-auto ml-40" />
      </div>
      <div id="Contact">
        <Contac />
      </div>
      <Navbar />
    </div>
  );
}

export default Page;

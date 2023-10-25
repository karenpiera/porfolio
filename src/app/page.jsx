import React from "react";
import Navbar from "../component/navbar/navbar.jsx";
import Skill from "@/component/skill/skill.jsx";
import Proyect from "@/component/proyect/proyect.jsx";

function Page() {
  return (
    <div>
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
      <div style={{ margin: "250px 10px 60px" }}>
        <img src="/skill.png" alt="Image 3" className="w-36 h-auto ml-40" />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Proyect />
      </div>
      <Navbar />
    </div>
  );
}

export default Page;

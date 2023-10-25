import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <img
        src="/kp.png"
        alt="Logo"
        style={{ width: "100px", height: "auto", margin: "10px 20px  40px" }}
      />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li
          style={{
            margin: "10px",
            padding: "25px",
            textShadow: "0 0 5px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            cursor: "pointer",
          }}
        >
          Skill
        </li>
        <li
          style={{
            margin: "10px",
            padding: "25px",
            textShadow: "0 0 5px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            cursor: "pointer",
          }}
        >
          Projects
        </li>
        <li
          style={{
            margin: "10px",
            padding: "25px ",
            textShadow: "0 0 5px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            cursor: "pointer",
          }}
        >
          About
        </li>
        <li
          style={{
            margin: "10px",
            padding: "25px",
            textShadow: "0 0 5px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            cursor: "pointer",
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

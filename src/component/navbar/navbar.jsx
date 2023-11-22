"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          height: "100vh",
          flexDirection: "column",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        <img
          src="/kp.png"
          alt="Logo"
          style={{
            width: "100px",
            height: "auto",
            margin: "10px 20px  40px",
          }}
        />

        <ul style={{ cursor: "pointer" }}>
          <li
            // className="ui-btn box-border p-15 20 flex items-center justify-center text-white font-semibold text-16px font-mono bg-#010314 cursor-pointer transition-0.3s overflow-hidden shadow-0 2 10 0 rgba-0 0 0 0.137 rounded-10 border-2 border-#2a2b3a"
            onClick={() =>
              document.getElementById("Skill").scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
          >
            <button>
              <div> Skill</div>
            </button>{" "}
          </li>

          <li
            // className=" ui-btn  bg-#010314 hover:bg-rgb(51, 51, 51) transition-300 overflow-hidden shadow-0 2 10 0 rgba-0 0 0 0.137 rounded-10 border-2 border-#2a2b3a"
            // style={{
            //   margin: "10px",
            //   padding: "25px",
            //   cursor: "pointer",
            // }}
            onClick={() =>
              document.getElementById("About").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              })
            }
          >
            <button>
              <div>About</div>
            </button>
          </li>

          <li
            // className="ui-btn"
            // style={{
            //   margin: "10px",
            //   padding: "25px ",
            //   textShadow: "0 0 5px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            //   cursor: "pointer",
            // }}
            onClick={() =>
              document.getElementById("Proyects").scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
          >
            <button>
              <div>Proyects</div>
            </button>
          </li>
          <li
            // className="ui-btn"
            onClick={() =>
              document.getElementById("Contact").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
          >
            <button>
              <div>Contact Me</div>
            </button>{" "}
          </li>
        </ul>
      </nav>
      {showArrow && (
        <button
          onClick={scrollToTop}
          // className="ui-btn box-border p-15 20 flex items-center justify-center text-white font-semibold text-16px font-mono bg-#010314 cursor-pointer transition-0.3s overflow-hidden shadow-0 2 10 0 rgba-0 0 0 0.137 rounded-10 border-2 border-#2a2b3a"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Navbar;

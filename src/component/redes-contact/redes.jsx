"use client";
import React, { useEffect, useRef } from "react";
import "./redes.css";

function Redes() {
  const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  };

  let mouseMoved = false;
  const pointer = useRef({
    x: 0.5 * (typeof window !== "undefined" ? window.innerWidth : 0),
    y: 0.5 * (typeof window !== "undefined" ? window.innerHeight : 0),
  }).current;

  const trail = new Array(params.pointsNumber).fill().map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  }));

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const update = t => {
      // ... tu código de actualización
    };

    const setupCanvas = () => {
      canvas.width = typeof window !== "undefined" ? window.innerWidth : 0;
      canvas.height = typeof window !== "undefined" ? window.innerHeight : 0;
      update(0);
    };

    window.addEventListener("click", e => {
      updateMousePosition(e.pageX, e.pageY);
    });

    window.addEventListener("mousemove", e => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });

    window.addEventListener("touchmove", e => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    });

    setupCanvas();

    window.addEventListener("resize", setupCanvas);
  }, []); // Asegúrate de pasar un array vacío como segundo argumento para asegurar que se ejecute solo una vez al montar el componente

  return (
    <div>
      <section className="Cubo">
        <canvas ref={canvasRef}></canvas>
      </section>
    </div>
  );
}

export default Redes;

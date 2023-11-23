"use client";

import React, { useState, useEffect } from "react";
import "./relog.css";

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const currentDateTime = new Date();
      const options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };

      setTime(currentDateTime.toLocaleTimeString());
      setDate(currentDateTime.toLocaleDateString(undefined, options));
    };

    // Llamamos a la función inicialmente para establecer la hora y la fecha de inmediato
    updateDateTime();

    // Establecemos un intervalo para actualizar la hora y la fecha cada segundo
    const interval = setInterval(updateDateTime, 1000);

    // Limpiamos el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="clock"
      // style={{
      //   marginTop: "40px",
      //   marginBottom: "10px",
      //   marginLeft: "1180px",
      //   marginRight: "20px",
      //   padding: 0,
      //   listStyle: "none",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default Clock;

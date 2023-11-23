"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./proyects.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./proyects.css";

function Proyectos() {
  const videos = [
    {
      videoSrc: "/autoconect.mp4",
      title: "Renta de autos",
      description:
        "Tecnologías: JavaScript | Node.js | MySql | React | Redux | Next.js | Tailwind CSS",
    },
    {
      videoSrc: "/admin.mp4",
      title: "Administrador de series",
      description:
        "Tecnologías: JavaScript | Node.js | MySql | React | Next.js",
    },
    {
      videoSrc: "/rick.mp4",
      title: "Rick and Morty",
      description:
        "Tecnologías: JavaScript | Express | Node.js | PostgreSQL | React | Redux | Vite",
    },
    // Agrega más objetos para más videos
  ];

  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(prev => (prev - 1 + videos.length) % videos.length);
  };

  const nextImg = () => {
    setCurrentImg(prev => (prev + 1) % videos.length);
  };

  const VideoCard = ({ video }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px 50px 100px 400px",
        width: "852px",
        height: "552px",
        position: "relative",
      }}
      className="ui-btn"
    >
      <video
        className="w-full h-32 object-cover"
        src={video.videoSrc}
        title={video.title}
        controls
      />
      <p className="text-gray-700 text-base">{video.title}</p>
      <p className="text-gray-700 text-base">{video.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "98%", // Cambiado a un valor menor para dejar espacio para los botones
          position: "absolute",
          bottom: "10px",
          left: "10px", // Ajustado para el botón prev
        }}
      >
        <i className="fas fa-angle-double-left btn prev" onClick={prevImg}></i>
        <i
          className="fas fa-angle-double-right btn next"
          onClick={nextImg}
          style={{ marginLeft: "auto" }} // Ajustado para el botón next
        ></i>
      </div>
    </div>
  );

  return (
    <div>
      {videos.map((video, index) => (
        <div
          key={index}
          style={{ display: index === currentImg ? "block" : "none" }}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}

export default Proyectos;

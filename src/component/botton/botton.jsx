"use client";

import React, { useEffect } from "react";

const Botton = () => {
  useEffect(() => {
    // Utiliza import() para cargar dinámicamente la librería dat.gui solo en el lado del cliente
    import("dat.gui").then(({ GUI }) => {
      const SCENE = document.querySelector(".scene");
      const BUTTON_TEXT = document.querySelector(".text");

      const CTRL = new GUI();

      const CONFIG = {
        text: "Deploy",
        // ... otras propiedades de configuración ...
      };

      // Resto del código...

      // Actualiza el estado o realiza otras acciones según sea necesario
    });
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  // Resto del código...
};

export default Botton;

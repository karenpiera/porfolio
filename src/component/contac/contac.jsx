"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contac.css";

function Contac() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const templateParams = {
        to_name: "Karen",
        from_name: name,
        from_email: email,
        mensaje: message,
      };

      const response = await emailjs.send(
        "service_si8jrt9",
        "template_n0dxwjl",
        templateParams,
        "s3TKQzcoiIaChHMj_"
      );

      if (response && response.status === 200) {
        alert("Message sent succesfully");
      } else {
        alert("Error sending message. ");
        alert("Try other means of communication.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Error al enviar el mensaje. Pruebe con otros medios de comunicación."
      );
    }

    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <div
      style={{
        margin: "100px 150px 100px 350px",
        width: "852px",
        height: "452px",
        display: "flex",
        alignItems: "center",
      }}
      // className="ui-btn"
    >
      <section className="form_wrap">
        <section className="cantact_info">
          <section className="info_title">
            <span className="fa fa-user-circle"></span>
            <h2> KAREN PIERA</h2>
          </section>
          <section className="info_items">
            <p>
              <span className="fa fa-envelope"></span> karendegopi@gmail.com
            </p>
            <p>
              <span className="fa fa-phone"></span> +54(381) 6426399
            </p>
          </section>
        </section>
        <form onSubmit={handleSubmit} className="form_contact">
          <h2>Send Menssage</h2>

          <div className="user_info">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email*</label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="mensaje">Mensage *</label>{" "}
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <br />
          <button type="submit" className="ui-btn ">
            Send{" "}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contac;

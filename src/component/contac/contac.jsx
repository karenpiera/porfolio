"use client";
import React, { useState } from "react";

function Contac() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Email: ${email}, Mensaje: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        margin: "100px 150px 100px 550px",
        width: "352px",
        height: "352px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="ui-btn"
    >
      <h2>Contact me</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
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
          <label htmlFor="message">Message:</label>
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
    </div>
  );
}

export default Contac;

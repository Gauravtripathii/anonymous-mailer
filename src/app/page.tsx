"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const sendButtonHandler = async () => {
    try {
      await axios.post("/api/mailto", data);
    } catch (error) {
      console.log(error);
    }
    setData({
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <main>
      <h1>Anonymous Mailer</h1>
      <div className="form-container">
        <p>
          <input
            type="text"
            placeholder="Recipient's Email"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Subject of your email"
            value={data.subject}
            onChange={(event) =>
              setData({ ...data, subject: event.target.value })
            }
          />
        </p>
        <p>
          <textarea
          value={data.message}
            onChange={(event) =>
              setData({ ...data, message: event.target.value })
            }
          ></textarea>
        </p>
        <p>
          <button onClick={sendButtonHandler}>Send</button>
        </p>
      </div>
    </main>
  );
}

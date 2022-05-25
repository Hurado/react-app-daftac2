import { InputForm } from "../InputForm/InputForm";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import tenta from "../images/tenta.gif";
import "../App.css";

export const ContactsPage = () => {
  function Things() {
    const [count, setCount] = useState<number>(0);
    const handleShowAlert = () => {
      alert("Hello ReactJS");
      setCount(count + 1);
    };
    return (
      <div className="App">
        <header className="App-header">
          <InputForm defaultValue={"Start typing"} />
          <img src={tenta} className="App-logo" alt="logo" />

          <div>{`Alert was shown: ${count} times`}</div>
          <Button onClick={handleShowAlert}>Show alert</Button>
          <Button variant="contained">
            <a
              className="App-link"
              href="https://github.com/Hurado/react-app-daftac2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check my Github
            </a>
          </Button>
        </header>
      </div>
    );
  }
}

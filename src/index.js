import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";

import "./styles.css";
import HomeComponent from "./pages/home";

function App() {
  return (
    <Container>
      <HomeComponent />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

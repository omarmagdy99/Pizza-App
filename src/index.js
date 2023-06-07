import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

let App = () => {
  return (
    <div>
      <Header />
      <Menue />
      <Menue />
      <Menue />
      <Footer />
    </div>
  );
};

let Menue = () => {
  return (
    <div>
      <img src={"" + pizzaData[1].photoName} alt={pizzaData[1].name} />
      <h2>{pizzaData[1].name}</h2>
      <p>{pizzaData[1].ingredients}</p>
    </div>
  );
};
let Header = () => {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
let Footer = () => {
  return (
    <footer>{new Date().toLocaleTimeString()}. we're currently Open</footer>
  );
};
let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

let App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

//Pizza Start
let Pizza = ({ pizzaData }) => {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "Sold Out" : pizzaData.price}</span>
      </div>
    </li>
  );
};
//Pizza End

//Menu Start

let Menu = () => {
  return (
    <main className="menu">
      <h2>OUR Pizza</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>you can now Order any Pizza that you want</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaData={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We Will come Soon</p>
      )}
    </main>
  );
};
//Menu End

//Header  Start

let Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
//Header  End

//Footer Start
let Footer = () => {
  //calculate time
  let TimeNow = new Date().getHours();
  let openTime = 10;
  let closeTime = 21;
  let isOpen = TimeNow >= openTime && TimeNow < closeTime ? true : false;

  //calculate time
  return (
    <footer className="footer">
      <Order
        isOpen={isOpen}
        OpenTime={openTime}
        closeTime={closeTime}
        TimeNow={TimeNow}
      />
    </footer>
  );
};
//Footer End

//Order Start
let Order = (props) => {
  return (
    <div className="order">
      {" "}
      {new Date().toLocaleTimeString()}.{" "}
      {props.isOpen ? (
        <>
          We're currently Open to {props.closeTime} you can come now or order
          Online
          <button className=" btn">Order Now</button>
        </>
      ) : (
        <>We're currently Close, And we will open at {props.openTime}</>
      )}
    </div>
  );
};
//Order End

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

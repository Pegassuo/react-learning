import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Carlos"
      lastname="Bermeo"
      age={20}
      friends={["Juan", "Jairo"]}
      married={false}
      address={{ street: "Test123", city: "Test" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Juan"
      lastname="Urgiles"
      age={20}
      friends={["Carlos", "Jairo"]}
      married={false}
      address={{ street: "Test123", city: "Test" }}
      greet={function () {
        alert("Hello");
      }}
    />
  </>
);

import React from "react";
import Header from "./components/Navbar/Header";
import NavLinkStructure from "./components/Navbar/Navlink-structure";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
      </style>
      <Header />
      <div className="content">
        <NavLinkStructure />
      </div>
    </div>
  );
}

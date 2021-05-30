import React from "react";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
    </>
  );
}


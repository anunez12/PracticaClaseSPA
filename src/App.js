import React from "react";
import "./style.css";
import Footer from "./Footer";
import Header from "./Header";
import Leftcol from "./Leftcol";
import Centercol from "./Centercol";

export default function App() {
  const titulo = "yogui";
  return (
    <div>
      <title>yogui </title>
      <h1></h1>
      <h2>{titulo}</h2>
      <p>Start editing to see some magic happen :)</p>
      


      <div>
      <Footer/>
      <Header/>
      <Leftcol/>
      <Centercol/>
      </div>

    </div>



  );
}

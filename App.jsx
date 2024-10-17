import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./Component/Button.jsx";
import "./index.css";
import Header from "./Component/Header.jsx";

const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

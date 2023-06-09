import React from "react";
import { useState } from 'react'
import "./Home.css";
import Recoil from "./Recoil";

function Home() {
  const [showComponent , setShowComponent] = useState(false)
  const [showHome , setShowHome] = useState(true)
  const handleClick = () =>{
    setShowComponent(true)
    setShowHome(false)
  }
  return (
    <>
    {
      showHome &&
    
    <div className="home">
      <h1 className="heading">Understand React Recoil</h1>
      <div className="divz-container">
        <div className="divz" style={{ backgroundColor: "#007bff" }}>
          <button onClick={handleClick}
            className="Button"
            style={{ backgroundColor: "#fff", color: "#007bff" }}
          >
            React Recoil
          </button>
        </div>
      </div>
      </div>
    }
    {showComponent && <Recoil/> }
    </>
  );
}

export default Home;

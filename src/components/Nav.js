import React from 'react'
import { useState } from 'react';
import '../App.css'

const Nav = () => {
  /* const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  }; */

  /* const navContainerStyle = {
    backgroundColor: "white"
  } */
  
  /* const buttonStyleHover = {
    fontSize: "smaller",
    marginLeft: "10px",
    padding: "2px, 2px, 2px, 2px",
    border: isHover ? "2px solid red" : "none",
    textTransform: isHover ? "uppercase" : "",
    cursor: isHover ? "pointer" : "",
    backgroundColor: isHover ? "gray" : "",
    color: isHover ? "white" : "",
  } */


  return (
    <section style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
      <div></div>
      <img className="anonimusic" src='https://i.imgur.com/tCdcpsR.png' alt='Anonimusic'></img>
      <div className="nav-container">
        <div><p className="nav-button">Home</p></div>
        <div><p className="nav-button">Post</p></div>
      </div>
    </section>
  )
}

export default Nav
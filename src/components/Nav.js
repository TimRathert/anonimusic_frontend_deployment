import React from 'react'
import { useState } from 'react';
import '../App.css'


const Nav = (props) => {
  return (
    <section style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
      
      <img className="anonimusic" src='https://i.imgur.com/tCdcpsR.png' alt='Anonimusic'></img>
      <div className="nav-container">
        <div><p className="nav-button">Welcome, {props.session}</p></div>
//         <div><p className="nav-button">Home</p></div>
//         <div><p className="nav-button">Post</p></div>
      </div>
    </section>
  )
}

export default Nav
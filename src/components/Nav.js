import React from 'react'
import '../App.css'



const Nav = (props) => {
  return (
    <div className="nav-container">
        <div className="nav-button">Welcome, {props.session}</div>
        <div className="nav-button">Home</div>
        <div className="nav-button"> Post</div>
        <p className="name">Anonimusic</p>

    </div>
  )
}

export default Nav
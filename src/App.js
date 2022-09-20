import './App.css';
import { useState } from 'react'
import { useEffect } from 'react'

import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Comment from './components/Comment'

import reducer from './components/Session'




function App(props) {
  // useEffect(reducer)
  return (
    <div className="App">
      <Nav />
      <Slideshow Images="Images"/>
      <Post />
      <Footer/>
    </div>
  );
}

export default App;

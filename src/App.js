
import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Comment from './components/Comment'

import './App.css';
import { useState } from 'react'
console.log({Comment})
function App(props) {
  // console.log(Comment)
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

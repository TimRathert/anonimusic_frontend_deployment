import './App.css';


import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Session from './components/Session';

import NewPost from './components/NewPost'
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  return (
    <div className="App">
      <Nav />
      <Session />
      <Slideshow Images="Images"/>
      <Post />
      <Footer/>
      <NewPost />
    </div>
  );
}

export default App;

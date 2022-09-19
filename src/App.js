import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import NewPost from './components/NewPost'
import './App.css';
import { useState } from 'react'

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Slideshow Images="Images"/>
      <NewPost />
      <Post Comment="Comment"/>
    </div>
  );
}

export default App;

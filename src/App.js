import './App.css';
import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Session from './components/Session';
import NewPost from './components/NewPost'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://anonimusic-backend.herokuapp.com/'

function App(props) {
  const [post, setPost ] = useState([])

  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data)
  }

  useEffect(()=> {
    getPosts();
    {Session()}  
  },[]);


  const loaded = () => {
  return (
    <div className="App">
      <Nav />
      <Session />
      <Slideshow Images="Images"/>
      <NewPost />
      <Post props={post}/>
      <Footer/>
    </div>
  );
}

const loading = () => {
  return (<h1>Loading...</h1>)
}

return post ? loaded() : loading();

}
export default App;

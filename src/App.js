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
  const [session, setSession ] = useState("")

  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data)
  }

  const getSession = () => {
    Session();
    const response = (JSON.parse(sessionStorage.userdata).username)
    setSession(response)
  }

  useEffect(()=> {
    // getPosts();
    getSession();
  },[]);


  const loaded = () => {
 
  return (
    <div className="App">
      <Nav />
      <Slideshow Images="Images"/>
      <NewPost getPosts={getPosts} session={session}/>
      <Post getPosts={getPosts} session={session} props={post}/>
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

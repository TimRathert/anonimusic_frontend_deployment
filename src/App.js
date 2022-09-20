import './App.css';
import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Session from './components/Session';
import NewPost from './components/NewPost'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  return (
    <div className="App">
      <Nav />
      <Session />
      <Slideshow Images="Images"/>
      <NewPost />
      <Post />
      <Footer/>
    </div>
  );
}

export default App;

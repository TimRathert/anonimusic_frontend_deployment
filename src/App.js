import './App.css';


import Slideshow from './components/Slideshow'
import Post from './components/Post'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Session from './components/Session';





function App(props) {

  return (
    <div className="App">
      <Nav />
      <Session />
      <Slideshow Images="Images"/>
      <Post />
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AnimCursor from './Components/AnimCursor/AnimCursor';
import './App.css';

const App = () => {
  return (
<>
<AnimCursor/>
<Header/>
<Home/>
<About/>
<Skills/>
<Portfolio/>
<Blog/>
<Contact/>
<Footer/>


</>
  );
}

export default App;

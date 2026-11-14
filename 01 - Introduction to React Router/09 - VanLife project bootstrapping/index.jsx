import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./index.css"


function Nav(){
  return(
    <nav className='nav'>
      <div>#VANLIFE</div>
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  )
}


function Home(){
  return(
    <div className='home'>
    <Nav />
    <img className='van' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVOvoIVD11vYcKh0srLGbDIN9Qsbpjx6UFslEmpzoKw&s=10" alt="" />


    </div>
  )
}

function About(){
  return(
    <>
    <Nav />
  <div className="about">
  
    <h2>About Vanlife</h2>  <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae repellat possimus illum ipsum non eius consequuntur neque suscipit maiores totam exercitationem facilis ex molestiae quisquam, magni reiciendis molestias. Beatae!</p>
  </div>  </>)
}

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path="/about" element = {<About />} />
    </Routes>
    
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About(){
  return(
    <div>
      <h2>About Me</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum minus quod suscipit delectus ad itaque a, quisquam numquam alias commodi natus doloremque odio porro recusandae illum? Enim, omnis nulla?</p>

    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
     <Route path='/' element={<App />} />
     <Route path='/about' element={<About />}/>
   </Routes>
  </BrowserRouter>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Link to="/">Home</Link>
   <Link to="about">About</Link>
   <Routes>
    <Route path="/" element = {<Home />}>Home</Route>
    <Route path="/about" element= {<About />}>About</Route>
   </Routes>
   </BrowserRouter>
     
  );
}

function Home() {
  return (<h1>Hello, React Router!</h1>);
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum
        minus quod suscipit delectus ad itaque a, quisquam numquam alias commodi
        natus doloremque odio porro recusandae illum? Enim, omnis nulla?
      </p>

      <p>I am a scientist</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

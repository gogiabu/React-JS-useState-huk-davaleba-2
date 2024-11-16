import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import surati  from './image/burrito-with-beef-burrito-it-fire-background_852524-165.avif';
import './Style.css';

function App() {
  const [state,setState] = useState(true);

  const toggle = ()=> {
    setState(!state);
  }
  return (
    <div className='container'>
      <button onClick={toggle} className='button'> 
        {state ? 'true' : 'false'} 
        </button>
        <br></br>
        {state && (
          <img className='image' src={surati}></img>
        )}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

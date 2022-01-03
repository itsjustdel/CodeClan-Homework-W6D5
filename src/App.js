import React from 'react';   
import './App.css';         

function App() {             
  // we can write JS here :)  
  const age = 25;
  const name = "Billy";

  return (          
        //JSX - Javascript XML          
        <div>
          <h1 className="title">Hello World!</h1>
          <p> This is a paragraph of text</p>
          <p>My name is not {name} and I'm not {age} years old</p>
        </div>     
  );                         
}

export default App;           
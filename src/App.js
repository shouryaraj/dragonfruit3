import React from 'react';
import { Button } from 'evergreen-ui'
import './App.css';

function App() {
  
  function sayHello() {
    alert('Hello! Hack your degree');
  }
 
  return (
    <div className="App">
      <Button onClick={sayHello}> Evergreen test! </Button>
    </div>
  );
}

export default App;

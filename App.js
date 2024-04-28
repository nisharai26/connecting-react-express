import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [serverResponse, setServerResponse] = useState({});

  const helper = () => {
    console.log('hello');
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(response => setServerResponse(response))
  }

  useEffect(() => {
    helper()
  }, [])
  
 
  return (
    <>
      <p>name: {serverResponse.name}</p>
      <p>location: {serverResponse.location}</p>
   
     
      
    
 
      
     


    </>
  );
}

export default App;

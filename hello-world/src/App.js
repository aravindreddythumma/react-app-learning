import React from 'react'
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Message/>
     {/* <Greet name="Pavitra" role="Wife">
        <p>you are my wife</p>
      </Greet>
      <Greet name="Ramya" role="Sister">
        <button>Action</button>
      </Greet>
      <Greet name="Sunitha" role ="Mother"/> */}
      {/*<Welcome/>*/}
       {/* <Hello/>  */}
    </div>
  );
}

export default App;

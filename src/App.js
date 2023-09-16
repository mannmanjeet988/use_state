import React, {useState} from 'react';
import './style.css';
import States1 from './components/States1';
import States2 from './components/States2';
 import StateWithArray from "./components/StateWithArray"
import Task from './components/Task';

const App=()=> {
  return (
    <div className="App">
      {/* <States1 /> */}
      {/* <States2 />
      <StateWithArray /> */}
      <Task />
    </div>
  );
}

export default App;





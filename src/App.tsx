import React from 'react';
import './App.scss';

// get timsStatus
var timsStatus: string = "bad"

function App() {
  return (
    <div className="App">
      <div className="displayGrid">
        <h1>It's a <span className={timsStatus}>{timsStatus}</span> time to go to DC Tims</h1>
      </div>
    </div>
  );
}

export default App;

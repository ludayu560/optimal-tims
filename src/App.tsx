import React from 'react';
import './App.scss';

// get timsStatus
var timsStatus: string = "bad"
var currTime: number = 0

function App() {
  return (
    <div className="App">
      <header>
        <p>Location: DC Tims</p>
      </header>
      <header>
        <p>Time: {currTime}</p>
      </header>
      <body>
        <h1>It's a <span className={timsStatus}>{timsStatus}</span> time to go to DC Tims</h1>
      </body>
      <footer>

      </footer>

    </div>
  );
}

export default App;

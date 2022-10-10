import React from 'react';
import './App.scss';

// get timsStatus
var timsStatus: string = "good"
var currTime: number = 0

function App() {
  return (
    <div className="App">
      <div id='contentContainer'>
        <header>
          <p>Location: DC Tims</p>
        </header>
        <header>
          <p>Time: {currTime}</p>
        </header>
        <body>
          <h1>It's a <br /><span className={timsStatus}>{timsStatus}</span> <br /> time to go to DC Tims</h1>
        </body>
        <footer>

        </footer>
      </div>


      <div id='infoContainer'>
        <div id='infoPanel'>

        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Time } from './time';
import './App.scss';

// get timsStatus
var timsStatus: string = "good"

function App() {
  return (
    <div className="App">
      <div id='contentContainer'>
        <header>
          <p>Location: DC Tims</p>
        </header>
        <header>
          <Time></Time>
        </header>
        <body>
          <h1>It's a <br /><span className={timsStatus}>{timsStatus}</span> <br /> time to go to Tims</h1>
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

import React from 'react';
import { Time } from './time';
import { Verdict } from './verdict';
import './App.scss';

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
          <Verdict></Verdict>
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

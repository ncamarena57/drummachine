import './App.css';

function App() {
  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='display'>
          <div className="drum-pad" id="heater1">Q</div>
          <div className="drum-pad" id="heater2">W</div>
          <div className="drum-pad" id="heater3">E</div>
          <div className="drum-pad" id="heater4">A</div>
          <div className="drum-pad" id="clap">S</div>
          <div className="drum-pad" id="open-hh">D</div>
          <div className="drum-pad" id="kick-n-hat">Z</div>
          <div className="drum-pad" id="kick">X</div>
          <div className="drum-pad" id="closed-hh">C</div>
        </div>
      </div>
    </div>
  );
}

export default App;

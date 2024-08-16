import './App.css';

function App() {
  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='display'>
          <div className="drum-pad" id="heater1" onClick={console.log("hello world")}>
            Q
            <audio src="../public/sounds/Heater-1.mp3" className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" id="heater2">
            W
            <audio src="../public/sounds/Heater-2.mp3" className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" id="heater3">
            E
            <audio src="../public/sounds/Heater-3.mp3" className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" id="heater4">
            A
            <audio src="../public/sounds/Heater-4_1.mp3" className="clip" id="A"></audio>  
          </div>
          <div className="drum-pad" id="clap">
            S
            <audio src="../public/sounds/Heater-6.mp3" className="clip" id="S"></audio>  
          </div>
          <div className="drum-pad" id="open-hh">
            D
            <audio src="../public/sounds/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" id="kick-n-hat">
            Z
            <audio src="../public/sounds/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" id="kick">
            X
            <audio src="../public/sounds/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" id="closed-hh">
            C
            <audio src="../public/sounds/Cev_H2.mp3" className="clip" id="C"></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import flowers from './tulips.gif';
import './App.css';
import { Fireworks } from 'fireworks/lib/react'
import {useState } from "react"

function App() {
    let fxProps = {
    count: 1,
    interval: 400,
    canvasHeight: 500,
    canvasWidth: 300,
    colors: ['pink', 'pink', 'blue', 'green', 'red', 'gold'],
    calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth / 2),
          y: 100 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    const [ans, setAns] = useState(0);

    const noPressed = async () => {
        setAns(2)
        await new Promise(r => setTimeout(r, 2000)).then(() => {
            document.getElementById("noButton").style.display = "none";
            document.getElementById("yesButton").style.width = "200px";
            document.getElementById("yesButton").style.fontSize = "150%";
        })
    }

    const yesPressed = async() => {
        setAns(1)
        document.getElementById("yesButton").style.display = "none";
        document.getElementById("noButton").style.display = "none";
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={flowers} className="App-logo" alt="flowers" />
        <p>
          Will <span style={{color: "green"}}>you</span> be <span style={{color: "blue"}}>my</span> valentine
        </p>
        <div className="buttons">
          <button id="yesButton" className="yes" onClick={() => yesPressed()}>YES</button>
          <button id="noButton" className="no" onClick={() => {noPressed()}}>NO</button>
        </div>
        {ans == 1 ? 
            <div>
                <Fireworks {...fxProps} />
                <p style={{color: "red"}}>¡¡Vamanoooooss!!</p>
            </div>
        : ans == 2 ?
            <p style={{color: "red"}}> ¡Oye! Algo salió mal. intentar otra vez. Es no pregunta &#x1F493;</p>
        : null}
      </header>
    </div>
    );
}

export default App;

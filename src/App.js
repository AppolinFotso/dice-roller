import logo from "./logo.svg";
import "./App.css";
import DieRoller from "./DieRoller";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dice Roller</p>
      </header>
      <div className="dice-container">
        <DieRoller diceFaces={4} />
        <DieRoller diceFaces={6} />
        <DieRoller diceFaces={8} />
        <DieRoller diceFaces={10} />
        <DieRoller diceFaces={100} />
        <DieRoller diceFaces={12} />
        <DieRoller diceFaces={20} />
      </div>
    </div>
  );
}

export default App;

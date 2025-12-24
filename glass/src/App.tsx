import './App.css';
import useToggle from "./Components/UseToggle";

function App() {
  const [isOn, toggle] = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>

      <p>{isOn ? "true" : "false"}</p>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="overlay"></div>

      <div className="container">
        <h1 className="title">Premium Counter App</h1>
        <p className="subtitle">
          Built with React + Vite ⚡ | Modern UI Design
        </p>

        <div className="card">
          <h2 className="counter">{count}</h2>

          <button
            className="btn"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increase Counter
          </button>

          <button
            className="btn secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <footer>
          <p>Designed with ❤️ by Moksh</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
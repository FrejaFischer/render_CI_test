import { useState } from "react";
import ms from "ms";

function App() {
  const [count, setCount] = useState(0);
  const time = ms("5s");

  return (
    <>
      <div>
        <p>hello again again</p>
      </div>
      <h1>Vite + React</h1>
      <p>{time}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;

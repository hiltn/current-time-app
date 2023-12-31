import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function update() {
    let newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  setInterval(update, 1000);
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;

import { useState } from "react";

export function Semaforo() {
  const [lights, setLights] = useState({
    red: true,
    yellow: false,
    green: false
  });

  function turnOn(color) {
    setLights({
      red: color === "red",
      yellow: color === "yellow",
      green: color === "green"
    });
  }

  function turnOff() {
    setLights({
      red: false,
      yellow: false,
      green: false
    });
  }

  return (
    <div>
      <div id="trafficTop"></div>

      <div id="container">
        <div
          className={`licht red ${lights.red ? "on" : ""}`}
          onClick={() => turnOn("red")}
        ></div>

        <div
          className={`licht yellow ${lights.yellow ? "on" : ""}`}
          onClick={() => turnOn("yellow")}
        ></div>

        <div
          className={`licht green ${lights.green ? "on" : ""}`}
          onClick={() => turnOn("green")}
        ></div>
      </div>

      <button id="offButton" onClick={turnOff}>
        Apagar
      </button>
    </div>
  );
}

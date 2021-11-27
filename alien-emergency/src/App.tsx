import React, { useState } from "react";
import "./App.css";
import { StartStory } from "./StartStory";
import { Instructions } from "./Instructions";
import { PlayButton } from "./PlayButton";
import { Game } from "./game/Index";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">
      {!gameStarted ? (
        <>
          <StartStory />
          <Instructions />
          <PlayButton onClick={() => setGameStarted(true)} />
        </>
      ) : (
        <Game onExit={() => setGameStarted(false)} />
      )}
    </div>
  );
}

export default App;

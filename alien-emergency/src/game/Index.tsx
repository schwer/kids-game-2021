import React from "react";
import { ExitButton } from "./ExitButton";

export const Game: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  return (
    <div>
      <ExitButton onExit={onExit} />
      The Game
    </div>
  );
};

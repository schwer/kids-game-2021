import React from "react";

export const ExitButton: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  return (
    <button onClick={onExit} type="button">
      Exit
    </button>
  );
};

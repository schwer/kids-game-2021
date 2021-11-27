import React from "react";

export const PlayButton: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Play
    </button>
  );
};

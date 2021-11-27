import React from "react";

export const KeyMap = {
  GoLeft: 37, // left arrow
  GoRight: 39, // right arrow
  GoUp: 38, // up arrow
  GoDown: 40, // down arrow
  Sit: 83, // S
  Stand: [16, 83], // Shift S
  Play: 80, // P
  Build: 66, // B
  Draw: 68, // D
  Exit: 27, // Escape
};

export const Instructions: React.FC = () => {
  return (
    <ul>
      <li>Left arrow: Go left</li>
      <li>Right arrow: Go right</li>
      <li>Up arrow: Jump</li>
      <li>S key: Sit</li>
      <li>Shift + S key: Stand</li>
      <li>P key: Play with your pet</li>
      <li>B key: Build a house</li>
      <li>D key: Draw</li>
    </ul>
  );
};

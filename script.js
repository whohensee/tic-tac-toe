"use strict";

/* 
----- Pseudocode -----

- Gameboard Object
  - The purpose of this object is to store all information related to the state
    of the game board.

  - array gameboardArray: stores the 9 spaces representing a 3x3 board
  - placeMarker: places a given player's marker in an unoccupied board spot
  - evaluateBoard: checks for a win or draw

- Player Object
  - stores information regarding the player

  - string marker: X or O, the marker represented by the player

- Game Object
  - runs a game, including adding the board via javascript (might end up in
    Gameboard object)


*/

/* ----- Gameboard Object ----- */

const gameboard = (() => {
  const gameboardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const p1Boxes = [];
  const p2Boxes = [];

  const updatePlayerBoxes = () => {
    for (let i = 0; i < 9; i++) {
      if (gameboardArray[i] === 1) {
        if (!p1Boxes.includes(i)) {
          p1Boxes.push(i);
        }
      } else if (gameboardArray[i] === 2) {
        if (!p2Boxes.includes(1)) {
          p2Boxes.push(i);
        }
      }
    }
  };

  return { gameboardArray, p1Boxes, updatePlayerBoxes };
})();

console.log("Loaded");

gameboard.gameboardArray[4] = 1;

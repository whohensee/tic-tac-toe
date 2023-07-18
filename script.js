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
  const gameboardArray = [1, 2, 2, 2, 1, 2, 2, 1, 2];
  // const p1Boxes = [];
  // const p2Boxes = [];

  const checkRow = (x) => {
    /* input 1, 2, 3 */
    const box1 = gameboardArray[3 * x - 3];
    const box2 = gameboardArray[3 * x - 2];
    const box3 = gameboardArray[3 * x - 1];
    if (!box1) {
      return 0;
    }
    if (box1 === box2 && box1 === box3) {
      return box1;
    } else {
      return 0;
    }
  };

  const checkCol = (x) => {
    /* input 1, 2, 3 */
    const box1 = gameboardArray[x - 1];
    const box2 = gameboardArray[x + 2];
    const box3 = gameboardArray[x + 5];
    if (!box1) {
      return 0;
    }
    if (box1 === box2 && box1 === box3) {
      return box1;
    } else {
      return 0;
    }
  };

  const checkDiag = (x) => {
    /* input 1, 2, 3 */
    const box1 = gameboardArray[2 * x - 2];
    const box2 = gameboardArray[4];
    const box3 = gameboardArray[-2 * x + 10];
    if (!box1) {
      return 0;
    }
    if (box1 === box2 && box1 === box3) {
      return box1;
    } else {
      return 0;
    }
  };

  const lookForWinner = () => {
    const victoryArray = [
      checkRow(1),
      checkRow(2),
      checkRow(3),
      checkCol(1),
      checkCol(2),
      checkCol(3),
      checkDiag(1),
      checkDiag(2),
    ];
    if (victoryArray.includes(1)) {
      return 1;
    } else if (victoryArray.includes(2)) {
      return 2;
    } else {
      return 0;
    }
  };
  // const updatePlayerBoxes = () => {
  //   for (let i = 0; i < 9; i++) {
  //     if (gameboardArray[i] === 1) {
  //       if (!p1Boxes.includes(i)) {
  //         p1Boxes.push(i);
  //       }
  //     } else if (gameboardArray[i] === 2) {
  //       if (!p2Boxes.includes(1)) {
  //         p2Boxes.push(i);
  //       }
  //     }
  //   }
  // };

  return {
    gameboardArray,
    checkRow,
    checkCol,
    checkDiag,
    lookForWinner
  };
})();

console.log("Loaded");

// gameboard.gameboardArray[4] = 1;

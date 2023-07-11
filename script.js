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
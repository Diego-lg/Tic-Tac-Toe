let player = 1;

function game() {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).addEventListener("click", (e) => {
      if (player === 1) {
        if (e.target.innerText === "") {
          e.target.innerText = "X";
          player = 2;
        }
      } else {
        if (e.target.innerText === "") {
          e.target.innerText = "O";
          player = 1;
        }
      }

      const board = [
        [
          document.getElementById(buttons[0]).innerText,
          document.getElementById(buttons[1]).innerText,
          document.getElementById(buttons[2]).innerText,
        ],
        [
          document.getElementById(buttons[3]).innerText,
          document.getElementById(buttons[4]).innerText,
          document.getElementById(buttons[5]).innerText,
        ],
        [
          document.getElementById(buttons[6]).innerText,
          document.getElementById(buttons[7]).innerText,
          document.getElementById(buttons[8]).innerText,
        ],
      ];

      // Check rows
      for (let i = 0; i < 3; i++) {
        if (
          board[i][0] !== "" &&
          board[i][0] === board[i][1] &&
          board[i][1] === board[i][2]
        ) {
          alert("PLAYER " + board[i][0] + " WON!");
        }
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
        if (
          board[0][i] !== "" &&
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i]
        ) {
          alert("PLAYER " + board[0][i] + " WON!");
        }
      }

      // Check diagonals
      if (
        board[0][0] !== "" &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
      ) {
        alert("PLAYER " + board[0][0] + " WON!");
      }

      if (
        board[0][2] !== "" &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
      ) {
        alert("PLAYER " + board[0][2] + " WON!");
      }
    });
  }
}

game();

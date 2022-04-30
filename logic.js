let players = ['x', 'o'];
let activePlayer = 0;

function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  activePlayer;
  renderBoard(board);
}

function click(row, column) {
  let currentPlayer = players[activePlayer];
  board[row][column] = currentPlayer;
  renderBoard(board);
  let busyColumn = 0;
  let busyRow = 0;
  let busyDiagonal1 = 0;
  let busyDiagonal2 = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === currentPlayer) {
      busyColumn++;
      if (busyColumn === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === currentPlayer) {
      busyRow++;
      if (busyRow === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][board.length - 1 - i] === currentPlayer) {
      busyDiagonal1++;
      if (busyDiagonal1 === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === currentPlayer) {
      busyDiagonal2++;
      if (busyDiagonal2 === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
}

  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    default:
      activePlayer = 0;
      break;
  }
}  
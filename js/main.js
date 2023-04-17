var board = [];
var currentPiece = null;
var currentPieceType = null;
var currentPiecePosition = null;

function createPiece() {
  // TODO: create a random Tetris piece
}

function movePieceDown() {
  // TODO: move the current piece down by one block
}

function movePieceLeft() {
  // TODO: move the current piece left by one block
}

function movePieceRight() {
  // TODO: move the current piece right by one block
}

function rotatePiece() {
  // TODO: rotate the current piece
}

function drawBoard() {
  var gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 10; x++) {
      if (board[y][x] !== 0) {
        var block = document.createElement("div");
        block.className = "block";
        block.style.top = (y * 20) + "px";
        block.style.left = (x * 20) + "px";
        gameBoard.appendChild(block);
      }
    }
  }
}

function gameLoop() {
  movePieceDown();
  drawBoard();
}

setInterval(gameLoop, 1000);

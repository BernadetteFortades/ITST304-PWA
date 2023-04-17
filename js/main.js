var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cubeX = 200;
var cubeY = 200;
var cubeSize = 50;
var cubeColor = "red";

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function drawCube() {
	ctx.fillStyle = cubeColor;
	ctx.fillRect(cubeX, cubeY, cubeSize, cubeSize);
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moveCube() {
	if (leftPressed && cubeX > 0) {
		cubeX -= 5;
	}
	if (rightPressed && cubeX < canvas.width - cubeSize) {
		cubeX += 5;
	}
	if (upPressed && cubeY > 0) {
		cubeY -= 5;
	}
	if (downPressed && cubeY < canvas.height - cubeSize) {
		cubeY += 5;
	}
}

function keyDownHandler(e) {
	if (e.keyCode == 37) {
		leftPressed = true;
	} else if (e.keyCode == 39) {
		rightPressed = true;
	} else if (e.keyCode == 38) {
		upPressed = true;
	} else if (e.keyCode == 40) {
		downPressed = true
  }
}
function keyDownHandler(e) {
	if (e.keyCode == 37) {
		leftPressed = true;
	} else if (e.keyCode == 39) {
		rightPressed = true;
	} else if (e.keyCode == 38) {
		upPressed = true;
	} else if (e.keyCode == 40) {
		downPressed = true;
	}
}
function keyUpHandler(e) {
	if (e.keyCode == 37) {
		leftPressed = false;
	} else if (e.keyCode == 39) {
		rightPressed = false;
	} else if (e.keyCode == 38) {
		upPressed = false;
	} else if (e.keyCode == 40) {
		downPressed = false;
	}
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function gameLoop() {
	clearCanvas();
	moveCube();
	drawCube();
}

setInterval(gameLoop, 20);

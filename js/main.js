var player = document.getElementById("player");
var obstacles = document.getElementsByClassName("obstacle");
var finish = document.getElementById("finish");

function movePlayerLeft() {
	var left = parseInt(player.style.left);
	if (left > 0) {
		player.style.left = (left - 50) + "px";
	}
}

function movePlayerRight() {
	var left = parseInt(player.style.left);
	if (left < 750) {
		player.style.left = (left + 50) + "px";
	}
}

function checkCollision() {
	var playerRect = player.getBoundingClientRect();
	for (var i = 0; i < obstacles.length; i++) {
		var obstacleRect = obstacles[i].getBoundingClientRect();
		if (playerRect.bottom >= obstacleRect.top &&
			playerRect.top <= obstacleRect.bottom &&
			playerRect.right >= obstacleRect.left &&
			playerRect.left <= obstacleRect.right) {
			alert("Game over!");
			location.reload();
		}
	}
	if (playerRect.bottom >= finish.getBoundingClientRect().top) {
		alert("You win!");
		location.reload();
	}
}

document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowLeft") {
		movePlayerLeft();
	}
	else if (event.key === "ArrowRight") {
		movePlayerRight();
	}
	checkCollision();
});

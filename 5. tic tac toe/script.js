"use strict";

let player = 1;
let p1Winner = false;
let p2Winner = false;
let playerTitle = document.querySelector(".player-title");
let icon1 = "<img src='images/icon1.png' alt='player sign' />";
let icon2 = "<img src='images/icon2.png' alt='player sign' />";
let boxes = document.querySelectorAll(".boxes");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");

let allBoxes = document.querySelectorAll(".boxes");
allBoxes.forEach((box) => {
	box.addEventListener("click", () => {
		console.log(box.innerHTML == "");
		if (!box.innerHTML) {
			putPlayerSign(box);
			changePlayer();
			checkWinner();
		}
	});
});

let resetBtn = document.querySelector(".gameplay-div");
resetBtn.addEventListener("click", resetGame);

function changePlayer() {
	if (player == 1) {
		player = 2;
		playerTitle.innerHTML = "second player";
	} else if (player == 2) {
		player = 1;
		playerTitle.innerHTML = "first player";
	}
}

function putPlayerSign(clickedBox) {
	clickedBox.setAttribute("data-a", player);
	clickedBox.insertAdjacentHTML("beforeEnd", `<img  class="1" src='images/icon${player}.png' alt='player sign' />`);
}

function checkWinner() {
	if (box1.getAttribute("data-a") == box2.getAttribute("data-a") && box2.getAttribute("data-a") == box3.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box4.getAttribute("data-a") == box5.getAttribute("data-a") && box5.getAttribute("data-a") == box6.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box7.getAttribute("data-a") == box8.getAttribute("data-a") && box8.getAttribute("data-a") == box9.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box1.getAttribute("data-a") == box4.getAttribute("data-a") && box4.getAttribute("data-a") == box7.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box2.getAttribute("data-a") == box5.getAttribute("data-a") && box5.getAttribute("data-a") == box8.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box3.getAttribute("data-a") == box6.getAttribute("data-a") && box6.getAttribute("data-a") == box9.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box1.getAttribute("data-a") == box5.getAttribute("data-a") && box5.getAttribute("data-a") == box9.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	} else if (box3.getAttribute("data-a") == box5.getAttribute("data-a") && box5.getAttribute("data-a") == box7.getAttribute("data-a")) {
		if (player == 1) p2Winner = true;
		else if (player == 2) p1Winner = true;
	}

	if (p1Winner == true) {
		playerTitle.innerHTML = "player one won !";
	} else if (p2Winner == true) {
		playerTitle.innerHTML = "player two won !";
	}
}

function resetGame() {
	player = 1;
	p1Winner = false;
	p2Winner = false;
	playerTitle.innerHTML = "first player";
	boxes.forEach((box) => {
		box.innerHTML = "";
	});
	box1.setAttribute("data-a", "3");
	box2.setAttribute("data-a", "4");
	box3.setAttribute("data-a", "5");
	box4.setAttribute("data-a", "6");
	box5.setAttribute("data-a", "7");
	box6.setAttribute("data-a", "8");
	box7.setAttribute("data-a", "9");
	box8.setAttribute("data-a", "10");
	box9.setAttribute("data-a", "11");
}

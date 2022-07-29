"use strict";

let quizes = [];

if (!localStorage.getItem("quizes")) localStorage.setItem("quizes", JSON.stringify([]));
quizes = JSON.parse(localStorage.getItem("quizes"));
console.log(quizes);

class QuizList {
	constructor(quizContainer) {
		this.quizContainer = quizContainer;
		this.generateQuizes();
	}
	generateQuizes() {
		let iconSrc = "images/test-icon.png";
		let quizTitle;

		quizes.forEach((quiz) => {
			quizTitle = quiz.title;
			quizContainer.insertAdjacentHTML(
				"beforeend",
				`
            <div class="quiz-item">
				<div>
					<img class="quiz-item-icon" src=${iconSrc} alt="test icon" />
					<p class="quiz-item-title">${quizTitle}</p>
				</div>
				<a href="quiz.html#${quiz.id}"><button>Take quiz</button></a>
			</div>
            `
			);
		});
	}
}

let quizContainer = document.querySelector("#quiz-list");
let mainList = new QuizList(quizContainer);

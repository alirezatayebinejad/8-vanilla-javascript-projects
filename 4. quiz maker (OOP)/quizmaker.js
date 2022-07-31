"use strict";

let quizes = [];

class Quiz {
	constructor(id, title, description, count, timeout, questions) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.count = count;
		this.timeout = timeout;
		this.questions = questions;
	}
}

class QuizMaker {
	constructor() {
		this.render();
	}

	render() {
		let count;
		let tempCount;

		let countInput = document.querySelector("#create-quiz-count");
		countInput.addEventListener("change", () => {
			count = document.querySelector("#create-quiz-count").value;
			tempCount = count;
		});

		let qId = 1;
		let questions = [];
		let qAddBtn = document.querySelector("#question-add-btn");
		qAddBtn.addEventListener("click", (e) => {
			e.preventDefault();
			questions.push(this.creatQuestions(count, qId));
			count--;
			qId++;
			if (qId <= tempCount) {
				document.querySelector("#show-count").innerHTML = `${qId}.`;
			}

			/* empty values for next input*/
			document.querySelector("#create-quiz-question").value = "";
			document.querySelectorAll(".options").forEach((answer) => {
				answer.value = "";
			});
		});

		let title;
		let description;
		let timeout;
		let submitBtn = document.querySelector("#create-form-sumbit");
		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();
			title = document.querySelector("#create-quiz-title").value;
			description = document.querySelector("#create-quiz-description").value;
			timeout = document.querySelector("#create-quiz-timeout").value;
			this.createTheQuiz(quizes.length, title, description, tempCount, timeout, questions);
			this.updateLocalStorage();
			/* empty values for next input*/
			document.querySelector("#create-quiz-title").value = "";
			document.querySelector("#create-quiz-description").value = "";
			document.querySelector("#create-quiz-timeout").value = "";
			document.querySelector("#show-count").innerHTML = "1.";
			alert("your Quiz Added to Quizes");
		});
	}
	creatQuestions(count, id) {
		let qTitle;
		let options = [];
		let qCorrect;
		if (count > 0) {
			qTitle = document.querySelector("#create-quiz-question").value;
			let answers = document.querySelectorAll(".options");
			answers.forEach((answer) => {
				options.push(answer.value);
			});
			qCorrect = (function () {
				let correctOne;
				let options = document.querySelectorAll(".correctA");
				options.forEach((option) => {
					if (option.checked) {
						correctOne = option.getAttribute("id").slice(7);
					}
				});
				return correctOne;
			})();

			return { id: id, title: qTitle, options: options, correct: qCorrect };
		} else {
			alert(`Error: you have entered all your questions`);
		}
	}
	createTheQuiz(id, title, description, count, timeout, questions) {
		let newQuiz = new Quiz(id, title, description, count, timeout, questions);
		quizes.push(newQuiz);
	}
	updateLocalStorage() {
		let i = 1;
		let allQuizes = JSON.parse(localStorage.getItem("quizes"));
		quizes.forEach((q) => {
			allQuizes.push(q);
		});
		allQuizes.forEach((quiz) => {
			quiz.id = i;
			i++;
		});
		localStorage.setItem("quizes", JSON.stringify(allQuizes));
	}
}

let q = new QuizMaker();

"use strict";

let quizes = [];
quizes = JSON.parse(localStorage.getItem("quizes"));

class TakeQuiz {
	constructor() {
		this.point = 0;
		this.quizId = location.hash.slice(1);
		this.quiz;
		quizes.forEach((q) => {
			if (q.id == this.quizId) this.quiz = q;
		});
		this.render();
	}
	render() {
		let titleElem = document.querySelector("#header-quiz-title");
		let descriptionElem = document.querySelector("#descriptoion");
		let countElem = document.querySelector("#count-value");
		let submitAnswersBtn = document.querySelector("#submit-adswers");
		titleElem.innerHTML = this.quiz.title;
		descriptionElem.innerHTML = this.quiz.description;
		countElem.innerHTML = this.quiz.count;
		this.timeoutMaker();
		submitAnswersBtn.addEventListener("click", () => {
			this.getQuizResult();
		});
		this.generateQuestions();
	}
	timeoutMaker() {
		let timeoutElem = document.querySelector("#timer-value");
		let timeoutMinute = +this.quiz.timeout;
		let min = timeoutMinute - 1;
		let sec = 59;
		setInterval(timeoutHandler, 1000);
		function timeoutHandler() {
			if (sec < 0) {
				min--;
				sec = 59;
				timeoutElem.innerHTML = `${min}:${sec}`;
				sec--;
			} else {
				timeoutElem.innerHTML = `${min}:${sec}`;
				sec--;
			}
			if (sec == 0 && min == 0) {
				this.getQuizResult();
				clearInterval();
			}
		}
	}
	generateQuestions() {
		let questionsContainer = document.querySelector(".question-list");
		this.quiz.questions.forEach((question) => {
			questionsContainer.insertAdjacentHTML(
				"beforeend",
				`
        <div class="question">
        <p class="question-number">${question.id}</p>
        <div>
            <p class="question-title">.${question.title}</p>
            <div class="question-answers">
                <div>
                    <input type="radio" id="${question.id}answer1" name="${question.id}answer" />
                    <label for="${question.id}answer1">1.${question.options[0]}</label>
                </div>
                <div>
                    <input type="radio" id="${question.id}answer2" name="${question.id}answer" />
                    <label for="${question.id}answer2">2.${question.options[1]}</label>
                </div>
                <div>
                    <input type="radio" id="${question.id}answer3" name="${question.id}answer" />
                    <label for="${question.id}answer3">3.${question.options[2]}</label>
                </div>
                <div>
                    <input type="radio" id="${question.id}answer4" name="${question.id}answer" />
                    <label for="${question.id}answer4">4.${question.options[3]}</label>
                </div>
            </div>
        </div>
    </div>
        `
			);
		});
	}

	getQuizResult() {
		let questions = document.querySelectorAll(".question-answers");
		let correctAnswers = [];
		let checkedAnswer = [];

		questions.forEach((question) => {
			let inputs = question.querySelectorAll("input");

			let isChecked = 0;
			inputs.forEach((input) => {
				if (input.checked) {
					checkedAnswer.push(+input.id.slice(7));
					isChecked = 1;
				}
			});
			if (isChecked == 0) checkedAnswer.push(0);
		});

		this.quiz.questions.forEach((question) => {
			correctAnswers.push(+question.correct);
		});

		let questinsCount = this.quiz.questions.length;
		let eachQuestionPoint = 100 / questinsCount;

		let i = 0;
		while (i < correctAnswers.length) {
			if (correctAnswers[i] == checkedAnswer[i]) {
				this.point += eachQuestionPoint;
			}
			i++;
		}

		let questionsContainer = document.querySelector(".question-list");
		let answerQuestionTitle = document.querySelector(".answer-the-test");
		let timeoutElem = document.querySelector("#timer-value");
		let submitBtn = document.querySelector("#submit-adswers");
		let cancelBtn = document.querySelector("#cancel-quiz");

		questionsContainer.innerHTML = `
        <h2 class="answer-the-test" style="color:green; margin:100px 0">your score is: ${this.point}%</h2>      
        `;
		answerQuestionTitle.innerHTML = "here is your result";
		timeoutElem.style.display = "none";
		submitBtn.style.display = "none";
		cancelBtn.innerHTML = "Back To Home";
	}
}

let holdingQuiz = new TakeQuiz();

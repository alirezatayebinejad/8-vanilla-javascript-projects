"use strict";

let generateBox = document.querySelector("#generated-pass");
let copyPass = document.querySelector("#copy");
let passLengthBox = document.querySelector("#pass-length-box");
let passLengthRange = document.querySelector("#pass-length-range");
let uppercaseCheck = document.querySelector("#uppercase");
let lowercaseCheck = document.querySelector("#lowercase");
let numbersCheck = document.querySelector("#numbers");
let symbolsCheck = document.querySelector("#symbols");
let btnGenerate = document.querySelector("#generat-btn");
let passLength = passLengthBox.value;
let checkboxes = document.querySelectorAll(".check");
let generatedPass = [];
console.log(checkboxes);

let alphabets = [
	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	["1", "2", "3", "4", "5", "6", "7", "8", "9"],
	["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "/", ":", ";", "<", ",", ">", ".", "?", "/"],
];
passLengthRange.addEventListener("change", () => {
	passLengthBox.value = passLengthRange.value;
	passLength = passLengthBox.value;
});

let generatePass = () => {
	let randUpper = 0;
	let randLower = 0;
	let randSymbol = 0;
	let randNumber = 0;
	let passLengthNew = passLength;
	let checkedArray = [];

	checkboxes.forEach((checks) => {
		if (checks.checked) {
			if (checks.id == "uppercase") {
				randUpper = Math.round(Math.random() * passLengthNew);
				passLengthNew -= randUpper;
			} else if (checks.id == "lowercase") {
				randLower = Math.round(Math.random() * passLengthNew);
				passLengthNew -= randLower;
			} else if (checks.id == "numbers") {
				randNumber = Math.round(Math.random() * passLengthNew);
				passLengthNew -= randNumber;
			} else if (checks.id == "symbols") {
				randSymbol = Math.round(Math.random() * passLengthNew);
				passLengthNew -= randSymbol;
			}
			checkedArray.push(checks);
		}
	});

	let randChecked = checkedArray[Math.floor(Math.random() * checkedArray.length)];
	if (randChecked.id == "uppercase") randUpper += passLengthNew;
	else if (randChecked.id == "lowercase") randLower += passLengthNew;
	else if (randChecked.id == "numbers") randNumber += passLengthNew;
	else if (randChecked.id == "symbols") randSymbol += passLengthNew;

	let allRandChecks = [{ upper: randUpper }, { lower: randLower }, { numbers: randNumber }, { symbols: randSymbol }];
	console.log(allRandChecks);

	console.log("upper:", randUpper);
	console.log("randLower:", randLower);
	console.log("randSymbol:", randSymbol);
	console.log("randNumber:", randNumber);
	console.log("checkedArray:", checkedArray);
};

btnGenerate.addEventListener("click", () => {
	if (!uppercaseCheck.checked && !lowercaseCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
		document.getElementById("warning").style.display = "block";
	} else {
		document.getElementById("warning").style.display = "none";
		generatePass();
	}
});

/*


*/

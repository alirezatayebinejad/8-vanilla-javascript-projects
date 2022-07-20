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
let alphabets = [["a", "b"]];

passLengthRange.addEventListener("change", () => {
    passLengthBox.value = passLengthRange.value;
    passLength = passLengthBox.value;
});

let generatePass = () => {
    console.log("here");
};

btnGenerate.addEventListener("click", () => {
    if (
        !uppercaseCheck.checked &&
        !lowercaseCheck.checked &&
        !numbersCheck.checked &&
        !symbolsCheck.checked
    ) {
        document.getElementById("warning").style.display = "block";
    } else {
        document.getElementById("warning").style.display = "none";
        generatePass();
    }
});

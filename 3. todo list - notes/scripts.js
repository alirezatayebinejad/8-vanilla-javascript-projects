"use strict";

//popup display - open close

let newNoteBtn = document.querySelector("#new-note");
let newTodoBtn = document.querySelector("#new-todo");
let popupsSection = document.querySelector("#popups");
let notePopup = document.querySelector("#newnote-popup");
let todoPopup = document.querySelector("#newtodo-popup");
let closePopupBtn = document.querySelectorAll(".close-popup-btn");
newNoteBtn.addEventListener("click", () => {
	popupsSection.style.display = "flex";
	notePopup.style.display = "flex";
});
newTodoBtn.addEventListener("click", () => {
	popupsSection.style.display = "flex";
	todoPopup.style.display = "flex";
});
closePopupBtn.forEach((closeBtn) => {
	closeBtn.addEventListener("click", closePopup);
});
function closePopup() {
	popupsSection.style.display = "none";
	notePopup.style.display = "none";
	todoPopup.style.display = "none";
}

//popups functions to add or remove notes or todo to DOM

let todos = [{ title: "this is a test for todo title in array" }];
let notes = [{ title: "test for note title in array", description: "this is a test for description of a note in array for test" }];
let todoSubmitBtn = document.querySelector("#todo-submit");
let noteSubmitBtn = document.querySelector("#note-submit");
let newTodoTitle = document.querySelector("#newtodo-title");
let newNoteTitle = document.querySelector("#newnote-title");
let newNoteDescription = document.querySelector("#newnote-description");
let todoList = document.querySelector(".todo-list");
let noteList = document.querySelector(".note-list");
todoSubmitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	todos.push({ title: newTodoTitle.value });
	todoToDom(newTodoTitle.value);
	localStorageUpdate();
	newTodoTitle.value = "";
	closePopup();
});
noteSubmitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	notes.push({ title: newNoteTitle.value, description: newNoteDescription.value });
	noteToDom(newNoteTitle.value, newNoteDescription.value);
	localStorageUpdate();
	newTodoTitle.value = "";
	closePopup();
});
function todoToDom(title) {
	todoList.insertAdjacentHTML(
		"beforeend",
		`
    <div class="todo">
		<div class="todo-text">${title}</div>
		<div class="todo-btns">
			<button class="edit-btn"><img src="images/edit-icon.png" alt="edit" /></button>
			<button class="done-btn"><img src="images/done-icon.png" alt="done" /></button>
			<button class="delete-btn"><img src="images/trash-icon.png" alt="trash" /></button>
		</div>
	</div>
    `
	);
}
function noteToDom(title, description) {
	noteList.insertAdjacentHTML(
		"beforeend",
		`
    <div class="note">
        <h4 class="note-title">${title}</h4>
        <div class="note-text">${description}</div>
        <div class="note-btns">
            <button class="edit-btn"><img src="images/edit-icon.png" alt="edit" /></button>
            <button class="delete-btn"><img src="images/trash-icon.png" alt="trash" /></button>
        </div>
    </div>
    `
	);
}

//set local storage for storing data so it will not deleted if we refresh the page

function localStorageUpdate() {
	localStorage.setItem("todos", JSON.stringify(todos));
	localStorage.setItem("notes", JSON.stringify(notes));
	console.log("added to local storage");
}
function localstorageGet() {
	todos = JSON.parse(localStorage.getItem("todos"));
	console.log(todos);
	todos.forEach((todo) => {
		todoToDom(todo.title);
	});

	notes = JSON.parse(localStorage.getItem("notes"));
	console.log(notes);
	notes.forEach((note) => {
		noteToDom(note.title, note.description);
	});
}
localstorageGet();

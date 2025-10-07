import {renderNotes} from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let noteDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let pinTitle = document.querySelector(".pin-title");
let otherTitle = document.querySelector(".other-title");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

addNoteButton.addEventListener("click", () => {
    if (note.value.trim().length > 0 || title.value.trim().lenght > 0) {
        arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: title.value.trim(), note: note.value.trim(), isPinned: false, isArchived: false}];
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
    }
    
});
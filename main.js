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


noteDisplay.addEventListener("click", (event) =>{
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;
    console.log({type, noteId});

    //
    switch (type) {
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id})=> id.toString() !==noteId);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
    }
})

addNoteButton.addEventListener("click", () => {
    if (note.value.trim().length > 0 || title.value.trim().lenght > 0) {
        arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: title.value.trim(), note: note.value.trim(), isPinned: false, isArchived: false}];
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
        localStorage.setItem("notes", JSON.stringify(arrayOfNotes)); 
    }
    
});
showOtherNotes.innerHTML = renderNotes(arrayOfNotes);

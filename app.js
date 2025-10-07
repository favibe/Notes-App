export const renderNotes = (notes) => {
    let newNote = notes.map(({id, note, title, isPinned, isArchived}) => {
        return (
            `<div class="single-note shadow">
                <div class="d-flex align-center title-container">
                    <span class="single-note-title>${title}</span>
                    <button class="button del-btn v-hidden>
                        <span class="material-icons-outlined">
                        delete
                        </span>
                    </button>
                </div>
                <p>${note}</p>
                <div class="options d-flex gap-md">
                    <button class="button btn pinned-btn v-hidden">
                        <span class="material-icons-outlined">
                            push_pin
                        </span>
                    </button>
                    <button class="button btn pinned-btn v-hidden>
                        <span class="material-icons-outlined">
                            archive
                        </span>    
                    </button>
                </div>
            </div>`
        )
    });
    newNote = newNote.join("");
    return newNote;
}

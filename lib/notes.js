const fs = require("fs");
const path = require("path");

function addNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify(notesArray)
    );
    return newNote;
};

function removeNote(id, notesArray) {
    notesArray.splice(id, 1);
    // Reassign id to each remaining element to retain uuid integrity
    for (let i = 0; i < notesArray.length; i++) {
        notesArray[i].id = i;
    };
    return notesArray;
}

module.exports = {
    addNewNote,
    removeNote
};
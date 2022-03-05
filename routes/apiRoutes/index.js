const router = require('express').Router();
const { addNewNote, removeNote } = require('../../lib/notes');
const notes = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = addNewNote(req.body, notes)
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {    
    const newNotes = removeNote(req.params.id, notes)
    res.json(newNotes);
})

module.exports = router;
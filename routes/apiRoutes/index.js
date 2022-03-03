const router = require('express').Router();
// add const value for imported functions here
const notes = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

module.exports = router;
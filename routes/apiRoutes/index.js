const router = require('express').Router();
// add const value for imported functions here
const { db } = require('../../Develop/db/db');

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});

module.exports = router;
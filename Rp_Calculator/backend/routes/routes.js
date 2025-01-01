const express = require('express');
const router = express.Router();
const { addMarks,
    updateMarks,
    deleteMarks,
    getMarksByPID,
    getAllMarks } = require('../controls/control')
router.post('/addMarks', addMarks);
router.put('/updateMarks', updateMarks);
router.delete('/deleteMarks', deleteMarks);
router.get('/marks/:PID', getMarksByPID);
router.get('/allMarks', getAllMarks);

module.exports = router;

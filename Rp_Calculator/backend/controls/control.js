const DataModel = require("../models/userModel");

const getMarksByPID = async (req, res) => {
    const { PID } = req.params; // Ensure you're capturing PID correctly
    try {
        const marksData = await DataModel.findOne({ PID });
        if (marksData) {
            res.status(200).json({ msg: "Marks Retrieved", data: marksData });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving data from DB", error });
    }
};

const addMarks = async (req, res) => {
    const { PID, marks } = req.body;
    if (!PID || marks === undefined) {
        return res.status(400).json({ msg: "PID and marks are required" });
    }
    try {
        const addingMarks = await DataModel.create({ PID, marks });
        res.status(200).json({ msg: "Mark Added", data: addingMarks });
    } catch (error) {
        res.status(500).json({ msg: "Error in DB", error });
    }
};

const deleteMarks = async (req, res) => {
    const { PID } = req.body;
    try {
        const deletedMarks = await DataModel.findOneAndDelete({ PID });
        if (deletedMarks) {
            res.status(200).json({ msg: "Marks Deleted", data: deletedMarks });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error deleting from DB", error });
    }
};

const updateMarks = async (req, res) => {
    const { PID, marks } = req.body;
    if (!PID || marks === undefined) {
        return res.status(400).json({ msg: "PID and marks are required" });
    }
    try {
        const updatedMarks = await DataModel.findOneAndUpdate({ PID }, { marks }, { new: true });
        if (updatedMarks) {
            res.status(200).json({ msg: "Marks Updated", data: updatedMarks });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error updating DB", error });
    }
};

const getAllMarks = async (req, res) => {
    try {
        const allMarksData = await DataModel.find(); 
        if (allMarksData.length > 0) {
            res.status(200).json({ msg: "All Marks Retrieved", data: allMarksData });
        } else {
            res.status(404).json({ msg: "No marks data found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving all data from DB", error });
    }
};

module.exports = {
    addMarks,
    updateMarks,
    deleteMarks,
    getMarksByPID,
    getAllMarks,
};

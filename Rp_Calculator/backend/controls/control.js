const DataModelAdmin = require("../models/userModel").AdminModel;
const DataModelReviewer = require("../models/userModel").ReviewerModel;

// Get marks by PID
const getMarksByPID = async (req, res) => {
    const { PID } = req.params;
    try {
        const adminMarksData = await DataModelAdmin.findOne({ PID });
        const reviewerMarksData = await DataModelReviewer.findOne({ PID });

        if (adminMarksData || reviewerMarksData) {
            res.status(200).json({
                msg: "Marks Retrieved",
                data: {
                    admin: adminMarksData || null,
                    reviewer: reviewerMarksData || null,
                },
            });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving data from DB", error });
    }
};

// Add marks
const addMarks = async (req, res) => {
    const { PID, marks, markPerson } = req.body;
    if (!PID || marks === undefined || !markPerson) {
        return res.status(400).json({ msg: "PID, marks, and markPerson are required" });
    }

    const Model = markPerson === "admin" ? DataModelAdmin : DataModelReviewer;
    try {
        const addingMarks = await Model.create({ PID, marks, markPerson });
        await addingMarks.save();
        res.status(200).json({ msg: "Marks Added", data: addingMarks });
    } catch (error) {
        res.status(500).json({ msg: "Error in DB", error });
    }
};

// Delete marks
const deleteMarks = async (req, res) => {
    const { PID, markPerson } = req.body;
    const Model = markPerson === "admin" ? DataModelAdmin : DataModelReviewer;

    try {
        const deletedMarks = await Model.findOneAndDelete({ PID });
        if (deletedMarks) {
            res.status(200).json({ msg: "Marks Deleted", data: deletedMarks });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error deleting from DB", error });
    }
};

// Update marks
const updateMarks = async (req, res) => {
    const { PID, marks, markPerson } = req.body;
    if (!PID || marks === undefined || !markPerson) {
        return res.status(400).json({ msg: "PID, marks, and markPerson are required" });
    }

    const Model = markPerson === "admin" ? DataModelAdmin : DataModelReviewer;

    try {
        const updatedMarks = await Model.findOneAndUpdate(
            { PID },
            { marks, markPerson },
            { new: true }
        );
        if (updatedMarks) {
            res.status(200).json({ msg: "Marks Updated", data: updatedMarks });
        } else {
            res.status(404).json({ msg: "PID not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error updating DB", error });
    }
};

// Get all marks
const getAllMarks = async (req, res) => {
    try {
        const allAdminMarks = await DataModelAdmin.find();
        const allReviewerMarks = await DataModelReviewer.find();

        if (allAdminMarks.length > 0 || allReviewerMarks.length > 0) {
            res.status(200).json({
                msg: "All Marks Retrieved",
                data: {
                    admin: allAdminMarks,
                    reviewer: allReviewerMarks,
                },
            });
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

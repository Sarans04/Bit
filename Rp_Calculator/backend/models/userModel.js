const mongoose = require("mongoose");

const Schema1 = new mongoose.Schema({
    PID: {
        type: String,
        required: true,
        unique: false,
    },
    marks: {
        type: Number,
        required: true,
    },
    markPerson: {
        type: String,
        required: true,
    },
});

const Schema2 = new mongoose.Schema({
    PID: {
        type: String,
        required: true,
        unique: false,
    },
    marks: {
        type: Number,
        required: true,
    },
    markPerson: {
        type: String,
        required: true,
    },
});

const AdminModel = mongoose.model("AdminData", Schema1);
const ReviewerModel = mongoose.model("ReviewerData", Schema2);

module.exports = { AdminModel, ReviewerModel };

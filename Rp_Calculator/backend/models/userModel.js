const mongoose = require("mongoose");

const Schema1 = new mongoose.Schema({
    PID: {
        type: Number,
        required: true,
        unique: true
    },
    marks: {
        type: Number,
        required: true
    }
});

// Create the data model
const DataModel = mongoose.model('UserData', Schema1);

// Ensure index creation at runtime
DataModel.createIndexes().then(() => {
    console.log("Indexes created successfully");
}).catch((err) => {
    console.error("Error creating indexes:", err);
});

module.exports = DataModel;

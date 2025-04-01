const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true  // If messages must belong to a room
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message", messageSchema);

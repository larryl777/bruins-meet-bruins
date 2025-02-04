// model/message.js
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
}, { collection: 'messages' });

module.exports = mongoose.model("Message", MessageSchema);

const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const urlSchema = mongoose.Schema({

    shortenedUrl: {
        type: String,
        required: [true, "URL is required"]
    },

    userId: {
        type: {type: Schema.Types.ObjectId},
        required: true
    },

    timeStamp: true
})
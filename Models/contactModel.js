const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);

const { Schema, model } = require("mongoose");
cosnt Joi = require("joi")

const emailRegexp = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"


const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegexp,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        
    },
}, { versionKey: false, timestamps: true });

const registerUser = Joi.object({
    name: Joi.string().required()
})
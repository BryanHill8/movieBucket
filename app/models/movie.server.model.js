'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

//var mongoose = require("mongoose"), Schema = mongoose.Schema;

var MovieSchema =  new Schema({
       created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Enter the movie name'
    },
    Description: {
        type: String,
        required: 'Enter the movie genre'
    },
    Genre: {
        type: String,
        required: 'Select a genre'
    },/*
    Img: {
        type: String,
        required: 'Enter an img'
    },*/
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


mongoose.model('Movie', MovieSchema);

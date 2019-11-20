const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
	{
		url: String,
		required : true
	},
	{
		name: String,
		required: true
	},
	{
		date: Date,
		default: Date.now
	}

});

module.exports = Image = mongoose.model('image', imageSchema)
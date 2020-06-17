const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
	
	url:{
		type: String,
		required : true,
	},
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	},
	user_id:{
		 type: String,
		required: true,
	},
	likes:{
		type: Array,
		required:false,
	}

});

module.exports = Image = mongoose.model('image', imageSchema)
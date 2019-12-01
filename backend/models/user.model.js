const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required:true,
		},
	email:{
		type: String,
		required: true,
		unique: true
		},
	password : {
		type:String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	},
	images_id: {
		type: Array,
		required: false
	},
	followers_id:{
		 type:  Array,
		 required:false 
	}
	
});



module.exports = User = mongoose.model("user", userSchema);
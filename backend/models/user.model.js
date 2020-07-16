const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required:true,
		unique: true
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
   images_id: {
	type: Array,
	required: false,
	},
	followers_id:{
		type:  Array,
		required:false,
	},
	suscribed_id:{
		type:  Array,
		required:false, 
	},
	date: {
		type: Date,
		default: Date.now,
	},
	profilPicture : {
		type:  String,
		required:false, 
   },
});

module.exports = User = mongoose.model("user", userSchema);
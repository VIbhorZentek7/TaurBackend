const mongoose = require('mongoose');
const UserModal = mongoose.Schema({
	name: String,
	link: String,
	linkTitle: String,
	type: String,
	display: String
});
let AssignWork = mongoose.model('AssignWork', UserModal);
module.exports = AssignWork;

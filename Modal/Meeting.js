const mongoose = require('mongoose');
const UserModal = mongoose.Schema({
	name: String,
	link: String,
	linkTitle: String,
	type: String,
	display: String
});
let Meeting = mongoose.model('meetings', UserModal);
module.exports = Meeting;

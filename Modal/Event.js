const mongoose = require('mongoose');
const UserModal = mongoose.Schema({
	name: String,
	link: String,
	linkTitle: String,
	type: String,
	display: String
});
let Event = mongoose.model('Event', UserModal);
module.exports = Event;

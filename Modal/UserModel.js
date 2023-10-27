const mongoose = require('mongoose');
const UserModal = mongoose.Schema({
	email: String,
	password: String
});
let UserModaldata = mongoose.model('userModals', UserModal);
module.exports = UserModaldata;

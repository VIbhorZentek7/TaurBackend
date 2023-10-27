const mongoose = require('mongoose');
let Schema = mongoose.Schema({
	email: String,
	password: String
});

let AdminUser = mongoose.model('AdminUsers', Schema);
module.exports = AdminUser;

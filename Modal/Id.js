const mongoose = require('mongoose');
const CollegeIdModal = mongoose.Schema({
	id: String
});
let CollegeId = mongoose.model('CollegeIdModal', CollegeIdModal);
module.exports = CollegeId;

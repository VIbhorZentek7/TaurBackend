const express = require('express');

const router = express.Router();
const AdminUser = require('../Modal/AdminModal');

router.post('/createAdmin', async (req, res) => {
	try {
		let { email, password } = req.body;
		let data = await AdminUser.create({ email, password });
		res.status(200).json(data);
	} catch (error) {
		res.json(error);
	}
});

router.post('/adminlogin', async (req, res) => {
	try {
		let { email } = req.body;
		let data = await AdminUser.findOne({ email });
		res.send({ success: true, data: data, status: 200, type: 'admin' });
	} catch (error) {
		console.log(error);
		res.send({ success: false, error: error.message, status: 501 });
	}
});

module.exports = router;

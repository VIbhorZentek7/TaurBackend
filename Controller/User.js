const express = require('express');
const UserModaldata = require('../Modal/UserModel');
const router = express.Router();
const dns = require('dns');

router.post('/createUser', async (req, res) => {
	try {
		let { email, password } = req.body;
		let data = await UserModaldata.create({ email, password });
		res.status(200).send(data);
	} catch (error) {
		res.json(error);
	}
});

router.post('/login', async (req, res) => {
	try {
		let { email } = req.body;
		let data = await UserModaldata.findOne({ email });

		!!data
			? res.status(200).send({ success: true, status: 200, type: 'user', isAuthenticated: true })
			: res.status(401).send({ msg: 'Please Enter Valid Email' });
	} catch (error) {
		console.log(error);
		res.status(501).send({ success: false, error: error.message, status: 501, isAuthenticated: false });
	}
});

module.exports = router;

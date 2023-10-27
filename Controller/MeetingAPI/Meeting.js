const express = require('express');
const Meeting = require('../../Modal/Meeting');
const router = express.Router();

router.post('/createMeeting', async (req, res) => {
	try {
		let { name, link, linkTitle, type, display } = req.body;
		let data = await Meeting.create({ name, link, linkTitle, type, display });

		res.status(200).send(data);
	} catch (error) {
		res.json(error);
	}
});

router.get('/getMeetings', async (req, res) => {
	try {
		let data = await Meeting.find({});
		res.status(200).send({ data: data, msg: 'success' });
	} catch (error) {
		res.json(error);
	}
});
router.delete('/deleteMeeting/:id', async (req, res) => {
	const userId = req.params.id;
	let data = await Meeting.deleteOne({ _id: userId });
	console.log(data, 'data');
	res.status(200).send({ msg: 'success' });
});
module.exports = router;

const express = require('express');
const Event = require('../../Modal/Event');
const router = express.Router();

router.post('/createEvent', async (req, res) => {
	try {
		let { name, link, linkTitle, type, display } = req.body;
		let data = await Event.create({ name, link, linkTitle, type, display });
		res.status(200).json(data);
	} catch (error) {
		res.json(error);
	}
});

router.get('/getEvent', async (req, res) => {
	try {
		let data = await Event.find({});
		res.status(200).send({ data: data, msg: 'success' });
	} catch (error) {
		res.json(error);
	}
});
router.delete('/deleteEvent/:id', async (req, res) => {
	const userId = req.params.id;
	let data = await Event.deleteOne({ _id: userId });
	res.status(200).send({ data: data, msg: 'success' });
});
module.exports = router;

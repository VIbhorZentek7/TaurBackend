const express = require('express');
const AssignWork = require('../../Modal/WorkAssign');
const router = express.Router();

router.post('/createWork', async (req, res) => {
	try {
		let { name, link, linkTitle, type, display } = req.body;
		let data = await AssignWork.create({ name, link, linkTitle, type, display });
		res.status(200).send(data);
	} catch (error) {
		res.json(error);
	}
});

router.get('/getWork', async (req, res) => {
	try {
		let data = await AssignWork.find({});
		res.status(200).send({ data: data, msg: 'success' });
	} catch (error) {
		res.json(error);
	}
});
router.delete('/deleteWork/:id', async (req, res) => {
	const userId = req.params.id;
	let data = await AssignWork.deleteOne({ _id: userId });
	res.status(200).send({ data: data, msg: 'success' });
});
module.exports = router;

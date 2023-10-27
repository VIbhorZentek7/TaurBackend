// const express = require('express');
// const Meeting = require('../../Modal/Meeting');
// const router = express.Router();

// router.post('/createMeeting', async (req, res) => {
// 	try {
// 		let { name, link, linkTitle, type, display } = req.body.data[0];
// 		let data = await Meeting.create({ name, link, linkTitle, type, display });
// 		res.status(200).json(data);
// 	} catch (error) {
// 		res.json(error);
// 	}
// });

// router.get('/getMeetings', async (req, res) => {
// 	try {
// 		let data = await Meeting.find({});
// 		res.status(200).send({ data: data, msg: 'success' });
// 	} catch (error) {
// 		res.json(error);
// 	}
// });
// router.delete('/deleteMeeting/:id', async (req, res) => {
// 	const userId = req.params.id;
// 	let data = Meeting.deleteOne({ _id: userId })
// 		.then(res => res.status(200).send({ data: data }))
// 		.catch(err => console.log(err));
// });
// module.exports = router;

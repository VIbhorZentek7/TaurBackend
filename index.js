const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModaldata = require('./Modal/UserModel');
let uri = 'mongodb://127.0.0.1:27017/Crud';
mongoose
	.connect(uri)
	.then(() => {
		console.log('working');
	})
	.catch(err => {
		console.log('not working', err);
	});
let app = express();
app.use(express.json());
app.use(cors());
app.use('/user', require('./Controller/User'));
app.use('/admin', require('./Controller/Admin'));
app.use('/meeting', require('./Controller/MeetingAPI/Meeting'));
app.use('/work', require('./Controller/AssignWorkApi/work'));
app.use('/event', require('./Controller/EventApi/Event'));
app.post('/login', async (req, res) => {
	try {
		let { email, password } = req.body;
		let res = await UserModaldata.findOne({ email, password });
		res.status(200).msg('exist').json(res);
	} catch (error) {
		res.status(501).msg('Not exist').json(error);
	}
});

app.listen(3001, () => {
	console.log('working');
});

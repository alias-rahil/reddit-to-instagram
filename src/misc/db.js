import mongoose from 'mongoose';
import { dbURL } from './constants.js';

mongoose
	.connect(dbURL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.catch((e) => {
		console.error({
			message: e.message,
		});
		process.exit(1);
	});

	
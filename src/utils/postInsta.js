import { IgApiClient } from 'instagram-private-api';
import axios from 'axios';
import { instaUsername, instaPassword } from '../misc/constants.js';
import fetchMeme from './fetchMeme.js';
import generateCaption from './generateCaption.js';

async function login(ig) {
	try {
		ig.state.generateDevice(instaUsername);
		await ig.simulate.preLoginFlow();
		await ig.account.login(instaUsername, instaPassword);
	} catch {
		console.error({ message: 'Error: login failed' });
		process.exit(1);
	}
}

const ig = new IgApiClient();

login(ig);

export default async function postInsta() {
	try {
		const { title, author, url } = await fetchMeme();
		const caption = generateCaption(title, author);
		const response = await axios.get(url, { responseType: 'arraybuffer' });
		const file = Buffer.from(response.data);
		await ig.publish.photo({
			file,
			caption,
		});
	} catch {
		postInsta();
	}
}

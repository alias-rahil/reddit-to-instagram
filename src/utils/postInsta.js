import { IgApiClient } from 'instagram-private-api';
import axios from 'axios';
import { username, password } from '../misc/constants.js';

const ig = new IgApiClient();

ig.state.generateDevice(username);
ig.simulate.preLoginFlow();
ig.account.login(username, password);

export default async function postInsta(image, caption) {
	try {
		const response = await axios.get(image, { responseType: 'arraybuffer' });
		const file = Buffer.from(response.data);
		return ig.publish.photo({
			file,
			caption,
		});
	} catch (e) {
		return Promise.reject(e);
	}
}

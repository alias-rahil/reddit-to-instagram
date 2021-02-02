import { IgApiClient } from 'instagram-private-api';
import { instaUsername, instaPassword } from '../misc/constants.js';

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

export default ig;

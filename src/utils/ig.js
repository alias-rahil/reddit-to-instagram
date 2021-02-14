import { IgApiClient } from 'instagram-private-api';
import { instaUsername, instaPassword } from '../misc/constants.js';

const ig = new IgApiClient();
(async () => {
	try {
		ig.state.generateDevice(instaUsername);
		await ig.simulate.preLoginFlow();
		await ig.account.login(instaUsername, instaPassword);
	} catch (e) {
		console.error({
			message: e.message,
		});
		process.exit(1);
	}
})();
export default ig;

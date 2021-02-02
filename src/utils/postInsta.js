import axios from 'axios';
import fetchMeme from './fetchMeme.js';
import generateCaption from './generateCaption.js';
import ig from './ig.js';

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
	} catch (e) {
		if (e.message === 'POST /api/v1/media/configure/ - 400 Bad Request; Uploaded image isn\'t in an allowed aspect ratio') {
			postInsta();
		} else {
			console.error({ message: e.message });
		}
	}
}

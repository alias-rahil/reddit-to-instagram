import redditimage from '@sujalgoel/reddit-image';
import { subreddit, posts } from '../misc/constants.js';

function verifyImage(image) {
	return image.slice(-4) === '.jpg' && !posts.includes(image);
}

export default async function fetchMeme() {
	let titleFinal;
	let authorFinal;
	let imageFinal;
	while (!imageFinal) {
		// eslint-disable-next-line no-await-in-loop
		const { title, author, image } = (await redditimage.fetch({
			type: 'custom',
			subreddit,
		}))[0];
		if (verifyImage(image)) {
			posts.push(image);
			titleFinal = title;
			authorFinal = author;
			imageFinal = image;
		}
	}
	return { titleFinal, authorFinal, imageFinal };
}

import shuffleArray from 'shuffle-array';
import { username, hashtagDump, captionTemplate } from '../misc/constants.js';

export default function generateCaption(title, author) {
	const hashtags = shuffleArray.pick(hashtagDump, { picks: 30 });
	const finalCaption = captionTemplate
		.replace('%hashtags%', hashtags.join(' '))
		.replace('%username%', username)
		.replace('%title%', title)
		.replace('%author%', author);

	return finalCaption;
}

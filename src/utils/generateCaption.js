import sample from './sample.js';
import {
	instaUsername,
	hashtagDump,
	captionTemplate,
} from '../misc/constants.js';

export default function generateCaption(title, author) {
	const hashtags = sample(hashtagDump, 30);
	const finalCaption = captionTemplate
		.replace('%hashtags%', hashtags.join(' '))
		.replace('%instaUsername%', instaUsername)
		.replace('%title%', title)
		.replace('%author%', author);
	return finalCaption;
}

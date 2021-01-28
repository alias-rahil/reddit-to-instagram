import getRandomArbitrary from './getRandomArbitrary.js';

export default function sample(arr, N) {
	const n = Math.min(arr.length, Math.max(0, N));
	const arrCopy = [...arr];
	const subArr = [];
	for (let i = 0; i < n; i += 1) {
		const element = arrCopy[getRandomArbitrary(0, arrCopy.length)];
		const index = arrCopy.indexOf(element);
		arrCopy.splice(index, 1);
		subArr.push(element);
	}
	return subArr;
}

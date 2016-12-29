import excuses from './excuses';

const getRandomExcuse = () => {
	return excuses[Math.floor(Math.random() * excuses.length)];
};

export default class PromisePromise {
	constructor(init) {
		const promise = new Promise(init);
		return new Promise((resolve, reject) => {
			promise
				.then(response => {
					const shouldResolve = Math.random() >= 0.5;
					if (shouldResolve) {
						resolve(response);
					} else {
						reject(getRandomExcuse());
					}
				})
				.catch(err => {
					resolve(err);
				});
		});
	}
}

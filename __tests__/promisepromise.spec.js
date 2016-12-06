import PromisePromise from '../index';
import excuses from '../excuses';

const fakeAsyncOperation = ({
	dataToResolve,
	dataToReject,
	shouldResolve
}) => {
	return (resolve, reject) => {
		if (shouldResolve) {
			resolve(dataToResolve);
		} else {
			reject(dataToReject);
		}
	};
}

describe('PromisePromise', () => {
	test('it exists', () => {
		expect(new PromisePromise(() => {})).toBeDefined();
	})

	test('makes a random decision about fulfilling or rejecting the promise. If rejecting it returns an excuse', () => {
		let countFulfilling = 0;
		let countRejecting = 0;

		const times = x => f => {
			if (x > 0) {
				f()
				times(x - 1)(f)
			}
		}

		const generatePromise = () => {
			return new PromisePromise((resolve, reject) => {
					resolve('Actually the promise should always be fulfilled.')
				})
				.then(() => ++countFulfilling)
				.catch(err => {
                    ++countRejecting;
                    expect(excuses.includes(err)).toBe(true);
                });
		};

        const promises = [];
        times(100)(() => {
            promises.push(generatePromise());
        });

        return Promise.all(promises)
            .then(() => {
                expect(countFulfilling).toBeGreaterThan(0);           
                expect(countRejecting).toBeGreaterThan(0);           
            });
	});

    test('rejects the promise if it should actually be rejected', () => {
        const dataToReject = 'Reject...';
        const shouldResolve = false;
        const asyncOperation = fakeAsyncOperation({dataToReject, shouldResolve})
        return new PromisePromise(asyncOperation)
            .then(() => {})
            .catch(err => expect(err).toEqual(dataToReject));
    });

});

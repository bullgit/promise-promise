'use strict';

var excuses = ['You must be missing some of the dependencies', 'How is that possible?', 'I couldn\'t find any library that can even do that', 'That wouldn\'t have made economic sense.', 'The project manager told me to do it that way.', 'Try rebooting your router.', 'Are you sure?', 'That\'s a problem with the hosts.', 'It wasn\'t in the spec.', 'The person responsible doesn\'t work here any more.', 'Probably down to the leap year.', 'That code was written by an old developer.', 'Well I\'m surprised it is even working at all.', 'I must have misunderstood.', 'It isn\'t in my ticketing system.', 'Try rebotting.', 'You\'re doing it wrong.', 'It worked fine for me when I developed it.', 'We didn\'t write that part.', 'It\'s always been like that.'];

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var getRandomExcuse = function getRandomExcuse() {
	return excuses[Math.floor(Math.random() * excuses.length)];
};

var PromisePromise = function PromisePromise(init) {
	classCallCheck(this, PromisePromise);

	var promise = new Promise(init);
	return new Promise(function (resolve, reject) {
		promise.then(function (response) {
			var shouldResolve = Math.random() >= 0.5;
			if (shouldResolve) {
				resolve(response);
			} else {
				reject(getRandomExcuse());
			}
		}).catch(function (err) {
			resolve(err);
		});
	});
};

module.exports = PromisePromise;

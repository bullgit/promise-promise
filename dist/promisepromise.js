(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.promisePromise = factory());
}(this, (function () { 'use strict';

var excuses = ['You must be missing some of the dependencies', 'How is that possible?', 'I couldn\'t find any library that can even do that', 'That wouldn\'t have made economic sense.', 'The project manager told me to do it that way.', 'Try rebooting your router.', 'Are you sure?', 'That\'s a problem with the hosts.', 'It wasn\'t in the spec.', 'The person responsible doesn\'t work here any more.', 'Probably down to the leap year.', 'That code was written by an old developer.', 'Well I\'m surprised it is even working at all.', 'I must have misunderstood.', 'It isn\'t in my ticketing system.', 'Try rebotting.', 'You\'re doing it wrong.', 'It worked fine for me when I developed it.', 'We didn\'t write that part.', 'It\'s always been like that.'];

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var getRandomExcuse = function getRandomExcuse() {
	return excuses[Math.floor(Math.random() * excuses.length)];
};

var realPromise = Promise;

var PromisePromise = function PromisePromise(init) {
	classCallCheck(this, PromisePromise);

	console.warn(realPromise);
	var promise = new realPromise(init);
	return new Promise(function (resolve, reject) {
		promise.then(function (response) {
			var shouldResolve = Math.random() >= 0.5;
			if (shouldResolve) {
				resolve(response);
			} else {
				reject(getRandomExcuse());
			}
			resolve(response);
		}).catch(function (err) {
			resolve(err);
		});
	});
};

return PromisePromise;

})));
//# sourceMappingURL=promisepromise.js.map

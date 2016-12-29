[![such bull](https://img.shields.io/badge/such-bull-1393d5.svg?style=flat)](https://bullg.it/)
[![much git](https://img.shields.io/badge/very-git-7ED321.svg?style=flat)](https://bullg.it/)

[![npm version](https://badge.fury.io/js/promise-promise.svg)](http://badge.fury.io/js/promise-promise)
[![Build Status](https://travis-ci.org/bullgit/promise-promise.svg?branch=master)](https://travis-ci.org/bullgit/promise-promise)
[![Coverage Status](https://coveralls.io/repos/github/bullgit/promise-promise/badge.svg?branch=master)](https://coveralls.io/github/bullgit/promise-promise?branch=master)
[![devDependency Status](https://david-dm.org/bullgit/promise-promise/dev-status.svg?theme=shields.io)](https://david-dm.org/bullgit/promise-promise#info=devDependencies)
[![Unicorn](https://img.shields.io/badge/unicorn-approved-ff69b4.svg?style=flat)](https://www.youtube.com/watch?v=qRC4Vk6kisY)

# promise-promise

> A funny Promise wrapper for those who can't keep promises. There's a 50:50 chance that the promise will be fulfilled. If not, it rejects with a random developer excuse. 😎😇 Good luck 🙈

## Install

```
$ npm install promise-promise --save
```

## Usage

```javascript
import Promise from 'promise-promise';

const myAsyncOperation = new Promise(resolve => {
	resolve('I should resolve 😱');
});


myAsyncOperation
	.then(response => {
		console.log(response); // Sometimes it resolves
	})
    .catch(error => {
        console.log(err); // Sometimes not 😎
    });
```

## License
MIT © [René Viering](http://rene.js.org)

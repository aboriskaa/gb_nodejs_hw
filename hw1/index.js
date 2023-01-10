const colors = require('colors/safe');
const readline = require('readline-sync');

let num = readline.question('Enter a range of primes:');

function isNumeric(value) {
	return /^\d+$/.test(value);
}

function getPrimes(max) {
	var sieve = [],
		i,
		j,
		primes = [];
	for (i = 2; i <= max; ++i) {
		if (!sieve[i]) {
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}
	return primes;
}

if (isNumeric(num)) {
	let numArray = ([] = getPrimes(num));
	let counter = 0;
	for (var key in numArray) {
		if (counter === 0) console.log(colors.green.underline(numArray[key]));
		if (counter === 1) console.log(colors.yellow.underline(numArray[key]));
		if (counter === 2) console.log(colors.red.underline(numArray[key]));
		counter++;
		if (counter > 2) counter = 0;
	}
} else {
	console.log(colors.red.underline('Error. Num is not a number'));
}

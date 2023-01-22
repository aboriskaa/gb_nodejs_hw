const fs = require('fs');
const readline = require('readline');

const ip1 = '89.123.1.41';
const ip2 = '34.48.240.111';

const readStream = fs.createReadStream('./hw3/access_tmp.log', 'utf-8');
const writeStream1 = fs.createWriteStream(`./hw3/${ip1}_requests.log`);
const writeStream2 = fs.createWriteStream(`./hw3/${ip2}_requests.log`);

const rl = readline.createInterface({
	input: readStream,
});

rl.on('line', (line) => {
	if (line.includes(ip1)) {
		writeStream1.write(line + '\n');
	}

	if (line.includes(ip2)) {
		writeStream2.write(line + '\n');
	}
});

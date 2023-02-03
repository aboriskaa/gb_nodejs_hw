function first1(name) {
	let a = 50;
	return () => a + 10;
}

let a = first1();

console.log(a());

function productFib(prod) {
	let fibArray = [0, 1];
	let current = 0;

	for (let i = 0; fibArray[fibArray.length - 1] < prod; i++) {
		current = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
		fibArray.push(current);
	}

	fibArray.pop(); //[fibArray.length - 2];

	let closest_pair;
	let numberLowestDiff = 0;
	let cachedPair = [];

	for (let i = 0; i < fibArray.length; i++) {
		for (let j = 0; j < fibArray.length; j++) {
			let num = fibArray[i] * fibArray[j];
			if (num === prod) {
				return [fibArray[i], fibArray[j], true];
			} else if (num > prod) {
				// check difference between num and prod and get the pair to the closest
				cachedPair = [fibArray[i], fibArray[j], false];
			}
		}
	}
}

console.log(productFib(4895)); //, [55, 89, true])
console.log(productFib(5895)); //, [89, 144, false])
console.log(productFib(74049690)); //, [6765, 10946, true])
console.log(productFib(84049690)); //, [10946, 17711, false])
console.log(productFib(193864606)); //, [10946, 17711, true])
console.log(productFib(447577)); //, [610, 987, false])
console.log(productFib(602070)); //, [610, 987, true])

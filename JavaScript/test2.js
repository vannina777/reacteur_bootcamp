function queueTime(customers, n) {
	let allZero = true;
	let isFinished = false;
	let tillObject = {};
	let counter = 0;

	if (customers.length === 0) {
		return 0;
	}
	// create object of tills
	for (let i = 1; i <= n; i++) {
		tillObject[String(i)] = 0;
	}

	// loop per minute
	while (true) {
		//set counter for minutes
		counter += 1;

		// assign customer
		Object.keys(tillObject).forEach(function(e) {
			if (tillObject[e] === 0 && customers[0] !== undefined) {
				tillObject[e] = customers[0];
				customers.shift(0);
			} else {
				tillObject === 0;
			}
		});

		// update minutes
		Object.keys(tillObject).forEach(function(e) {
			tillObject[e] -= 1;
		});

		// check if there are customers AND all tills are empty
		isFinished = customers.length === 0;
		let obj = Object.values(tillObject);
		allZero = true;
		for (let j = 0; j < obj.length; j++) {
			let element = obj[j];
			if (element > 0) {
				allZero = false;
				break;
			}
		}
		// return the minutes counter
		if (allZero === true && isFinished === true) {
			return counter;
		}
	}
}

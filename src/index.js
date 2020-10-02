
exports.min = function min (array) {
	if (array === undefined || array.length === 0) {
		return 0;
	}
	
	let min = array[0];
	
	for (let el of array) {
		if (el < min){
			min = el;
		}
	}
	return min;
}

exports.max = function max (array) {
	if (array === undefined || array.length === 0) {
		return 0;
	}
	
	let max = array[0];
	
	for (let el of array) {
		if (el > max){
			max = el;
		}
	}
	return max;
}

exports.avg = function avg (array) {
	if (array === undefined || array.length === 0) {
		return 0;
	}
	
	return array.reduce((a, b) => (a + b)) / array.length;
}

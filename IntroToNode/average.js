const average = arr => {
	let result = arr.reduce((a, b) => a + b, 0)
	let avg = result / arr.length
	console.log(avg)
}

average([1,2,3,4])
var faker = require('faker');

for (let i = 0; i<10; i++) {
	let product = `${faker.commerce.productName()} - $${faker.commerce.price()}`
	console.log(product)
}

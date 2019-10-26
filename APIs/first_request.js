/*
const request = require('request');
request('http://www.google.com', (err, res, body) => {
  console.error('error:', err); // Print the error if one occurred
  console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

const rp = require('request-promise-native')

rp('https://jsonplaceholder.typicode.com/users/1')
	.then(body => {
	const data = JSON.parse(body)
	console.log(`${data.name} lives in ${data.address.city}`)
})
	.catch(err => console.log('Error! ' + err))

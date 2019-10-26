const express = require ("express")
const rp = require('request-promise-native')

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("search")
})

app.get("/results", (req, res) => {
	
	const query = req.query.search
	
	rp(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`)
	.then(body => {
	const data = JSON.parse(body)
	res.render("results", {data})
})
	.catch(err => console.log('Error! ' + err))
})


app.listen(3000, _ => console.log("Server listening on Port 3000"))

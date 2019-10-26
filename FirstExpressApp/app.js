var express = require("express")

var app = express()


app.get("/", function(req, res) {
	res.send("Hi there")
})

app.get("/bye", function(req, res) {
	res.send("Goodbye!!!")
})

app.get("/r/:subreddit", function(req, res) {
	const subreddit = req.params.subreddit
	res.send(`Welcome to the ${subreddit} subreddit`)
})

app.get("/r/:subreddit/comments/:id/:title", function(req, res) {
	res.send("Welcome to the comments page!")
})

app.get("*", function(req, res) {
	res.send("404 not found")
})

app.listen(3000, _ => console.log("Server listening on Port 3000"))
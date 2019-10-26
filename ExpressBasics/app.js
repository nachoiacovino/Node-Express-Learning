var express = require("express")

var app = express()


app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment")
})

app.get("/speak/:animal", function(req, res) {
	const animal = req.params.animal
	if (animal == "pig") res.send("The pig says 'oink'")
	else if (animal == "cow") res.send("The cow says 'moo'")
	else if (animal == "dog") res.send("The dog says 'Woof Woof'")
})

app.get("/repeat/:word/:x", function(req, res) {
	const word = req.params.word
	const x = req.params.x
	const repeat = (word + " ").repeat(x).trim()
	res.send(repeat)
})

app.get("*", function(req, res) {
	res.send("Sorry, page not found... What are you doing with your life?")
})


app.listen(3000, _ => console.log("Server listening on Port 3000"))
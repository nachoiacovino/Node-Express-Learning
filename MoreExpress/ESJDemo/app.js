var express = require ("express")
var app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req, res) {
	res.render("home")
})

app.get("/love/:thing", function (req, res) {
	let thing = req.params.thing
	res.render("love", {thing})
})

app.get("/posts", function(req, res) {
	let posts = [
		{title: "Amazing dog bruh", author: "Susy"},
		{title: "My adorable bunny", author: "Keith"},
		{title: "Cat cat cat", author: "Vop"}
	]
	
	res.render("posts", {posts})
})

app.listen(3000, _ => console.log("Server listening on Port 3000"))
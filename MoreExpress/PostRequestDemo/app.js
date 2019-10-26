const express = require ("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"]

app.get("/", (req, res) => {
	res.render("home")
})

app.get("/friends", (req, res) => {
	res.render("friends", {friends})	
})

app.post("/addfriend", (req, res) => {
	friends.push(req.body.newFriend)
	res.redirect("/friends")
})









app.listen(3000, _ => console.log("Server listening on Port 3000"))
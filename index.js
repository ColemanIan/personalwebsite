/** @format */

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
	.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.set("view engine", "ejs")
	.get("/", (req, res) => res.render("pages/index"))
	.get("/contact", (req, res) => res.render("pages/contact"))
	.get("/portfolio", (req, res) => res.render("pages/portfolio"))
	.get("/blackboard", (req, res) => res.render("pages/blackboard"))
	.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

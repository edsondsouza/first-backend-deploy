require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
})

app.get("/twitter", (req, res) => {
    res.send("Welcome to twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>User login page</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})
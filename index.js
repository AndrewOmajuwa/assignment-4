//import express 
const express = require('express')

//import db file 
const db = require ('./db')

//import bodyparser
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json() 

//import authRouter
const authRouter = require('./authorization/router')

//import Playlists router 
const playlistRouter = require ('./playlist/router')

//import userRouter
const userRouter = require ('./user/router')

//declare const app
const app = express()

//set a port to listen on
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Web server listening on port ${port}`)
})

app.use(jsonParser)
app.use(playlistRouter)
app.use(authRouter)
app.use(userRouter)

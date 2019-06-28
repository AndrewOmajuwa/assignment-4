//import express 
const express = require('express')

//declare const app
const app = express()

//set a port to listen on
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Web server listening on port ${port}`)
})

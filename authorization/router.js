//import router
const { Router } = require('express')

//instantiate router
const router = new Router()

// define endpoints here

router.post('/logins', (req, res) => {
    const username = req.body.username
    const password = req.body.password


    if(username === null ||
        password === null){
            res.status(400).send({
                message: 'Please supply a valid email and password'
              })  
        }
    else {
        res.send({
            jwt: toJWT({ userId: 1 })
          })
    }
})

module.exports = router
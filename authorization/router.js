//import router
const { Router } = require("express");

//import jws
const { toJWT } = require("./jws");

//import to data
const {toData} = require('./jws')

//instantiate router
const router = new Router();

// define endpoint to login

router.post("/tokens", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  } else {
    res.send({
      token: toJWT({ userId: 1 })
    });
  }
});

//define secret endpoint

router.get('/secret-endpoint', (req, res) => {
    const auth = req.headers.authorization && req.headers.authorization.split(' ')
    if (auth && auth[0] === 'Bearer' && auth[1]) {
      try {
        const data = toData(auth[1])
        res.send({
          message: 'Welcome to the secret endpoint.',
          data
        })
      }
      catch(error) {
        res.status(400).send({
          message: `Error ${error.name}: ${error.message}`,
        })
      }
    }
    else {
      res.status(401).send({
        message: 'Invalid credentials'
      })
    }
  })

  

module.exports = router;

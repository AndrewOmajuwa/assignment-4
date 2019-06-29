//import router from express
const { Router } = require("express");

//import song model
const Song = require("./model");

//instantiate router
const router = new Router();

//define endpoint to post song to playlist

router.post("/playlists/:id/songs", (req, res, next) => {
  Song.create(req.body)
    .then(song => res.status(201).json(song))
    .catch(error => next(error));
});

module.exports = router;

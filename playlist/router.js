//import router from express
const { Router } = require('express')

//import playlist model
const Playlist = require('./model')

//instantiate router
const router = new Router()

//register endpoint to retrieve all playlists 
router.get('/playlists', (req, res, next) => {
    Playlist.findAll()
    .then(playlists => {
        res.status(200).send(playlists)
    })
    .catch(error => next(error))
})

//register endpoint to create a playlist
router.post('/playlists', (req, res, next) => {
    Playlist.create(req.body)
    .then(playlist => res.status(200)
    .send(playlist))
    .catch(err => next(err)) 
    })

//register endpoint to select a playlist
router.get('/playlists/:id', (req, res, next) => {
    const id = req.params.id
    Playlist.findByPk(id)
    .then(playlist => {
        res.status(200).send(playlist)
    })
    .catch(err => next(err))
})

//register endpoint to delete a playlist
router.delete('/playlists/:id', (req,res,next) => {
    Playlist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(playlist => {
        if(playlist === 1){
            res.status(200).json({
                message: 'Delete Succesfull'
            })
        }
        else{
            res.status(404).json({
                message: "Playlist not found"
            })
        }
    })
    .catch(error => next(error)) 
})

//export router
module.exports = router
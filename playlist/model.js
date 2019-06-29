//import sequelize
const sequelize = require('sequelize')
//import db
const db = require('./../db.js')

//declare team
const Playlist = db.define(
   'playlist', {
       name: {
           type: sequelize.STRING,
           field: 'playlist_name'
       }
   },
   { tableName : 'Playlists'} 
)

module.exports = Playlist

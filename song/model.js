//import sequelize and db
const sequelize = require("sequelize");
const db = require("../db");

//import playlist model for relational purposes
const Playlist = require('../playlist/model')

//declare song model using sequelize

const Song = db.define(
  "song",
  {
    title: {
      type: sequelize.STRING,
      field: "song_title"
    },
    artist: {
      type: sequelize.STRING,
      field: "artist_name"
    },
    album: {
        type: sequelize.STRING,
        field: 'album_name'
    }
  },
  { tableName: "songs" }
);

//specify that songs belong to a playlist
Song.belongsTo(Playlist)

module.exports = Song
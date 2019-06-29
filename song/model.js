//import sequelize
const sequelize = require("sequelize");
const db = require("../db");

//declare songconst Team = require('../team/model')

const Song = db.define(
  "song",
  {
    title: {
      type: sequelize.STRING,
      field: "song_title"
    },
    artist: {
      type: sequelize.INTEGER,
      field: "artist_name"
    },
    album: {
        type: sequelize.STRING,
        field: 'album_name'
    },
    playlist: {
        type: sequelize.STRING,
        field: 'playlist_name'
    }
  },
  { tableName: "songs" }
);

module.exports = Song
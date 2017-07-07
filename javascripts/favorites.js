'use strict';

// const favesFactory = Object.create(null);
let $ = require('jquery');
function getFaves(user) {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `data/songs-${user.id}.json`
    })
    .done( (data) => {
      resolve(data.songs);
      // SongFaves.DomStuff.listFaves(user, data.songs)
    });  
  });
}

module.exports = getFaves;






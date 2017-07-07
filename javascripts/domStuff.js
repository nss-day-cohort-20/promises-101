"use strict";
let $ = require('jquery');
const domStuff = Object.create(null);
let $favesContainer = $("#fave-songs");

domStuff.listFaves = function(user, faves) {
  console.log("faves from listFaves", faves);
  $favesContainer.append(`<h2>${user}'s favorite songs are:</h2>`);
  faves.forEach( function(song) {
    $favesContainer.append(`<h4>"${song.title}" by ${song.artist}</h4>`);
  });
};

module.exports = domStuff;


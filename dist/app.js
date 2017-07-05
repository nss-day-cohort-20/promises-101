(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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


},{}],2:[function(require,module,exports){
'use strict';

// const favesFactory = Object.create(null);

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

},{}],3:[function(require,module,exports){
'use strict';

let SongFaves = {
  domStuff: require('./domStuff'),
  faves: require('./favorites'),
  users: require('./users')
};

$("select").change( function() {
  console.log($(this).val());
  let selectedUser = $(this).val();
  // Without promises, we kick off the chain of events, 
  // but have to navigate from file to file to see what happens next

  // With Promises, all the execution of functions in the order 
  // we want/need is contained here in one place, making it
  // easier to understand the sequence of events.
  SongFaves.users.getUsers(selectedUser)
  .then( (dataFromGetUsers) => {
    return SongFaves.faves(dataFromGetUsers);
  })
  .then( (dataFromGetFaves) => {
    //do something with the data
    SongFaves.domStuff.listFaves(selectedUser, dataFromGetFaves);
  })
  .catch( (err) => {
    console.log("Oops, there was an error:", err.statusText);
  });
});

},{"./domStuff":1,"./favorites":2,"./users":4}],4:[function(require,module,exports){
'use strict';

const userFactory = Object.create(null);

userFactory.getUsers = function(selectedUser) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      url: "data/users.json"
    })
    .done( function(data) {
      let usersArr = data.users;
      let userData = usersArr.filter( function(user) {
        return user.name === selectedUser;
      })[0];
      resolve(userData);
      // SongFaves.FavesFactory.getFaves(userData);
    })
    .fail(reject);
  });
};

module.exports = userFactory;

},{}]},{},[3]);

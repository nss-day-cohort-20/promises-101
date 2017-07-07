'use strict';

// let $ = require('jquery');

let SongFaves = {
  domStuff: require('./domStuff'),
  faves: require('./favorites'),
  users: require('./users')
};

let $ = require("jquery");

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

// Write example like Steve's vid with funcs calling other funcs, then 
// refactor to simply run all the XHRs, but demo how that gives random results, timing-wise.
// Refactor again with promises.

console.log("Hello");

$("select").change( function() {
  console.log($(this).val());
  let selectedUser = $(this).val();
  SongFaves.UserFactory.getUsers(selectedUser)
})

// Without promises, we kick off the chain of events, but have to navigate from file to file to see what happens next
// SongFaves.UserFactory.getUsers();

// With Promises, all the execution of functions in the order we want/need is contained here in one place, making it
// easier to understand the sequence of events.
// SongFaves.UserFactory.getUsers()
// .then( function(dataFromGetUsers) {
//   console.log("users data", dataFromGetUsers);
//   // return SongFaves.FavesFactory.getFaves(dataFromGetUsers)
// })
// .then( function(dataFromGetFaves) {
//   console.log("Faves data", dataFromGetFaves);
// })

// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation, and its resulting value.

// A Promise is in one of these states:

//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation completed successfully.
//     rejected: meaning that the operation failed.


console.log("Hello");

$("select").change( function() {
  console.log($(this).val());
  let selectedUser = $(this).val();
// Without promises, we kick off the chain of events, but have to navigate from file to file to see what happens next
  // SongFaves.UserFactory.getUsers(selectedUser)

// With Promises, all the execution of functions in the order we want/need is contained here in one place, making it
// easier to understand the sequence of events.
  SongFaves.UserFactory.getUsers(selectedUser)
  .then( function(dataFromGetUsers) {
    console.log("user data", dataFromGetUsers);
    return SongFaves.FavesFactory.getFaves(dataFromGetUsers)
  })
  .then( function(dataFromGetFaves) {
    console.log("Faves data", dataFromGetFaves);
    SongFaves.DomStuff.listFaves(selectedUser, dataFromGetFaves)
  })
  .catch( function(err) {
    console.log("Error! Looks like a", err.statusText, "problem. Bummer");
  })
})




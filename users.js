// Without Promises
// {
//   const userFactory = Object.create(null);

//   userFactory.getUsers = function(selectedUser) {
//     $.ajax({
//       url: "data/users.json"
//     })
//     .done( function(data) {
//       let usersArr = data.users
//       let userData = usersArr.filter( function(user) {
//         return user.name === selectedUser
//       })[0]
//       SongFaves.FavesFactory.getFaves(userData);
//     })
//   }

//   window.SongFaves = window.SongFaves || {};
//   window.SongFaves.UserFactory = userFactory;
// }

// With Promises
{
  const userFactory = Object.create(null);

  userFactory.getUsers = function(selectedUser) {
    return new Promise( function( resolve, reject) {
      $.ajax({
        url: "data/users.json"
      })
      .done( function(data) {
        console.log("data", selectedUser );
        let usersArr = data.users
        let userData = usersArr.filter( function(user) {
          return user.name === selectedUser
        })[0]
        // instead of sending users off as an argument in another function call, we return it
        // to the original call site (in main.js) so it can be passed along there
        resolve(userData)
        // SongFaves.FavesFactory.getFaves(userData);
      })
      .fail(reject);
    });
  }

  window.SongFaves = window.SongFaves || {};
  window.SongFaves.UserFactory = userFactory;
}

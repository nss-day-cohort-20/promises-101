// Without Promises
{
  const userFactory = Object.create(null);

  userFactory.getUsers = function(selectedUser) {
    $.ajax({
      url: "data/users.json"
    })
    .done( function(data) {
      let usersArr = data.users
      let userData = usersArr.filter( function(user) {
        return user.name === selectedUser
      })[0]
      SongFaves.FavesFactory.getFaves(userData);
    })
  }

  window.SongFaves = window.SongFaves || {};
  window.SongFaves.UserFactory = userFactory;
}

// With Promises
// {
//   const userFactory = Object.create(null);

//   userFactory.getUsers = function() {
//     return new Promise( function( resolve, reject) {
//       let userReq = new XMLHttpRequest();
//       userReq.addEventListener("load", function() {
//       let users = JSON.parse(this.responseText).users;
//       // instead of sending users off as an argument in another function call, we return it
//       // to the original call site (in main.js) so it can be passed along there
//       resolve(users)
//       // SongFaves.FavesFactory.getFaves(users);
//     });
//     userReq.open("GET", "data/users.json");
//     userReq.send();
//     });
//   }

//   window.SongFaves = window.SongFaves || {};
//   window.SongFaves.UserFactory = userFactory;
// }

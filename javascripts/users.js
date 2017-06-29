'use strict';

{
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

  window.SongFaves = window.SongFaves || {};
  window.SongFaves.UserFactory = userFactory;
}

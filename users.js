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

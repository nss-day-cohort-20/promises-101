
{
  const userFactory = Object.create(null);

  userFactory.getUsers = function() {
    let userReq = new XMLHttpRequest();
    userReq.addEventListener("load", function() {
      let users = JSON.parse(this.responseText).users;
      console.log("users", users );
      SongFaves.FavesFactory.getFaves(users);
    });
    userReq.open("GET", "data/users.json");
    userReq.send();
  }

  window.SongFaves = window.SongFaves || {};
  window.SongFaves.UserFactory = userFactory;
}

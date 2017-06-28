{
  const favesFactory = Object.create(null);

  favesFactory.getFaves = function(users) {
    users.forEach( function(user) {
      let favesReq = new XMLHttpRequest();
      favesReq.addEventListener("load", function() {
        let faves = JSON.parse(this.responseText).songs;
        SongFaves.DomStuff.listFaves(user, faves)
      });
      favesReq.open("GET", `data/songs-${user.id}.json`);
      favesReq.send();
    });
  }

  window.SongFaves = window.SongFaves || {}
  window.SongFaves.FavesFactory = favesFactory;
}

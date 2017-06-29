{
  const domStuff = Object.create(null);
  let favesContainer = document.getElementById("fave-songs");

  domStuff.listFaves = function(user, faves) {
    console.log("faves from listFaves", faves);
    favesContainer.innerHTML += `<h2>${user.name}'s favorite songs are:</h2>`
    faves.forEach( function(song) {
      favesContainer.innerHTML += `<h4>"${song.title}" by ${song.artist}</h4>`
    });

  }

  window.SongFaves = window.SongFaves || {}
  window.SongFaves.DomStuff = domStuff;
}

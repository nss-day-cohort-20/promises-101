
{
  const favesFactory = Object.create(null);

  favesFactory.getFaves = function(user) {
    $.ajax({
      url: `data/songs-${user.id}.json`
    })
    .done( function(data) {
      SongFaves.DomStuff.listFaves(user, data.songs)
    });
  }
  
  window.SongFaves = window.SongFaves || {}
  window.SongFaves.FavesFactory = favesFactory;
}

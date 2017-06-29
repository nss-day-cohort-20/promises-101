'use strict';

{
  const favesFactory = Object.create(null);

  favesFactory.getFaves = (user) => {
    return new Promise( ( resolve, reject) => {
      $.ajax({
        url: `data/songs-${user.id}.json`
      })
      .done( (data) => {
        resolve(data.songs);
        // SongFaves.DomStuff.listFaves(user, data.songs)
      });  
    });
  };
  
  window.SongFaves = window.SongFaves || {};
  window.SongFaves.FavesFactory = favesFactory;
}







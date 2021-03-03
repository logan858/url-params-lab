module.exports = {
    getAll,
    getTracks
}

let albumsArray = [
    {id: "a0", name: "Thriller", artist: "Michael Jackson", tracks: [
        {id: "t00", name: "Thriller", runtime: "5:57"},
        {id: "t01", name: "Smooth Criminal", runtime: "3:47"},
        {id: "t02", name: "Billy Jean", runtime: "3:32"},
    ]},
    {id: "001", name: "Baby One More Time", artist: "Britney Spears", tracks: [
        {id: "t00", name: "Oops I did it again", runtime: "2:56"},
        {id: "t01", name: "Toxic", runtime: "3:14"},
        {id: "t02", name: "It's Britney B****", runtime: "2:46"},
    ]},
    {id: "002", name: "Ladies' Night", artist: "Kool & the Gang", tracks: [
        {id: "t00", name: "I don't", runtime: "1:00"},
        {id: "t01", name: "know who", runtime: "2:00"},
        {id: "t02", name: "this is", runtime: "3:00"},
    ]}
  ]

  function getAll() {
      return albumsArray
  }

  function getTracks(x, y, res) {
    for(let i of albumsArray) {
      if(x == i.id) {
        let foundTracks = i.tracks
        for(let j of foundTracks) {
          if(y == j.id) {
            let foundName = j.name
            let foundRT = j.runtime
            res.render("detailsshow", {
              foundName: foundName,
              foundRT: foundRT
            })
          }
        }
      }
    }
  }
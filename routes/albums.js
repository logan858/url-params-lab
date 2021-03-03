var express = require('express');
var router = express.Router();
let albumsData = require("../models/albumModel")


// let albumsArray = [
//     {id: "a0", name: "Thriller", artist: "Michael Jackson"},
//     {id: "001", name: "Baby One More Time", artist: "Britney Spears"},
//     {id: "002", name: "Ladies' Night", artist: "Kool & the Gang"}
//   ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('albums', {albumsData: albumsData.getAll()});
});
router.get('/:id', function(req, res, next) {
    for (x of albumsData.getAll()) {
        if(x.id === req.params.id) {
            res.render('show', {x: x});
            console.log(x)
        }
    }
  });

module.exports = router;

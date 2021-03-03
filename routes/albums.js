var express = require('express');
var router = express.Router();
let albumsData = require("../models/albumModel")

router.get('/', function(req, res, next) {
  res.render('albums', {albumsData: albumsData.getAll()});
});
router.get('/:id', function(req, res, next) {
    for (x of albumsData.getAll()) {
        if(x.id === req.params.id) {
            res.render('show', {x: x});
        }
    }
  });

router.get("/:id/:trackid", function(req, res, next) {
    albumsData.getTracks(req.params.id, req.params.trackid, res)
});

module.exports = router;

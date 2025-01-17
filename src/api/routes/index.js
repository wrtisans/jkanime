const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/latestAnimes' , (req , res) =>{
  api.latestAnimeAdded()
    .then(animes =>{
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/ovas/:page' , (req , res) =>{
  const page = req.params.page;
  api.getAnimeOvas(page)
    .then(ovas =>{
      res.status(200).json({
        ovas
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/movies/:page' , (req , res) =>{
  const page = req.params.page;
  api.getAnimeMovies(page)
    .then(movies =>{
      res.status(200).json({
        movies
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/genres/:genre/:page' , (req , res) =>{
  let gender = req.params.genre.toLowerCase();
  let page = req.params.page;
  api.getAnimesByGender(gender , page)
    .then(animes =>{
      res.status(200).json({
        animes
      });
    });
});

router.get('/letter/:letter/:page', (req , res) => {
  const letter= req.params.letter.toUpperCase();
  const page = req.params.page;
  api.getAnimesListByLetter(letter , page)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err);
    });
});

router.get('/search/:title', (req , res) => {
  const title = req.params.title;
  api.searchAnime(title)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err)
    });
});

router.get('/video/:id/:chapter', (req , res) => {
  const id = req.params.id;
  const chapter = req.params.chapter;
  api.getAnimeVideoByServer(id , chapter)
    .then(video => {
      res.status(200).json({
        video
      });
    }).catch((err) =>{
      console.log(err)
    });
});
router.get('/anime/:id', (req , res) => {
    const id = req.params.id;
    api.getAnimeDetails(id)
        .then(anime => {
            res.status(200).json(anime[0]);
        }).catch((err) =>{
        console.log(err)
    });
});

router.get('/media/:id1/:id2/:id3/', (req , res) => {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    const id3 = req.params.id3;
    api.getMedia(id1, id2, id3)
        .then(anime => {
            //res.status(200).json(anime);
            res.redirect(anime);
        }).catch((err) =>{
        console.log(err)
    });
});

router.get('/schedule/:day', (req , res) => {
  const day = req.params.day;
  api.schedule(day)
    .then(schedule => {
      res.status(200).json({
        schedule
      });
    }).catch((err) =>{
      console.log(err)
    });
});


module.exports = router;

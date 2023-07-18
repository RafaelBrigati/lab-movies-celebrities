
const router = require("express").Router();

router.get('/movies', (req, res, next) => {
        res.render('Movies');
});

router.get('/movies/create', (req, res, next) => {
        res.render('./movies/new-movie');
      });


router.get('/movies', (req, res, next) => {
    Movies.find() 
    .then((movies) => {
      res.render('movies/movies', { movies });
    })
    .catch((error) => {
      console.error('Error retrieving celebrities:', error);
     
    });
})


router.post('/movies', (req, res, next) => {

});

router.post('/movies/create', (req, res, next) => {
        const {title, genre, plost, cast} = req.body; 
        
        const newMovie = new Movie ({
            title: title,
            genre: genre,
            plost: plost,
            cast: cast
        });
      
        newMovie.save()
                    .then(savedMovie => {res.redirect("/movies")})
                    .catch(err => {res.render('movies/new-movie') });
      });
      
      

module.exports = router;




      
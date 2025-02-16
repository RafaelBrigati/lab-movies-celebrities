
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');


router.get('/celebrities/create', (req, res, next) => {
    res.render('./celebrities/new-celebrity');
});

router.get('/celebrities', (req, res, next) => {
    Celebrity.find() 
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities });
    })
    .catch((error) => {
      console.error('Error retrieving celebrities:', error);
    });
})






router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body; 
    
    const newCelebrity = new Celebrity ({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    });

    newCelebrity.save()
                .then(savedCelebrity => {res.redirect("/celebrities")})
                .catch(err => {res.render('celebrities/new-celebrity') });
});



module.exports = router;


  
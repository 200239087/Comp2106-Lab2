let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { 
    title: 'Lab 2',
    message: 'Me and my family' 
  }));

  router.get('/ryan', (req, res, next) => res.render('ryan', {
    title: 'Ryan',
    message: 'I am a student at Georgian College in the Interactive Media Design - Web program. My life goal is to publish a book series.'
  }));

  router.get('/jackie', (req, res, next) => res.render('jackie', {
    title: 'Jackie',
    message: 'My sister Jaqueline (Jackie), is four years older than me and is also attending Georgian College and has two cats named Elly and Tucker.'
  }));

  router.get('/kevin', (req, res, next) => res.render('kevin', {
    title: 'Kevin',
    message: 'My father works for the City of Barrie as a SCADA Systems Speciallist, and plays hockey every Friday.'
  }));

  router.get('/lucy', (req, res, next) => res.render('lucy', {
    title: 'Lucy',
    message: 'My mother works at the Shoppers Drug Mart homeoffice in Markham and loves reading.'
  }));

module.exports = router;

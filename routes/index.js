var express = require('express');
var router = express.Router();
require('../public/src/db/mongoose')
// we need to require each mongoose module to use it
const Todo = require('../public/src/db/mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get to do Post request and save it to data base
router.post('/todo', (req, res) => {
  console.log(req.body)
  const todo = new Todo(req.body)
  todo.save()
  res.redirect('/')
})

// export router page to app.js
module.exports = router;

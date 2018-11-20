const express = require('express')
const router = express.Router()
const utils = require('./utils')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route for search proceeding

router.get('/search', function (req, res) {

  res.render('search',
    {
      proceedings: utils.getProceedings()
    })

})



// Branching
router.get('/capital', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)

  if (req.session.data.property === 'yes') {
    // Redirect to the relevant page
    res.redirect('/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('capital')
  }
})

router.get('/other_capital', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)

  if (req.session.data.capital === 'yes') {
    // Redirect to the relevant page
    res.redirect('/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('other_capital')
  }
})

router.get('/other_capital', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)

  if (req.session.data.othercapital === 'yes') {
    // Redirect to the relevant page
    res.redirect('/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('other_capital')
  }
})

// Add your routes here - above the module.exports line
module.exports = router

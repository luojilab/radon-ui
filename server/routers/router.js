const express = require('express')
const router = express.Router()

const View = require('./view')

// router.get('/', View.index)

router.get('/dev', function (req, res) {
  res.render('index', { title: 'index', bundle: 'index'})
})

router.get('/', function (req, res) {
  res.render('index', { title: 'login', bundle: 'login'})
})
router.get('/basic/button', function (req, res) {
  res.render('index', { title: 'login', bundle: 'login'})
})

module.exports = router
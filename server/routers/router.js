const express = require('express')
const router = express.Router()

// const View = require('./view')

// router.get('/', View.index)

router.get('/dev', function (req, res) {
  res.render('index', { title: 'index', bundle: 'index'})
})

router.get('/', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})

router.get('/basic/*', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})

router.get('/common/*', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})

router.get('/form/*', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})

router.get('/global/*', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})

router.get('/navigation/*', function (req, res) {
  res.render('index', { title: 'docs', bundle: 'docs'})
})


module.exports = router
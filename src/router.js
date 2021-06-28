const express = require('express')
const path = require('path')
const QuestionController = require('./controllers/QuestionController')
const router = express.Router()

const RoomController = require('./controllers/RoomController')


router.get('/', (req, res) => res.render('index', {page:'enter-room'}))
router.get('/create-pass', (req, res) =>res.render('index', {page: 'create-pass'}))

router.post('/create-room', RoomController.create)
router.get('/room/:room', RoomController.open)
router.post('/enterroom', RoomController.enter)

router.post('/question/create/:room', QuestionController.create)
router.post('/question/:room/:question/:action', QuestionController.index)

module.exports = router;
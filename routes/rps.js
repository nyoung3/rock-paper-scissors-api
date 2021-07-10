const express = require('express')
const router = express.Router()

const rpsServer = require('../services/rock_paper_scissors')

router.get('/', rpsServer.get_game_rng)

module.exports = router
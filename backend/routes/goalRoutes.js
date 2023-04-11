const express = require('express')
const router = express.Router()
const {getGoals, setGoal, putGoals, deleteGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(putGoals).delete(deleteGoals)

module.exports = router
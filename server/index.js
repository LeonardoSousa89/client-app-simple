const express     = require('express')
const router      = express.Router()

router.route('/').get((req, res)=>{
    res.sendFile(__dirname + '/views/main.html')
})
router.route('/add-msg').get((req, res)=>{
    res.sendFile(__dirname + '/views/add-msg.html')
})
router.route('/options').get((req, res)=>{
    res.sendFile(__dirname + '/views/options.html')
})

module.exports = router
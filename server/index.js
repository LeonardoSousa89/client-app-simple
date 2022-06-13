const express     = require('express')
const router      = express.Router()

router.route('/').get((req, res)=>{
    res.sendFile(__dirname + '/views/main.html')
})
router.route('/add-msg').get((req, res)=>{
    res.sendFile(__dirname + '/views/add-msg.html')
})
router.route('/upt-msg/:id').get((req, res)=>{
    res.sendFile(__dirname + '/views/upt-msg.html')
})
router.route('/rmv-msg/:id').get((req, res)=>{
    res.sendFile(__dirname + '/views/rmv-msg.html')
})

module.exports = router
const port      = 8080
const express   = require('express')
const app       = express()
const route     = require('./server/index')

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/', route)
app.listen(process.env.PORT || port)
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const port = 8080

app.listen(port, function () { console.log(`WA is onAir on port ${port}`) }
)

console.log("hi");
 

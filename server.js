const express = require('express')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const enforce = require('express-sslify')

const app = express()

// Use https instead of http
app.use(enforce.HTTPS({ trustProtoHeader: true }))
// Serve our file from where ever the directory it is in
app.use(serveStatic(__dirname + '/dist'))

app.use(history())

// Listen to Heroku's enviremnt varible or to port 50000
app.listen(process.env.Port || 5000)



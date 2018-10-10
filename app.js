require('dotenv').config()
const Twitter = require('twitter-lite')
const serveStatic = require('serve-static')
const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

const parameters = {
  track: "selfie,swag,html"
}

app.get('/api/tweets', function(req, res, next) {
  res.set({
    'Content-Type': 'text/event-stream;charset=UTF-8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })
  client.stream("statuses/filter", parameters)
    .on("data", data => {
      res.write(`event: message\n`)
      res.write(`data: ${JSON.stringify(data)}\n\n`)
    })
    .on("ping", () => console.info("ping"))
    .on("error", error => console.error("error", error))
    .on("end", () => {
      client.stream.destroy()
      res.end()
    })
})

app.use(serveStatic(__dirname + "/dist"))

app.use(function(err, req, res, next) {
  res.redirect('/')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app

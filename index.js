require('dotenv').config()
const http = require('http')
const Twitter = require('twitter-lite')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

const parameters = {
  track: "javascript,css,html"
}
 
client.stream("statuses/filter", parameters)
  .on("start", response => console.log("start"))
  .on("data", data => console.log("data", data.text))
  .on("ping", () => console.log("ping"))
  .on("error", error => console.log("error", error))
  .on("end", response => console.log("end"))
 
setTimeout(() => {
  client.stream.destroy()
}, 15000)
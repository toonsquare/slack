var origin = 'https://slack.com'

// allow configuring the url if steno is running on a non-standard port/host
try{
  if (process.env.STENO_URL) {
    origin = process.env.STENO_URL
  }
}catch (e) {
  console.log(e);
}


module.exports = origin

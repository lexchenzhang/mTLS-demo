const express = require('express')
const app = express()
const port = 3000
const mtls = require("./mtls")

app.get('/tls-tester', (req, res) => {
  mtls.reqWithTLS('/hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
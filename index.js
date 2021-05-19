const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const app = express()

app.use('/', (req, res, next) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })

    res.end('<h1>Hello from ssl server</h1>')
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
}, app)

sslServer.listen(443, () => console.log('Server has been started on port 443'))
const fs = require('fs');
const https = require('https');

function reqWithTLS(apipath) {
    const req = https.request(
        {
          hostname: 'localhost',
          port: 443,
          path: apipath,
          method: 'GET',
          cert: fs.readFileSync('./certs/client.b.crt'),
          key: fs.readFileSync('./certs/client.b.key'),
          ca: fs.readFileSync('./certs/ca.crt')
        },
        res => {
          let body = ''
          res.on('data', data => body += data)
          res.on('end', () => {
            console.log('response data: ' + body)
          })
        }
      );
      
      req.on('error', err => {
        console.warn(err)
      }).end()
}

module.exports = {reqWithTLS}
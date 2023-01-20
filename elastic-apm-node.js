// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'APM Test Agent',
  
  // Use if APM Server requires a secret token
  secretToken: 'Qq9IBPkOCysm27KFxm',
  
  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://c4046d848d06415ebbf97e76a3a4f5a5.apm.asia-south1.gcp.elastic-cloud.com:443',
  
  // Set the service environment
  environment: 'production'
  });

const app = require('express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/helloworld', function (req, res) {
    res.send('Nothing here, try again')
})

app.listen(3020);
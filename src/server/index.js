const Express = require('express')
const bodyParser = require('body-parser')
const os = require('os')
const path = require('path')
const cors = require('cors')

const app = Express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }))
app.use(Express.static(path.join(__dirname, '../../public')))

require('./routes')(app)

app.listen(8000, () => console.log('Listening on port 8000!'))

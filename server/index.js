const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {videoDownloader} = require('../controllers/manager')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../pages/index.html'))
})

 app.post('/api/downloader', videoDownloader)


app.listen(4000, () => {
    console.log('server is up')
})
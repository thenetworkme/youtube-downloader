const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '../src')))


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
})




app.listen(4000, () => {
    console.log('server is up')
})
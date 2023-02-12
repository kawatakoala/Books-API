const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())

app.listen(3000)
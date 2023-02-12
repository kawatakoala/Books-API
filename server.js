const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())

app.listen(3000)
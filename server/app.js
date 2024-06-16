const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./config/db')
const categoryRouter = require('./routes/category')
const movieRouter = require('./routes/movie')

app.use(cors())
app.use(express.json())

connectToDb()

app.use('/api/categories', categoryRouter)
app.use('/api/movies', movieRouter)

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})

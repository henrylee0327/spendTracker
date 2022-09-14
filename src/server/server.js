const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})
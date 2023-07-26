const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

// normalmente (req, res)
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(8080, () => {
    console.log('[server]: corriendo en el puerto 8080.');
})
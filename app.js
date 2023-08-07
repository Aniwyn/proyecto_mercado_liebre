const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

// normalmente (req, res)
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/login.html"))
})

// app.listen(8080, () => {
//     console.log('[server]: running at port 8080 (http://localhost:8080/).');
// })

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`[server]: running at port $[port] (http://localhost:$[port]/).`);
})
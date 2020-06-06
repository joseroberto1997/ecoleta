const express = require('express')
const server = express()

//configurando pasta publica
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require('nunjucks')

//configurando o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar caminhos da aplicação
//pagina inicial
server.get('/', (req, res) => {
    res.render("index.html")
})

server.get('/create-point', (req, res) => {
    res.render("create-point.html")
})

server.get('/search', (req, res) => {
    res.render("search-results.html")
})



//iniciando o servidor
server.listen(5000, (req, res) => {
    console.log("Server is running")
})
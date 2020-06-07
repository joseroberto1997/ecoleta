const express = require('express')
const server = express()


//pegar o banco de dados

const db = require("./database/db")

//configurando pasta publica
server.use(express.static("public"))


//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))


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

       //req.query: Query Strings da nossa url
    //    console.log(req.query)
})


server.post('/savepoint', (req,res) =>{
    
    //req.body: o corpo do nosso formulario
    // console.log(req.body)

    //inserir dados no banco de dados

    //Inserir dados na tabela 
        const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items

        ) VALUES (?,?,?,?,?,?,?);     
        `
        const values =  [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]

        function afterInsertData(err) {
            if(err) {
                 console.log(err)
                 return res.send("Erro no cadastro!")
            }

            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.render("create-point.html", { saved: true })
        }

        db.run(query, values, afterInsertData)
    
    
})

server.get('/search', (req, res) => {

    const search = req.query.search

    if (search == "") {
        //pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }


    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE  city LIKE  '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length


        //mostrar a pagina html com os dados do banco de dados         
        res.render("search-results.html", {places : rows, total: total})
    })
})

//iniciando o servidor
server.listen(5000, (req, res) => {
    console.log("Server is running")
})
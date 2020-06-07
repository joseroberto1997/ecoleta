//IMPORTAR AS DEPENDENCIAS DO SQLITE3
const  sqlite3 = require('sqlite3').verbose()

//criar o objeto que ira fazer operações mo banco de dados
    const db = new sqlite3.Database("./src/database/database.db")    


    module.exports = db

    //utilizar o objeto de banco de dados para nossas operações 

   //  db.serialize( () => {
    //     //criar uma tabela
    //     db.run(`
    //         CREATE TABLE IF NOT EXISTS places (
    //             id INTEGER PRIMARY KEY AUTOINCREMENT,
    //             image TEXT,
    //             name TEXT,
    //             address TEXT,
    //             address2 TEXT,
    //             state TEXT,
    //             city TEXT,
    //             items TEXT
    //         );
        
    //     `)
    //     //Inserir dados na tabela 
    //     const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items

    //     ) VALUES (?,?,?,?,?,?,?);     
    //     `
    //     const values =  [
    //         "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1461&q=80",
    //         "Papersider",
    //         "Guilherme Gembala, Jardim América",
    //         "Número 260",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Resíduos eletrônicos, Lâmpadas"
    //     ]

    //     function afterInsertData(err) {
    //         if(err) {
    //             return console.log(err)
    //         }

    //         console.log("Cadastrado com sucesso")
    //         console.log(this)
    //     }

    //     db.run(query, values, afterInsertData)

    //     //consultar dados na tabela
    //     // db.all(`SELECT * FROM places`, function(err, rows) {
    //     //     if(err) {
    //     //         return console.log(err)
    //     //     }

    //     //     console.log("Aqui estão seus registros:")
    //     //     console.log(rows)
    //     // })

        
       // deletar um dado na tabela

   //      db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
   //          if(err) {
   //              return console.log(err)
   //          }
   //          console.log("Registro deletado com sucesso")
   //      })
   //  })
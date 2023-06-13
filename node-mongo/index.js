// configuracao inicial 
require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()


// forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended : true,
    }),
)

app.use(express.json())

// Rotas da API

const personRoutes = require('./routes/personRoute')

app.use('/person',personRoutes)

// rota inicial / endpoint

app.get("/" , (req, res)=>{

    // Mostrar req
    
    res.json({message : "OI Express !"})
    

})

// entregar uma porta 

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Nessa parte voce insere o link do banco que criou no ATLAS para executar a conexao

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fx6ekbw.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    console.log("Conectado ao banco de dados !")
    app.listen(3000)
})
.catch((err)=>{
  console.log(err)
})

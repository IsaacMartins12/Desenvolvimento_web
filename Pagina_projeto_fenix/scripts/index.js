const express = require("express")
const app = express()


app.get("/" ,function(req,res){

    res.sendFile(__dirname + "Projeto_fenix/index.html")
})

app.get("/sobre" ,function(req,res){

    res.sendFile(__dirname + "Projeto_fenix/sobre.html")
})

app.get("Projeto_fenix/blog" ,function(req,res){

    res.send('Seja bem vindo ao meu blog ')
    
})

app.get("/ola/:nome/:cargo" ,function(req,res){

    res.send(req.params)
    
})
    
app.listen(8081 , function(){
    console.log('Servidor local rodando na url https://localhost:8081')
}) // Obrigatoriamente tem que ser a ultima linha do codigo
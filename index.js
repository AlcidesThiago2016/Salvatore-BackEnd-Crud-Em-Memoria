const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("Hello World!!")
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Real All [GET] /personagem
app.get('/personagem', function (req, res){
    res.send(lista)
})

// Endpoint Ready By ID [GET] /personagem/:id
app.get('/personagem/:id', function(req, res) {
    // Acessar o parametro ID
    const id = req.params.id

    // Acessar o item na lista usando o ID - 1
    const item = lista[id - 1]

    // Enviando o item com resposta
    res.send(item)
})

app.listen(3000)
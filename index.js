const express = require('express')
const app = express()

//Sinaliza para o express que o corpo das requisições
//estará sempre em Json
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function(req, res){
  res.send('Olá, mundo!')
})

//CRUD de lista de pokemons

const items = ['Bulbassauro', 'Pikachu', 'Charmander', 'Charmeleon', 'Charizard']

// RED All - Get/itens
app.get('/items', function(req, res){
  res.send(items)
})

// CREAT - POST - items

app.post('/items', function(req,res){
//Extraio a informação do corpo da requisição
  const item = req.body.name
  
//insiro ela na lista
items.push(item)

//enviamos uma mensagem de sucesso
  res.send('Item create sucessfully')
})

app.listen(3000)
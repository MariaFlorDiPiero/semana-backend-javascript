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

//READ by ID - [GET] /items/:id
app.get('/items/:id', function (req, res){
//Acessamos o parâmetro de rota ID
//Subtraímos 1 para corrigir a questão do índice 
// da lista que começa em 0
  const id = req.params.id - 1

//Acessamos o item na lista a partir do index
  const item = items[id]


//Exibimos o item obtido
  res.send(item)
})

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
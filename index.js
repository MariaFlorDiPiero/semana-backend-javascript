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

//const items = ['Bulbassauro', 'Pikachu', 'Charmander', 'Charmeleon', 'Charizard']
const items = [
  {
    "id":1,
    "name":"Bulbassauro",
    "imageUrl": "https://psverso.com.br/wp-content/uploads/2022/10/pokedex-bulbasaur1.png"

  },
  {
    "id":2,
    "name":"Pikachu",
    "imageUrl": "https://psverso.com.br/wp-content/uploads/2022/10/pokedex-pikachu.png"

  },
  {
    "id":3,
    "name":"Charmander",
    "imageUrl": "https://psverso.com.br/wp-content/uploads/2022/10/pokedex-charmander.png"

  },
  {
    "id":4,
    "name":"Charmeleon",
    "imageUrl": "https://psverso.com.br/wp-content/uploads/2022/10/pokedex-charmeleon.png"

  },
  {
    "id":5,
    "name":"Charizard",
    "imageUrl": "https://psverso.com.br/wp-content/uploads/2022/10/pokedex-charizard.png"

  }
]
//READ by ID - [GET] /items/:id
app.get('/items/:id', function (req, res){
//Acessamos o parâmetro de rota ID
//Subtraímos 1 para corrigir a questão do índice 
// da lista que começa em 0
  const id = parseInt(req.params.id, 10)

//Acessamos o item na lista a partir do index
  const item = items.find(function(elemento){
    return elemento.id === id
  })
  
//Exibimos o item obtido

if (item) {
  res.send(item)
} else {
  res.status(404).send('Item não encontrado');
}
  
})

// RED All - Get/itens
app.get('/items', function(req, res){
  res.send(items.filter(Boolean))
})

// CREAT - POST - items

app.post('/items', function(req,res){
//Extraio a informação do corpo da requisição
  const item = req.body

  item.id = items.length + 1
  
//insiro ela na lista
items.push(item)

//enviamos uma mensagem de sucesso
  res.send(item)
})

//UPDATE - [PUT] - /items/:id
app.put('/items/:id', function(req, res){

//Acessamos o parâmetro de rota e corrigimos o índice
  const id = +req.params.id

//Obtemos o novo item a partir do corpo da requisição
  const newItem = req.body.name

//Colocamos o novo item na mesma posição do item anterior
  items[id] = newItem

//Enviamos uma mensagem de sucesso
  res.send('Item update sucessfully.')
})

// DELETE - [DELETE] /items/:id
app.delete('/items/:id', function(req,res){
//Acessamos o parâmetro de rota e corrigimos o índice
  const id = req.params.id - 1
//Removemos a informação a partir do índice 
  delete items[id]
//Enviamos uma mensagem de sucesso
  res.send('Item delete sucessfully')
})
app.listen(3000)
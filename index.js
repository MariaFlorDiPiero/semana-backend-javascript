const express = require('express')
const app = express()

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

app.listen(3000)
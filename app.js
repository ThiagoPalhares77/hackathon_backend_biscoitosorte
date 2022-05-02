const express = require('express')
const db = require('./dbConnection')
const sortes = require('./mockup')
const port= process.env.PORT || 3000
const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('index',{sortes:sortes})

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});
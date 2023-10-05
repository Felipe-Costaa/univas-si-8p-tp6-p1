require('dotenv').config()

const express = require('express')
const rotasPadrao = require('./rotas/index.js')
const rotasGame = require('./rotas/game.js')
const app = express()

app.use(express.json())
app.use(rotasPadrao)
app.use(rotasGame)


app.listen(process.env.PORTA, () => {
    console.log("API rodando na porta " + process.env.PORTA)
})
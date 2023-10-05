const Router = require("express").Router()
const repositorio = require("../repositorios/game").repositorioGames()

Router.get("/games/:id", (req, res) => {
    try {
        const { id } = req.params
        const game = repositorio.get(id)

        res.send(game)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)
        res.status(dadosDoErro.status).send(dadosDoErro.mensagem)
    }
})

Router.get("/games", (req, res) => {
    const parametros = {}

    if (req.query.nome) {
        parametros.nome = req.query.nome
    }

    const games = repositorio.getAll(parametros)

    res.send(games)
})

Router.post("/games", (req, res) => {
    try {
        const dados = req.body

        const game_cadastrado = repositorio.create(dados)

        res.send(game_cadastrado)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)
        res.status(dadosDoErro.status).send(dadosDoErro.mensagem)
    }

})

Router.put("/games/:id", (req, res) => {

    try {
        const { id } = req.params
        const dados = req.body

        const game_atualizado = repositorio.update(dados, id)

        res.send(game_atualizado)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)
        res.status(dadosDoErro.status).send(dadosDoErro.mensagem)
    }
})

Router.delete("/games/:id", (req, res) => {
    try {
        const { id } = req.params
        repositorio.destroy(id)

        res.status(204).send()
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)
        res.status(dadosDoErro.status).send(dadosDoErro.mensagem)
    }
})

module.exports = Router
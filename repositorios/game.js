let games = [{
    nome: "God of War",
    id: 1
}]

let ultimo_id = 1
const validacao = require("../validacoes/game")

const repositorio = () => {
    return {
        getAll: (params) => {
            const listaDeParametros = Object.keys(params)

            const games_filtrados = games.filter(cat => {
                let deveRetornar = true

                listaDeParametros.forEach(parametro => {
                    if (!game[parametro].includes(params[parametro])) {
                        deveRetornar = false
                    }
                })

                return deveRetornar
            })

            return games_filtrados
        },

        get: (id) => {
            const games_filtrados = games.filter(game => {
                return game.id == id
            })

            if (games_filtrados.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    mensagem: ""
                }))
            }

            return games_filtrados[0]
        },

        create: (dados) => {
            if (validacao(dados)) {
                const game = dados

                game.id = ++ultimo_id

                games.push(game)

                return game
            } else {
                throw new Error(JSON.stringify({
                    status: 400,
                    mensagem: "Dados incorretos para cadastrar."
                }))
            }
        },

        update: (dados, id) => {
            if (validacao(dados)) {
                const games_filtrados = games.filter(game => {
                    return game.id == id
                })

                if (games_filtrados.length == 0) {
                    throw new Error(JSON.stringify({
                        status: 404,
                        mensagem: ""
                    }))
                }

                const game = games_filtrados[0]

                game.nome = dados.nome

                return game
            } else {
                throw new Error(JSON.stringify({
                    status: 400,
                    mensagem: "Dados incorretos para atualizar."
                }))
            }
        },

        destroy: (id) => {
            const games_filtrados = games.filter(cat => {
                return game.id == id
            })

            if (games_filtrados.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    mensagem: ""
                }))
            }

            games = games.filter(game => {
                return game.id != id
            })
        }
    }
}

module.exports = {
    repositorioGames: repositorio
}
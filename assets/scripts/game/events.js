'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onPlayGame = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.playGame(formData)
    .then(ui.playGameSuccess)
    .catch(ui.playGameFailure)
}

const onIndexGames = function (event) {
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showGame(formData.game.id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateGame(formData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onPlayGame,
  onIndexGames,
  onShowGame,
  onUpdateGame
}

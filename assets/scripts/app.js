'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#game-play').on('submit', gameEvents.onPlayGame)
  $('#game-show').on('submit', gameEvents.onShowGame)
  $('#game-update').on('submit', gameEvents.onUpdateGame)
  $('#game-index').on('click', gameEvents.onIndexGames)
})

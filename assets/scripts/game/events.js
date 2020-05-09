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
  event.preventDefault()
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

// const onShowGame = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.showGame(formData.game.id)
//     .then(ui.showGameSuccess)
//     .catch(ui.showGameFailure)
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateGame(formData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function handleCellClick (clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  /*
Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid.
Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an
integer(number)
*/
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )
  if (gameStatus[clickedCellIndex] !== '' || !gameActive) {
    return
  }

  handleCellPlayed(clickedCell, clickedCellIndex)
  handleResultValidation()
}

function blockPlayed (clickedBlock, clickedBlockIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

function handlePlayerChange () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  statusDisplay.innerHTML = currentPlayerTurn()
}

module.exports = {
  onPlayGame,
  onIndexGames,
  // onShowGame,
  onUpdateGame
}

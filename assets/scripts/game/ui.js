'use strict'

const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All games successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.games)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting games')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

// const onShowSuccess = function (data) {
//   $('#message').text('One game successfully received')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('onCreateSuccess ran. Data is :', data)
// }

// const onShowFailure = function (error) {
//   $('#message').text('Error on getting game')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onShowFailure ran. Error is :', error)
// }

const onDestroySuccess = function () {
  $('#message').text('Game successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Game successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Game successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Game successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

const currentPlayer = 'x'
const gameStatus = ['', '', '', '', '', '', '', '', '']

const player1Selections = new Array[]

const player2Selections = new Array[]

const checkWinner = array => {
  if (array.length !== 9) {
    return null
  }
  if (array[0] === array[1] && array[1] === array[2] && array[2] !== undefined) {
    return array[0]
  }
  if (array[3] === array[4] && array[4] === array[5] && array[5] !== undefined) {
    return array[3]
  }
  if (array[6] === array[7] && array[7] === array[8] && array[8] !== undefined) {
    return array[6]
  }
  if (array[0] === array[3] && array[3] === array[6] && array[6] !== undefined) {
    return array[0]
  }
  if (array[1] === array[4] && array[4] === array[7] && array[7] !== undefined) {
    return array[1]
  }
  if (array[2] === array[5] && array[5] === array[8] && array[8] !== undefined) {
    return array[2]
  }
  if (array[0] === array[4] && array[4] === array[8] && array[8] !== undefined) {
    return array[0]
  }
  if (array[2] === array[4] && array[4] === array[6] && array[6] !== undefined) {
    return array[2]
  }
  return null
}

const winningMessage = () => `Player ${currentPlayer} has won!`
const drawMessage = () => `Game ended in a draw!`
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  // onShowSuccess,
  // onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure,
  currentPlayer,
  gameStatus,
  player1Selections,
  player2Selections,
  winningMessage,
  drawMessage,
  currentPlayerTurn
}

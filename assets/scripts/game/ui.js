// const player1 = 'O'
// const player2 = 'X'
//
// const addPlayerMove = (i) => {
//   if (play_board[i] == '') {
//     play_board[i] = player1
//     render_board()
//     addComputerMove()
//   }
// }
//
// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
// function handleResult () {
//   let roundWon = false
//   for (let i = 0; i <= 7; i++) {
//     const winCondition = winningConditions[i]
//     const a = gameState[winCondition[0]]
//     const b = gameState[winCondition[1]]
//     const c = gameState[winCondition[2]]
//     if (a === '' || b === '' || c === '') {
//       continue
//     }
//     if (a === b && b === c) {
//       roundWon = true
//       break
//     }
//   }
// }

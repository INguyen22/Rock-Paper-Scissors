class Game {
  constructor(player1, cpu, mode, input) {
    this.player1 = player1
    this.player2 = cpu
    this.gameMode = mode || 'classic'
    this.player1Input = input
    this.winner = ''
  }
  checkMode() {
    if (this.gameMode === 'classic') {
      this.player2Input = this.player2.takeTurnClassic()
    }
    if (this.gameMode === 'kirbo') {
      this.player2Input = this.player2.takeTurnKirbo()
  }
}
  checkWin() {
    console.log('player1input',this.player1Input)
    console.log('player2input',this.player2Input)
    console.log(this.winner)

    if (this.player1Input === 'rock' && this.player2Input === 'scissors') {
      this.player1.wins ++
      return this.winner = 'Player1 Wins!'
    }
    if (this.player1Input === 'rock' && this.player2Input === 'paper') {
      return this.winner = 'CPU Wins!'
    }
    if (this.player1Input === 'rock' && this.player2Input === 'rock') {
      return this.winner = 'Draw!'
    }
    //paper rules
    if (this.player1Input === 'paper' && this.player2Input === 'scissors') {
      return this.winner = 'CPU wins!'
    }
    if (this.player1Input === 'paper' && this.player2Input === 'rock') {
      return this.winner = 'Player1 wins!'
    }
    if (this.player1Input === 'paper' && this.player2Input === 'paper') {
      return this.winner = 'Draw!'
    }
    //scissors rules
    if (this.player1Input === 'scissors' && this.player2Input === 'scissors') {
      return this.winner = 'Draw!'
    }
    if (this.player1Input === 'scissors' && this.player2Input === 'rock') {
      return this.winner = 'CPU wins!'
    }
    if (this.player1Input === 'scissors' && this.player2Input === 'paper') {
      return this.winner = 'Player1 wins!'
    }
  }
}

// if (this.player1Input < this.player2Input) {
//   this.player2.wins ++
//   return this.winner = 'CPU Wins!'
// }
// if (this.player1Input === this.player2Input) {
//   return this.winner = 'DRAW!'
// }

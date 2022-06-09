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
    if (this.gameMode === mode) {
      this.player2Input = this.player2.takeTurnKirbo()
  }
}
  checkWin() {
    if (this.player1Input > this.player2Input) {
      this.player1.wins ++
      return this.winner = 'Player1 Wins!'
    }
    if (this.player1Input < this.player2Input) {
      this.player2.wins ++
      return this.winner = 'CPU Wins!'
    }
    if (this.player1Input === this.player2Input) {
      return this.winner = 'DRAW!'
    }
  }
}

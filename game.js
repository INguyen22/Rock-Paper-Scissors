class Game {
  constructor(player1, cpu, game, input) {
    this.player1 = player1
    this.player2 = cpu
    this.gameMode = game || 'classic'
    this.player1Input = input
  }
  checkMode() {
    if (this.gameMode === 'classic') {
      this.player2Input = this.player2.takeTurnClassic()
    }
    if (this.gameMode === game) {
      this.player2Input = this.player2.takeTurnKirbo()
  }
}
  checkWin() {
    if (this.player1Input > this.player2Input) {
      this.player1.wins ++
      return 'Player1 Wins!'
    }
    if (this.player1Input < this.player2Input) {
      this.player2.wins ++
      return 'CPU Wins!'
    }
    if (this.player1Input === this.player2Input) {
      return 'DRAW!'
    }
  }
}

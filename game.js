class Game {
  constructor(player1, cpu, game, input) {
    this.player1 = player1
    this.player2 = cpu
    this.gameMode = game || 'classic'
    this.player1Input = input
  }
  checkMode() {
    if (this.player1Choice === 'classic') {
      this.player2Input = this.player2.takeTurnClassic()
    }
    if (this.player1Choice === game) {
      this.player2Input = this.player2.takeTurnKirbo()
  }
  checkWin() {
    if (this.player1Input > this.player2Input) {
      return 'Player1 Wins!'
    }
  }
  checkLose() {
    if (this.player1Input < this.player2Input) {
      return 'CPU Wins!'
    }
  }
  checkDraw() {
    if (this.player1Input === this.player2Input) {
      return 'DRAW!'
    }
  }
}

class Game {
  constructor(player1, cpu, game) {
    this.player1 = player1
    this.player2 = cpu
    this.gameMode = game || 'classic'
  }
  checkMode() {
    if (this.gameMode === 'classic') {
      this.player2 = this.player2.takeTurnClassic()
    }
    if (this.gameMode === game) {
      this.player2 = this.player2.takeTurnKirbo()
  }
  checkWin() {
    if (this.player1 > this.player2) {
      return 'Player1 Wins!'
    }
  }
  checkLose() {
    if (this.player1 < this.player2) {
      return 'CPU Wins!'
    }
  }
  checkDraw() {
    if (this.player1 === this.player2) {
      return 'DRAW!'
    }
  }
}

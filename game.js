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
      console.log('checkmode')
      this.player2Input = this.player2.takeTurnClassic()
    }
    else if (this.gameMode === 'kirbo') {
      this.player2Input = this.player2.takeTurnKirbo()
  }
}
  checkWin() {
   if ((this.player1Input === 'rock' && this.player2Input === 'paper') ||
      (this.player1Input === 'rock' && this.player2Input === 'hammer') ||
      (this.player1Input === 'paper' && this.player2Input === 'scissors') ||
      (this.player1Input === 'paper' && this.player2Input === 'sword') ||
      (this.player1Input === 'scissors' && this.player2Input === 'rock') ||
      (this.player1Input === 'scissors' && this.player2Input === 'sword') ||
      (this.player1Input === 'hammer' && this.player2Input === 'paper') ||
      (this.player1Input === 'hammer' && this.player2Input === 'scissors') ||
      (this.player1Input === 'sword' && this.player2Input === 'rock') ||
      (this.player1Input === 'sword' && this.player2Input === 'hammer')) {
      return this.winner = 'CPU Wins!'
    }
    else if ((this.player1Input === 'rock' && this.player2Input === 'scissors') ||
      (this.player1Input === 'rock' && this.player2Input === 'sword') ||
      (this.player1Input === 'paper' && this.player2Input === 'rock') ||
      (this.player1Input === 'paper' && this.player2Input === 'hammer') ||
      (this.player1Input === 'scissors' && this.player2Input === 'paper') ||
      (this.player1Input === 'scissors' && this.player2Input === 'hammer') ||
      (this.player1Input === 'hammer' && this.player2Input === 'rock') ||
      (this.player1Input === 'hammer' && this.player2Input === 'sword') ||
      (this.player1Input === 'sword' && this.player2Input === 'paper') ||
      (this.player1Input === 'sword' && this.player2Input === 'paper')) {
      return this.winner = 'Player1 Wins!'
    }
    else if (this.player1Input === 'rock' && this.player2Input === 'rock' ||
      this.player1Input === 'paper' && this.player2Input === 'paper' ||
      this.player1Input === 'scissors' && this.player2Input === 'scissors' ||
      this.player1Input === 'hammer' && this.player2Input === 'hammer' ||
      this.player1Input === 'sword' && this.player2Input === 'sword') {
      console.log('3rd if')
      return this.winner = 'Draw!'
    }
  }
}

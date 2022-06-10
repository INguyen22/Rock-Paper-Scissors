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
    // console.log('player1input',this.player1Input)
    // console.log('player2input',this.player2Input)
    // console.log(this.winner)

    if (this.player1Input === 'rock' && this.player2Input === 'scissors' ||
      this.player1Input === 'rock' && this.player2Input === 'sword' ||
      this.player1Input === 'paper' && this.player2Input === 'rock' ||
      this.player1Input === 'paper' && this.player2Input === 'hammer' ||
      this.player1Input === 'scissors' && this.player2Input === 'paper' ||
      this.player1Input === 'scissors' && this.player2Input === 'hammer' ||
      this.player1Input === 'hammer' && this.player2Input === 'rock' ||
      this.player1Input === 'hammer' && this.player2Input === 'sword' ||
      this.player1Input === 'sword' && this.player2Input === 'paper' ||
      this.player1Input === 'sword' && this.player2Input === 'paper') {
      this.player1.wins += 1
      return this.winner = 'Player1 Wins!'
    }
    if (this.player1Input === 'rock' && this.player2Input === 'paper' ||
      this.player1Input === 'rock' && this.player2Input === 'hammer' ||
      this.player1Input === 'paper' && this.player2Input === 'scissors' ||
      this.player1Input === 'paper' && this.player2Input === 'sword' ||
      this.player1Input === 'scissors' && this.player2Input === 'rock' ||
      this.player1Input === 'scissors' && this.player2Input === 'sword' ||
      this.player1Input === 'hammer' && this.player2Input === 'paper' ||
      this.player1Input === 'hammer' && this.player2Input === 'scissors' ||
      this.player1Input === 'sword' && this.player2Input === 'rock' ||
      this.player1Input === 'sword' && this.player2Input === 'hammer') {
      this.player2.wins += 1
      return this.winner = 'CPU Wins!'
    }
    if (this.player1Input === 'rock' && this.player2Input === 'rock' ||
      this.player1Input === 'paper' && this.player2Input === 'paper' ||
      this.player1Input === 'scissors' && this.player2Input === 'scissors' ||
      this.player1Input === 'hammer' && this.player2Input === 'hammer' ||
      this.player1Input === 'sword' && this.player2Input === 'sword') {
      return this.winner = 'Draw!'
    }
  }
}

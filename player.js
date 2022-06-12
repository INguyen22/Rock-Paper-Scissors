class Player {
  constructor() {
    this.name = name
    this.token = "./assets/star.png"
    this.wins = localStorage.getItem('wins:') || 0
    this.classicChoices = ['rock', 'paper', 'scissors']
    this.kirboChoices = ['rock', 'paper', 'scissors', 'hammer', 'sword']
}
  takeTurnClassic() {
    return this.randomChoiceGenerator(3);
}
  takeTurnKirbo() {
    return this.randomChoiceGenerator(5);
}
  randomChoiceGenerator(modeChoiceOptions) {
    var number = Math.floor(Math.random() * modeChoiceOptions)
      if (number === 0) {
        number = 'rock'
      }
      if (number === 1) {
        number = 'paper'
      }
      if (number === 2) {
        number = 'scissors'
      }
      if (number === 3) {
        number = 'hammer'
      }
      if (number === 4) {
        number = 'sword'
      }
      return number
    }
  saveUserWins() {
    var player1Wins = this.wins
    localStorage.setItem('wins:', player1Wins)
}
}

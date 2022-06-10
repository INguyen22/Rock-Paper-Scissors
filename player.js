class Player {
  constructor() {
    this.name = name
    this.token = "./assets/kirbo.png"
    this.wins = 0
    this.classicChoices = ['rock', 'paper', 'scissors']
    this.kirboChoices = ['rock', 'paper', 'scissors', 'hammer', 'sword']
    //this.cpuChoice = ''
}
  takeTurnClassic() {
    //this.classicChoices[this.randomChoiceGenerator(3)]
    return this.randomChoiceGenerator(3);
}
  takeTurnKirbo() {
    //this.kirboChoices[this.randomChoiceGenerator(5)]
    return this.randomChoiceGenerator(5);
}
  randomChoiceGenerator(modeChoiceOptions) {
      //return Math.floor(Math.random() * modeChoiceOptions)
      console.log('number', number)
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
      return number
    }
}

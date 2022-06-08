class Player {
  constructor() {
    this.name = name
    this.token = "./assets/kirbo.png"
    this.wins = 0
    this.classic = [rock, paper, scissors]
    this.kirbo = [rock, paper, scissors, hammer, sword]
  }
  takeTurnClassic() {
    this.classic = randomChoiceGenerator(3)
  }
  takeTurnKirbo() {
    this.kirbo = randomChoiceGenerator(5)
  }
  randomChoiceGenerator(modeChoiceOptions) {
      return Math.floor(Math.random() * modeChoiceOptions);
    }
  }
}

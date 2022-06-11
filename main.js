//query Selectors
var classicButton = document.getElementById('classicButton')
var kirboButton = document.getElementById('kirboButton')
var rockButton = document.getElementById('rockButton')
var paperButton = document.getElementById('paperButton')
var scissorButton = document.getElementById('scissorButton')
var hammerButton = document.getElementById('hammerButton')
var swordButton = document.getElementById('swordButton')
var changeModeButton = document.querySelector('.back-button')
var h1 = document.querySelector('h1')
var h3 = document.querySelector('h3')
var mainMenu = document.querySelector('.main-menu')
var kirboMode = document.querySelector('.kirbo-mode')
var playerWins = document.getElementById('playerWins')
var cpuWins = document.getElementById('cpuWins')
var body = document.querySelector('body')
var banner1 = document.querySelector('#player1')
var banner2 = document.querySelector('#cpu')
var playerIcon = document.querySelector('.player-icon')
var cpuIcon = document.querySelector('.enemy-icon')
//event listeners
classicButton.addEventListener('click', playerChoseClassic)
kirboButton.addEventListener('click', playerChoseKirbo)
changeModeButton.addEventListener('click', changeMode)
rockButton.addEventListener('click', function() {
  classicAndKirbo('rock')
})
paperButton.addEventListener('click', function() {
  classicAndKirbo('paper')
})
scissorButton.addEventListener('click', function() {
  classicAndKirbo('scissors')
})
hammerButton.addEventListener('click', function() {
  classicAndKirbo('hammer')
})
swordButton.addEventListener('click',function() {
  classicAndKirbo('sword')
})
//Global variables
var user = new Player('user')
var cpu = new Player('CPU')
var mode = 'classic'
var game;
//event handlers
function playerChoseClassic() {
  hideModeButtons()
  showClassicChoices()
}

function playerChoseKirbo() {
  kirboProperties()
  hideModeButtons()
  showKirboChoices()
}

function changeMode() {
  mainMenuDefault()
  showModeButtons()
  hideInputButtons()
}

function classicAndKirbo(choice) {
  game = new Game (user, cpu, mode, choice)
  game.checkMode()
  judge()
}

function judge() {
  if (game.checkWin() === "Player1 Wins!") {
    game.player1.wins++
    displayWin()
    delaySoftRestart()
  }
  else if (game.checkWin() === "CPU Wins!") {
    game.player2.wins++
    displayLose()
    delaySoftRestart()
  }
  else {
    displayDraw()
    delaySoftRestart()
  }
}

function delaySoftRestart() {
  setTimeout(softResetMatch, 2000)
  disableButtons()
}

function softResetMatch() {
  if (mode === "classic") {
    h1.innerText = 'Rock🪨 Paper📃 Scissors✂️'
    h3.innerText = `Make your choice`
    enableButtons()
  }
  else if (mode === 'kirbo') {
    h1.innerHTML = `<img src="./assets/marx.png" style="height:250px;width:450px">`
    h3.innerText = `Who will win? KIYAHAHAHAHA`
    enableButtons()
  }
}
//Change property functions
function kirboProperties() {
  mode = 'kirbo'
  banner1.style.background = "linear-gradient(#FFB6C1 40%, #FFE4E1, #F08080) fixed"
  banner2.style.background = "linear-gradient(#6A5ACD 40%, #4682B4, #FFD700) fixed"
  playerIcon.innerHTML = `<img src="./assets/kirbo.png" style="height:150px;width:150px">`
  cpuIcon.innerHTML = `<img src="./assets/metaknight.png" style="height:150px;width:150px">`
  h1.innerHTML = `<img src="./assets/marx.png" style="height:250px;width:450px">`
  h3.innerText = "Who will win? KIYAHAHAHAHA"
  body.style.backgroundImage = `url(./assets/popstar.png)`
  h1.style.color = 'white'
  h3.style.color = 'white'
}

function mainMenuDefault() {
  h1.innerText = 'Rock🪨 Paper📃 Scissors✂️'
  h3.innerText = 'Choose your game mode'
  mode = 'classic'
  body.style.background = ''
  playerIcon.innerHTML = 'Player 1'
  cpuIcon.innerHTML = 'CPU'
  banner1.style.background = ''
  banner2.style.background = ''
  h1.style.color = 'black'
  h3.style.color = 'black'
}

function displayWin() {
  h1.innerText = "You win!"
  playerWins.innerText = `Wins: ${game.player1.wins}`
  h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
}

function displayLose() {
  h1.innerText = "You LOSE!"
  cpuWins.innerText = `Wins: ${game.player2.wins}`
  h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
}

function displayDraw() {
  h1.innerText = "It's a draw! Rematch time!"
  h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
}

function showModeButtons() {
  classicButton.style.display = ''
  kirboButton.style.display = ''
}

function hideModeButtons() {
  classicButton.style.display = 'none'
  kirboButton.style.display = 'none'
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function disableElement(element) {
  element.disabled = true
}

function enableElement(element) {
  element.disabled = false
}

function showClassicChoices() {
  h3.innerText = "Make your choice"
  show(rockButton)
  show(paperButton)
  show(scissorButton)
  show(changeModeButton)
}

function showKirboChoices() {
  show(kirboMode)
  show(rockButton)
  show(paperButton)
  show(scissorButton)
  show(changeModeButton)
}

function hideInputButtons() {
  hide(kirboMode)
  hide(rockButton)
  hide(paperButton)
  hide(scissorButton)
  hide(changeModeButton)
}

function disableButtons() {
  disableElement(changeModeButton)
  disableElement(rockButton)
  disableElement(paperButton)
  disableElement(scissorButton)
  disableElement(hammerButton)
  disableElement(swordButton)
}

function enableButtons() {
  enableElement(changeModeButton)
  enableElement(rockButton)
  enableElement(paperButton)
  enableElement(scissorButton)
  enableElement(hammerButton)
  enableElement(swordButton)
}

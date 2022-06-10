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
var playerIcon = document.querySelector('.player-icon')
var cpuIcon = document.querySelector('.enemy-icon')
//event listeners
classicButton.addEventListener('click', playerChoseClassic)
kirboButton.addEventListener('click', playerChoseKirbo)
changeModeButton.addEventListener('click', changeMode)

rockButton.addEventListener('click', function() {
  classicAndKirbo('rock') //0
})
paperButton.addEventListener('click', function() {
  classicAndKirbo('paper') //1
})
scissorButton.addEventListener('click', function() {
  classicAndKirbo('scissors') //2
})
hammerButton.addEventListener('click', function() {
  classicAndKirbo('hammer') //3
})
swordButton.addEventListener('click',function() {
  classicAndKirbo('sword') //4
})

var user = new Player('user')
var cpu = new Player('CPU')
var mode = 'classic'
var game;

//event handlers
function playerChoseClassic() {
  h3.innerText = "Make your choice"
  hideModeButtons()
  showClassicChoices()
}

function playerChoseKirbo() {
  mode = 'kirbo'
  console.log(mode)
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
  // console.log('choice', choice)
  // console.log('mode2', mode)
  game = new Game (user, cpu, mode, choice)
  console.log(mode)
  game.checkMode()
  judge()
}

function judge() {

  if (game.checkWin() === "Player1 Wins!") {
    console.log('win')
    game.player1.wins++
    h1.innerText = "You win!"
    playerWins.innerText = `Wins: ${game.player1.wins}`
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
  else if (game.checkWin() === "CPU Wins!") {
    console.log('win2')
    game.player2.wins++
    h1.innerText = "You LOSE!"
    cpuWins.innerText = `Wins: ${game.player2.wins}`
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
  else {
    console.log('win3')
    h1.innerText = "It's a draw! Rematch time!"
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
}

// function delayRestart() {
//   setTimeout(restartGame, 3000)
// }
//
// function restartGame() {
//   location.reload()
// }






//hide and show element functions

function kirboProperties() {
  playerIcon.innerHTML = `<img src="./assets/kirbo.png" style="height:150px;width:150px">`
  cpuIcon.innerHTML = `<img src="./assets/metaknight.png" style="height:150px;width:150px">`
  h1.innerHTML = `<img src="./assets/marx.png" style="height:250px;width:450px">`
  h3.innerText = "Who will win? KIYAHAHAHAHA"
  body.style.background = "linear-gradient(#FFB6C1 40%, #FFE4E1, #F8F8FF) fixed"
}

function mainMenuDefault() {
  h1.innerText = 'Rock🪨 Paper📃 Scissors✂️'
  h3.innerText = 'Choose your game mode'
  mode = 'classic'
  body.style.background = ''
  playerIcon.innerHTML = 'Player 1'
  cpuIcon.innerHTML = 'CPU'
}

function showClassicChoices() {
  rockButton.classList.remove('hidden')
  paperButton.classList.remove('hidden')
  scissorButton.classList.remove('hidden')
  changeModeButton.classList.remove('hidden')
}

function showKirboChoices() {
  kirboMode.classList.remove('hidden')
  changeModeButton.classList.remove('hidden')
}

function hideInputButtons() {
  kirboMode.classList.add('hidden')
  rockButton.classList.add('hidden')
  paperButton.classList.add('hidden')
  scissorButton.classList.add('hidden')
  changeModeButton.classList.add('hidden')
}

function showModeButtons() {
  classicButton.style.display = ''
  kirboButton.style.display = ''
}

function hideModeButtons() {
  classicButton.style.display = 'none'
  kirboButton.style.display = 'none'
}

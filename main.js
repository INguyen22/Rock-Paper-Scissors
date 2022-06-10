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
  h1.innerHTML = `<img src="./assets/marx.png" style="height:250px;width:400px">`
  h3.innerText = "Who will win? KIYAHAHAHAHA"
  mode = 'kirbo'
  hideModeButtons()
  showKirboChoices()
}

function changeMode() {
  h1.innerText = 'Rock🪨 Paper📃 Scissors✂️'
  h3.innerText = 'Choose your game mode'
  mode = 'classic'
  showModeButtons()
  hideInputButtons()
}

function classicAndKirbo(choice) {
  // console.log('choice', choice)
  // console.log('mode2', mode)
  game = new Game (user, cpu, mode, choice)
  game.checkMode()
  judge()
}

function judge() {
  if (game.checkWin() === "Player1 Wins!") {
    h1.innerText = "You win!"
    playerWins.innerText = `Wins: ${game.player1.wins}`
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
  if (game.checkWin() === "CPU Wins!") {
    h1.innerText = "You LOSE!"
    cpuWins.innerText = `Wins: ${game.player2.wins}`
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
  if (game.checkWin() === "Draw!") {
    h1.innerText = "It's a draw! Rematch time!"
    h3.innerText = `You chose ${game.player1Input} and CPU chose ${game.player2Input}`
    //delayRestart()
  }
}

function delayRestart() {
  setTimeout(restartGame, 3000)
}

function restartGame() {
  location.reload()
}






//hide and show element functions
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

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
  console.log('mode', mode)
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
  console.log('choice', choice)
  console.log(event.target.id)
  console.log('mode2', mode)
  game = new Game (user, cpu, mode, choice)
  game.checkMode()
    console.log('who is the winner', game.checkMode())
  judge()
}

function judge() {
  if (game.winner === "Player1 Wins!") {
    return h1.innerText = "You win!"
  }
  if (game.winner === "CPU Wins!") {
    return h1.innerText = "You LOSE!"
  }
  if (game.winner === "DRAW!") {
    return h1.innerText = "It's a draw! Rematch time!"
  }
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

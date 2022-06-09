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
rockButton.addEventListener('click', )
paperButton.addEventListener('click', )
scissorButton.addEventListener('click', )
hammerButton.addEventListener('click', )
swordButton.addEventListener('click', )
//event handlers
function playerChoseClassic() {
  h3.innerText = "Make your choice"
  hideModeButtons()
  showClassicChoices()
}

function playerChoseKirbo() {
  h1.innerHTML = `<img src="./assets/marx.png" style="height:250px;width:400px">`
  h3.innerText = "Who will win? KIYAHAHAHAHA"
  hideModeButtons()
  showKirboChoices()
}

function changeMode() {
  h1.innerText = 'Rock🪨 Paper📃 Scissors✂️'
  h3.innerText = 'Choose your game mode'
  showModeButtons()
  hideInputButtons()
}

function classicMode() {
  
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

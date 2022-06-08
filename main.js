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

//event handlers
function playerChoseClassic() {
  h3.innerText = "Make your choice"
  hideModeButtons()
  showClassicChoices()
}

function showClassicChoices() {
  rockButton.classList.remove('hidden')
  paperButton.classList.remove('hidden')
  scissorButton.classList.remove('hidden')
  changeModeButton.classList.remove('hidden')
}

function playerChoseKirbo() {
  h1.innerHTML = "./assets/marx.png"
  h3.innerText = "Who will win? KIYAHAHAHAHA"
  hideModeButtons()
  showKirboChoices()
}

function showKirboChoices() {
  kirboMode.classList.remove('hidden')
  changeModeButton.classList.remove('hidden')
}

function hideModeButtons() {
  classicButton.style.display = 'none'
  kirboButton.style.display = 'none'
}

// selection of  html element
let gridItemParent = document.getElementById('gridParent')
let gridItem = gridItemParent.children
let userChoice = document.getElementById('userChoice')
let choixX = document.getElementById('choixX')
let choixO = document.getElementById('choixO')
let pion , pionAdverse ;
let gameresult = document.getElementById('gameresult')
let h1gameresult = gameresult.querySelector('h1')
let myScore = document.getElementById('myScore')
let cpuScore = document.getElementById('cpuScore')
let endGame = document.getElementById('endGame')

// initial grade
let myScoreInitial = 0
let cpuScoreInitial = 0

// change gridItem into array 
let gridCase = Array.from(gridItem)

// empty array for selectionner position stocking 
let tableauX = []
let tableauO = []


// probability to win 
let resultatPossible = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
]


// user pawn choice management
function userChoiceX() {
        userChoice.style.display ='none'
        pion = 'X'
        pionAdverse = 'O'
}
function userChoiceO() {
        userChoice.style.display ='none'
        pion = 'O'
        pionAdverse = 'X'
}


// selecting wwhcih player win
function Win() {
        for (let i = 0; i < resultatPossible.length; i++) {
                if (tableauX.includes(resultatPossible[i][0]) && tableauX.includes(resultatPossible[i][1]) && tableauX.includes(resultatPossible[i][2])) {
                        h1gameresult.textContent = 'Win'
                        gameresult.style.display = 'flex'
                        myScoreInitial = myScoreInitial + 1
                        break
                }
        }
}

// selecting wwhcih player loosed
function Loose() {
        for (let i = 0; i < resultatPossible.length; i++) {
                if (tableauO.includes(resultatPossible[i][0]) && tableauO.includes(resultatPossible[i][1]) && tableauO.includes(resultatPossible[i][2])) {

                        h1gameresult.textContent = 'Defeat'
                        gameresult.style.display = 'flex'
                        cpuScoreInitial = cpuScoreInitial + 1
                        break
                }
        }
}


// pawn situation
function pawn() {
        for (let i = 0; i < 9; i++) {
                if (gridCase[i].textContent === '') {
                        gridCase[i].textContent = pionAdverse
                        tableauO.push(i+1)
                        break
                }
        }
}


// appel des fonctions qui afffiche X ou O
function affiche0() {
        if (gridCase[0].textContent === '') {
                gridCase[0].textContent = pion
                tableauX.push
                Win()
                pawn()
                Loose()
        }
}

function affiche1() {
        if (gridCase[1].textContent === '') {
                gridCase[1].textContent = pion
                tableauX.push(2)
                Win()
                pawn()
                Loose()
        }
}

function affiche2() {
        if (gridCase[2].textContent === '') {
                gridCase[2].textContent = pion
                tableauX.push(3)
                Win()
                pawn()
                Loose()
        }
}

function affiche3() {
        if (gridCase[3].textContent === '') {
                gridCase[3].textContent = pion
                tableauX.push(4)
                Win()
                pawn()
                Loose()
        }
}

function affiche4() {
        if (gridCase[4].textContent === '') {
                gridCase[4].textContent = pion
                tableauX.push(5)
                Win()
                pawn()
                Loose()
        }
}

function affiche5() {
        if (gridCase[5].textContent === '') {
                gridCase[5].textContent = pion
                tableauX.push(6)
                Win()
                pawn()
                Loose()
        }
}

function affiche6() {
        if (gridCase[6].textContent === '') {
                gridCase[6].textContent = pion
                tableauX.push(7)
                Win()
                pawn()
                Loose()
        }
}

function affiche7() {
        if (gridCase[7].textContent === '') {
                gridCase[7].textContent = pion
                tableauX.push(8)
                Win()
                pawn()
                Loose()
        }
}

function affiche8() {
        if (gridCase[8].textContent === '') {
                gridCase[8].textContent = pion
                tableauX.push(9)
                Win()
                pawn()
                Loose()
        }
}

// fonction pour rejouer
function reset() {
        tableauX = []
        tableauO = []
        gameresult.style.display = 'none'
        cpuScore.textContent = cpuScoreInitial
        myScore.textContent = myScoreInitial
        for (let i = 0; i < gridCase.length; i++) {
                gridCase[i].textContent = ''
        }
}

// appel des evenements qui fait choisi le pion a l'utilisateur
choixX.addEventListener('click', userChoiceX)
choixO.addEventListener('click', userChoiceO)

// appel des evenements qui affiche 'X' ou 'O' a moment du click
gridCase[0].addEventListener('click' , affiche0)
gridCase[1].addEventListener('click' , affiche1)
gridCase[2].addEventListener('click' , affiche2)
gridCase[3].addEventListener('click' , affiche3)
gridCase[4].addEventListener('click' , affiche4)
gridCase[5].addEventListener('click' , affiche5)
gridCase[6].addEventListener('click' , affiche6)
gridCase[7].addEventListener('click' , affiche7)
gridCase[8].addEventListener('click' , affiche8)
endGame.addEventListener('click', reset)

/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let d6img = document.querySelector('#d6-roll')
let doubleSix = document.querySelector('main')
let doubleD61 = document.querySelector('#double-d6-roll-1')
let doubleD62 = document.querySelector('#double-d6-roll-2')
let doubleD6mean = document.querySelector('#double-d6-rolls-mean')
let d12img = document.querySelector('#d12-roll')
let d12mean = document.querySelector('#d12-rolls-mean')
let d20img = document.querySelector('#d20-roll')
let d20mean = document.querySelector('#d20-rolls-mean')
let resetBtn = document.querySelector('#reset-button')
let d6mean = document.querySelector('#d6-rolls-mean')

// console.log(doubleSixes)

d6img.src = './images/start/d6.png'
doubleD61.src = `./images/start/d6.png`
doubleD62.src = `./images/start/d6.png`
d12img.src = `./images/start/d12.jpeg`
d20img.src = `./images/start/d20.jpg`

/*******************
 * EVENT LISTENERS *
 *******************/

// SIXES

d6img.addEventListener('click', function(){
    let roll = getRandomNumber(6)
    sixes.push(roll)
    d6img.src = `./images/d6/${roll}.png`
    d6mean.innerText = average(sixes)
    console.log('d6:' + ' ' + roll)
    // console.log('d6avg: ' + d6avg())
})

// DOUBLE SIXES

doubleD61.addEventListener('click', doubleSixRolls)
doubleD62.addEventListener('click', doubleSixRolls)

function doubleSixRolls() {
    let d61 = getRandomNumber(6)
    let d62 = getRandomNumber(6)

    doubleD61.src = `./images/d6/${d61}.png`
    doubleD62.src = `./images/d6/${d62}.png`
    doubleSixes.push(d61 + d62)
    doubleD6mean.innerText = average(doubleSixes)

    console.log(d61+d62)
}

// TWELVES

d12img.addEventListener('click', function(){
    let roll = getRandomNumber(12)
    twelves.push(roll)
    d12img.src = `./images/numbers/${roll}.png`
    d12mean.innerText = average(twelves)
    console.log('d12: ' + roll)
})

// TWENTIES

d20img.addEventListener('click', function(){
    let roll = getRandomNumber(20)
    twenties.push(roll)
    d20img.src = `./images/numbers/${roll}.png`
    d20mean.innerText = average(twenties)
    console.log('d20: ' + roll)
})


/******************
 * RESET FUNCTION *
 ******************/

resetBtn.addEventListener('click', function(){
    sixes = []
    doubleSixes = []
    twelves = []
    twenties = []

    d6img.src = './images/start/d6.png'
    doubleD61.src = './images/start/d6.png'
    doubleD62.src = './images/start/d6.png'
    d12img.src = './images/start/d12.jpeg'
    d20img.src = './images/start/d20.jpg'

    d6mean.innerText = 'N/A'
    doubleD6mean.innerText = 'N/A'
    d12mean.innerText = 'N/A'
    d20mean.innerText = 'N/A'

    console.log('reset button')
})

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

let roll6 = getRandomNumber(6)
let roll12 = getRandomNumber(12)


/****************
 * MATH SECTION *
 ****************/

// MEAN - average
let average = function(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return Math.floor(total / arr.length)
}

// MEDIAN



// MODE


// console.log(d6avg)
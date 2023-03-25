
var temp
//div
var div1 = document.getElementById('1')
var div2 = document.getElementById('2')

//diceImg
var diceImg = document.getElementById('img')

//btns
var rollBtn = document.getElementById('rollBtn')
var holdBtn = document.getElementById('holdBtn')

//player1
var current1 = document.getElementById('current-0')
var score1 = document.getElementById('score-0')

//player2
var current2 = document.getElementById('current-1')
var score2 = document.getElementById('score-1')

function swap() {
    temp = div1.className
    div1.className = div2.className
    div2.className = temp
}

function reload() {
    location.reload()
}
rollBtn.addEventListener('click', ()=>{
    var random = Math.floor(Math.random() * (7 - 1) + 1)

    if(div1.className.includes("active")){
        diceImg.src = `./pics/${random}.png`
        
        if (random == 1){
            current1.innerText = 0
            swap()
        }
        else {
            current1.innerHTML = Number(current1.innerText) + random
        }
    } else {
        diceImg.src = `./pics/${random}.png`
        
        if (random == 1){
            current2.innerText = 0
            swap()
        }
        else {
            current2.innerHTML = Number(current2.innerText) + random
        }
    }
})
    
holdBtn.addEventListener('click',()=>{
    if(div1.className.includes("active")){
        score1.innerHTML = Number(score1.innerHTML) + Number(current1.innerHTML)
        current1.innerText = 0
        
        if(score1.innerHTML >= 20){
            var winner = document.getElementById('winner1')
            winner.style.display = 'inline'
            setTimeout(reload,1000)
        }

        swap()
        
    } else {
        score2.innerHTML = Number(score2.innerHTML) + Number(current2.innerHTML)
        current2.innerText = 0

        if(score2.innerHTML >= 20){
            var winner = document.getElementById('winner2')
            winner.style.display = 'inline'
            location.reload()
            setTimeout(reload,1000)
        }

        swap()
    }
})






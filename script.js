const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const pink = document.querySelector('.pink')
const grey = document.querySelector('.grey')
const orange = document.querySelector('.orange')
const brown = document.querySelector('.brown')
const black = document.querySelector('.black')
const purple = document.querySelector('.purple')

const highlight = document.querySelector('.highlight')

const songs = document.querySelector('audio')

const hilighter = (element) => {
    element.addEventListener('mouseenter', () => {
        highlight.style.backgroundColor = window.getComputedStyle(element).backgroundColor
        songs.play()
    })
    element.addEventListener('mouseout', () => {
        highlight.style.backgroundColor = ""
        songs.pause()
    })
}

hilighter(red)
hilighter(blue)
hilighter(green)
hilighter(yellow)
hilighter(pink)
hilighter(grey)
hilighter(orange)
hilighter(brown)
hilighter(black)
hilighter(purple)




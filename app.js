const bars = document.querySelector('#menuBtn')
const nav = document.querySelector('#nav')
const closeMenuBtn = document.querySelector('#closeMenu')
const menu = document.querySelector('.menu')
const icons = document.querySelector('.socialsIcon')
window.onresize = resizeScreen

window.onload = function(){
    console.log(window.innerWidth)
    if (window.innerWidth <= 850){
        closeMenuBtn.style.display = 'none'
        bars.style.display = 'block'
        nav.classList.add('hidden')
    }else{
        bars.style.display = 'none'
        nav.classList.remove('hidden')
    }
}
function resizeScreen() {
    
    if (window.innerWidth <= 850){
        closeMenuBtn.style.display = 'none'
        bars.style.display = 'block'
        nav.classList.add('hidden')
    }else{
        bars.style.display = 'none'
        nav.classList.remove('hidden')
    }
}   

function showMenu() {
    nav.classList.remove('hidden')
    nav.classList.add('mobile-menu-show')
    closeMenuBtn.style.display = 'block'
}

function hideMenu() {
    nav.classList.add('hidden')
    nav.classList.remove('mobile-menu-show')
    closeMenuBtn.style.display = 'none'
}
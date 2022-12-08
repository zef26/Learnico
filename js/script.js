
//якорь
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
anchor.addEventListener('click', function(event){
event.preventDefault()
const  blockID = anchor.getAttribute('href')
document.querySelector('' + blockID).scrollIntoView({
    behavior:'smooth',
    block: 'center'
})
})
}
// бургер меню
let brg_menu = document.querySelector('.brg-menu')
let tops = document.querySelector('.top')
let centers = document.querySelector('.center')
let bottoms = document.querySelector('.bottom')
let block = document.querySelector('.brg-block')



brg_menu.onclick = ()=>{
    centers.classList.toggle('not-active')
    tops.classList.toggle('rotate-top')
    bottoms.classList.toggle('rotate-bottom')
    block.classList.toggle('active')
    body.classList.toggle('active')
}


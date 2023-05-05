const menu = document.querySelector(".menu-mobile")
const button = document.querySelector(".menu-button")
button.addEventListener("click", () => {
    menu.classList.toggle('active')
})

const menuLinks = document.querySelectorAll(".menu-mobile-content a");

menuLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        console.log('123')
        menuLinks.forEach(link => {
            link.classList.remove('active')
        })
        link.classList.add('active')
        menu.classList.remove('active')
    })
})

const menuMainLinks = document.querySelectorAll(".menu-items a")

menuMainLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        menuMainLinks.forEach(link => {
            link.classList.remove('active')
        })
        link.classList.add('active')
    })
} )

document.addEventListener('scroll', () => {
    
})
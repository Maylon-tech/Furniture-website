let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

// Funcao Evento  - Show and Hide Menu bar (burger)
menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
        //Quando tiver scroll no Window ira esconder Menu {somente no responsivo}
window.onscroll = () => {
    navbar.classList.remove('active')
}

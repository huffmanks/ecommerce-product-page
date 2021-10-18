const menuIcon = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.nav-menu')
const navMenuBackdrop = document.querySelector('.nav-menu-backdrop')
const closeIcon = document.querySelector('.close-icon')
const navCart = document.querySelector('.nav-cart .cart-icon')
const basketModal = document.querySelector('.basket-modal')

// Menu
menuIcon.addEventListener('click', () => {
    navMenu.style.display = 'block'
    navMenuBackdrop.style.display = 'block'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    navMenu.style.display = 'none'
    navMenuBackdrop.style.display = 'none'
    closeIcon.style.display = 'none'
})

// Cart
navCart.addEventListener('click', () => {
    if (basketModal.style.display === 'block') {
        basketModal.style.display = 'none'
    } else {
        basketModal.style.display = 'block'
    }
})

// Closing modals and menus
document.body.addEventListener('click', (e) => {
    if (e.target !== basketModal && basketModal.style.display === 'block') {
        basketModal.style.display = 'none'
    }

    if (e.target === navMenuBackdrop && navMenu.style.display === 'block') {
        navMenu.style.display = 'none'
        navMenuBackdrop.style.display = 'none'
        closeIcon.style.display = 'none'
    }
})

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 875) {
        navMenu.style.display = 'flex'
    }
    if (document.body.clientWidth <= 875) {
        navMenu.style.display = 'none'
    }
})

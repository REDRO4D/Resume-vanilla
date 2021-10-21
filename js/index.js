/**** NAVBAR ****/
window.addEventListener('load', () => {
    const navbar = document.querySelector('#navbar');
    document.querySelector('.mobile-menu').addEventListener('click', () => {
        if (navbar.classList.toString().includes('hide')) {
            navbar.classList.replace('hide', 'show');
        } else {
            navbar.classList.replace('show', 'hide');
        }
    })
})
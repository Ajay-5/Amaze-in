const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarlinks = document.getElementsByClassName('c-center')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
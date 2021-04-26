const checkbox = document.querySelector('input[name="theme"]')
let htmlElement = document.documentElement // Pega a tag pai HTML

checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
        htmlElement.classList.toggle('transition')
        htmlElement.setAttribute('data-theme', 'dark')
    } else{
        htmlElement.classList.toggle('transition')
        htmlElement.setAttribute('data-theme', 'light')
    }
})
const journy = document.querySelector('.journy')
const button = document.querySelector('.open-button')

button.addEventListener('click', ()=>{  
    journy.classList.toggle('open')
})
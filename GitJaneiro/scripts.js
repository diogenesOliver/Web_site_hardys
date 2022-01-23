let oneModal = document.querySelector('.modal')
let buttonSaibaMais = document.getElementById('saiba-mais')
let buttonEsconder = document.getElementById('esconder')
let oneContainer = document.querySelector('.container')


buttonSaibaMais.addEventListener('click', () => {
    oneModal.style.display = 'block'
    buttonEsconder.style.display = 'block'
})

buttonEsconder.addEventListener('click', () => {
    oneModal.style.display = 'none'
    buttonEsconder.style.display = 'none'
})

addEventListener('scroll', function(e){
    if(pageYOffset > 100){
        oneContainer.style.background = 'rgba(0, 0, 0, .6)'
    }else{
        oneContainer.style.background = 'rgba(0, 0, 0, .4)'
    }
})
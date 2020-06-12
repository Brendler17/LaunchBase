const modalOverlay = document.querySelector('.modal-overlay')
const cursos = document.querySelectorAll('.curso')
const modal = document.querySelector('.modal')

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const pagId = curso.getAttribute('id')
        modalOverlay.classList.add('active') 
        modalOverlay.querySelector('iframe').src =`https://rocketseat.com.br/${pagId}` 
    })
}

document.querySelector('.max-modal').addEventListener("click", function(){
    modal.classList.add('maximize')
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector('iframe').src = ""
})
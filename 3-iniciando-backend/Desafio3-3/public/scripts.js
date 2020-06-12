const cursos = document.querySelectorAll('.curso')

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const pagId = curso.getAttribute('id')
        window.location.href = `/${pagId}`
    })
}
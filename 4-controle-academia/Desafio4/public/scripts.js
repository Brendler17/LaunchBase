// Mostrar-Esconder //
const ing = document.querySelector('.show-ing')
const met = document.querySelector('.show-met')
const add = document.querySelector('.show-add')

ing.addEventListener("click", function(){
    const card = document.querySelector('.card_unic-ing')

    show_hide(card, '.show-ing')
})

met.addEventListener("click", function(){
    const card = document.querySelector('.card_unic-method')

    show_hide(card, '.show-met')
})

add.addEventListener("click", function(){
    const card = document.querySelector('.card_unic-additional')

    show_hide(card, '.show-add')
})

function show_hide(card, local){
    if(card.querySelector('ul').classList == 'active'){
        card.querySelector('ul').classList.remove("active")
        card.querySelector('ul').classList.add("desactive")
        card.querySelector(local).textContent = "Mostrar"
    }
    else{
        card.querySelector('ul').classList.remove("desactive")
        card.querySelector('ul').classList.add("active") 
        card.querySelector(local).textContent = "Esconder"
    }
}
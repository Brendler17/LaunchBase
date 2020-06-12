const card1 = document.querySelectorAll('.f1')
const card2 = document.querySelectorAll('.f2')
const ing = document.querySelector('.show-ing')
const met = document.querySelector('.show-met')
const add = document.querySelector('.show-add')

for(let i=0 ; i<card1.length ; i++){
    card1[i].addEventListener("click", function(){
        
        window.location.href = `/recipes/${i}`
    })
}

for(let i=0 ; i<card2.length ; i++){
    card2[i].addEventListener("click", function(){
        
        window.location.href = `/recipes/${i}`
    })
}

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
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = modalOverlay.querySelector('.modal-content')


for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")

        const name = card.querySelector('.name').innerText
        const info = card.querySelector('.info').innerText
        const img_url = card.getAttribute("itemid")
                
        modalOverlay.querySelector("img").src = `/assets/${img_url}.png`
        modalContent.insertAdjacentHTML('afterbegin', `<p class="modal-name">${name}</p>`)
        modalContent.insertAdjacentHTML('beforeend', `<p class="modal-info">${info}</p>`)
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalContent.innerHTML=''
})
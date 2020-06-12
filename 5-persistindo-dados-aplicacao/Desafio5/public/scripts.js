// Mostrar-Esconder //
const ing = document.querySelector('.show-ing')
const met = document.querySelector('.show-met')
const add = document.querySelector('.show-add')

if (ing || met || add) {

    ing.addEventListener("click", function () {
        const card = document.querySelector('.card_unic-ing')

        show_hide(card, '.show-ing')
    })

    met.addEventListener("click", function () {
        const card = document.querySelector('.card_unic-method')

        show_hide(card, '.show-met')
    })

    add.addEventListener("click", function () {
        const card = document.querySelector('.card_unic-additional')

        show_hide(card, '.show-add')
    })
}

function show_hide(card, local) {
    if (card.querySelector('ul').classList == 'active') {
        card.querySelector('ul').classList.remove("active")
        card.querySelector('ul').classList.add("desactive")
        card.querySelector(local).textContent = "Mostrar"
    }
    else {
        card.querySelector('ul').classList.remove("desactive")
        card.querySelector('ul').classList.add("active")
        card.querySelector(local).textContent = "Esconder"
    }
}

function paginate(selectedPage, totalPages) {

    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        const firstLast = currentPage == 1 || currentPage == totalPages
        const pagesBefore = currentPage >= selectedPage - 2
        const pagesAfter = currentPage <= selectedPage + 2

        if (firstLast || pagesBefore && pagesAfter) {

            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(currentPage - 1)
            }

            pages.push(currentPage)
            oldPage = currentPage
        }
    }
    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`
        }
        else {
            if (filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            }
            else{
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }
    
    pagination.innerHTML = elements
}

const pagination = document.querySelector('.pagination')

if (pagination) {
    createPagination(pagination)
}
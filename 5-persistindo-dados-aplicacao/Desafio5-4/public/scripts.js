const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

function createPaginate(selectedPage, totalPages) {

    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstLast = currentPage == 1 || currentPage == 2 || currentPage == totalPages || currentPage == totalPages - 1
        const pagesBefore = currentPage - 1 <= selectedPage
        const pagesAfter = currentPage + 1 >= selectedPage

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

function paginate(pagination) {
   
    const page = +pagination.dataset.page,
    total = +pagination.dataset.total,
    filter = pagination.dataset.filter
    pages = createPaginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`
        }
        else {
            if (filter) {
                elements += `<a href=?page=${page}&filter=${filter}>${page}</a>`
            }
            else {
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements

}

const pagination = document.querySelector('.pagination')

if (pagination){
    paginate(pagination)
}
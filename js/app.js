document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form')
    form.addEventListener('submit', handleForm)

    const deleteAll = document.querySelector('#delete-button')
    deleteAll.addEventListener('click', handleDeleteAll)
})

const handleForm = function(event) {
    event.preventDefault()
    const filmList = document.querySelector('#film-list')

    let filmListItem
    filmListItem = addHTMLElement(filmListItem, 'li', filmList)
    filmListItem.setAttribute('class', 'list-item')
    
    let title
    title = addHTMLElement(title, 'h3', filmListItem)
    title.textContent = event.target.title.value
    

    let starring
    starring = addHTMLElement(starring, 'span', filmListItem)
    starring.textContent = (`Starring: ${event.target.starring.value}`)

    let genre
    genre = addHTMLElement(genre, 'span', filmListItem)
    genre.textContent = (`Genre: ${event.target.genre.value}`)

    let year
    year = addHTMLElement(year, 'span', filmListItem)
    year.textContent = (`Released ${event.target.year.value}`)

    this.reset()
}

const handleDeleteAll = function() {
    const filmList = document.querySelector('#film-list')
    filmList.innerHTML = ''

}

const addHTMLElement = function(element, elementType, parentElement) {
    element = document.createElement(elementType)
    parentElement.appendChild(element)
    return element
}
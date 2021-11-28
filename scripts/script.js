'use strict'
const search = document.getElementById('search');

const searchIcon = document.getElementById("search-icon");
document.addEventListener('click', (event) => {
    if (event.target === search) {
        return
    } else if (event.target === searchIcon) {
        searchIcon.style.display = 'none';
        search.style.display = 'block';
        search.focus()

    } else {
        search.style.display = 'none';
        searchIcon.style.display = 'block';
    }

})

//search field//
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // empty search error handling//
    const errorMassage = document.getElementById('error-massage');
    errorMassage.innerText = '';
    if (searchText === '') {

        errorMassage.innerText = 'empty search not allowed';

    }
    //load api data//
    const url = ` https://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data))


}
//display search result//
const displayBook = books => {
    const bookList = books.docs
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    bookList.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="book-title">Book-name:${book.title}</h5>
                    <p class="card-text">Author-name:${book.author_name}</p>
                    <p>publisher:${book.publisher}</p>
                    <small class="text-muted">first publishof year-${book.first_publish_year} </small>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

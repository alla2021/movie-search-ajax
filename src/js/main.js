function renderList(data) {
    const list = document.querySelector('#list');
    for (let item of data) {
      list.insertAdjacentHTML('afterbegin', `<li>Name: ${item.title}</li>`)
    }
  }

function showError(error) {
    console.log(`Error: ${error.name}`)
}

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'df08f7e3024c5690e93e0d9f5ffbcf4e';

function makeMovieRequest(query) {
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(function (response) {
        return response.json()
      }) 
      .then(function (data) {
      renderList(data.results)
    }) 
}

document.querySelector('#search-btn').addEventListener('click', function () {
  let inputMovie = document.querySelector('#input-movie').value;
  console.log(inputMovie)
  makeMovieRequest(inputMovie)
})

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

//localStorage 

let id = [];
let favFilmsList = {
  storage: null,
  setId(id) {
    this.storage.setItem("id", JSON.stringify(id));
  },
  getId() {
    return JSON.parse(this.storage.getItem("id"));
  }
};
favFilmsList.storage = window.localStorage;

///
let listFilmPlaceholder = document.getElementById("listFilmPlaceholder");
let pagination_placeholder = document.getElementById("pagination_placeholder");

//onmouseenter = addToFavourites;

function addToFavourites() {
let btnAddToFav = document.createElement("button");
btnAddToFav.style.display = "block";
btnAddToFav.innerText = "Add to favorite";
li.appendChild(btnAddToFav);
li.onmouseleave = () => {
  btnAddToFav.style.display = "none";
};
btnAddToFav.onclick = () => {
  listFavFilmPlaceholder.innerHTML = "";
  id.push(`${listFilm[el].ID}`);
  console.log(id);
  favFilmsList.setId(id);
  btnAddToFav.style.display = "none";
  li.onmouseleave = () => {
    btnRemFromFav.style.display = "none";
  };
  RemoveFromFav();
};
}


// function RemoveFromFav() {
//   let btnRemoveFromFav = document.createElement("button");
//   btnRemoveFromFav.style.display = "block";
//   btnRemoveFromFav.innerText = "Remove from favorite";
//   li.appendChild(btnRemoveFromFav);
//   li.onmouseleave = () => {
//   btnRemoveFromFav.style.display = "none";
//   };
// }
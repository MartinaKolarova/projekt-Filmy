const movieList = document.querySelector('#movies');
const movies = [];

const Movie = ({ posterUrl, title, url, year, genres }) => {
  return `
  <div class="movie">
        <img class="movie__img" src="${posterUrl}" alt="${title}">
        <h2 class="movie__title"><a href="${url}">${title}</a></h2>
        <p class="movie__year">${year}</p>
        <p class="movie__genre">${genres.join(', ')}</p>
      </div>
      `;
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      movies.push(movie);
    });
    showMovies();
  });

const showMovies = () => {
  movieList.innerHTML = '';
  movies.sort((a, b) => a.title.localeCompare(b.title));
  movies.forEach((movie) => {
    movieList.innerHTML += Movie(movie);
  });
};

const sortMoviesUp = () => {
  movies.sort((a, b) => a.year - b.year);
  showMovies();
};

const sortMoviesDown = () => {
  movies.sort((a, b) => b.year - a.year);
  showMovies();
};

const sortUpButton = document.querySelector('.button__sort--up');
sortUpButton.addEventListener('click', sortMoviesUp);

const sortDownButton = document.querySelector('.button__sort--down');
sortDownButton.addEventListener('click', sortMoviesDown);

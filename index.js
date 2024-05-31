/* tady bude tvůj kód */
const movieList = document.querySelector('#movies');

const Movie = ({ posterUrl, title, url, year, genres }) => {
  return `
  <div class="movie">
        <img class="movie__img" src="${posterUrl}"alt=${title}>
        <h2 class="movie__title"><a href="${url}">${title}</a></h2>
        <p class="movie__year">${year}</p>
        <p class="movie__genre">${genres.join(', ')}</p>
      </div>
      `;
};

const showMovies = (movies) => {
  movies.sort((a, b) => a.title.localeCompare(b.title));
  movies.forEach((movie) => {
    movieList.innerHTML += Movie(movie);
  });
};

const sortMoviesUp = () => {
  movies.sort((a, b) => a.year - b.year);
};

const sortMoviesDown = () => {
  movies.sort((a, b) => b.year - a.year);
};

const sortUpButton = document.querySelector('.button__sort--up');
sortUpButton.addEventListener('click', sortMoviesUp);

const sortDownButton = document.querySelector('.button__sort--down');
sortUpButton.addEventListener('click', sortMoviesDown);

const fetchMovie = async () => {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies',
  );
  const data = await response.json();
  return data;
};

const main = async () => {
  const movies = await fetchMovie();
  showMovies(movies);
};
main();

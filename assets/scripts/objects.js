const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieElement = document.createElement('li');
        const {info, ...otherProps} = movie; // Object destructuring. You can pull out one key that you want like info and put other data in spread
        console.log(otherProps);
        // const {title: movieTitle} = info; // You can further destructure the info object and reassign a new key. Title becomes movieTitle.
        let {getFormattedTitle} = movie;
       // getFormattedTitle = getFormattedTitle.bind(movie); // The this keyword refers to the movie here. This refers to what called the function

        let text = getFormattedTitle.apply(movie) + ' - ';
        for (const key in movie.info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieElement.textContent = text;
        movieList.append(movieElement);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        
    extraName.trim() === '' ||
    extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() { //Shorter version of a property when using a function
            return this.info.title.toUpperCase(); 
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
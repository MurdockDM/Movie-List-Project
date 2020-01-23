const movieFactory = (movieObject) => {
    return `
        <section class="movie">
            <div>Title: ${movieObject.title}</div>
            <div>Year Released: ${movieObject.yearReleased}</div>
        </section>
        `;
};

const renderMovies = (movies) => {
    const movieList = document.getElementById("movie-container");
    movies.forEach(movie => {
        const movieAsHTML = movieFactory(movie);
        movieList.innerHTML += movieAsHTML;
    })  
};
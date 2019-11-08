const mock = [
    {
        id: 555
    }
]

class MoviesService {

    async getMovies() {
        const createMovieId = await Promise.resolve(mock);
        return createMovieId || [];
    }

    async getMovie() {
        const retreivedMovieId = await Promise.resolve(mock[0].id);
        return retreivedMovieId || {};
    }

    async postMovies() {
        const createdMovieId = await Promise.resolve(mock[0].id);
        return createdMovieId;
    }

    async putMovies() {
        const updatedMovieId = await Promise.resolve(mock[0].id);
        return updatedMovieId;
    }

    async deleteMovie() {
        const deletedMovie = await Promise.resolve(mock[0].id);
        return deletedMovie;
    }
}

module.exports = MoviesService;
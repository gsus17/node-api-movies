const express = require('express');
const MoviesService = require('../services/movies')

function moviesApiRoutes(app) {
    const router = express.Router();

    app.use('/api/movies', router);

    const moviesService = new MoviesService()

    router.get('/', async (req, res, next) => {
        try {

            const movie = await moviesService.getMovies();
            res.status(201)
                .json({
                    data: movie,
                    message: 'movie retrieved'
                })
        } catch (error) {
            next(error);
        }
    })

    router.get('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;
        try {

            const movie = await moviesService.getMovie({ movieId });
            res.status(201)
                .json({
                    data: movie,
                    message: 'movie retrieved'
                })
        } catch (error) {
            next(error);
        }
    })

    router.post('/', async (req, res, next) => {
        const { body: movie } = req;
        try {

            const movie = await moviesService.getMovie({ movie });
            res.status(201)
                .json({
                    data: movie,
                    message: 'movie created'
                })
        } catch (error) {
            next(error);
        }
    })

    router.put('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;
        try {

            const movie = await moviesService.getMovie({ movieId });
            res.status(200)
                .json({
                    data: movie,
                    message: 'movie updated'
                })
        } catch (error) {
            next(error);
        }
    })

    router.delete('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;
        try {

            const movie = await moviesService.deleteMovie({ movieId });
            res.status(200)
                .json({
                    data: movie,
                    message: 'movie deleted'
                })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApiRoutes;
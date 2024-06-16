const Movie = require('../models/movie');
const Category = require('../models/category');
const {addMovie} = require('./categoryController')


const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).json({success: true, data: movies})
    } catch (error) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
}

const createMovie = async (req, res) => {
    try {
        const { title, category } = req.body;
        const existingCategory = await Category.findOne({ name: category });
        if (!existingCategory) {
            return res.status(400).json({success: false, data: null, error: `Category '${category}' not found` });
        }
        const newMovie = new Movie({title, category});
        const movie = await newMovie.save();

        await addMovie(category, movie._id)

        res.status(201).json({success: true, data: movie});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

const updateMovieById = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({success: true, data: movie});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

const getMoviesByCategory = async (req, res) => {
    try {
        const movies = await Movie.find({ category: req.params.categoryTitle });
        res.status(200).json({success:true, data: movies});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

const findMovieByTitle = async (req, res) => {
    try {
        const movie = await Movie.findOne({ title: req.params.title });
        res.status(200).json({success: true, data: movie});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

module.exports = { createMovie, updateMovieById, getMoviesByCategory, findMovieByTitle, getAllMovies }

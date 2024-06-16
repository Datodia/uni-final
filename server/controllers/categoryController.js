const Category = require('../models/category');

const createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const category = await newCategory.save();
        res.status(201).json({success: true, data: category});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

const addMovie = async (name, movieId) => {
    try {
        const category = await Category.findOne({name: name})
        if(!category) throw new Error('Category not Found')

        category.movies.push(movieId)
        await category.save()
    } catch (error) {
        throw new Error(error)
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('movies')
        if (!category) {
            return res.status(404).json({ success: false, data: null, error: "Category not found" });
        }
        res.status(200).json({ success: true, data: category });
        
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({success: true, data: categories});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message});
    }
};

module.exports = {createCategory, getAllCategories, addMovie, getCategoryById}
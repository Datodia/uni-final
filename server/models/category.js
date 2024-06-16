const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }]
});

module.exports = mongoose.model('Category', CategorySchema);

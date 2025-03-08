const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Recipe title is required'],
    trim: true
  },
  ingredients: {
    type: [String],
    required: [true, 'At least one ingredient is required'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'Recipe must have at least one ingredient'
    }
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required'],
    trim: true
  },
  prepTime: {
    type: Number,
    required: [true, 'Preparation time is required']
  },
  cookTime: {
    type: Number,
    required: [true, 'Cooking time is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Beverage'],
    default: 'Dinner'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
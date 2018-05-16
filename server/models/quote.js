const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

module.exports = ( () => {
    var QuoteSchema = new mongoose.Schema({
        content: {type: String, required: [true, "Quote is required"], minlength: [3, 'Quote must be greater than 3 characters'], uniqueCaseInsensitive: true, unique: true},
        vote: {type: Number, default: 0}
    }, {timestamps: true});
    QuoteSchema.plugin(uniqueValidator, { message: '{PATH} is already exist' });
    mongoose.model('Quote', QuoteSchema);
})();
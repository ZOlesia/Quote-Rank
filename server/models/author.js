const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
module.exports = ( () => {

    var AuthorSchema  = new mongoose.Schema({
        name: {type:String, required:[true,'Name is required'],  minlength: [3, 'Name must be greater than 3 characters'], uniqueCaseInsensitive: true, unique: true},
        quotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quote'}]
    }, {timestamps: true});
    AuthorSchema.plugin(uniqueValidator, { message: '{PATH} is already exist' });
    mongoose.model('Author', AuthorSchema);
})();
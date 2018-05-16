const mongoose = require('mongoose'),
        Author = mongoose.model('Author'),
        Quote = mongoose.model('Quote');

module.exports = function(){
    return{
        readAll: (req, res) => {
            Author.find({}).sort({name: 1}). exec( (err, authors) => {
                err ? res.json ({message: 'Eror'}) : res.json({message:'Success', authors});
            })
        },

        createAuthor: (req, res) => {
            let newAuthor = new Author({name: req.body.name});
            newAuthor.save((err) => {
                err ? res.json({message: 'Error', err}) : res.redirect('/authors');
            })
        },

        readOne: (req, res) => {
            Author.findOne({_id: req.params.id})
                .populate('quotes')
                .exec((err, author) => {
                    err ? res.json({message: 'Error'}) : res.json({message:'Success', author});
            })
        },

        updateAuthor: (req, res) => {
            let updateAuthor = {
                'name': req.body.name
            }
            Author.updateOne({_id: req.params.id}, updateAuthor, { runValidators: true, context: 'query' }, (err, author) => {
                err ? res.json({message: 'Error', err}) : res.json({message:'Success', author});
            })
        },  // make sure to add { runValidators: true, context: 'query' } to update to make unique validator work

        deleteAuthor: (req, res) => {
            Author.deleteOne({_id: req.params.id}, (err, author) => {
                err ? res.json({message: 'Error'}) : res.json({message:'Success', author});
            })
        },

        createQuote: (req, res) => {
            let newQuote = new Quote({
                content: req.body.content 
            });
            Author.findOne({_id: req.params.id}, (err, author) => {

                newQuote.save({ runValidators: true }, function(err){
                    if(err){
                        res.json({message: 'Error', err})
                    }
                    else{
                        author.quotes.push(newQuote);
                        author.save(author);
                        res.json({message:'Success'});
                    }
                })
            })

            // Author.findOne({_id: req.params.id}, { runValidators: true }, (err, author) => {
            //     author.quotes.push(newQuote);
            //     author.save(author);
            //     newQuote.save({ runValidators: true },(err) => {
            //         err ? res.json({message: 'Error', err}) : res.json({message:'Success'});
            //     })
            // })

        },

        updateVote: (req, res) => {
            // console.log(req.body._id);    //not for the inputs only
            Quote.findOne({_id: req.body._id}, function(err, quote){
                quote.vote = quote.vote + req.body.voteVal;
                quote.save(function(err2){
                    if(err2){
                        res.json({message: 'Error', err2})
                    } else{
                        res.json({message:'Success', quote});
                    }
                })
            })
            // Author.findOne({_id: req.params.id}, function(err1, author) {   // this part for the embedding schemas
            //     if(err1){
            //         res.json({message: 'Error'})
            //     }
            //     else{
            //         // let quote = author.quotes.id(req.body.id);
            //         // quote.vote = quote.vote + req.body.voteVal;

            //         author.save((err2, data) => {
            //             err? res.json({message: 'Error', err2}) : res.json({message:'Success', data});
            //         })
            //     }
            // })
        },

        deleteQuote: (req, res) =>{
            Quote.deleteOne({_id: req.params.id}, (err, quote) => {
                err ? res.json({message: 'Error'}, err) : res.json({message:'Success', quote});
            })
        }
    }
}
const controller = require('../controllers/authors.js')(),
            path = require('path');

module.exports = function(app) {
    app.get('/authors', (req, res) => {
        controller.readAll(req, res);
    })

    app.post('/authors', (req, res) => {
        controller.createAuthor(req, res);
    })

    app.put('/authors/:id', (req, res) => {
        controller.updateAuthor(req, res);
    })

    app.delete('/authors/:id', (req, res) => {
        controller.deleteAuthor(req, res);
    })
    
    app.get('/authors/:id', (req, res) => {
        controller.readOne(req, res);
    })

    app.post('/authors/:id/quotes', (req, res) => {
        controller.createQuote(req, res);
    })

    app.put('/authors/quotes/:id', (req, res) => {   // post route will also work
        controller.updateVote(req, res);
    })

    app.delete('/authors/quotes/:id', (req, res) => {
        controller.deleteQuote(req, res);
    })

    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
      });
}
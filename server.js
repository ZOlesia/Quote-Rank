// require('./server/models/quote');
require('./server/config/mongoose');
const   express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require('body-parser');
        
        
        app.use(bodyParser.json());
        
app.use(express.static(path.join( __dirname , './angular/dist/angular') ));  //make sure put it above the app requirement
require('./server/config/routes.js')(app)
app.listen(5000, function() { console.log("listening on port 5000");});



const Soccer = require('../controllers/soccer.controller');
 
module.exports = app => {
    app.post('/player', Soccer.createOne);
    app.get('/player', Soccer.findAll);
    app.get('/player/:id', Soccer.findOne);
    app.put('/player/:id', Soccer.UpdateOne);
    app.delete('/player/:id', Soccer.deleteOneAuthor);
}
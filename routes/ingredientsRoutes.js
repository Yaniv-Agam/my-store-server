const ingredients = require('./salad.json')

module.exports = (app) => {
    app.get('/api/ingredients', async (req, res) => {
        res.send(ingredients);
    });
}
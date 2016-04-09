var Food = require('./models/food');

function getFoodAll(res) {
    Food.find(function (err, foodAll) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(foodAll); // return all food in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all food
    app.get('/api/foodAll', function (req, res) {
        // use mongoose to get all food in the database
        getFoodAll(res);
    });

    // create food and send back all food after creation
    app.post('/api/foodAll', function (req, res) {
        // create a food, information comes from AJAX request from Angular
        Food.create({
            foodName: req.body.foodName,
            price: req.body.price,
            done: false
        }, function (err, food) {
            if (err)
                res.send(err);

            // get and return all the food after you create another
            getFoodAll(res);
        });

    });

    // delete a food
    app.delete('/api/foodAll/:food_id', function (req, res) {
        Food.update(
            {_id: req.params.food_id},
            {$set: {wasDeleted: true} },
            function (err, food) {
                if (err)
                    res.send(err);

                getFoodAll(res);
            });
    });

    // get total
    app.get('/api/total', function (req, res) {
        getFoodAll(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
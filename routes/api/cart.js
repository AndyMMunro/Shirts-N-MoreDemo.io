var db = require("../../models");

module.exports = function(app) {
  app.get("/api/cart", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Cart.findAll({
      include: [db.Post]
    }).then(function(dbCart) {
      res.json(dbCart);
    });
  });

  app.get("/api/cart/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Cart.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbCart) {
      res.json(dbCart);
    });
  });

  app.post("/api/cart", function(req, res) {
    db.Cart.create(req.body).then(function(dbCart) {
      res.json(dbCart);
    });
  });

  app.delete("/api/cart/:id", function(req, res) {
    db.Cart.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCart) {
      res.json(dbCart);
    });
  });

};
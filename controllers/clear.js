// variable to import models
const db = require("../models");

module.exports = {
  // whatever headline is queried will be removed
  clearDB: function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};

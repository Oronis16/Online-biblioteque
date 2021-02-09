var express = require("express");
const { getMaxListeners } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const dummyUser = {
  email: "a@gmail.com",
  password: "xxxxx",
  id: 1,
};

router.post("/login", function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (email === dummyUser.email && password === dummyUser.password) {
    req.session.user = { id: dummyUser.id };
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;

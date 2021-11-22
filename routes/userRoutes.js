const { Router } = require("express");
const userController = require("../controllers/usersController");

// req controller

const router = Router();

router.get("/users", userController.all);
// router.get("/users/:id", (req, res) => {
//   res.send("skurt was here");
// });
// router.post("/users", (req, res) => {
//   res.send("skurt was here");
// });
// router.delete("/users/:id", (req, res) => {
//   res.send("skurt was here");
// });

module.exports = router;
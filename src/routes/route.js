const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const Book = require("../controllers/Assbook.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)
// router.post("/createBook", BookController.createBook  )
//router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", Book.QUSONE)


router.get("/bookList", Book.QUSTWO)
router.post("/getBooksInYear",Book.QUSTHREE)
router.get("/getParticularBooks",Book.QUSFOUR)
router.get("/getXINRBooks",Book.QUSFIVE)
router.get("/getRandomBooks",Book.QUSSIX)


module.exports = router;   
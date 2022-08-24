const express = require('express');
const router = express.Router();

const authorController= require("../controllers/newAuthorController")
const bookController= require("../controllers/newBookController")
const publisherController= require("../controllers/newPublisher")

 
router.post("/newAuthor", authorController.newAuthor)
router.post("/newPublisher", publisherController.new)
router.post("/newBook", bookController.newBook)
router.post("/newBooks", bookController.newBooks)
router.get("/newBooks", bookController.abc)
router.put("/updatepub", bookController.updatepub)
router.put("/updateprice", bookController.updateprice)



// router.get("/getBooksData", bookController.getBooksData)
// router.get("/getAuthorsData", authorController.getAuthorsData)
 router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router; 



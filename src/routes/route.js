const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const loginController = require('../controllers/loginController')
const userDetailsController = require("../controllers/userDetails")
const updateDetails = require('../controllers/updateDetails')
const deleteDetails = require('../controllers/deleteUser')

// router.post("/users", userController.createUser  )
// router.post("/login", userController.loginUser)
//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.put("/users/:userId", userController.updateUser)

const midWare = require('../middleware/auth')

router.post('/registerUser', userController.createUser)
router.post('/userLogin', loginController.loginUser)
router.get('/users/:userId', midWare.midWare1, userDetailsController.userDetails)
router.put('/updateDetails/:userId', midWare.midWare1, updateDetails.updateDetails)
router.delete('/deleteDetails/:userId',  midWare.midWare1, deleteDetails.deleteDetails)





module.exports = router;
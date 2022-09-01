const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }


    const User = async function (req, res) {
      try {
        let data = req.body
        let savedData = await userModel.create(data)
        res.status(201).send({ msg: savedData });
      
      } catch (error) {
        return res.status(500).send({msg:error.message})
      }
        
      }
      //login
      const loginUser = async function (req, res) {
        try {
          let userName = req.body.emailId;
          let password = req.body.password;
          let user = await userModel.findOne({ emailId: userName, password: password });
          if (!user)
            return res.status(404).send({
              status: false,
              msg: "username or the password is not corerct",
            });
          let token = jwt.sign(
            {
              userId: user._id.toString(),
              batch: "plutonium",
              organisation: "FUnctionUp",
            },
            "Monika is my Girlfriend"
          );
        
          res.status(200).send({ status: true, data: token });
        } catch (error) {
          res.status(500).send({msg:error.message})
          
        }
      }
       
      //GETUSER
      const getUserData = async function (req, res) {
        try {
          let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
          return res.status(404).send({ status: false, msg: "No such user exists" });
        res.status(200).send({ status: true, data: userDetails });
        } catch (error) {
          res.status(500).send({msg:error.message})
          
        }
        
      };
      //UPDATE
      const updateUser = async (req, res) => {
        try {
          let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
          return res.status(404).send("No such user exists");
        }
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
        res.status(200).send({ status: updatedUser, data: updatedUser });
        } catch (error) {
          res.status(500).send({msg:error.message})
          
        }
      };
      
      
      module.exports.User = User
      module.exports.loginUser = loginUser
      module.exports.getUserData = getUserData
      module.exports.updateUser = updateUser
      
      


















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
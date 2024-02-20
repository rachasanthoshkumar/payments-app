const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SanthoshRacha:BMW3series@cluster0.beyzwdr.mongodb.net/paytmApp')

const userSchema =new mongoose.Schema({
    username:String,
    firstName: String,
    lastName: String,
    password:String,
})

const User = new mongoose.model('User',userSchema);

module.exports={
    User
}
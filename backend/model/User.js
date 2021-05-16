const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

//Hash_password
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
})
//Verify_password

UserSchema.methods.isPasswordMatch = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword,this.password)
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
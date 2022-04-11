const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please Provide An Email Address."],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Provide A Password"],
            minlength: [6, "Password should be atleast 6 characters long"],  
        },
        // passwordConfi: {
        //   type: String,
        // },
        username: { 
            type: String, 
            required: true, 
            unique: true,
            minlength: 3 
        },
        image:{
            type: String,
            // required: true,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        // address:{
        //   type: String,
        // },
        // phone:{
        //   type:Number,
        // }
    },
    {
     timestamps :true,
    }
);
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });


const User = mongoose.model("User", userSchema);

module.exports = User;
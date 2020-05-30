const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {type: String},
  email: { type: String, required: true, index: true, unique: true },
  gender: { type: Boolean },
  password: { type: String, required: true },
});
//before saving the schema
UserSchema.pre("save", async function (next) {
  //check new acc or pass is modified
  if (!this.isModified('password')) {
    return next();
  }
  //Encrypt pass
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (e) {
    return next(e);
  }
});

//pass match
UserSchema.methods.isPasswordMatch = function(password , hashed ,callback){

  bcrypt.compare(password,hashed , (err,success) =>{
    if(err){
      return callback(err);
    }
    callback(null, success);
  });
};
UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

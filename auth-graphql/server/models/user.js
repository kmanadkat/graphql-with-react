const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true
  }
})

UserSchema.pre('save', async function (next) {
  try {
    // Only hash the password if it has been modified or is new
    if (!this.isModified('password')) {
      return next()
    }

    // Generate a salt & hash the password
    const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS)
    const hashedPassword = await bcrypt.hash(this.password, salt)

    // Replace the plaintext password with the hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error)
  }
})

UserSchema.methods.comparePassword = async function (userPassword, callback) {
  bcrypt.compare(userPassword, this.password, (err, isMatch) => {
    callback(err, isMatch)
  });
};

mongoose.model('user', UserSchema);

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter proper Email")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        required: true

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age cannot be Negative')
            }
        }
    }

})

userSchema.statics.findByCredentials = async(email, password) => {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Unable to Login')
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error("Unable to Login")
        }
        return user
    }
    // For Password Hashing
userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User = mongoose.model('User', userSchema)
module.exports = User
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        require: true,
        lowercase: true,
    },
    isoperator: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();

})


const User = mongoose.model('User', UserSchema);
module.exports = User;
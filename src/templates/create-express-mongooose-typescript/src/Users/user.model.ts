import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            trim: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            min: 3,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            trim: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true,
            min: 6,
            max: 100,
        },
        salt: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        about: {
            type: String,
            trim: true,
        },
        photo: {
            data: Buffer,
            contentType: String,
        },
        // Add anything else u want
    }
)

userSchema.methods = {
    encryptPassword: function (password: string) {
        if (!password) return ''
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');

        } catch (err) {
            return ''
        }
    },

    authenticate: function (password: string) {
        return this.hashed_password === this.encryptPassword(password)
    },

    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

userSchema.virtual('password')
    .set(function (this: mongoose.AnyObject, password: string) {
        this._password = password
        this.salt = this.makeSalt()
        this.hashed_password = this.encryptPassword(password)
    })

export default mongoose.model('User', userSchema)
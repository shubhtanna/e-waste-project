import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ShopKeeperSchema = new mongoose.Schema({
    shop_name: {
        type: String,
        required: true,
    },
    shop_owner_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`,
        },
    },
});

// Use a pre-save hook to hash the password before saving to the database
ShopKeeperSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password') || this.isNew) {
            const hashedPassword = await bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALT));
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

const ShopKeeperModel = mongoose.model('ShopKeeper', ShopKeeperSchema);
export default ShopKeeperModel;

import mongoose from 'mongoose';
const IndustrySchema = new mongoose.Schema({
   industry_name:{
    type:String,
    required:true,
   },
   industry_owner_name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    lowercase:true,
   },
   password:{
    type:String,
    required:true,
    validate: {
        validator: function (value) {
            // Improved password validation
            return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(value);
        },
        message: props => `${props.value} is not a valid password!`,
    },
   },
});

IndustrySchema.pre('save', async function (next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,parseInt(process.env.BCRYPT_SALT));
        this.password = hashedPassword;
        next();
    } catch(error){
        next(error);
    }
});

const IndustryModel = mongoose.model('Industry',IndustrySchema);
export default IndustryModel;
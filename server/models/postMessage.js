import mongoose from 'mongoose';


//mongoose allows to give uniformity with a schema
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    category: String,
    tags:[String],
    selectedFile: String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },

});

//create a model of the schema
const PostMessage = mongoose.model('PostMessage',postSchema);

//exposrting mongoose model from postMessage file and
//later facilitates to run commands of CRUD 
export default PostMessage;
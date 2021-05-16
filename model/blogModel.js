var mongoose=require('mongoose')
var Schema=new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    thumbImage:{
        type:String
    },
    mainHeaderImage:{
        type:String
        
    },
    authorImage:{
        type:String 
    },
    authorName:{
        type:String
    },
    authorDesc:{
        type:String
    },
    socialAcc:{
        type:Object
    },
    content:{
        type:String,
        required:true
    },blogId:{
        type:String
    },day:{
        type:String
    },month:{type:String}
    ,shortContent:{
        type:String
    },userId:{
        type:String
    }
})
const Post= mongoose.model("blogs", Schema);
module.exports =Post;
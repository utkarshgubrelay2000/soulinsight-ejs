var express = require('express');
const app=express()
const path=require('path')
const cors = require("cors")
const mongoose=require('mongoose')
require("dotenv").config({path:"./config/config.env"});
const registerRouter=require('./routes/register')
const authRouter=require('./routes/Auth')
const adminRouter=require('./routes/adminPanel')
const blogRouter=require('./routes/blog')
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeah !");
});
mongoose.connection.on("error",()=>{
  console.log("error connecting to mongo " ,)
}).catch(err =>{
  console.log("error is",err)
})



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

///Router
/// Server check

// Auth Routers
 app.use('/',registerRouter)
 app.use('/api/admin/',authRouter)
 app.use('/',adminRouter)
 app.use('/blog',blogRouter)





app.listen(process.env.PORT, () => {
  console.log("running on PORT ",process.env.PORT);
});

module.exports = app;

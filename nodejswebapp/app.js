const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const db=require('./config/db').database;
const path=require('path');
//connecting database
mongoose.connect(db,{useNewUrlParser: true})
.then(()=>{
    console.log('Database connection established');
})
.catch((err)=>
console.log('unable to connect with database')); 
//port for app to run
const port =process.env.PORT||4027;
//middleware to allow cross origin request
//initializing cors middleware
app.use(cors());
//initializing body parser middleware
app.use(bodyParser.json());
//initialize public directory
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/index.html'));
// });
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>')
// });
const postRoutes=require('./routes/apis/post');
app.use('/api/posts',postRoutes);
app.listen(port,()=>{
console.log('server started on port',port)
});
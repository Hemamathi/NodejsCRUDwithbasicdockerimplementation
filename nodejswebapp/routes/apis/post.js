const express=require('express');
const router=express.Router();
const Post=require('../../models/Post');
router.get('/',(req,res,next)=>{
Post.find().then((posts)=>{
res.json(posts);
})
.catch(err=>console.log(err)) 
});
//create post
router.post('/add',(req,res,next)=>{
    const title=req.body.title;
    const body=req.body.body;
    newPost=new Post({
        title,
        body
    });
    newPost.save().then(post=>{
        res.json(post);
    })
    .catch(err=>console.log(err));
});
//update post
router.put('/update/:id',(req,res,next)=>{
    //grabbin gid of posted obj
    let id=req.params.id;
    //find the posted object by id from db
Post.findById(id).then(post=>{
    post.title=req.body.title;
    post.body=req.body.body;
post.save().then(post=>{
res.send({
    message:'post updated successfully',
    status:'success',
    post:post
})
})
.catch(err=>console.log(err));
})
.catch(err=>console.log(err));
})
router.delete('/:id',(req,res,next)=>{
    let id=req.params.id;

    //find the posted object by id from db
Post.findById(id).then(post=>{
post.delete().then(post=>{
res.send({
    message:'post deleted successfully',
    status:'success',
    post:post
})
})
.catch(err=>console.log(err));
})
.catch(err=>console.log(err));

})
module.exports=router;
import PostMessage from '../models/postMessage.js';
//Handlers for Routes
//logic for routes

//find() takes time to retireive because it is an 
//asyncronous action. hence add await()
export const getPosts= async(req,res)=>{
    try {

        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:console.error.message});
    }
    

}

export const createPost= async(req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
    res.send('Creation successful');
}
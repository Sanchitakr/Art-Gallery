import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();
// To start the application route from /posts rather than empty /


app.use(bodyParser.json({limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true }));
app.use(cors());
app.use('/posts' , postRoutes);

const CONNECTION_URL='mongodb+srv://Sanchitakr:Sanchitakr123@cluster-mern.rwj99.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

/* Connecting to DB and Checking the connection with then and catch */
mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log(`Callback: Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));
mongoose.set('useFindAndModify', false);

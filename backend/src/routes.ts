import express, { response } from 'express';

const routes = express.Router();

routes.get('/users',(req,res)=>{
 return res.send('mateus');
})


export default routes;
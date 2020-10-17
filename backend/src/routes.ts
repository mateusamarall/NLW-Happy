import express, { response } from 'express';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanage';
const routes = express.Router();

routes.post('/orphanages', async(req,res)=>{
 const {
   name,
   latitude,
   longitude,
   about,
   instructions,
   opening_hours,
   open_on_weekends
} = req.body;

const orphanagesRepository = getRepository(Orphanage);

const orphanage = orphanagesRepository.create({
  name,
  latitude,
  longitude,
  about,
  instructions,
  opening_hours,
  open_on_weekends
});

await orphanagesRepository.save(orphanage);

return res.json({message:"created"});
})


export default routes;
import mongoose from 'moongoose';
import {env} from './env.js';

export async function connectDB(){
    await mongoose.connect(env.MONGO_URI);
    console.log('BD conectada com sucesso');
}

import express from "express";
import morgan from "morgan";
import Router from "./routes/products.routes.js";
import { config } from "dotenv";
import cors from "cors"; 
config();
const app=express();
//SETTINGS
app.set('view engine', 'ejs');
//MIDLEWARES
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use('/', Router);

export default app;

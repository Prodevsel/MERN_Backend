import express from 'express';
import morgan from 'morgan';
import routes from './router/index.js';
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
//const isFrontendLocalHost = process.env.FRONTEND_URL.startsWith("http://localhost");

// Middleware
app.use(cors({ origin: true, credentials: true }));//nur zum testen erlaubt alle anfragen
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// configureCors(app); // CORS aus Middleware
app.use(cookieParser()); 

// Routes
app.use('/api', routes);



export default app;
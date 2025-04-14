import mongoose from 'mongoose';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config(); 

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;


const serverListenToPort = () =>
  app.listen(PORT, () => console.log("Server listening on port", PORT));

// Funktion zur Verbindung mit der Datenbank
const connectToDatabase = async () => {
  if (!MONGODB_URL) {
    console.log("MONGODB_URL is not defined. Skipping database connection...");
    serverListenToPort();
    return;
  }

  console.log("Connecting to database...");
  try {
    await mongoose.connect(MONGODB_URL, { dbName: "CC-Match" });
    console.log("Database connection successful");
    serverListenToPort();
  } catch (err) {
    console.log("Error connecting to database!");
    console.error(err.message);
    console.log("Starting server without database connection...");
    serverListenToPort();
  }
};

// Initialisiere den Server, entweder mit oder ohne Datenbankverbindung
connectToDatabase();
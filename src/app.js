import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes/index';
import fs from 'fs';
import path from 'path';

const app = express();
dotenv.config();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('tiny', { stream: accessLogStream }))

app.use("/", routes);

const port = process.env.PORT || 7000;

app.listen(port, (err) => {
    if (err) { console.log("Error in starting server", err.message) }
    else { console.log("Server is running at port: ", port); }
});

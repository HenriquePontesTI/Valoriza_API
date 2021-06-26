import "reflect-metadata";
import express, { Request, Response } from 'express';
import './database';

const app = express();

app.listen(3000, () => console.log("Server is Running!"))
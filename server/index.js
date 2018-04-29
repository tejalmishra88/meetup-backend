import express from 'express';
import dbconfig from './config/db';
import middlewaresconfig from './config/middlewares';
import {MeetupRoutes } from './module';
const app = express();
dbconfig();
middlewaresconfig(app);
app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) {
      console.error(err);
    } {
      console.log(`/server/index.js-tejal--App listen to port: ${PORT}`);
    }
  }); 
import express from 'express';
import dbconfig from './config/db';
const app = express();
dbconfig();

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) {
      console.error(err);
    } {
      console.log(`/server/index.js-tejal--App listen to port: ${PORT}`);
    }
  }); 
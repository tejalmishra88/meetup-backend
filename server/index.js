import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) {
      console.error(err);
    } {
      console.log(`/server/index.js-tejal--App listen to port: ${PORT}`);
    }
  }); 
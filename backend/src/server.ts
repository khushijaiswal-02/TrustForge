import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
const PORT = process.env.PORT || 3000;
(function () {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
})();

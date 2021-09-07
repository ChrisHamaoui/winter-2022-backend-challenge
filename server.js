import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   app.get('*', (req, rep) => {
//     response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

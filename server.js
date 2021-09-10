import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: '16mb', extended: true }));
app.use(express.urlencoded({ limit: '16mb', extended: true }));

// MongoDB connection credentials
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CONNECTION_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zwndv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// MongoDB image schema
const imageSchema = new mongoose.Schema({
  name: String,
  src: String,
});

const Image = mongoose.model('Image', imageSchema);

// MongoDB connection
mongoose
  .connect(DB_CONNECTION_URL, {})
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));

// Server static assets if in production (Heroku)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   app.get('*', (req, rep) => {
//     response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
// Add your frontend's live URL here
const frontendURL = "https://careerme-react-demo-webapplication.onrender.com"; // <-- Replace with your frontend URL

app.use(cors({
  origin: frontendURL
}));
app.use('/api', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

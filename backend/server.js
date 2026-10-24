const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

// Contact API
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Here you can add your logic to save to a database or send an email.
  // For now, we will just log it and send a success response.
  
  console.log('Received contact message:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.status(200).json({ success: true, message: 'Message received successfully.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

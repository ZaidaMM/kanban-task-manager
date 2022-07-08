const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

//Initialize express
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Kanban Task Manager' });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

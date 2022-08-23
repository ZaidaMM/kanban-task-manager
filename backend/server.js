const express = require('express');

const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/boards', require('./routes/boardRoutes'));
app.use('/api/boards/:boardId/columns', require('./routes/columnRoutes'));
app.use(
  '/api/boards/:boardId/columns/:columnId/tasks',
  require('./routes/taskRoutes')
);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Kanban Task Manager' });
});

app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

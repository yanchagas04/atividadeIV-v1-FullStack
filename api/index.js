require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('../src/config/db');
const authRoutes = require('../src/routes/auth.routes');
const protectedRoutes = require('../src/routes/protected.routes');
const errorMiddleware = require('../src/middlewares/error.middleware');
const logger = require('../src/services/logger.service');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api', authRoutes);
app.use('/api', protectedRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

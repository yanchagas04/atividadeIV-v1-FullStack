const logger = require('../services/logger.service');

const protectedRoute = (req, res) => {
  logger.info(`Protected route accessed by user: ${req.user.id}`);
  res.status(200).json({
    success: true,
    message: 'Acesso autorizado',
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }
  });
};

module.exports = {
  protectedRoute
};

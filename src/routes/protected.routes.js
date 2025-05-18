const express = require('express');
const { protect } = require('../middlewares/auth.middleware');
const { protectedRoute } = require('../controllers/protected.controller');
const { getFilmes, createFilme, updateFilme, deleteFilme, getFilme, getFilmesUsuario } = require('../controllers/filme.controller');

const router = express.Router();

router.get('/protected', protect, protectedRoute);
router.get('/filmes', protect, getFilmes);
router.post('/filmes', protect, createFilme);
router.put('/filmes/:id', protect, updateFilme);
router.delete('/filmes/:id', protect, deleteFilme);
router.get('/filmes/:id', protect, getFilme);
router.get('/filmes/usuario/:id', protect, getFilmesUsuario);

module.exports = router;

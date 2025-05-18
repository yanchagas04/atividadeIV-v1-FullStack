const FilmeService = require('../services/filme.service');

const getFilmes = async (req, res) => {
  try {
    const filmes = await FilmeService.getFilmes();
    if (!filmes || filmes.length === 0) {
      return res.status(404).json({ success: false, message: 'Filmes não encontrados' });
    } else {
      res.status(200).json({
        success: true,
        message: 'Acesso autorizado',
        filmes: filmes
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao buscar filmes' });
  }
};

const createFilme = async (req, res) => {
    const { title, description, userId } = req.body;
    console.log(title, description, userId);
    const filme = await FilmeService.createFilme(title, description, false, userId);
    if (!filme) {
      return res.status(500).json({ success: false, message: 'Erro ao criar filme' });
    } else {
      res.status(200).json({
        success: true,
        message: 'Acesso autorizado',
        filme: filme
      });
    }
};

const updateFilme = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, watched } = req.body;
    const filme = await FilmeService.updateFilme(id, title, description, watched);
    res.status(200).json({
      success: true,
      message: 'Acesso autorizado',
      filme: filme
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao atualizar filme' });
  }
};

const deleteFilme = async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await FilmeService.deleteFilme(id);
    res.status(200).json({
      success: true,
      message: 'Acesso autorizado',
      filme: filme
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao deletar filme' });
  }
};

const getFilme = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const filme = await FilmeService.getFilme(id);
    res.status(200).json({
      success: true,
      message: 'Acesso autorizado',
      filme: filme
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao buscar filme' });
  }
};

const getFilmesUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const filmes = await FilmeService.getFilmesUsuario(id);
    res.status(200).json({
      success: true,
      message: 'Acesso autorizado',
      filmes: filmes
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao buscar filmes' });
  }
}
  
module.exports = {
  getFilmes,
  createFilme,
  updateFilme,
  deleteFilme,
  getFilme,
  getFilmesUsuario
};
  
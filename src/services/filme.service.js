const Filme = require('../database/models/Filme');
const ErrorResponse = require('../utils/errorResponse');
const uuid = require('uuid');

const getFilmes = async () => {
  try {
    const filmes = await Filme.find({}, {"createdAt": false, "updatedAt": false, "__v": false, "_id": false});
    return filmes;
  } catch (error) {
    throw new ErrorResponse('Erro ao buscar filmes', 500);
  }
};

const createFilme = async (title, description, watched) => {
  console.log(title, description, watched);
  const id = uuid.v4();
  try {
    const filme = Filme({id, title, description, watched});
    filme.save();
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao criar filme', 500);
  }
};

const updateFilme = async (id, title, description, watched) => {
  try {
    const filme = await Filme.findOneAndUpdate({ id }, { title, description, watched }, { new: true });
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao atualizar filme', 500);
  }
};

const deleteFilme = async (id) => {
  try {
    const filme = await Filme.findOneAndDelete({ id });
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao deletar filme', 500);
  }
};

const getFilme = async (id) => {
  try {
    const filme = await Filme.findOne({ id }, {"createdAt": false, "updatedAt": false, "__v": false, "_id": false});
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao buscar filme', 500);
  }
}


module.exports = {
  getFilmes,
  createFilme,
  updateFilme,
  deleteFilme,
  getFilme
}
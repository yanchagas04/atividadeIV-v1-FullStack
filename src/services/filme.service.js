const Filme = require('../database/models/Filme');
const ErrorResponse = require('../utils/errorResponse');
const uuid = require('uuid');

const getFilmes = async () => {
  try {
    const filmes = await Filme.find();
    console.log(filmes);
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
    console.log(error);
    throw new ErrorResponse('Erro ao criar filme', 500);
  }
};

const updateFilme = async (id, title, description, watched) => {
  try {
    const filme = await Filme.findOneAndUpdate({ id }, { title, description, watched }, { new: true });
    console.log(filme);
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

const updateNameFilme = async (id, name) => {
  try {
    const filme = await Filme.findOneAndUpdate({ id }, { name }, { new: true });
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao atualizar filme', 500);
  }
};

const updateDescriptionFilme = async (id, description) => {
  try {
    const filme = await Filme.findOneAndUpdate({ id }, { description }, { new: true });
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao atualizar filme', 500);
  }
};

const updateWatchedFilme = async (id, watched) => {
  try {
    const filme = await Filme.findOneAndUpdate({ id }, { watched }, { new: true });
    return filme;
  } catch (error) {
    throw new ErrorResponse('Erro ao atualizar filme', 500);
  }
};

module.exports = {
  getFilmes,
  createFilme,
  updateFilme,
  deleteFilme,
  updateNameFilme,
  updateDescriptionFilme,
  updateWatchedFilme
}
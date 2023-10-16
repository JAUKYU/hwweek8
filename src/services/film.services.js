const { filmRepositories } = require("../repositories");

async function getMovies(category) {
  const response = await filmRepositories.getMovies(category);
  return response;
}

async function getFilmById(id) {
  const response = await filmRepositories.getFilmById(id);
  return response;
}

module.exports = {
  getMovies,
  getFilmById,
};

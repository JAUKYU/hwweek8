const pool = require("../dbconfig/queries");

function getMovies() {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM movies ORDER BY movies`, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
}

function getMoviesById(id) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM film WHERE film_id = ${id}`, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}

module.exports = {
  getMovies,
  getMoviesById,
};

const pool = require("../dbconfig/queries");

function getUsers() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM SELECT * FROM users OFFSET ${
        (page - 1) * limit
      } LIMIT ${limit}`,
      (error, result) => {
        if (error) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
}

module.exports = {
  getUsers,
};

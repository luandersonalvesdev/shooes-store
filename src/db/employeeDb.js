const connection = require('./connection');

const getAllEmployee = () => connection.execute('SELECT * FROM employee');

const getById = async (id) => {
  const [response] = await connection.execute(`
    SELECT *
    FROM employee
    WHERE id_employee = ?;
  `, [id]);
  return response;
};

const addEmployee = async ({ firstName, lastName }) => {
  const [response] = await connection.execute(`
    INSERT INTO employee (first_name, last_name)
    VALUES (?, ?)
  `, [firstName, lastName]);
  return response;
};

const updateEmployee = async ({ firstName, lastName }, id) => {
  await connection.execute(`
    UPDATE employee
    SET first_name = ?, last_name = ?
    WHERE id_employee = ?;
  `, [firstName, lastName, id]);
};

const deleteEmployee = async (id) => {
  await connection.execute(`
    DELETE FROM employee
    WHERE id_employee = ?;
  `, [id]);
};

module.exports = {
  getAllEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getById,
};
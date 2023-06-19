const express = require('express');
const {
  getAllEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getById,
} = require('../db/employeeDb');

const route = express.Router();

route.get('/', async (req, res) => {
  const [response] = await getAllEmployee();
  res.status(200).json(response);
});

route.post('/', async (req, res) => {
  const emp = req.body;
  const { insertId } = await addEmployee(emp);
  res.status(201).json({ message: `New employee has been added with id ${insertId}.` });
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await getById(id);
  res.status(200).json(response);
});

route.put('/:id', async (req, res) => {
  const emp = req.body;
  const { id } = req.params;
  await updateEmployee(emp, id);
  res.status(200).json({ message: 'Employee has been updated.' });
});

route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deleteEmployee(id);
  res.status(204).json({});
});

module.exports = route;
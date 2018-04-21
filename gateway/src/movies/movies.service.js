const axios = require('axios');

const config = require('../config');

module.exports.create = async (req, res) => {
  const response = await axios.post(config.MOVIES, req.body);

  res.json(response.data);
};

module.exports.list = async (req, res) => {
  const response = await axios.get(config.MOVIES);

  res.json(response.data);
};

module.exports.remove = async (req, res) => {
  const { id } = req.params;

  const response = await axios.delete(`${config.MOVIES}/${id}`);

  res.json(response.data);
};

module.exports.update = async (req, res) => {
  const { id } = req.params;

  const response = await axios.put(`${config.MOVIES}/${id}`, req.body);

  res.json(response.data);
};

module.exports.view = async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(`${config.MOVIES}/${id}`);

  res.json(response.data);
};

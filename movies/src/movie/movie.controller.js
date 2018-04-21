const Movie = require('./movie.model');

module.exports.check = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    throw new Error('Not found');
  }

  return next();
};

module.exports.create = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();

  res.json(movie);
};

module.exports.list = async (req, res) => {
  const moviees = await Movie.find();

  res.json(moviees);
};

module.exports.remove = async (req, res) => {
  await Movie.findByIdAndRemove(req.params.id);

  res.json({ id: req.params.id });
};

module.exports.update = async (req, res) => {
  const movie = await Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  });

  res.json(movie);
};

module.exports.view = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  res.json(movie);
};

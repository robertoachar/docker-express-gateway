const Hero = require('./hero.model');

module.exports.create = async (req, res) => {
  const hero = new Hero(req.body);
  await hero.save();

  res.json(hero);
};

module.exports.list = async (req, res) => {
  const heroes = await Hero.find();

  res.json(heroes);
};

module.exports.remove = async (req, res) => {
  await Hero.findByIdAndRemove(req.params.id);

  res.json({ id: req.params.id });
};

module.exports.update = async (req, res) => {
  const hero = await Hero.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  });

  res.json(hero);
};

module.exports.view = async (req, res) => {
  const hero = await Hero.findById(req.params.id);

  res.json(hero);
};

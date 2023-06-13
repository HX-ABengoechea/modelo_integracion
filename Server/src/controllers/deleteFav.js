const { Favorite } = require('../DB_connection');

module.exports = async (req, res) => {
   try {
      const { id } = req.params;

      await Favorite.destroy({ where: { id: id } });

      const allFavs = await Favorite.findAll();
      return res.json(allFavs);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

module.exports = async (req, res) => {
   try {
      const { id } = req.params;

      const { name, gender, species, origin, image, status } = (
         await axios(URL + id)
      ).data;
      const character = {
         id,
         name,
         gender,
         species,
         origin,
         image,
         status,
      };
      return character.name
         ? res.json(character)
         : res.status(404).send('Not found');
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

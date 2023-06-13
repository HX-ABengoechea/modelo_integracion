const { User } = require('../DB_connection');

module.exports = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) return res.status(401).send('Faltan datos');

      const user = await User.findOrCreate({
         where: { email: email, password: password },
      });

      return res.json(user);
   } catch (err) {
      return res.status(500).json(err.message);
   }
};

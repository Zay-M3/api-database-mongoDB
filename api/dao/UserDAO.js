const User = require("../models/User");

class UserDAO {
  constructor() {
    this.model = User;
  }

  async createUser(req, res) {
    try {
      const document = new this.model(req.body);
      await document.save();
      res.status(201).json(document);
    } catch (error) {
      res.status(500).json({ message: `Error al crear el usuario: ${error}` });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await this.model.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: `Erro al obtener los usuarios: ${error}` });
    }
  }

  async deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleteUser = await this.model.findbyIdAndDelete(id);
        if (!deleteUser){
            res.status(404).json({message : `Usuario no encontrado ${error}`})
        }
        res.status(200).json({message : `usuario eliminado con exito`})
    } catch (error) {
        res.status(500).json({message : `Error al eliminar el usuario: ${error}`});
    }
  }

}

module.exports = UserDAO;

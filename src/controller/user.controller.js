const userService = require("../service/user.service");


const findUsersController = async (req, res) => {
    const allUsers = await userService.findUsersService();
    if(allUsers.length === 0){
      return res.status(400).send({
        mesage: "Não existe esse usuario"
      })
    }
    res.send(allUsers);
  };

  const createUserController = async (req, res) => {
    // const user = req.body;
    if (!req.body.name || !req.body.userName|| !req.body.email || !req.body.password || !req.body.img) {
      return res.status(400).send({
        message:
          "Alguns campos estão faltando.",
      });
  }
    const foundUser = await userService.findByEmailUserService(req.body.email);
    if(foundUser){
      return res.status(400).send({
        massage: "Usuario ja existe no banco de dados"
      })
    }

    const newUser = await userService.createUserService(req.body);
    if (!newUser) {
      return res.status(400).send({
      message: "Erro ao criar Usuário!",
      });
  }
    res.status(201).send(newUser);
  };

  
  const findUserByIdController = async (req, res) => {
    const idParam = req.params.id;
    const user = await userService.findByIdUserService(idParam)
    res.send(user);
  };

  const updateUserController = async (req, res) => {
    const idParam = req.params.id;
    const userEdit = req.body;
    const updateUser = await userService.updateUserService(idParam, userEdit);
    res.send(updateUser);
  };
  
  const deleteUserController = async (req, res) => {
    const idParam = req.params.id;
    await userService.deleteUserService(idParam);
    res.send({ message: 'User deletado com sucesso!' });
  };



module.exports = { findUsersController, createUserController, findUserByIdController, updateUserController, deleteUserController };

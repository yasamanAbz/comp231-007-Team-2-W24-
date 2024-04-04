import authService from "../services/authService.js";

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    const token = authService.generateAuthToken(user);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body.email, req.body.password);
    const token = authService.generateAuthToken(user);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const authController = {
  register,
  login,
};

export default authController;

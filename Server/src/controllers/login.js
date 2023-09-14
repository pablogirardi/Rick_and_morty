const user = require("../utils/users");
// const emailVal = user[0].email;
// const passwordVal = user[0].password;

const login = (req, res) => {
  const { email, password } = req.query;
  // if (emailVal === email && passwordVal === password) {
  //   res.status(200).send({ access: true });
  // } else res.status(200).send({ access: false });
  const userFinded = user.find(
    (user) => user.email === email && user.password === password
  );
  console.log(user);
  return userFinded
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false });
};

module.exports = {
  login,
};

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    console.log(id);

    if (!data.name) throw new Error(`ID: ${id} Not Found`);
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    console.log(character);
    return res.status(200).json(character);
    //return res.status(404).send("Not found");
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};

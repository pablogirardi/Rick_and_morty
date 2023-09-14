import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// const URL_BASE = "https://rym2-production.up.railway.app/api/character";
// const API_KEY = "/henrym-pablogirardi";
// const EMAIL = "pa@gmail.com";
// const PASSWORD = "1234567";
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {}
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  console.log(characters);
  // eslint-disable-next-line
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
    if (characters.find((char) => char.id === Number(id))) {
      alert("It already exists");
      return;
    }
  };
  function onClose(id) {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  }

  return (
    <div className="App">
      {
        // location.pathname !== '/' && <Nav onSearch={onSearch} />
        location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null
      }

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

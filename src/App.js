import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState, useEffect } from 'react';
import About from './components/About.jsx';
import Detail from './components/Detail';
import axios from 'axios';
//import Form from './components/forms/forms';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom'
//import Favorites from './components/Favorites/favorites';


const URL_BASE = "https://rym2-production.up.railway.app/api/character"
const API_KEY = "/henrym-pablogirardi"
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = '123a';


function App() {
   const [characters,setCharacters] = useState( [] );
   
   console.log(characters)
   const onSearch = (id) => {
      if (characters.find(char => char.id === Number(id))) {
         alert('It already exists');
         return
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
               data.name && setCharacters(oldChars => [...oldChars, data])
            })
            .catch(() => alert('¡No hay personajes con este ID!'))
      }
   }
   function onClose(id){  
      const charactersFiltered = characters.filter( character => 
      character.id !== id)
      setCharacters(charactersFiltered)
   }

return (
   <div className='App'>
      <Nav onSearch={onSearch} />
      
      <Routes>
         <Route path="/home" element={<Cards onClose={onClose}
          characters={characters} />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      
   </div>
);
}

export default App;
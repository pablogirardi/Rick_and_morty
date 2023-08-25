import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import { useState } from 'react';
import axios from 'axios';
//import characters, { Rick } from './data.js';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
      const [characters,setCharacters] = useState( [] );
      console.log(characters)
      function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
      function onClose(id){  
         let filtro = characters.filter( i => i.id !== Number(id))
         setCharacters(filtro)
      }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards onClose={onClose} characters={characters} />
      </div>
   );
}

export default App;

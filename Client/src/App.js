import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState, useEffect } from 'react';
import About from './components/About.jsx';
import Detail from './components/Detail';
import axios from 'axios';
import Form from './components/Form';
import Favorites from './components/Favorites';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom'


const URL_BASE = "https://rym2-production.up.railway.app/api/character"
const API_KEY = "/henrym-pablogirardi"
const EMAIL = 'pa@gmail.com';
const PASSWORD = '1234567';


function App() {
   const location = useLocation();
   const [characters,setCharacters] = useState( [] );
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if( userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate ('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   
   console.log(characters)
   const onSearch = (id) => {
      if (characters.find(char => char.id === Number(id))) {
         alert('It already exists');
         return
      } else {
         axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }}
   function onClose(id){  
      const charactersFiltered = characters.filter( character => 
      character.id !== id)
      setCharacters(charactersFiltered)
   }

return (
   <div className='App'>
      {
         // location.pathname !== '/' && <Nav onSearch={onSearch} />
         location.pathname !== '/'
         ? <Nav onSearch={onSearch} />
         : null
      }
      
      <Routes>
         <Route path="/" element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/detail/:id" element={<Detail />}/>
         <Route path="/favorites" element={<Favorites />}/>
      </Routes>
   </div>
);
}

export default App;
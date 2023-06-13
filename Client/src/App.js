import './App.css';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Form from './components/Form.jsx';
import Detail from './components/Detail.jsx';
import Favorites from './components/Favorites.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const { pathname } = useLocation();
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/character/' + id;
         const { data } = await axios(endpoint);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (err) {
         console.log(err);
      }
   }

   function onClose(id) {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id);
         })
      );
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const QUERY = `?email=${email}&password=${password}`;
         const { data } = await axios(URL + QUERY);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route
               path='/home'
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;

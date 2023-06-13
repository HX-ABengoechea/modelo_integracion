import s from './styles/searchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
   };

   return (
      <div className={s.div}>
         <input
            type='search'
            className={s.input}
            placeholder='id...'
            value={id}
            onChange={handleChange}
         />

         <button
            className={s.btn}
            onClick={() => {
               onSearch(id);
            }}
         >
            Agregar
         </button>
      </div>
   );
}
